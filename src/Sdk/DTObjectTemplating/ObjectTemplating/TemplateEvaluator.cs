﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHub.DistributedTask.Expressions2.Sdk;
using GitHub.DistributedTask.ObjectTemplating.Schema;
using GitHub.DistributedTask.ObjectTemplating.Tokens;
using GitHub.DistributedTask.Pipelines.ContextData;

namespace GitHub.DistributedTask.ObjectTemplating
{
    /// <summary>
    /// Expands expression tokens where the allowed context is available now. The allowed context is defined
    /// within the schema. The available context is based on the ExpressionValues registered in the TemplateContext.
    /// </summary>
    internal partial class TemplateEvaluator
    {
        private TemplateEvaluator(
            TemplateContext context,
            TemplateToken template,
            Int32 removeBytes)
        {
            m_context = context;
            m_schema = context.Schema;
            m_unraveler = new TemplateUnraveler(context, template, removeBytes);
        }

        // Only async in azure pipelines mode with a true async variable eval callback
        // .GetAwaiter().GetResult() only throws in webassembly if true async
        internal static TemplateToken Evaluate(
            TemplateContext context,
            String type,
            TemplateToken template,
            Int32 removeBytes,
            Int32? fileId,
            Boolean omitHeader = false)
        {
            return EvaluateAsync(context, type, template, removeBytes, fileId, omitHeader).GetAwaiter().GetResult();
        }

        internal static async Task<TemplateToken> EvaluateAsync(
            TemplateContext context,
            String type,
            TemplateToken template,
            Int32 removeBytes,
            Int32? fileId,
            Boolean omitHeader = false)
        {
            TemplateToken result;

            if (!omitHeader)
            {
                if (fileId != null)
                {
                    context.TraceWriter.Info("{0}", $"Begin evaluating template '{context.GetFileName(fileId.Value)}'");
                }
                else
                {
                    context.TraceWriter.Info("{0}", "Begin evaluating template");
                }
            }

            var evaluator = new TemplateEvaluator(context, template, removeBytes);
            try
            {
                var availableContext = new HashSet<String>(StringComparer.OrdinalIgnoreCase);
                foreach (var key in context.ExpressionValues.Keys)
                {
                    availableContext.Add(key);
                }
                foreach (var function in context.ExpressionFunctions)
                {
                    availableContext.Add($"{function.Name}()");
                }

                var definitionInfo = new DefinitionInfo(context.Schema, type, availableContext);
                result = await evaluator.Evaluate(definitionInfo);

                if (result != null)
                {
                    evaluator.m_unraveler.ReadEnd();
                }
            }
            catch (Exception ex)
            {
                context.Error(fileId, null, null, ex);
                result = null;
            }

            if (!omitHeader)
            {
                if (fileId != null)
                {
                    context.TraceWriter.Info("{0}", $"Finished evaluating template '{context.GetFileName(fileId.Value)}'");
                }
                else
                {
                    context.TraceWriter.Info("{0}", "Finished evaluating template");
                }
            }

            return result;
        }

        private async Task<TemplateToken> Evaluate(DefinitionInfo definition)
        {
            // Scalar
            if (m_unraveler.AllowScalar(definition.Expand, out ScalarToken scalar))
            {
                if (scalar is LiteralToken literal)
                {
                    var entry = m_context.AutoCompleteMatches?.FirstOrDefault(m => m.Token == scalar);
                    if(entry != null) {
                        entry.Definitions = entry.Definitions.Append(definition.Definition).ToArray();
                    }
                    Validate(ref literal, definition);
                    return literal;
                }
                else
                {
                    return scalar;
                }
            }

            // Sequence start
            if (m_unraveler.AllowSequenceStart(definition.Expand, out SequenceToken sequence))
            {
                var sequenceDefinition = definition.Get<SequenceDefinition>().FirstOrDefault();
                var entry = m_context.AutoCompleteMatches?.FirstOrDefault(m => m.Token.FileId == sequence.FileId && m.Token.Line == sequence.Line && m.Token.Column == sequence.Column && m.Token.Type == sequence.Type);
                if(entry != null) {
                    entry.Token = sequence;
                    entry.Definitions = entry.Definitions.Append(definition.Definition).ToArray();
                }

                // Legal
                if (sequenceDefinition != null)
                {
                    var itemDefinition = new DefinitionInfo(definition, sequenceDefinition.ItemType);

                    // Add each item
                    while (!m_unraveler.AllowSequenceEnd(definition.Expand))
                    {
                        var item = await Evaluate(itemDefinition);

                        if(sequenceDefinition.AzureVariableBlock && m_context.ExpressionValues?.TryGetValue("variables", out var varsRaw) == true && varsRaw is DictionaryContextData vars) {
                            var mblock = item.AssertMapping("var");
                            await m_context.EvaluateVariable?.Invoke(m_context, mblock, vars);
                        }
                        sequence.Add(item);
                    }
                }
                // Illegal
                else
                {
                    // Error
                    m_context.Error(sequence, TemplateStrings.UnexpectedSequenceStart());

                    // Skip each item
                    while (!m_unraveler.AllowSequenceEnd(expand: false))
                    {
                        m_unraveler.SkipSequenceItem();
                    }
                }

                return sequence;
            }

            // Mapping
            if (m_unraveler.AllowMappingStart(definition.Expand, out MappingToken mapping))
            {
                var mappingDefinitions = definition.Get<MappingDefinition>().ToList();
                var entry = m_context.AutoCompleteMatches?.FirstOrDefault(m => m.Token.FileId == mapping.FileId && m.Token.Line == mapping.Line && m.Token.Column == mapping.Column && m.Token.Type == mapping.Type);
                if(entry != null) {
                    entry.Token = mapping;
                    entry.Definitions = entry.Definitions.Append(definition.Definition).ToArray();
                }

                // Legal
                if (mappingDefinitions.Count > 0)
                {
                    bool hasAdoScope = mappingDefinitions.Any(m => m.AzureVariableBlockScope) && m_context.ExpressionValues?.ContainsKey("variables") == true;

                    DictionaryContextData vars = null;
                    if(hasAdoScope) {
                        vars = (m_context.ExpressionValues["variables"] as DictionaryContextData).Clone() as DictionaryContextData;
                    }

                    if (mappingDefinitions.Count > 1 ||
                        m_schema.HasProperties(mappingDefinitions[0]) ||
                        String.IsNullOrEmpty(mappingDefinitions[0].LooseKeyType))
                    {
                        await HandleMappingWithWellKnownProperties(definition, mappingDefinitions, mapping);
                    }
                    else
                    {
                        var keyDefinition = new DefinitionInfo(definition, mappingDefinitions[0].LooseKeyType);
                        var valueDefinition = new DefinitionInfo(definition, mappingDefinitions[0].LooseValueType);
                        await HandleMappingWithAllLooseProperties(definition, keyDefinition, valueDefinition, mapping);
                    }
                    
                    if(hasAdoScope) {
                        m_context.ExpressionValues["variables"] = vars;
                    }
                }
                // Illegal
                else
                {
                    m_context.Error(mapping, TemplateStrings.UnexpectedMappingStart());

                    while (!m_unraveler.AllowMappingEnd(expand: false))
                    {
                        m_unraveler.SkipMappingKey();
                        m_unraveler.SkipMappingValue();
                    }
                }

                return mapping;
            }

            throw new ArgumentException(TemplateStrings.ExpectedScalarSequenceOrMapping());
        }

        private async Task HandleMappingWithWellKnownProperties(
            DefinitionInfo definition,
            List<MappingDefinition> mappingDefinitions,
            MappingToken mapping)
        {
            // Check if loose properties are allowed
            String looseKeyType = null;
            String looseValueType = null;
            DefinitionInfo? looseKeyDefinition = null;
            DefinitionInfo? looseValueDefinition = null;
            if (!String.IsNullOrEmpty(mappingDefinitions[0].LooseKeyType))
            {
                looseKeyType = mappingDefinitions[0].LooseKeyType;
                looseValueType = mappingDefinitions[0].LooseValueType;
            }

            var keys = new HashSet<String>(StringComparer.OrdinalIgnoreCase);
            var hasExpressionKey = false;

            int i = 0;
            while (m_unraveler.AllowScalar(definition.Expand, out ScalarToken nextKeyScalar))
            {
                var firstKey = i++ == 0;
                // Expression
                if (nextKeyScalar is ExpressionToken)
                {
                    hasExpressionKey = true;
                    var anyDefinition = new DefinitionInfo(definition, TemplateConstants.Any);
                    mapping.Add(nextKeyScalar, await Evaluate(anyDefinition));
                    continue;
                }

                // Not a string, convert
                if (!(nextKeyScalar is StringToken nextKey))
                {
                    nextKey = new StringToken(nextKeyScalar.FileId, nextKeyScalar.Line, nextKeyScalar.Column, nextKeyScalar.ToString());
                }

                // Duplicate
                if (!keys.Add(nextKey.Value))
                {
                    m_context.Error(nextKey, TemplateStrings.ValueAlreadyDefined(nextKey.Value));
                    m_unraveler.SkipMappingValue();
                    continue;
                }

                // Well known
                if (m_schema.TryMatchKey(mappingDefinitions, nextKey.Value, out String nextValueType, firstKey))
                {
                    var nextValueDefinition = new DefinitionInfo(definition, nextValueType);
                    var nextValue = await Evaluate(nextValueDefinition);
                    mapping.Add(nextKey, nextValue);
                    continue;
                }

                // Loose
                if (looseKeyType != null)
                {
                    if (looseKeyDefinition == null)
                    {
                        looseKeyDefinition = new DefinitionInfo(definition, looseKeyType);
                        looseValueDefinition = new DefinitionInfo(definition, looseValueType);
                    }

                    Validate(nextKey, looseKeyDefinition.Value);
                    var nextValue = await Evaluate(looseValueDefinition.Value);
                    mapping.Add(nextKey, nextValue);
                    continue;
                }

                // Error
                m_context.Error(nextKey, TemplateStrings.UnexpectedValue(nextKey.Value));
                m_unraveler.SkipMappingValue();
            }

            if(m_context.AutoCompleteMatches != null) {
                var aentry = m_context.AutoCompleteMatches.Where(a => a.Token == mapping).FirstOrDefault();
                if(aentry != null) {
                    aentry.Definitions = mappingDefinitions.Cast<Definition>().ToArray();
                }
            }

            // Only one
            if (mappingDefinitions.Count > 1 && !hasExpressionKey)
            {
                var hitCount = new Dictionary<String, Int32>();
                foreach (MappingDefinition mapdef in mappingDefinitions)
                {
                    foreach (String key in mapdef.Properties.Keys)
                    {
                        if (!hitCount.TryGetValue(key, out Int32 value))
                        {
                            hitCount.Add(key, 1);
                        }
                        else
                        {
                            hitCount[key] = value + 1;
                        }
                    }
                }

                List<String> nonDuplicates = new List<String>();
                foreach (String key in hitCount.Keys)
                {
                    if (hitCount[key] == 1)
                    {
                        nonDuplicates.Add(key);
                    }
                }
                nonDuplicates.Sort();

                String listToDeDuplicate = String.Join(", ", nonDuplicates);
                m_context.Error(mapping, TemplateStrings.UnableToDetermineOneOf(listToDeDuplicate));
            }
            else if (mappingDefinitions.Count == 1 && !hasExpressionKey)
            {
                foreach (var property in mappingDefinitions[0].Properties)
                {
                    if (property.Value.Required)
                    {
                        if (!keys.Contains(property.Key))
                        {
                            m_context.Error(mapping, $"Required property is missing: {property.Key}");
                        }
                    }
                }
            }

            m_unraveler.ReadMappingEnd();
        }

        private async Task HandleMappingWithAllLooseProperties(
            DefinitionInfo mappingDefinition,
            DefinitionInfo keyDefinition,
            DefinitionInfo valueDefinition,
            MappingToken mapping)
        {
            var keys = new HashSet<String>(StringComparer.OrdinalIgnoreCase);

            while (m_unraveler.AllowScalar(mappingDefinition.Expand, out ScalarToken nextKeyScalar))
            {
                // Expression
                if (nextKeyScalar is ExpressionToken)
                {
                    if (nextKeyScalar is BasicExpressionToken)
                    {
                        mapping.Add(nextKeyScalar, await Evaluate(valueDefinition));
                    }
                    else
                    {
                        var anyDefinition = new DefinitionInfo(mappingDefinition, TemplateConstants.Any);
                        mapping.Add(nextKeyScalar, await Evaluate(anyDefinition));
                    }

                    continue;
                }

                // Not a string
                if (!(nextKeyScalar is StringToken nextKey))
                {
                    nextKey = new StringToken(nextKeyScalar.FileId, nextKeyScalar.Line, nextKeyScalar.Column, nextKeyScalar.ToString());
                }

                // Duplicate
                if (!keys.Add(nextKey.Value))
                {
                    m_context.Error(nextKey, TemplateStrings.ValueAlreadyDefined(nextKey.Value));
                    m_unraveler.SkipMappingValue();
                    continue;
                }

                // Validate
                Validate(nextKey, keyDefinition);

                // Add the pair
                var nextValue = await Evaluate(valueDefinition);
 
                if(mappingDefinition.Get<MappingDefinition>().First().AzureVariableBlock && m_context.ExpressionValues?.TryGetValue("variables", out var varsRaw) == true && varsRaw is DictionaryContextData vars) {
                    vars[nextKey.ToString()] = new StringContextData(nextValue.ToString());
                }
                mapping.Add(nextKey, nextValue);
            }

            m_unraveler.ReadMappingEnd();
        }

        private void Validate(
            StringToken stringToken,
            DefinitionInfo definition)
        {
            var literal = stringToken as LiteralToken;
            Validate(ref literal, definition);
        }

        private void Validate(
            ref LiteralToken literal,
            DefinitionInfo definition)
        {
            // Legal
            var literal2 = literal;
            if (definition.Get<ScalarDefinition>().Any(x => x.IsMatch(literal2)))
            {
                return;
            }

            // Not a string, convert
            if (literal.Type != TokenType.String)
            {
                var stringToken = new StringToken(literal.FileId, literal.Line, literal.Column, literal.ToString());

                // Legal
                if (definition.Get<StringDefinition>().Any(x => x.IsMatch(stringToken)))
                {
                    literal = stringToken;
                    return;
                }
            }

            // Illegal
            m_context.Error(literal, TemplateStrings.UnexpectedValue(literal));
        }

        private void ValidateEnd()
        {
            m_unraveler.ReadEnd();
        }

        private struct DefinitionInfo
        {
            public DefinitionInfo(
                TemplateSchema schema,
                String name,
                HashSet<String> availableContext)
            {
                m_schema = schema;
                m_availableContext = availableContext;

                // Lookup the definition
                Definition = m_schema.GetDefinition(name);

                // Determine whether to expand
                m_allowedContext = Definition.EvaluatorContext;
                if (Definition.EvaluatorContext.Length > 0)
                {
                    Expand = m_availableContext.IsSupersetOf(m_allowedContext);
                }
                else
                {
                    Expand = false;
                }
            }

            public DefinitionInfo(
                DefinitionInfo parent,
                String name)
            {
                m_schema = parent.m_schema;
                m_availableContext = parent.m_availableContext;

                // Lookup the definition
                Definition = m_schema.GetDefinition(name);

                // Determine whether to expand
                if (Definition.EvaluatorContext.Length > 0)
                {
                    m_allowedContext = new HashSet<String>(parent.m_allowedContext.Concat(Definition.EvaluatorContext), StringComparer.OrdinalIgnoreCase).ToArray();
                    Expand = m_availableContext.IsSupersetOf(m_allowedContext);
                }
                else
                {
                    m_allowedContext = parent.m_allowedContext;
                    Expand = parent.Expand;
                }
            }

            public IEnumerable<T> Get<T>()
                where T : Definition
            {
                return m_schema.Get<T>(Definition);
            }

            private HashSet<String> m_availableContext;
            private String[] m_allowedContext;
            private TemplateSchema m_schema;
            public Definition Definition;
            public Boolean Expand;
        }

        private readonly TemplateContext m_context;
        private readonly TemplateSchema m_schema;
        private readonly TemplateUnraveler m_unraveler;
    }
}
