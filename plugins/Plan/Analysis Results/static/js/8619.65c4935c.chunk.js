"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8619],{79840:function(e,r,n){var t=n(29439),a=n(72791),s=n(57689),o=n(31363),i=n(80184),l=function(e){var r=e.id,n=e.name,t=e.href,a=e.icon,l=e.color,u=e.active,c=e.disabled,d=(0,s.s0)();return(0,i.jsx)("li",{className:"nav-item"+(c?" disabled":""),id:r,children:(0,i.jsxs)("button",{disabled:c,className:"nav-link col-black"+(u?" active":""),"aria-selected":u,role:"tab",onClick:function(){return d("#"+t,{replace:!0})},children:[(0,i.jsx)(o.G,{icon:a,className:"col-"+l})," ",n]})})},u=function(e){var r=e.tabs,n=e.selectedTab;return(0,i.jsx)("ul",{className:"nav nav-tabs",role:"tablist",children:r.map((function(e){return(0,i.jsx)(l,{id:e.href+"-nav",name:e.name,href:e.href,icon:e.icon,color:e.color,active:e.href===n,disabled:e.disabled},e.href)}))})};r.Z=function(e){var r,n=e.tabs,o=(0,s.TH)().hash,l=n?n[0].href:void 0,c=(0,a.useState)(l),d=(0,t.Z)(c,2),v=d[0],h=d[1];(0,a.useEffect)((function(){var e;h(o&&n?null===(e=n.find((function(e){return e.href===o.substring(1)})))||void 0===e?void 0:e.href:l)}),[o,n,l]);var f=null===(r=n.find((function(e){return e.href===v})))||void 0===r?void 0:r.element;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{tabs:n,selectedTab:v}),f]})}},82124:function(e,r,n){n(72791);var t=n(90575),a=n(70525),s=n(74332),o=n(39230),i=n(31363),l=n(16850),u=n(80184);r.Z=function(e){var r=e.series,n=e.firstDay,c=e.onSelect,d=(0,o.$G)().t;return(0,u.jsxs)("div",{id:"server-calendar",children:[(0,u.jsxs)("p",{style:{position:"absolute",top:"0.5rem",right:"1rem"},children:[(0,u.jsx)(i.G,{icon:l.duH})," ",d("html.text.clickAndDrag")]}),(0,u.jsx)(t.Z,{plugins:[s.ZP,a.Z],timeZone:"UTC",themeSystem:"bootstrap",eventColor:"#2196F3",firstDay:n,initialView:"dayGridMonth",navLinks:!0,height:800,contentHeight:800,headerToolbar:{left:"title",center:"",right:"dayGridMonth dayGridWeek dayGridDay today prev next"},editable:Boolean(c),selectable:Boolean(c),select:c,unselectAuto:!0,events:function(e,n){return n(r)}})]})}},25329:function(e,r,n){var t=n(29439),a=n(39230),s=n(72791),o=n(98442),i=n(35751),l=n(76308),u=n(66360),c=n(80184);r.Z=function(e){var r=e.id,n=e.data,d=(0,a.$G)().t,v=(0,s.useState)([]),h=(0,t.Z)(v,2),f=h[0],p=h[1],m=(0,l.Fg)().nightModeEnabled;return(0,s.useEffect)((function(){var e={name:d("html.label.uniquePlayers"),type:"spline",tooltip:o.Md.zeroDecimals,data:n.uniquePlayers,color:m?(0,u.Xf)(n.colors.playersOnline):n.colors.playersOnline},r={name:d("html.label.newPlayers"),type:"spline",tooltip:o.Md.zeroDecimals,data:n.newPlayers,color:m?(0,u.Xf)(n.colors.newPlayers):n.colors.newPlayers};p([e,r])}),[n,d,m]),(0,c.jsx)(i.Z,{id:r,series:f,alreadyOffsetTimezone:!0})}},19824:function(e,r,n){n.d(r,{EG:function(){return d},Hb:function(){return c},Vp:function(){return v},gJ:function(){return o},gY:function(){return i},jI:function(){return u},rO:function(){return l}});var t=n(74165),a=n(15861),s=n(54225),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/network/overview",s.vT&&(n="/data/network-overview.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/network/servers",s.vT&&(n="/data/network-servers.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/graph?type=serverPie",s.vT&&(n="/data/graph-serverPie.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/network/sessionsOverview",s.vT&&(n="/data/network-sessionsOverview.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/network/playerbaseOverview",s.vT&&(n="/data/network-playerbaseOverview.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/v1/network/pingTable",s.vT&&(n="/data/network-pingTable.json"),e.abrupt("return",(0,s.vn)(n,r));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/v1/network/performanceOverview?servers=".concat(encodeURIComponent(JSON.stringify(n))),e.abrupt("return",(0,s.vn)(a,r));case 2:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},38619:function(e,r,n){n.r(r),n.d(r,{default:function(){return J}});var t=n(72791),a=n(99220),s=n(28782),o=n(51425),i=n(28282),l=n(2677),u=n(47807),c=n(4159),d=n(19824),v=n(39230),h=n(27949),f=n(16261),p=n(11632),m=n(74165),b=n(15861),x=n(29439),y=n(79840),w=n(38646),j=n(25329),g=n(92647),Z=n(93490),k=n(98442),D=n(35751),T=n(76308),P=n(80184),C=function(e){var r=e.data,n=(0,v.$G)().t,a=(0,T.Fg)().nightModeEnabled,s=(0,t.useState)({title:{text:""}}),o=(0,x.Z)(s,2),i=o[0],l=o[1];return(0,t.useEffect)((function(){if(r){var e=r.graphs.map((function(e){return{name:n("html.label.playersOnline")+" ("+e.server.serverName+")",type:"areaspline",tooltip:k.Md.zeroDecimals,data:e.points.map((function(e){return e[0]-=e[0]%6e4,e})),color:r.color,yAxis:0}}));l({title:{text:""},rangeSelector:{selected:2,buttons:k.AA},chart:{noData:n("html.label.noDataToDisplay"),zooming:{type:"xy"}},plotOptions:{areaspline:{fillOpacity:a?.2:.4,stacking:"normal"}},legend:{enabled:!0},xAxis:{zoomEnabled:!0,title:{enabled:!1}},yAxis:{zoomEnabled:!0,title:{text:n("html.label.players")},softMax:2,min:0},series:e})}}),[r,a,n]),r?(0,P.jsx)(D.Z,{id:"stacked-players-online-graph",options:i}):(0,P.jsx)(h.aC,{})},E=n(61636),F=n(16850),O=n(82124),_=n(15353),G=n(67179),S=n.n(G),q=n(48292),A=function(e){var r=e.serverUUID,n=(0,a.m)(w.ri,[r]),t=n.data,o=n.loadingError;return o?(0,P.jsx)(s.ah,{error:o}):r&&t?(0,P.jsx)(g.Z,{data:t}):(0,P.jsx)(h.aC,{})},M=function(){var e=(0,a.m)(w.ri,[]),r=e.data,n=e.loadingError;return n?(0,P.jsx)(s.ah,{error:n}):r?(0,P.jsx)(C,{data:r}):(0,P.jsx)(h.aC,{})},N=function(){var e=(0,Z.A)(),r=e.serverUUID,n=e.networkMetadata;return n?n.usingRedisBungee||1===n.servers.filter((function(e){return e.proxy})).length?(0,P.jsx)(A,{serverUUID:r}):(0,P.jsx)(M,{}):(0,P.jsx)(h.aC,{})},U=function(){var e=(0,a.m)(w.sf,[]),r=e.data,n=e.loadingError;return n?(0,P.jsx)(s.ah,{error:n}):r?(0,P.jsx)(j.Z,{id:"day-by-day-graph",data:r}):(0,P.jsx)(h.aC,{})},V=function(){var e=(0,a.m)(w.Li,[]),r=e.data,n=e.loadingError;return n?(0,P.jsx)(s.ah,{error:n}):r?(0,P.jsx)(j.Z,{id:"hour-by-hour-graph",data:r}):(0,P.jsx)(h.aC,{})},z=function(){var e=(0,a.m)(w.e7,[]),r=e.data,n=e.loadingError,o=(0,t.useState)(!1),i=(0,x.Z)(o,2),l=i[0],u=i[1],c=(0,t.useState)(void 0),d=(0,x.Z)(c,2),v=d[0],f=d[1],p=(0,t.useCallback)((function(){u(!1)}),[u]),y=(0,t.useCallback)(function(){var e=(0,b.Z)((0,m.Z)().mark((function e(r){var n,t,a,s,o;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S().dateFormat("%d/%m/%Y",r.start),t=S().dateFormat("%d/%m/%Y",r.end),a={filters:[{kind:"playedBetween",parameters:{afterDate:n,afterTime:"00:00",beforeDate:t,beforeTime:"00:00"}}],view:{afterDate:n,afterTime:"00:00",beforeDate:t,beforeTime:"00:00",servers:[]}},f(void 0),u(!0),e.next=7,(0,_.HF)(a);case 7:s=e.sent,(o=null===s||void 0===s?void 0:s.data)&&f(o);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[f,u]);return n?(0,P.jsx)(s.ah,{error:n}):r?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(O.Z,{series:r.data,firstDay:r.firstDay,onSelect:y}),(0,P.jsx)(q.Z,{open:l,toggle:p,queryData:v})]}):(0,P.jsx)(h.aC,{})},H=function(){var e=(0,E.a)().hasPermission,r=(0,v.$G)().t,n=[{name:r("html.label.networkOnlineActivity"),icon:p.heh,color:"blue",href:"online-activity",element:(0,P.jsx)(N,{}),permission:"page.network.overview.graphs.online"},{name:r("html.label.dayByDay"),icon:p.heh,color:"blue",href:"day-by-day",element:(0,P.jsx)(U,{}),permission:"page.network.overview.graphs.day.by.day"},{name:r("html.label.hourByHour"),icon:p.heh,color:"blue",href:"hour-by-hour",element:(0,P.jsx)(V,{}),permission:"page.network.overview.graphs.hour.by.hour"},{name:r("html.label.networkCalendar"),icon:F.fT7,color:"teal",href:"network-calendar",element:(0,P.jsx)(z,{}),permission:"page.network.overview.graphs.calendar"}].filter((function(r){return e(r.permission)}));return(0,P.jsx)(i.Z,{children:(0,P.jsx)(y.Z,{tabs:n})})},B=n(2936),I=n(96271),$=function(e){var r=e.data,n=(0,v.$G)().t;return r?(0,P.jsxs)(i.Z,{id:"recent-players",children:[(0,P.jsx)(i.Z.Header,{children:(0,P.jsx)("h6",{className:"col-black",children:n("html.label.players")})}),(0,P.jsxs)(I.Z,{id:"card-body-network-overview-players",children:[(0,P.jsx)("p",{children:n("html.label.last24hours")}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-blue",name:n("html.label.uniquePlayers"),value:r.unique_players_1d}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-green",name:n("html.label.newPlayers"),value:r.new_players_1d}),(0,P.jsx)("p",{children:n("html.label.last7days")}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-blue",name:n("html.label.uniquePlayers"),value:r.unique_players_7d}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-green",name:n("html.label.newPlayers"),value:r.new_players_7d}),(0,P.jsx)("p",{children:n("html.label.last30days")}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-blue",name:n("html.label.uniquePlayers"),value:r.unique_players_30d}),(0,P.jsx)(f.Z,{icon:p.FVb,color:"light-green",name:n("html.label.newPlayers"),value:r.new_players_30d})]})]}):(0,P.jsx)(h.ym,{})},J=function(){var e=(0,E.a)(),r=e.hasPermission,n=e.hasChildPermission,t=r("page.network.overview.numbers"),i=n("page.network.overview.graphs"),v=(0,a.m)(d.gJ,[],t),h=v.data,f=v.loadingError;return f?(0,P.jsx)(s.ZP,{error:f}):(0,P.jsx)(o.Z,{children:(0,P.jsxs)("section",{className:"network_overview",children:[(0,P.jsxs)(B.Z,{id:"row-network-overview-0",children:[i&&(0,P.jsx)(l.Z,{lg:t?9:12,children:(0,P.jsx)(H,{})}),t&&(0,P.jsx)(l.Z,{lg:3,children:(0,P.jsx)($,{data:null===h||void 0===h?void 0:h.players})})]}),t&&(0,P.jsxs)(B.Z,{id:"row-network-overview-1",children:[(0,P.jsx)(l.Z,{lg:4,children:(0,P.jsx)(u.Z,{data:null===h||void 0===h?void 0:h.numbers})}),(0,P.jsx)(l.Z,{lg:8,children:(0,P.jsx)(c.Z,{data:null===h||void 0===h?void 0:h.weeks})})]})]})})}}}]);
//# sourceMappingURL=8619.65c4935c.chunk.js.map
