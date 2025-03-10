﻿using System;
using System.Collections.Generic;
using System.Linq;
using GitHub.DistributedTask.ObjectTemplating.Tokens;

namespace GitHub.DistributedTask.ObjectTemplating.Schema
{
    /// <summary>
    /// Defines the allowable schema for a user defined type
    /// </summary>
    internal abstract class Definition
    {
        protected Definition()
        {
        }

        protected Definition(MappingToken definition)
        {
            for (var i = 0; i < definition.Count;)
            {
                var definitionKey = definition[i].Key.AssertString($"{TemplateConstants.Definition} key");
                if (String.Equals(definitionKey.Value, TemplateConstants.Context, StringComparison.Ordinal))
                {
                    var context = definition[i].Value.AssertSequence($"{TemplateConstants.Context}");
                    definition.RemoveAt(i);
                    var readerContext = new HashSet<String>(StringComparer.OrdinalIgnoreCase);
                    var evaluatorContext = new HashSet<String>(StringComparer.OrdinalIgnoreCase);
                    foreach (TemplateToken item in context)
                    {
                        var itemStr = item.AssertString($"{TemplateConstants.Context} item").Value;
                        readerContext.Add(itemStr);

                        // Remove min/max parameter info
                        var paramIndex = itemStr.IndexOf('(');
                        if (paramIndex > 0)
                        {
                            evaluatorContext.Add(String.Concat(itemStr.Substring(0, paramIndex + 1), ")"));
                        }
                        else
                        {
                            evaluatorContext.Add(itemStr);
                        }
                    }

                    ReaderContext = readerContext.ToArray();
                    EvaluatorContext = evaluatorContext.ToArray();
                }
                else if (String.Equals(definitionKey.Value, TemplateConstants.Description, StringComparison.Ordinal))
                {
                    var description = definition[i].Value.AssertString($"description");
                    definition.RemoveAt(i);
                    Description = description.Value;
                }
                else if (String.Equals(definitionKey.Value, "actionsIfExpression", StringComparison.Ordinal))
                {
                    var actionifexpr = definition[i].Value.AssertBoolean($"actionsIfExpression");
                    definition.RemoveAt(i);
                    ActionsIfExpression = actionifexpr.Value;
                }
                else if (String.Equals(definitionKey.Value, "azureVariableBlock", StringComparison.Ordinal))
                {
                    var actionifexpr = definition[i].Value.AssertBoolean($"azureVariableBlock");
                    definition.RemoveAt(i);
                    AzureVariableBlock = actionifexpr.Value;
                }
                else if (String.Equals(definitionKey.Value, "azureVariableBlockScope", StringComparison.Ordinal))
                {
                    var actionifexpr = definition[i].Value.AssertBoolean($"azureVariableBlockScope");
                    definition.RemoveAt(i);
                    AzureVariableBlockScope = actionifexpr.Value;
                }
                else
                {
                    i++;
                }
            }
        }

        public bool ActionsIfExpression { get; private set; }
        public bool AzureVariableBlock { get; private set; }

        public string Description { get; }
        public bool AzureVariableBlockScope { get; private set; }
        internal abstract DefinitionType DefinitionType { get; }

        /// <summary>
        /// Used by the template reader to determine allowed expression values and functions.
        /// Also used by the template reader to validate function min/max parameters.
        /// </summary>
        internal String[] ReaderContext { get; private set; } = new String[0];

        /// <summary>
        /// Used by the template evaluator to determine allowed expression values and functions.
        /// The min/max parameter info is omitted.
        /// </summary>
        internal String[] EvaluatorContext { get; private set; } = new String[0];

        internal abstract void Validate(
            TemplateSchema schema,
            String name);
    }
}
