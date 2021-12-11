(this["webpackJsonpreact-master-detail"]=this["webpackJsonpreact-master-detail"]||[]).push([[0],{12:function(e,t,n){e.exports={component:"Detail_component__1VtCU",main:"Detail_main__25Z8q",Collapsible:"Detail_Collapsible__1Z6Fe",Collapsible__contentInner:"Detail_Collapsible__contentInner__20oSV",Collapsible__trigger:"Detail_Collapsible__trigger__3EOpG","is-open":"Detail_is-open__2aL8y","is-disabled":"Detail_is-disabled__wEqIO","Collapsible__custom-sibling":"Detail_Collapsible__custom-sibling__3HRWD"}},21:function(e,t,n){e.exports={component:"MasterDetail_component__154LI",master:"MasterDetail_master__mykC2",detail:"MasterDetail_detail__1KXQc"}},23:function(e,t,n){e.exports={header:"Header_header__1rCD5",back:"Header_back__1NWwX"}},25:function(e,t,n){e.exports={component:"ListItem_component__2wbBh",inner:"ListItem_inner__1YzSZ"}},26:function(e,t,n){e.exports={component:"ListItemLink_component__3_vwt",active:"ListItemLink_active__IcDqn"}},42:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(33),s=n.n(c),o=(n(42),n(4)),i=n(7),l=n(20),u="(max-width: 599px)",p=n(23),b=n.n(p),d=n(0),j=function(e){return Object(d.jsxs)("div",{className:b.a.header,children:[Object(d.jsx)(l.a,{query:u,children:function(t){return t?Object(d.jsx)(o.b,{to:"../../../../",className:b.a.back,style:{visibility:e.hideBackButton?"hidden":"visible"},children:"Back"}):Object(d.jsx)("div",{children:"\xa0"})}}),Object(d.jsxs)("h1",{"data-test":"HeaderTitle",children:[e.title||"No Title",e.content]})]})};j.defaultProps={hideBackButton:!1};var h=n(25),f=n.n(h),m="No Data",x=function(e){return Object(d.jsx)("div",{className:f.a.component,children:Object(d.jsxs)("div",{className:f.a.inner,children:[Object(d.jsx)("h1",{"data-test":"ListItemHeading",children:e.item.title?e.item.title:m}),Object(d.jsx)("h2",{"data-test":"ListItemSubHeading",children:e.item.description?e.item.description:m})]})})},O=n(15),g=n(26),v=n.n(g),w=function(e){return Object(d.jsx)(o.c,{exact:!0,to:e.to,className:v.a.component,activeClassName:v.a.active,children:Object(d.jsx)(x,Object(O.a)({},e))})},_=n(21),k=n.n(_),I=function(e){var t=Object(i.i)().path,n=Object(d.jsx)(e.MasterType,Object(O.a)(Object(O.a)({},e.masterProps),{},{"data-test":"Master"})),r=Object(d.jsx)(e.DetailType,Object(O.a)(Object(O.a)({},e.detailProps),{},{"data-test":"Detail"}));return Object(d.jsx)(l.a,{query:u,children:function(e){return e?Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"".concat(t),children:n}),Object(d.jsx)(i.b,{path:"".concat(t,"/detail/:id"),children:r})]}):Object(d.jsxs)("section",{className:k.a.component,children:[Object(d.jsx)("section",{className:k.a.master,children:Object(d.jsx)(i.b,{path:"".concat(t),children:n})}),Object(d.jsx)("section",{className:k.a.detail,children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{exact:!0,path:"".concat(t),children:r}),Object(d.jsx)(i.b,{path:"".concat(t,"/detail/:id"),children:r})]})})]})}})},N=n(13),y=n(2),C=n.n(y),L=n(8),S=n(3),M=n(12),T=n.n(M),W=n(16),R=n.n(W),D=n(37),H=n.n(D),B="";function E(e){return J.apply(this,arguments)}function J(){return(J=Object(S.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/_apis/pipelines/workflows/"+t+"/artifacts",e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.text();case 6:return a=e.sent,e.abrupt("return",JSON.parse(a));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return U.apply(this,arguments)}function U(){return(U=Object(S.a)(C.a.mark((function e(t,n){var r,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(n)).searchParams.append("itemPath",t),e.next=4,fetch(r.toString());case 4:return a=e.sent,e.next=7,a.text();case 7:return c=e.sent,e.abrupt("return",JSON.parse(c));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){var t=Object(r.useState)(null),n=Object(L.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),o=Object(L.a)(s,2),l=o[0],u=o[1],p=Object(r.useState)([]),b=Object(L.a)(p,2),h=b[0],f=b[1],m=Object(r.useState)("Loading..."),x=Object(L.a)(m,2),O=x[0],g=x[1],v=Object(i.h)().id,w=Object(i.h)(),_=w.owner,k=w.repo,I=Object(r.useState)([]),y=Object(L.a)(I,2),M=y[0],W=y[1],D=function(e){g(e.result?"Job "+e.name+" completed with result: "+e.result:e.name)},B=function(e){return{item:{id:e.jobId,title:e.name,description:e.timeLineId},job:e}};return Object(r.useEffect)((function(){Object(S.a)(C.a.mark((function e(){var t,n,r,a,s,o,i,l,p,b;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,f((function(e){return[]})),void 0!==v){e.next=8;break}return c(null),g("Please select a Job"),u((function(e){return[]})),W([]),e.abrupt("return");case 8:return e.next=10,fetch("/_apis/v1/Message?jobid="+encodeURIComponent(v),{});case 10:return e.next=12,e.sent.json();case 12:if(t=e.sent,c(t),D(t),null!==(n=B(t)).job.errors&&n.job.errors.length>0?W(n.job.errors):W([]),r=n.item,null==(a=r?r.description:null)){e.next=32;break}return e.next=22,fetch("/_apis/v1/Timeline/"+a,{});case 22:if(200!==(s=e.sent).status){e.next=30;break}return e.next=26,s.json();case 26:null!=(o=e.sent)&&o.length>0?(o.sort((function(e,t){return e.parentId?t.parentId?e.order-t.order:1:-1})),u(o)):u([]),e.next=32;break;case 30:g(null!==n.job.errors&&n.job.errors.length>0?"Job "+n.job.name+" failed to run":n.job.result?"Job "+n.job.name+" completed with result: "+n.job.result:"Wait for job "+n.job.name+" to run..."),u((function(e){return[]}));case 32:if(-1===n.job.runid){e.next=48;break}return e.next=35,E(n.job.runid);case 35:if(void 0===(i=e.sent).value){e.next=48;break}l=0;case 38:if(!(l<i.count)){e.next=47;break}return p=i.value[l],e.next=42,P(p.name,p.fileContainerResourceUrl);case 42:void 0!==(b=e.sent)&&(p.files=b.value);case 44:l++,e.next=38;break;case 47:f((function(e){return i.value}));case 48:e.next=56;break;case 50:e.prev=50,e.t0=e.catch(0),c(null),g("Error: "+e.t0),u((function(e){return[]})),W([]);case 56:case"end":return e.stop()}}),e,null,[[0,50]])})))()}),[v,_,k]),Object(r.useEffect)((function(){if(null!=a){var e=B(a).item;if(null!==e&&e.description&&""!==e.description&&"00000000-0000-0000-0000-000000000000"!==e.description){var t=new EventSource("/_apis/v1/TimeLineWebConsoleLog?timelineId="+e.description);try{var n=[],r=function(t,n){var r=t.find((function(e){return e.id===n.record.stepId})),a=new R.a({newline:!0,escapeXML:!0});return!!r&&(null==r.log&&(r.log={id:-1,location:null,content:""},n.record.startLine>1&&Object(S.a)(C.a.mark((function t(){var c,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Downloading previous log lines of this step..."),t.next=3,fetch("/_apis/v1/TimeLineWebConsoleLog/"+e.description+"/"+n.record.stepId,{});case 3:if(200!==(c=t.sent).status){t.next=12;break}return t.next=7,c.json();case 7:(s=t.sent).length=n.record.startLine-1,r.log.content=s.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+a.toHtml(t.line)}),"")+r.log.content,t.next=13;break;case 12:console.log("No logs to download..., currently fixes itself");case 13:case"end":return t.stop()}}),t)})))()),-1===r.log.id&&(r.log.content=n.record.value.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+a.toHtml(t)}),r.log.content)),!0)};t.addEventListener("log",(function(e){console.log("new logline "+e.data);var t=JSON.parse(e.data);u((function(e){return r(e,t)?Object(N.a)(e):(n.push(t),e)}))})),t.addEventListener("timeline",(function(e){var t=JSON.parse(e.data);g(t.timeline[0].name),u((function(e){for(var a=new Map,c=0;c<e.length;c++)a.set(e[c].id,e[c]);for(var s=0;s<t.timeline.length;s++)a.has(t.timeline[s].id)?(a.get(t.timeline[s].id).name=t.timeline[s].name,a.get(t.timeline[s].id).result=t.timeline[s].result,a.get(t.timeline[s].id).state=t.timeline[s].state):a.set(t.timeline[s].id,t.timeline[s]);if(0===t.timeline.length)return e;var o=[];for(a.forEach((function(e){return o.push(e)})),o.sort((function(e,t){return e.parentId?t.parentId?e.order-t.order:1:-1}));n.length>0&&r(o,n[0]);)n.shift();return o}))})),t.addEventListener("finish",(function(e){var t=JSON.parse(e.data);t.jobId===v&&Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.result=t.result,D(a);case 2:case"end":return e.stop()}}),e)})))()}))}finally{return function(){t.close()}}}}return function(){}}),[v,a,_,k]),Object(d.jsxs)("section",{className:T.a.component,children:[Object(d.jsx)(j,{title:O}),Object(d.jsx)("main",{className:T.a.main,children:Object(d.jsxs)("div",{className:T.a.text,style:{width:"100%"},children:[function(){if(void 0!==a&&null!=a)return a.result||a.errors&&0!==a.errors.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(e){Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/_apis/v1/Message/rerunworkflow/"+a.runid,{method:"POST"});case 2:case"end":return e.stop()}}),e)})))()},children:"Rerun Workflow"}),Object(d.jsx)("button",{onClick:function(e){Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/_apis/v1/Message/rerunFailed/"+a.runid,{method:"POST"});case 2:case"end":return e.stop()}}),e)})))()},children:"Rerun Failed Jobs"}),Object(d.jsx)("button",{onClick:function(e){Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/_apis/v1/Message/rerun/"+a.jobId,{method:"POST"});case 2:case"end":return e.stop()}}),e)})))()},children:"Rerun"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(e){Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/_apis/v1/Message/cancelWorkflow/"+a.runid,{method:"POST"});case 2:case"end":return e.stop()}}),e)})))()},children:"Cancel Workflow"}),Object(d.jsx)("button",{onClick:function(e){Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/_apis/v1/Message/cancel/"+a.jobId,{method:"POST"});case 2:case"end":return e.stop()}}),e)})))()},children:"Cancel"})]})}(),M.map((function(e){return Object(d.jsxs)("div",{children:["Error: ",e]})})),h.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.name}),void 0!==e.files?e.files.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:e.contentLocation,children:e.path})})})):Object(d.jsx)("div",{})]})})),function(){if(1==l.length){var e=l[0];return e.busy||e.failed||null!=e.log&&(-1===e.log.id||e.log.content&&0!==e.log.content.length)||(e.busy=!0,Object(S.a)(C.a.mark((function t(){var n,r,c,s,o,i,l,p;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new R.a({newline:!0,escapeXML:!0}),null!=e.log){t.next=18;break}return console.log("Downloading previous log lines of this step..."),r=B(a).item,t.next=7,fetch("/_apis/v1/TimeLineWebConsoleLog/"+r.description+"/"+e.id,{});case 7:if(200!==(c=t.sent).status){t.next=15;break}return t.next=11,c.json();case 11:s=t.sent,e.log={id:-1,location:null,content:s.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(t.line)}),"")},t.next=16;break;case 15:console.log("No logs to download...");case 16:t.next=28;break;case 18:return t.next=20,fetch("/_apis/v1/Logfiles/"+e.log.id,{});case 20:return t.next=22,t.sent.text();case 22:o=t.sent,i=o.split("\n"),l="2021-04-02T15:50:14.6619714Z ".length,p=/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{7}Z /,i[0]=n.toHtml(p.test(i[0])?i[0].substring(l):i[0]),e.log.content=i.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(p.test(t)?t.substring(l):t)}));case 28:t.next=33;break;case 30:t.prev=30,t.t0=t.catch(0),e.failed=!0;case 33:return t.prev=33,e.busy=!1,u((function(e){return Object(N.a)(e)})),t.finish(33);case 37:case"end":return t.stop()}}),t,null,[[0,30,33,37]])})))()),Object(d.jsx)("div",{style:{textAlign:"left",whiteSpace:"pre",maxHeight:"100%",overflow:"auto",fontFamily:"SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace"},dangerouslySetInnerHTML:{__html:null!=e.log?e.log.content:"Nothing here"}})}var t=l.map((function(e,t){return Object(d.jsx)(H.a,{className:T.a.Collapsible,open:!1,openedClassName:T.a.Collapsible,triggerClassName:T.a.Collapsible__trigger,triggerOpenedClassName:T.a.Collapsible__trigger+" "+T.a["is-open"],contentOuterClassName:T.a.Collapsible__contentOuter,contentInnerClassName:T.a.Collapsible__contentInner,trigger:(null==e.result?null==e.state?"Waiting":e.state:e.result)+" - "+e.name,onOpening:function(){0==t||e.busy||null!=e.log&&(-1===e.log.id||e.log.content&&0!==e.log.content.length)||(e.busy=!0,Object(S.a)(C.a.mark((function t(){var n,r,c,s,o,i,l,p;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new R.a({newline:!0,escapeXML:!0}),null!=e.log){t.next=18;break}return console.log("Downloading previous log lines of this step..."),r=B(a).item,t.next=7,fetch("/_apis/v1/TimeLineWebConsoleLog/"+r.description+"/"+e.id,{});case 7:if(200!==(c=t.sent).status){t.next=15;break}return t.next=11,c.json();case 11:s=t.sent,e.log={id:-1,location:null,content:s.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(t.line)}),"")},t.next=16;break;case 15:console.log("No logs to download...");case 16:t.next=28;break;case 18:return t.next=20,fetch("/_apis/v1/Logfiles/"+e.log.id,{});case 20:return t.next=22,t.sent.text();case 22:o=t.sent,i=o.split("\n"),l="2021-04-02T15:50:14.6619714Z ".length,p=/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{7}Z /,i[0]=n.toHtml(p.test(i[0])?i[0].substring(l):i[0]),e.log.content=i.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(p.test(t)?t.substring(l):t)}));case 28:return t.prev=28,e.busy=!1,u((function(e){return Object(N.a)(e)})),t.finish(28);case 32:case"end":return t.stop()}}),t,null,[[0,,28,32]])})))())},children:Object(d.jsx)("div",{style:{textAlign:"left",whiteSpace:"pre",maxHeight:"100%",overflow:"auto",fontFamily:"SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace"},dangerouslySetInnerHTML:{__html:null!=e.log?e.log.content:"Nothing here"}})},v+e.id)}));return t.shift(),t}()]})})]})},q=function(e){var t=Object(i.i)().url,n=Object(r.useState)([]),c=Object(L.a)(n,2),s=c[0],l=c[1],u=Object(i.h)().page;Object(r.useEffect)((function(){var e=new EventSource("/runner/runner/_apis/v1/Message/event?filter=**");try{u&&"0"!==u||e.addEventListener("job",(function(e){var t=JSON.parse(e.data).job;l((function(e){var n=e.findIndex((function(e){return e.runid<t.runid||e.attempt<t.attempt||e.requestId<t.requestId})),r=e.splice(n),a=[].concat(Object(N.a)(e),[t],Object(N.a)(r));return a.length>30&&(a.length=30),a}))}));var t="/runner/runner/_apis/v1/Message?page="+(u||"0");Object(S.a)(C.a.mark((function e(){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,fetch(t,{});case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,n=e.t0.parse.call(e.t0,e.t1),r=n.sort((function(e,t){return t.runid-e.runid||t.attempt-e.attempt||t.requestId-e.requestId||0})),l((function(e){return r}));case 9:case"end":return e.stop()}}),e)})))()}finally{return function(){e.close()}}}),[u]);var p=Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"Jobs",hideBackButton:!0,content:Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:p.pathname.replace("/"+(u||"master"),"/"+(Number.parseInt(u||"0")-1)),style:{visibility:p.pathname.startsWith("/master/")||"/master"===p.pathname||p.pathname.startsWith("/0/")||"/0"===p.pathname?"hidden":"visible"},children:"Previous"}),Object(d.jsx)(o.b,{to:p.pathname.replace("/"+(u||"master"),"/"+(Number.parseInt(u||"0")+1)),children:"Next"})]})}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{to:"".concat(t,"/detail/").concat(encodeURIComponent(e.jobId)),item:{id:e.jobId,title:e.name,description:e.workflowname+" "+e.repo+" "+e.runid}})},e.jobId)}))})]})},Z=function(e){var t=Object(i.i)().url,n=Object(r.useState)([]),c=Object(L.a)(n,2),s=c[0],l=c[1],u=Object(i.h)().page;Object(r.useEffect)((function(){var e="/_apis/v1/Message/owners?page="+(u||"0");Object(S.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,fetch(e,{});case 3:return t.next=5,t.sent.text();case 5:t.t1=t.sent,n=t.t0.parse.call(t.t0,t.t1),l((function(e){return n}));case 8:case"end":return t.stop()}}),t)})))()}),[u]);var p=Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"Owner",hideBackButton:!0,content:Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:p.pathname.replace("/"+(u||"master"),"/"+(Number.parseInt(u||"0")-1)),style:{visibility:p.pathname.startsWith("/master/")||"/master"===p.pathname||p.pathname.startsWith("/0/")||"/0"===p.pathname?"hidden":"visible"},children:"Previous"}),Object(d.jsx)(o.b,{to:p.pathname.replace("/"+(u||"master"),"/"+(Number.parseInt(u||"0")+1)),children:"Next"})]})}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{to:"".concat(t,"/").concat(encodeURIComponent(e.name)),item:{id:e.name,title:e.name,description:""}})},e.name)}))})]})},X=function(e){var t=Object(i.i)().url,n=Object(r.useState)([]),c=Object(L.a)(n,2),s=c[0],l=c[1],u=Object(i.h)(),p=u.page,b=u.owner;Object(r.useEffect)((function(){var e="".concat(B,"/_apis/v1/Message/repositories?owner=").concat(encodeURIComponent(b),"&page=").concat(p||"0");Object(S.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,fetch(e,{});case 3:return t.next=5,t.sent.text();case 5:t.t1=t.sent,n=t.t0.parse.call(t.t0,t.t1),l((function(e){return n}));case 8:case"end":return t.stop()}}),t)})))()}),[p,b]);var h=Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"Repositories ".concat(b),hideBackButton:!1,content:Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:h.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")-1)),style:{visibility:h.pathname.startsWith("/master/")||"/master"===h.pathname||h.pathname.startsWith("/0/")||"/0"===h.pathname?"hidden":"visible"},children:"Previous"}),Object(d.jsx)(o.b,{to:h.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")+1)),children:"Next"})]})}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{to:"".concat(t,"/").concat(encodeURIComponent(e.name)),item:{id:e.name,title:e.name,description:""}})},e.name)}))})]})},A=function(e){var t=Object(i.i)().url,n=Object(r.useState)([]),c=Object(L.a)(n,2),s=c[0],l=c[1],u=Object(i.h)(),p=u.page,b=u.owner,h=u.repo;Object(r.useEffect)((function(){var e="".concat(B,"/_apis/v1/Message/workflow/runs?owner=").concat(encodeURIComponent(b),"&repo=").concat(encodeURIComponent(h),"&page=").concat(p||"0");Object(S.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,fetch(e,{});case 3:return t.next=5,t.sent.text();case 5:t.t1=t.sent,n=t.t0.parse.call(t.t0,t.t1),l((function(e){return n}));case 8:case"end":return t.stop()}}),t)})))()}),[p,b,h]);var f=Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"WorkflowRuns ".concat(b,"/").concat(h),hideBackButton:!1,content:Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:f.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")-1)),style:{visibility:f.pathname.startsWith("/master/")||"/master"===f.pathname||f.pathname.startsWith("/0/")||"/0"===f.pathname?"hidden":"visible"},children:"Previous"}),Object(d.jsx)(o.b,{to:f.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")+1)),children:"Next"})]})}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{to:"".concat(t,"/").concat(encodeURIComponent(e.id)),item:{id:e.id,title:e.id,description:e.fileName}})},e.id)}))})]})},V=function(e){var t=Object(i.i)().url,n=Object(r.useState)([]),c=Object(L.a)(n,2),s=c[0],l=c[1],u=Object(i.h)(),p=u.page,b=u.owner,h=u.repo,f=u.run;Object(r.useEffect)((function(){var e="".concat(B,"/_apis/v1/Message/workflow/run/").concat(f,"/attempts?owner=").concat(encodeURIComponent(b),"&repo=").concat(encodeURIComponent(h),"&page=").concat(p||"0");Object(S.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,fetch(e,{});case 3:return t.next=5,t.sent.text();case 5:t.t1=t.sent,n=t.t0.parse.call(t.t0,t.t1),l((function(e){return n}));case 8:case"end":return t.stop()}}),t)})))()}),[p,b,h]);var m=Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"WorkflowRunAttempts ".concat(b,"/").concat(h),hideBackButton:!1,content:Object(d.jsxs)("div",{children:[Object(d.jsx)(o.b,{to:m.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")-1)),style:{visibility:m.pathname.startsWith("/master/")||"/master"===m.pathname||m.pathname.startsWith("/0/")||"/0"===m.pathname?"hidden":"visible"},children:"Previous"}),Object(d.jsx)(o.b,{to:m.pathname.replace("/"+(p||"master"),"/"+(Number.parseInt(p||"0")+1)),children:"Next"})]})}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(w,{to:"".concat(t,"/").concat(encodeURIComponent(e.attempt)),item:{id:e.attempt,title:e.attempt,description:e.fileName}})},e.attempt)}))})]})},z=function(e){Object(i.i)().url;var t=Object(r.useState)(null),n=Object(L.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)([]),l=Object(L.a)(o,2),u=l[0],p=l[1],b=Object(i.h)(),h=b.page,f=b.owner,m=b.repo,x=b.run,O=b.attempt;Object(r.useEffect)((function(){var e="".concat(B,"/_apis/v1/Message/workflow/run/").concat(x,"/attempt/").concat(O,"?owner=").concat(encodeURIComponent(f),"&repo=").concat(encodeURIComponent(m),"&page=").concat(h||"0");Object(S.a)(C.a.mark((function t(){var n,r,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,fetch(e,{});case 3:return t.next=5,t.sent.text();case 5:return t.t1=t.sent,n=t.t0.parse.call(t.t0,t.t1),s((function(e){return n})),t.next=10,fetch("/_apis/v1/Timeline/"+n.timeLineId,{});case 10:if(200!==(r=t.sent).status){t.next=16;break}return t.next=14,r.json();case 14:null!=(a=t.sent)&&a.length>0?(a.sort((function(e,t){return e.parentId?t.parentId?e.order-t.order:1:-1})),p(a)):p([]);case 16:case"end":return t.stop()}}),t)})))()}),[h,f,m,x,O]);Object(i.g)();return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(j,{title:"WorkflowRunAttempt ".concat(f,"/").concat(m),hideBackButton:!1}),function(){if(1==u.length){var e=u[0];return e.busy||e.failed||null!=e.log&&(-1===e.log.id||e.log.content&&0!==e.log.content.length)||(e.busy=!0,Object(S.a)(C.a.mark((function t(){var n,r,a,s,o,i,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new R.a({newline:!0,escapeXML:!0}),null!=e.log){t.next=17;break}return console.log("Downloading previous log lines of this step..."),t.next=6,fetch("/_apis/v1/TimeLineWebConsoleLog/"+c.timeLineId+"/"+c.timeLineId,{});case 6:if(200!==(r=t.sent).status){t.next=14;break}return t.next=10,r.json();case 10:a=t.sent,e.log={id:-1,location:null,content:a.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(t.line)}),"")},t.next=15;break;case 14:console.log("No logs to download...");case 15:t.next=27;break;case 17:return t.next=19,fetch("/_apis/v1/Logfiles/"+e.log.id,{});case 19:return t.next=21,t.sent.text();case 21:s=t.sent,o=s.split("\n"),i="2021-04-02T15:50:14.6619714Z ".length,l=/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{7}Z /,o[0]=n.toHtml(l.test(o[0])?o[0].substring(i):o[0]),e.log.content=o.reduce((function(e,t){return(e.length>0?e+"<br/>":"")+n.toHtml(l.test(t)?t.substring(i):t)}));case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(0),e.failed=!0;case 32:return t.prev=32,e.busy=!1,p((function(e){return Object(N.a)(e)})),t.finish(32);case 36:case"end":return t.stop()}}),t,null,[[0,29,32,36]])})))()),Object(d.jsx)("div",{style:{textAlign:"left",whiteSpace:"pre",maxHeight:"100%",overflow:"auto",fontFamily:"SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace"},dangerouslySetInnerHTML:{__html:null!=e.log?e.log.content:"Nothing here"}})}}()]})},G=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/owner/:owner/:repo/:run/:attempt",render:function(e){return Object(d.jsx)(z,{})}}),Object(d.jsx)(i.b,{path:"/owner/:owner/:repo/:run",render:function(e){return Object(d.jsx)(V,{})}}),Object(d.jsx)(i.b,{path:"/owner/:owner/:repo",render:function(e){return Object(d.jsx)(A,{})}}),Object(d.jsx)(i.b,{path:"/owner/:owner",render:function(e){return Object(d.jsx)(X,{})}}),Object(d.jsx)(i.b,{path:"/owner",render:function(e){return Object(d.jsx)(Z,{})}}),Object(d.jsx)(i.b,{path:"/master/:owner/:repo",render:function(e){return Object(d.jsx)(I,{MasterType:q,masterProps:{},DetailType:F,detailProps:{}})}}),Object(d.jsx)(i.b,{path:"/:page/:owner/:repo",render:function(e){return Object(d.jsx)(I,{MasterType:q,masterProps:{},DetailType:F,detailProps:{}})}}),Object(d.jsx)(i.a,{exact:!0,from:"/",to:"/master/runner/server"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(G,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a8802083.chunk.js.map