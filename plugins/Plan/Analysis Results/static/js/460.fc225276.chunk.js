"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[460],{91102:function(e,n,r){r.d(n,{V:function(){return u},m:function(){return m}});var t=r(29439),i=r(72791),a=r(99220),o=r(38646),s=r(61636),l=r(80184),c=(0,i.createContext)({}),u=function(e){var n=e.identifier,r=e.proxy,u=e.children,m=(0,s.a)().hasPermission,p=(0,i.useState)(void 0),d=(0,t.Z)(p,2),h=d[0],f=d[1],v=(0,i.useState)(void 0),g=(0,t.Z)(v,2),x=g[0],b=g[1],w=m(r?"page.network.plugins":"page.server.plugins"),y=(0,a.m)(o.tt,[n],w),k=y.data,E=y.loadingError;(0,i.useEffect)((function(){f(k),b(E)}),[k,E,f,b]);var j=(0,i.useMemo)((function(){return{extensionData:h,extensionDataLoadingError:x,proxy:r}}),[h,x,r]);return(0,l.jsx)(c.Provider,{value:j,children:u})},m=function(){return(0,i.useContext)(c)}},82818:function(e,n,r){r.d(n,{g:function(){return t}});var t=function(e){switch(e){case"SOLID":default:return"fas";case"REGULAR":return"far";case"BRAND":return"fab"}}},70460:function(e,n,r){r.r(n);var t=r(93433),i=r(72791),a=r(39230),o=r(57689),s=r(89114),l=r(11632),c=r(61636),u=r(75854),m=r(90055),p=r(8995),d=r(93490),h=r(16850),f=r(61091),v=r(87626),g=r(91102),x=r(82818),b=r(54225),w=r(80184),y=i.lazy((function(){return Promise.all([r.e(5193),r.e(2457),r.e(8002),r.e(4260)]).then(r.bind(r,24260))})),k=function(){var e=(0,a.$G)(),n=e.t,r=e.i18n,o=(0,c.a)().authRequired,m=(0,s.H)(),p=m.sidebarItems,f=m.setSidebarItems,v=(0,d.A)().networkMetadata,y=(0,g.m)().extensionData;return(0,i.useEffect)((function(){var e=(null===v||void 0===v?void 0:v.servers)||[],n=[{name:"html.label.networkOverview",icon:l.sqG,href:"overview",permission:"page.network.overview"},{},{name:"html.label.information"},{name:"html.label.servers",icon:l.xf3,contents:[{nameShort:"html.label.overview",name:"html.label.servers",icon:l.kXW,href:"serversOverview",permission:"page.network.server.list"},{name:"html.label.sessions",icon:h.Ry6,href:"sessions",permission:"page.network.sessions"},b.vT?void 0:{name:"html.label.performance",icon:l.Kb6,href:"performance",permission:"page.network.performance"},{}].concat((0,t.Z)(e.filter((function(e){return!e.proxy})).map((function(e){return{name:e.serverName,icon:l.xf3,href:"/server/"+e.serverUUID,color:"light-green",permission:"access.server."+e.serverUUID}}))))},{name:"html.label.playerbase",icon:l.FVb,contents:[{nameShort:"html.label.overview",name:"html.label.playerbaseOverview",icon:l.Stf,href:"playerbase",permission:"page.network.playerbase"},{name:"html.label.joinAddresses",icon:l.$40,href:"join-addresses",permission:"page.network.join.addresses"},{name:"html.label.playerRetention",icon:l.UFF,href:"retention",permission:"page.network.retention"},{name:"html.label.playerList",icon:l.NdV,href:"players",permission:"page.network.players"},{name:"html.label.geolocations",icon:l.g4A,href:"geolocations",permission:"page.network.geolocations"}]},{},{name:"html.label.plugins",permission:"page.network.plugins"},{name:"html.label.pluginHistory",icon:l.hQR,href:"plugin-history",permission:"page.network.plugin.history",authRequired:!0},{name:"html.label.pluginsOverview",icon:l.NkB,href:"plugins-overview",permission:"page.network.plugins"}];null!==y&&void 0!==y&&y.extensions&&y.extensions.filter((function(e){return e.wide})).map((function(e){return e.extensionInformation})).map((function(e){return{name:e.pluginName,icon:[(0,x.g)(e.icon.family),e.icon.iconName],href:"plugins/".concat(encodeURIComponent(e.pluginName)),permission:"page.network.plugins"}})).forEach((function(e){return n.push(e)})),b.vT||n.push({},{name:"html.label.links",permission:"access.query"},{name:"html.label.query",icon:l.wn1,href:"/query",permission:"access.query"}),n=n.filter((function(e){return!e.authRequired||o&&e.authRequired})),f(n),window.document.title="Plan | Network"}),[n,r,y,f,v,o]),(0,w.jsx)(u.Z,{items:p})};n.default=function(){var e=(0,d.A)(),n=e.networkName,r=e.serverUUID,t=(0,s.H)().currentTab,a=(0,c.a)(),l=a.authRequired,u=a.loggedIn;return l&&!u?(0,w.jsx)(v.Z,{}):r?(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(g.V,{identifier:r,proxy:!0,children:[(0,w.jsx)(k,{}),(0,w.jsxs)("div",{className:"d-flex flex-column",id:"content-wrapper",children:[(0,w.jsx)(m.Z,{page:n,tab:t}),(0,w.jsxs)("div",{id:"content",style:{display:"flex"},children:[(0,w.jsx)("main",{className:"container-fluid mt-4",children:(0,w.jsx)(f.Z,{children:(0,w.jsx)(o.j3,{})})}),(0,w.jsxs)("aside",{children:[(0,w.jsx)(p.Z,{}),(0,w.jsx)(i.Suspense,{fallback:"",children:(0,w.jsx)(y,{})})]})]})]})]})}):(0,w.jsx)(w.Fragment,{})}},61091:function(e,n,r){var t,i,a=r(94578),o=r(72791),s=r(26752),l=r(95545);var c="out-in",u="in-out",m=function(e,n,r){return function(){var t;e.props[n]&&(t=e.props)[n].apply(t,arguments),r()}},p=((t={})[c]=function(e){var n=e.current,r=e.changeState;return o.cloneElement(n,{in:!1,onExited:m(n,"onExited",(function(){r(s.d0,null)}))})},t[u]=function(e){var n=e.current,r=e.changeState,t=e.children;return[n,o.cloneElement(t,{in:!0,onEntered:m(t,"onEntered",(function(){r(s.d0)}))})]},t),d=((i={})[c]=function(e){var n=e.children,r=e.changeState;return o.cloneElement(n,{in:!0,onEntered:m(n,"onEntered",(function(){r(s.cn,o.cloneElement(n,{in:!0}))}))})},i[u]=function(e){var n=e.current,r=e.children,t=e.changeState;return[o.cloneElement(n,{in:!1,onExited:m(n,"onExited",(function(){t(s.cn,o.cloneElement(r,{in:!0}))}))}),o.cloneElement(r,{in:!0})]},i),h=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];return(n=e.call.apply(e,[this].concat(t))||this).state={status:s.cn,current:null},n.appeared=!1,n.changeState=function(e,r){void 0===r&&(r=n.state.current),n.setState({status:e,current:r})},n}(0,a.Z)(n,e);var r=n.prototype;return r.componentDidMount=function(){this.appeared=!0},n.getDerivedStateFromProps=function(e,n){return null==e.children?{current:null}:n.status===s.d0&&e.mode===u?{status:s.d0}:!n.current||(r=n.current,t=e.children,r===t||o.isValidElement(r)&&o.isValidElement(t)&&null!=r.key&&r.key===t.key)?{current:o.cloneElement(e.children,{in:!0})}:{status:s.Ix};var r,t},r.render=function(){var e,n=this.props,r=n.children,t=n.mode,i=this.state,a=i.status,c=i.current,u={children:r,current:c,changeState:this.changeState,status:a};switch(a){case s.d0:e=d[t](u);break;case s.Ix:e=p[t](u);break;case s.cn:e=c}return o.createElement(l.Z.Provider,{value:{isMounting:!this.appeared}},e)},n}(o.Component);h.propTypes={},h.defaultProps={mode:c},n.Z=h}}]);
//# sourceMappingURL=460.fc225276.chunk.js.map
