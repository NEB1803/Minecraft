"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[7897],{15749:function(e,t,r){r(72791);var n=r(80184);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"scrollbar",children:t})}},43568:function(e,t,r){r(72791);var n=r(63307),i=r(31363),s=r(11632),a=r(39230),l=r(80184);t.Z=function(){var e=(0,a.$G)().t,t=(0,n.G)().result,r=t&&t.data,o=null===t||void 0===t?void 0:t.path;if(!o||!o.length)return(0,l.jsx)(l.Fragment,{});var u=function t(r){if(r.endsWith(" (skip)"))return t(r.substring(0,r.length-5))+" ("+e("html.query.filter.skipped")+")";if(r.startsWith("pluginGroups-"))return"Group: "+r.substring(13);switch(r){case"allPlayers":return e("html.query.filter.generic.allPlayers");case"activityIndexNow":return e("html.query.filter.title.activityGroup");case"banned":return e("html.query.filter.banStatus.name");case"operators":return e("html.query.filter.operatorStatus.name");case"joinAddresses":return e("html.label.joinAddresses");case"geolocations":return e("html.label.geolocations");case"playedBetween":return e("html.query.filter.playedBetween.text");case"registeredBetween":return e("html.query.filter.registeredBetween.text");case"pluginsBooleanGroups":return e("html.query.filter.hasPluginBooleanValue.name");case"playedOnServer":return e("html.query.filter.hasPlayedOnServers.name");default:return r.kind}};return(0,l.jsx)("aside",{id:"result-path",className:"alert shadow "+(r?"alert-success":"alert-warning"),children:o.map((function(e,t){return(0,l.jsxs)("p",{style:{marginBottom:0,marginLeft:.7*t+"rem"},children:[(0,l.jsx)(i.G,{icon:s.G_j})," '",u(e.kind),"' matched ",e.size," players"]},e.kind+e.size)}))})}},35751:function(e,t,r){var n=r(37762),i=r(29439),s=r(76308),a=r(72791),l=r(98442),o=r(67179),u=r.n(o),c=r(41900),d=r.n(c),f=r(75193),m=r.n(f),h=r(39230),v=r(93490),p=r(80184);t.Z=function(e){var t=e.id,r=e.series,o=e.legendEnabled,c=e.tall,f=e.yAxis,x=e.selectedRange,y=e.extremes,j=e.onSetExtremes,g=e.alreadyOffsetTimezone,b=e.options,Z=e.extraModules,w=(0,h.$G)().t,N=(0,s.Fg)(),A=N.graphTheming,S=N.nightModeEnabled,F=(0,v.A)().timeZoneOffsetMinutes,k=(0,a.useState)(void 0),q=(0,i.Z)(k,2),O=q[0],C=q[1];(0,a.useEffect)((function(){if(d()(u()),m()(u()),Z){var e,i=(0,n.Z)(Z);try{for(i.s();!(e=i.n()).done;){(0,e.value)(u())}}catch(s){i.e(s)}finally{i.f()}}u().setOptions({lang:{noData:w("html.label.noDataToDisplay")}}),u().setOptions(A),C(u().stockChart(t,b||{chart:{noData:w("html.label.noDataToDisplay")},rangeSelector:{selected:void 0!==x?x:2,buttons:l.AA},yAxis:f||{softMax:2,softMin:0},xAxis:{events:{afterSetExtremes:function(e){j&&j(e)}}},title:{text:""},plotOptions:{areaspline:{fillOpacity:S?.2:.4}},legend:{enabled:o},time:{timezoneOffset:g?0:F},series:r}))}),[b,Z,r,t,w,A,S,g,F,o,f,j,C,x]),(0,a.useEffect)((function(){var e;null!==O&&void 0!==O&&null!==(e=O.xAxis)&&void 0!==e&&e.length&&y&&O.xAxis[0].setExtremes(y.min,y.max)}),[O,y]);var I=c?{height:"450px"}:void 0;return(0,p.jsx)("div",{className:"chart-area",style:I,id:t,children:(0,p.jsx)("span",{className:"loader"})})}},92647:function(e,t,r){var n=r(29439),i=r(72791),s=r(39230),a=r(98442),l=r(35751),o=r(27949),u=r(80184);t.Z=function(e){var t=e.data,r=e.selectedRange,c=e.extremes,d=e.onSetExtremes,f=(0,s.$G)().t,m=(0,i.useState)([]),h=(0,n.Z)(m,2),v=h[0],p=h[1];return(0,i.useEffect)((function(){if(t){var e={name:f("html.label.playersOnline"),type:"areaspline",tooltip:a.Md.zeroDecimals,data:t.playersOnline,color:t.color,yAxis:0};p([e])}}),[t,f]),t?(0,u.jsx)(l.Z,{id:"players-online-graph",series:v,selectedRange:r,extremes:c,onSetExtremes:d}):(0,u.jsx)(o.aC,{})}},8622:function(e,t,r){r(72791);var n=r(80184);t.Z=function(e){var t=e.options,r=e.selectedIndexes,i=e.setSelectedIndexes;return(0,n.jsx)("select",{className:"form-control",multiple:!0,onChange:function(e){var r=Object.values(e.target.selectedOptions).map((function(e){return e.text})).map((function(e){return t.indexOf(e)}));i(r)},children:t.map((function(e,t){return(0,n.jsx)("option",{value:r.includes(t),selected:r.includes(t),children:e},JSON.stringify(e))}))})}},82301:function(e,t,r){var n=r(29439),i=r(72791),s=r(80184);t.Z=function(e){var t=e.title,r=e.children,a=e.coverToggle,l=(0,i.useState)(!0),o=(0,n.Z)(l,2),u=o[0],c=o[1],d=function(){c(!u)};return(0,s.jsxs)(s.Fragment,{children:[a&&!u&&(0,s.jsx)("div",{onClick:d,style:{position:"fixed",top:"-4.9rem",left:"-5rem",width:"100vw",height:"100vh",zIndex:2,backgroundColor:"rgba(0,0,0,0.1)"}}),(0,s.jsx)("button",{className:"btn dropdown-toggle "+(u?"collapsed":""),onClick:d,children:t}),(0,s.jsx)("div",{className:"collapse "+(u?"":"show"),children:r})]})}},27949:function(e,t,r){r.d(t,{aC:function(){return a},ym:function(){return s}});r(72791);var n=r(28282),i=r(80184),s=function(){return(0,i.jsxs)(n.Z,{className:"loading",children:[(0,i.jsx)(n.Z.Header,{children:(0,i.jsx)("h6",{className:"col-black",children:"..."})}),(0,i.jsx)(a,{})]})},a=function(e){var t=e.style;return(0,i.jsx)("div",{className:"chart-area loading",style:t,children:(0,i.jsx)(l,{})})},l=function(){return(0,i.jsx)("span",{className:"loader"})};t.ZP=l},99220:function(e,t,r){r.d(t,{m:function(){return u}});var n=r(93433),i=r(29439),s=r(72791),a=r(89114),l=r(93490),o=r(54225),u=function(e,t,r){var u=(0,s.useState)(void 0),c=(0,i.Z)(u,2),d=c[0],f=c[1],m=(0,s.useState)(void 0),h=(0,i.Z)(m,2),v=h[0],p=h[1],x=(0,a.H)(),y=x.updateRequested,j=x.finishUpdate,g=(0,l.A)().refreshBarrierMs,b=function(){var e=(0,l.A)().datastore;e&&!e.dataByMethod&&(e.dataByMethod={}),e&&!e.lastUpdateByMethod&&(e.lastUpdateByMethod={}),e&&!e.currentlyUpdatingMethods&&(e.currentlyUpdatingMethods={});var t=(0,s.useCallback)((function(t,r){var n=Boolean(e.dataByMethod[t]);return r&&(e.lastUpdateByMethod[t]=r.timestamp,e.dataByMethod[t]=r),n}),[e]),r=(0,s.useCallback)((function(t){return null===e||void 0===e?void 0:e.lastUpdateByMethod[t]}),[e]),n=(0,s.useCallback)((function(t){return null===e||void 0===e?void 0:e.dataByMethod[t]}),[e]),i=(0,s.useCallback)((function(t){return e&&Boolean(e.currentlyUpdatingMethods[t])}),[e]),a=(0,s.useCallback)((function(t){e.currentlyUpdatingMethods[t]=!0}),[e]),o=(0,s.useCallback)((function(t){delete e.currentlyUpdatingMethods[t]}),[e]);return{storeData:t,getLastUpdate:r,getData:n,isCurrentlyUpdating:i,isSomethingUpdating:(0,s.useCallback)((function(){return e&&Boolean(Object.values(e.currentlyUpdatingMethods).filter((function(e){return Boolean(e)})).length)}),[e]),setAsUpdating:a,finishUpdate:o}}();return(0,s.useEffect)((function(){if(void 0===r||r){b.setAsUpdating(e);var i=function r(i,s,a,l){if(i){var u=i.timestamp;if(!o.vT&&u)u+(g||15e3)<y?setTimeout((function(){e.apply(void 0,[(new Date).getTime()].concat((0,n.Z)(t))).then((function(e){var t=e.data,n=e.error;r(t,n,!0,l>=12e3?l:2*l)}))}),l):(f(i),b.storeData(e,i),b.finishUpdate(e),j(i.timestamp,i.timestamp_f,b.isSomethingUpdating())),a||(f(i),b.storeData(e,i),j(i.timestamp,i.timestamp_f,b.isSomethingUpdating()));else f(i),b.finishUpdate(e),j(i.timestamp,i.timestamp_f,b.isSomethingUpdating())}else s&&(console.warn(s),b.finishUpdate(e),p(s),j(0,"Error: "+s.message,b.isSomethingUpdating()))};e.apply(void 0,[y].concat((0,n.Z)(t))).then((function(e){var t=e.data,r=e.error;i(t,r,!1,1e3)}))}else f(void 0)}),[e,t.length].concat((0,n.Z)(t),[y,g,r])),{data:d,loadingError:v}}},63307:function(e,t,r){r.d(t,{G:function(){return o},k:function(){return l}});var n=r(29439),i=r(72791),s=r(80184),a=(0,i.createContext)({}),l=function(e){var t=e.children,r=(0,i.useState)({}),l=(0,n.Z)(r,2),o={result:l[0],setResult:l[1]};return(0,s.jsx)(a.Provider,{value:o,children:t})},o=function(){return(0,i.useContext)(a)}},15353:function(e,t,r){r.d(t,{HF:function(){return l},PL:function(){return o},a$:function(){return a}});var n=r(74165),i=r(15861),s=r(54225),a=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/v1/filters",e.abrupt("return",(0,s.vn)("/v1/filters"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/v1/query",e.abrupt("return",(0,s.gK)("/v1/query",[s.hD],t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/v1/query?timestamp=".concat(t),e.abrupt("return",(0,s.vn)(r));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},98442:function(e,t,r){r.d(t,{AA:function(){return n},ET:function(){return s},Md:function(){return i},px:function(){return a}});var n=[{type:"hour",count:12,text:"12h"},{type:"hour",count:24,text:"24h"},{type:"day",count:7,text:"7d"},{type:"month",count:1,text:"30d"},{type:"all",text:"All"}],i={twoDecimals:{valueDecimals:2},zeroDecimals:{valueDecimals:0}},s=function(e){var t=[],r=[],n=[],i=[],s=[],a=[],l=[];return new Promise((function(o){var u=0,c=e.length;!function d(){for(var f=Math.min(u+1e3,c);u<f;u++){var m=e[u],h=m[0];t[u]=[h,m[1]],r[u]=[h,m[2]],n[u]=[h,m[3]],i[u]=[h,m[4]],s[u]=[h,m[5]],a[u]=[h,m[6]],l[u]=[h,m[7]]}u>=c?o({playersOnline:t,tps:r,cpu:n,ram:i,entities:s,chunks:a,disk:l}):setTimeout(d,10)}()}))},a={PLAYERS_ONLINE:{labels:{formatter:function(){return this.value+" P"}},softMin:0,softMax:2},TPS:{opposite:!0,labels:{formatter:function(){return this.value+" TPS"}},softMin:0,softMax:20},CPU:{opposite:!0,labels:{formatter:function(){return this.value+"%"}},softMin:0,softMax:100},RAM_OR_DISK:{labels:{formatter:function(){return this.value+" MB"}},softMin:0},ENTITIES:{opposite:!0,labels:{formatter:function(){return this.value+" E"}},softMin:0,softMax:2},CHUNKS:{labels:{formatter:function(){return this.value+" C"}},softMin:0}}},17897:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(72791),i=r(51425),s=r(89743),a=r(2677),l=r(74165),o=r(15861),u=r(93433),c=r(29439),d=r(28282),f=r(39230),m=r(99220),h=r(15353),v=r(28782),p=r(27949),x=r(99410),y=r(31363),j=r(16850),g=r(80184),b=function(e){var t=e.id,r=e.setValue,i=e.value,s=e.placeholder,a=e.setAsInvalid,l=e.setAsValid,o=(0,n.useState)(!1),u=(0,c.Z)(o,2),d=u[0],f=u[1];return(0,g.jsxs)(x.Z,{children:[(0,g.jsx)("div",{className:"input-group-text",children:(0,g.jsx)(y.G,{icon:j.fT7})}),(0,g.jsx)("input",{type:"text",className:"form-control"+(d?" is-invalid":""),id:t,placeholder:s,value:i,onChange:function(e){var n=function(e){var t=e.match(/^(0\d|\d{2})[/|-]?(0\d|\d{2})[/|-]?(\d{4,5})$/);if(!t)return e;var r=Number(t[1]),n=Number(t[2])-1,i=Number(t[3]),s=t?new Date(i,n,r):null,a="".concat(s.getDate()),l="".concat(s.getMonth()+1),o="".concat(s.getFullYear());return(1===a.length?"0".concat(a):a)+"/"+(1===l.length?"0".concat(l):l)+"/"+o}(e.target.value),i=!function(e){if(!e)return!0;var t=e.match(/^(0\d|\d{2})[/|-]?(0\d|\d{2})[/|-]?(\d{4,5})$/);if(!t)return!1;var r=Number(t[1]),n=Number(t[2])-1,i=Number(t[3]);return new Date(i,n,r)}(n);f(i),r(n),i?a(t):l(t)}})]})},Z=function(e){var t=e.id,r=e.setValue,i=e.value,s=e.placeholder,a=e.setAsInvalid,l=e.setAsValid,o=(0,n.useState)(!1),u=(0,c.Z)(o,2),d=u[0],f=u[1];return(0,g.jsxs)(x.Z,{children:[(0,g.jsx)("div",{className:"input-group-text",children:(0,g.jsx)(y.G,{icon:j.SZw})}),(0,g.jsx)("input",{type:"text",className:"form-control"+(d?" is-invalid":""),id:t,placeholder:s,value:i,onChange:function(e){var n=function(e){var t=e.match(/^(0\d|\d{2}):?(0\d|\d{2})$/);if(!t)return e;for(var r=Number(t[1]);r>23;)r--;for(var n=Number(t[2]);n>59;)n--;return(r<10?"0"+r:r)+":"+(n<10?"0"+n:n)}(e.target.value),i=!function(e){return!e||/^[0-2]\d:[0-5]\d$/.test(e)}(n);f(i),r(n),i?a(t):l(t)}})]})},w=r(11632),N=r(92647),A=r(67179),S=r.n(A),F=r(8622),k=r(82301),q=r(23709),O=r(15749),C=function(e){var t=e.filterOptions,r=e.filters,n=e.setFilters,i=(0,f.$G)().t,s=function(e){if(e.kind.startsWith("pluginGroups-"))return i("html.query.filter.pluginGroup.name")+e.kind.substring(13);switch(e.kind){case"allPlayers":return i("html.query.filter.generic.allPlayers");case"activityIndexNow":return i("html.query.filter.title.activityGroup");case"banned":return i("html.query.filter.banStatus.name");case"operators":return i("html.query.filter.operatorStatus.name");case"joinAddresses":return i("html.label.joinAddresses");case"geolocations":return i("html.label.geolocations");case"playedBetween":return i("html.query.filter.playedBetween.text");case"registeredBetween":return i("html.query.filter.registeredBetween.text");case"pluginsBooleanGroups":return i("html.query.filter.hasPluginBooleanValue.name");case"playedOnServer":return i("html.query.filter.hasPlayedOnServers.name");default:return e.kind}};return(0,g.jsxs)(q.Z,{children:[(0,g.jsxs)(q.Z.Toggle,{variant:"",children:[(0,g.jsx)(y.G,{icon:w.r8p})," ",i("html.query.filters.add")]}),(0,g.jsxs)(q.Z.Menu,{popperConfig:{strategy:"absolute"},children:[(0,g.jsx)("h6",{className:"dropdown-header",children:i("html.query.filters.add")}),(0,g.jsx)(O.Z,{children:t.map((function(e){return(0,g.jsx)(q.Z.Item,{onClick:function(){return t=e,void n([].concat((0,u.Z)(r),[t]));var t},children:s(e)},JSON.stringify(e))}))})]})]})},I=r(1413),M=function(e){var t=e.index,r=e.label,i=e.filter,l=e.removeFilter,o=e.setFilterOptions,u=(0,f.$G)().t,d=u(0===t?"html.query.filter.generic.start":"html.query.filter.generic.and"),m=(0,n.useState)([]),h=(0,c.Z)(m,2),v=h[0],p=h[1];return(0,n.useEffect)((function(){o((0,I.Z)((0,I.Z)({},i),{},{parameters:{selected:JSON.stringify(v.map((function(e){return i.options.options[e]})))}}))}),[o,v,i]),(0,g.jsxs)("div",{id:"filter-"+t,className:"mt-2",children:[(0,g.jsxs)("label",{className:"form-label",htmlFor:"filter-"+t,children:[d,u(r),":"]}),(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(a.Z,{md:11,className:"flex-fill",children:(0,g.jsx)(F.Z,{options:i.options.options,setSelectedIndexes:p,selectedIndexes:v})}),(0,g.jsx)(a.Z,{md:"auto",children:(0,g.jsx)("button",{className:"filter-remover btn btn-outline-secondary float-end",onClick:l,children:(0,g.jsx)(y.G,{icon:j.I7k})})})]})]})},B=function(e){var t=e.index,r=e.filter,n=e.removeFilter,i=e.setFilterOptions,s="are in ".concat(r.options.plugin,"'s ").concat(r.options.group," Groups");return(0,g.jsx)(M,{index:t,label:s,filter:r,removeFilter:n,setFilterOptions:i})},D=function(e){var t=e.index,r=e.label,i=e.filter,l=e.removeFilter,o=e.setFilterOptions,u=e.setAsInvalid,d=e.setAsValid,m=(0,f.$G)().t,h=m(0===t?"html.query.filter.generic.start":"html.query.filter.generic.and"),v=i.options,p=(0,n.useState)(v.after[0]),x=(0,c.Z)(p,2),w=x[0],N=x[1],A=(0,n.useState)(v.after[1]),S=(0,c.Z)(A,2),F=S[0],k=S[1],q=(0,n.useState)(v.before[0]),O=(0,c.Z)(q,2),C=O[0],M=O[1],B=(0,n.useState)(v.before[1]),D=(0,c.Z)(B,2),T=D[0],V=D[1];return(0,n.useEffect)((function(){o((0,I.Z)((0,I.Z)({},i),{},{parameters:{afterDate:w,afterTime:F,beforeDate:C,beforeTime:T}}))}),[o,w,F,C,T,i]),(0,g.jsxs)("div",{id:"filter-"+t,className:"mt-2",children:[(0,g.jsxs)("label",{children:[h,r,":"]}),(0,g.jsxs)(s.Z,{className:"my-2 justify-content-start",children:[(0,g.jsx)(a.Z,{md:3,sm:6,children:(0,g.jsx)(b,{id:"filter-"+t+"-from-date",value:w,setValue:N,placeholder:v.after[0],setAsInvalid:u,setAsValid:d})}),(0,g.jsx)(a.Z,{md:2,sm:6,children:(0,g.jsx)(Z,{id:"filter-"+t+"-from-time",value:F,setValue:k,placeholder:v.after[1],setAsInvalid:u,setAsValid:d})}),(0,g.jsx)(a.Z,{md:1,sm:12,className:"text-center my-1 my-md-2 flex-fill",children:(0,g.jsx)("label",{htmlFor:"inlineFormCustomSelectPref",children:"&"})}),(0,g.jsx)(a.Z,{md:3,sm:6,children:(0,g.jsx)(b,{id:"filter-"+t+"-to-date",value:C,setValue:M,placeholder:v.before[0],setAsInvalid:u,setAsValid:d})}),(0,g.jsx)(a.Z,{md:2,sm:6,children:(0,g.jsx)(Z,{id:"filter-"+t+"-to-time",value:T,setValue:V,placeholder:v.before[1],setAsInvalid:u,setAsValid:d})}),(0,g.jsx)(a.Z,{md:"auto",sm:12,className:"my-1 my-md-auto",children:(0,g.jsx)("button",{className:"filter-remover btn btn-outline-secondary float-end",onClick:l,children:(0,g.jsx)(y.G,{icon:j.I7k})})})]})]})},T=function(e){var t=e.index,r=e.filter,n=e.setFilterOptions,i=e.removeFilter,s=e.setAsInvalid,a=e.setAsValid,l=(0,f.$G)().t;if(r.kind.startsWith("pluginGroups-"))return(0,g.jsx)(B,{index:t,filter:r,setFilterOptions:n,removeFilter:i});var o=l("html.query.generic.are").replaceAll("`","");switch(r.kind){case"activityIndexNow":return(0,g.jsx)(M,{index:t,filter:r,label:l("html.query.filter.activity.text"),setFilterOptions:n,removeFilter:i});case"allPlayers":case"banned":case"operators":return(0,g.jsx)(M,{index:t,filter:r,label:o,setFilterOptions:n,removeFilter:i});case"joinAddresses":return(0,g.jsx)(M,{index:t,filter:r,label:l("html.query.filter.joinAddress.text"),setFilterOptions:n,removeFilter:i});case"geolocations":return(0,g.jsx)(M,{index:t,filter:r,label:l("html.query.filter.country.text"),setFilterOptions:n,removeFilter:i});case"playedOnServer":return(0,g.jsx)(M,{index:t,filter:r,label:l("html.query.filter.hasPlayedOnServers.text"),setFilterOptions:n,removeFilter:i});case"pluginsBooleanGroups":return(0,g.jsx)(M,{index:t,filter:r,label:l("html.query.filter.hasPluginBooleanValue.text"),setFilterOptions:n,removeFilter:i});case"playedBetween":return(0,g.jsx)(D,{index:t,filter:r,label:l("html.query.filter.playedBetween.text"),setFilterOptions:n,removeFilter:i,setAsInvalid:s,setAsValid:a});case"registeredBetween":return(0,g.jsx)(D,{index:t,filter:r,label:l("html.query.filter.registeredBetween.text"),setFilterOptions:n,removeFilter:i,setAsInvalid:s,setAsValid:a});default:return(0,g.jsx)("div",{className:"my-2",children:(0,g.jsxs)("p",{children:["Unknown filter ",r.kind]})})}},V=function(e){var t=e.filters,r=e.setFilters,n=e.setAsInvalid,i=e.setAsValid;return(0,g.jsx)("ul",{id:"filters",className:"filters",children:t.map((function(e,s){return(0,g.jsx)("li",{className:"filter",children:(0,g.jsx)(T,{filter:e,index:s,setFilterOptions:function(e){return function(e,n){t[e]=n,r(t)}(s,e)},removeFilter:function(){return e=s,void r(t.filter((function(t,r){return r!==e})));var e},moveUp:function(){return function(e){if(0!==e){var n=[t[e],t[e-1]];t[e-1]=n[0],t[e]=n[1],r(t)}}(s)},moveDown:function(){return function(e){if(e!==t.length-1){var n=[t[e+1],t[e]];t[e]=n[0],t[e+1]=n[1],r(t)}}(s)},setAsInvalid:n,setAsValid:i})},"filter-"+s)}))})},G=r(63307),E=r(57689),P=function(e,t){var r=e.match(/^(0\d|\d{2})[/|-]?(0\d|\d{2})[/|-]?(\d{4,5})$/),n=t.match(/^(0\d|\d{2}):?(0\d|\d{2})$/),i=Number(r[1]),s=Number(r[2])-1,a=Number(r[3]),l=Number(n[1]),o=Number(n[2]),u=new Date(a,s,i,l,o);return u.getTime()-6e4*u.getTimezoneOffset()},U=function(){var e=(0,f.$G)().t,t=(0,E.s0)(),r=(0,G.G)().setResult,i=(0,n.useState)(!1),x=(0,c.Z)(i,2),j=x[0],A=x[1],q=(0,n.useState)(void 0),O=(0,c.Z)(q,2),I=O[0],M=O[1],B=(0,n.useState)(void 0),D=(0,c.Z)(B,2),T=D[0],U=D[1],$=(0,n.useState)(void 0),R=(0,c.Z)($,2),z=R[0],H=R[1],_=(0,n.useState)(void 0),L=(0,c.Z)(_,2),Y=L[0],W=L[1],J=(0,n.useState)([]),K=(0,c.Z)(J,2),Q=K[0],X=K[1],ee=(0,n.useState)([]),te=(0,c.Z)(ee,2),re=te[0],ne=te[1],ie=(0,m.m)(h.a$,[]),se=ie.data,ae=ie.loadingError,le=(0,n.useState)(void 0),oe=(0,c.Z)(le,2),ue=oe[0],ce=oe[1];(0,n.useEffect)((function(){se&&ce({playersOnline:se.viewPoints,color:"#9E9E9E"})}),[se,ce]);var de=(0,n.useState)([]),fe=(0,c.Z)(de,2),me=fe[0],he=fe[1],ve=(0,n.useCallback)((function(e){return he([].concat((0,u.Z)(me),[e]))}),[he,me]),pe=(0,n.useCallback)((function(e){return he(me.filter((function(t){return e!==t})))}),[he,me]),xe=(0,n.useState)(void 0),ye=(0,c.Z)(xe,2),je=ye[0],ge=ye[1],be=(0,n.useCallback)((function(){if(!me.length&&se&&(I||T||z||Y)){var e=P(I||se.view.afterDate,T||se.view.afterTime),t=P(z||se.view.beforeDate,Y||se.view.beforeTime);ge({min:e,max:t})}}),[me,se]);(0,n.useEffect)(be,[me,be]);var Ze=(0,n.useCallback)((function(e){if(e&&e.trigger){var t=S().dateFormat("%d/%m/%Y",e.min),r=S().dateFormat("%H:%M",e.min),n=S().dateFormat("%d/%m/%Y",e.max),i=S().dateFormat("%H:%M",e.max);M(t),U(r),H(n),W(i)}}),[U,M,W,H]),we=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var n,i,s;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={view:{afterDate:I||se.view.afterDate,afterTime:T||se.view.afterTime,beforeDate:z||se.view.beforeDate,beforeTime:Y||se.view.beforeTime,servers:Q.map((function(e){return se.view.servers[e]}))},filters:re},A(!0),e.next=4,(0,h.HF)(n);case 4:i=e.sent,s=i.data,A(!1),r(s),window.scrollTo(0,0),null!==s&&void 0!==s&&s.data&&t("../result?timestamp="+s.timestamp);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(ae)return(0,g.jsx)(v.NY,{error:ae});if(!se)return(0,g.jsx)(d.Z,{children:(0,g.jsx)(d.Z.Body,{children:(0,g.jsx)(p.aC,{})})});var Ne=null===se||void 0===se?void 0:se.view;return(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(d.Z.Body,{children:[(0,g.jsx)("label",{children:e("html.query.label.view")}),(0,g.jsxs)(s.Z,{className:"my-2 justify-content-start justify-content-md-center",children:[(0,g.jsx)(a.Z,{className:"my-2",children:(0,g.jsx)("label",{children:e("html.query.label.from").replace("</label>","").replace(">","")})}),(0,g.jsx)(a.Z,{md:3,children:(0,g.jsx)(b,{id:"viewFromDateField",value:I,setValue:M,placeholder:Ne.afterDate,setAsInvalid:ve,setAsValid:pe})}),(0,g.jsx)(a.Z,{md:2,children:(0,g.jsx)(Z,{id:"viewFromTimeField",value:T,setValue:U,placeholder:Ne.afterTime,setAsInvalid:ve,setAsValid:pe})}),(0,g.jsx)(a.Z,{md:1,className:"my-2 text-center",children:(0,g.jsx)("label",{children:e("html.query.label.to").replace("</label>","").replace(">","")})}),(0,g.jsx)(a.Z,{md:3,children:(0,g.jsx)(b,{id:"viewToDateField",value:z,setValue:H,placeholder:Ne.beforeDate,setAsInvalid:ve,setAsValid:pe})}),(0,g.jsx)(a.Z,{md:2,children:(0,g.jsx)(Z,{id:"viewToTimeField",value:Y,setValue:W,placeholder:Ne.beforeTime,setAsInvalid:ve,setAsValid:pe})})]}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(a.Z,{md:12,children:(0,g.jsx)(N.Z,{data:ue,selectedRange:3,extremes:je,onSetExtremes:Ze})})}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(a.Z,{md:12,children:(0,g.jsx)(k.Z,{title:function(){var t=Q.length,r=se.view.servers.length;return 0===t||t===r?e("html.query.label.servers.all"):1===t?e("html.query.label.servers.single"):2===t?e("html.query.label.servers.two"):e("html.query.label.servers.many").replace("{number}",t)}(),children:(0,g.jsx)(F.Z,{options:Ne.servers.map((function(e){return e.serverName})),selectedIndexes:Q,setSelectedIndexes:X})})})}),(0,g.jsx)("hr",{style:{marginBottom:0}}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(a.Z,{md:12,children:(0,g.jsx)(V,{filters:re,setFilters:ne,setAsInvalid:ve,setAsValid:pe})})}),(0,g.jsx)(s.Z,{children:(0,g.jsx)(a.Z,{md:12,children:(0,g.jsx)(C,{filterOptions:se.filters,filters:re,setFilters:ne})})})]}),(0,g.jsxs)("button",{id:"query-button",className:"btn bg-theme m-2",disabled:Boolean(me.length)||j,onClick:we,children:[(0,g.jsx)(y.G,{icon:j?w.gr5:w.wn1,spin:j})," ",e("html.query.performQuery")]})]})},$=r(43568),R=r(61636),z=function(){var e=(0,R.a)().hasPermission;return(0,g.jsx)(i.Z,{children:e("access.query")&&(0,g.jsx)("section",{className:"query-options-view",children:(0,g.jsx)(s.Z,{children:(0,g.jsxs)(a.Z,{md:12,children:[(0,g.jsx)($.Z,{}),(0,g.jsx)(U,{})]})})})})}},96882:function(e,t,r){var n=r(1413),i=r(45987),s=r(81694),a=r.n(s),l=r(72791),o=r(84934),u=r(10162),c=r(80184),d=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=l.forwardRef((function(e,t){var r=e.id,s=e.bsPrefix,f=e.className,m=e.type,h=void 0===m?"checkbox":m,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,y=void 0!==x&&x,j=e.as,g=void 0===j?"input":j,b=(0,i.Z)(e,d),Z=(0,l.useContext)(o.Z).controlId;return s=(0,u.vE)(s,"form-check-input"),(0,c.jsx)(g,(0,n.Z)((0,n.Z)({},b),{},{ref:t,type:h,id:r||Z,className:a()(f,s,p&&"is-valid",y&&"is-invalid")}))}));f.displayName="FormCheckInput",t.Z=f},84934:function(e,t,r){var n=r(72791).createContext({});t.Z=n},99410:function(e,t,r){var n=r(45987),i=r(1413),s=r(81694),a=r.n(s),l=r(72791),o=r(10162),u=r(96882),c=r(91991),d=r(86289),f=r(80184),m=["bsPrefix","size","hasValidation","className","as"],h=l.forwardRef((function(e,t){var r=e.bsPrefix,s=e.size,u=e.hasValidation,d=e.className,h=e.as,v=void 0===h?"div":h,p=(0,n.Z)(e,m);r=(0,o.vE)(r,"input-group");var x=(0,l.useMemo)((function(){return{}}),[]);return(0,f.jsx)(c.Z.Provider,{value:x,children:(0,f.jsx)(v,(0,i.Z)((0,i.Z)({ref:t},p),{},{className:a()(d,r,s&&"".concat(r,"-").concat(s),u&&"has-validation")}))})}));h.displayName="InputGroup",t.Z=Object.assign(h,{Text:d.Z,Radio:function(e){return(0,f.jsx)(d.Z,{children:(0,f.jsx)(u.Z,(0,i.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,f.jsx)(d.Z,{children:(0,f.jsx)(u.Z,(0,i.Z)({type:"checkbox"},e))})}})},91991:function(e,t,r){var n=r(72791).createContext(null);n.displayName="InputGroupContext",t.Z=n},86289:function(e,t,r){var n=r(1413),i=r(45987),s=r(72791),a=r(81694),l=r.n(a),o=r(10162),u=r(80184),c=["className","bsPrefix","as"],d=s.forwardRef((function(e,t){var r=e.className,s=e.bsPrefix,a=e.as,d=void 0===a?"span":a,f=(0,i.Z)(e,c);return s=(0,o.vE)(s,"input-group-text"),(0,u.jsx)(d,(0,n.Z)({ref:t,className:l()(r,s)},f))}));d.displayName="InputGroupText",t.Z=d}}]);
//# sourceMappingURL=7897.67ed9305.chunk.js.map
