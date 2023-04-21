"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{83333:function(e,n,t){t.d(n,{Z:function(){return u}});var r,a=t(71383);t(67294);var i=t(85444),o=t(31513),s=t(85893),c=i.default.div(r||(r=(0,a.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function u(e){var n=e.events;return(0,s.jsx)(c,{children:n&&0!==n.length?n.map(function(e){var n;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Created Time: "}),(n=e.createdAt,new Date(n).toLocaleString())]}),e.idirUserDisplayName&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,s.jsxs)(s.Fragment,{children:[(0,o.Sx)(e.details.changes),(0,s.jsx)("strong",{children:"Comment: "}),(0,s.jsx)("p",{children:e.details.comment})]}):(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,s.jsx)("hr",{})]},e.id)}):(0,s.jsx)("div",{children:"No events found"})})}},70300:function(e,n,t){var r,a=t(71383),i=t(85444).default.div(r||(r=(0,a.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 12px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"])));n.Z=i},53442:function(e,n,t){var r,a,i,o,s,c,u=t(59499),l=t(71383),d=t(85330),p=t(4826),h=t(67294),f=t(79521),v=t(64735),g=t(53918),x=t(85444),m=t(88916),j=t(70300),b=t(59417),P=t(99603),w=t(34798),y=t.n(w),Z=t(88742),C=t(76457),k=t(65837),S=t(63055),O=t(85893);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach(function(n){(0,u.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var B=(0,x.default)(P.G)(r||(r=(0,l.Z)(["\n  color: '#000';\n"]))),L=(0,x.default)(g.Z)(a||(a=(0,l.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]))),E=x.default.label(i||(i=(0,l.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  & * {\n    font-weight: normal;\n  }\n"]))),T=x.default.li(o||(o=(0,l.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]))),z=(0,x.default)(m.ZP)(s||(s=(0,l.Z)(["\n  width: 150px;\n  display: inline-block;\n"]))),D=x.default.div(c||(c=(0,l.Z)(["\n  display: grid;\n  grid-template-columns:\n    ","\n    &> * {\n    margin-right: 10px;\n    white-space: nowrap;\n  }\n"])),function(e){return"repeat(".concat(e.itemsLength,", 1fr);")});function U(e){var n=e.setFilter,t=e.options,r=e.setValue,a=e.gotoPage;return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(m.ZP,{className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){n("status",e),r(e),a(0)},options:t,isMulti:!0})})}var A=function(e){var n=e.canPreviousPage,t=e.previousPage,r=e.canNextPage,a=e.nextPage,i=e.pageOptions,o=e.pageIndex;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(g.Z.Item,{disabled:!n,onClick:function(){t()},children:"Previous"},"prev"),(0,O.jsx)(g.Z.Item,{disabled:!r,onClick:function(){a()},children:"Next"},"next"),(0,O.jsx)(T,{children:"".concat(o+1," of ").concat((void 0===i?[]:i).length)})]})};n.Z=function(e){var n=e.variant,t=e.headers,r=e.data,a=e.activateRow,i=void 0===a?y():a,o=e.searchLocation,s=e.colfilters,c=void 0===s?[]:s,u=e.showFilters,l=e.searchPlaceholder,g=e.searchTooltip,x=e.totalColSpan,P=e.headerAlign,w=e.headerGutter,F=e.filterColSpan,T=e.searchColSpan,q=e.onPage,I=void 0===q?y():q,R=e.onEnter,G=void 0===R?y():R,M=e.rowCount,_=void 0===M?10:M,H=e.searchKey,V=e.onSearch,J=void 0===V?y():V,K=e.loading,W=e.onLimit,X=void 0===W?y():W,Q=e.limit,Y=void 0===Q?10:Q,$=e.noDataFoundElement,ee=void 0===$?(0,O.jsx)("p",{children:"No Data Found."}):$,en=e.pagination,et=e.pageLimits,er=void 0===et?[5,10,15,30,50,100]:et,ea=e.rowSelectorKey,ei=void 0===ea?"id":ea,eo=Math.ceil(_/Y),es=h.useMemo(function(){return t},[t]),ec=h.useMemo(function(){return r},[r]),eu=(0,h.useState)(),el=eu[0],ed=eu[1],ep=(0,h.useState)(void 0===H?"":H),eh=ep[0],ef=ep[1],ev=(0,f.useTable)({columns:es,data:ec,initialState:{pageIndex:0},manualPagination:!0,pageCount:0===eo?1:eo,autoResetPage:!1,autoResetSortBy:!1},f.useFilters,f.useGlobalFilter,f.useSortBy,f.usePagination),eg=ev.getTableProps,ex=ev.getTableBodyProps,em=ev.headerGroups,ej=ev.prepareRow,eb=ev.page,eP=ev.canPreviousPage,ew=ev.canNextPage,ey=ev.pageOptions,eZ=ev.nextPage,eC=ev.previousPage,ek=ev.state.pageIndex,eS=ev.setFilter,eO=ev.gotoPage,eF=_||Y;_>Y&&(eF=Y);var eN=(0,O.jsx)("td",{colSpan:100,children:(0,O.jsx)("div",{style:{height:"".concat(eF*(S.ZW+S.gM)-S.gM,"px"),paddingTop:"10px"},children:(0,O.jsx)(k.TextBlock,{rows:2*eF,color:"#CCC"})})}),eB=function(){return er.map(function(e){return{value:e,label:"".concat(e," per page")}})},eL=function(e){eO(0),X(e)},eE=function(e){i(e),ed(e)},eT=(0,O.jsx)(v.ZP.Col,{span:void 0===T?4:T,children:(0,O.jsx)(v.ZP,{cols:12,children:(0,O.jsxs)(v.ZP.Row,{gutter:[5,0],align:"center",children:[(0,O.jsx)(v.ZP.Col,{span:8,children:(0,O.jsx)(d.E1,{type:"text",size:"small",maxLength:"1000",placeholder:void 0===l?"Search...":l,value:eh,onChange:function(e){ef(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(G(eh),eO(0))}})}),(0,O.jsx)(v.ZP.Col,{span:4,children:(0,O.jsx)(Z.Z,{content:void 0===g?"":g,children:(0,O.jsx)(p.default,{type:"button",size:"small",onClick:function(){J(eh),eO(0),ed(void 0)},children:"Search"})})})]})})}),ez=(0,O.jsx)(v.ZP.Col,{span:void 0===F?10:F,style:{textAlign:"right"},children:(0,O.jsx)(D,{itemsLength:c.length,children:c.map(function(e){return(0,O.jsx)(E,{children:e.multiselect?(0,O.jsxs)(O.Fragment,{children:[e.label,(0,O.jsx)(U,{setFilter:eS,options:e.options,setValue:e.onChange,gotoPage:eO})]}):(0,O.jsxs)(O.Fragment,{children:[e.label,(0,O.jsx)(m.ZP,{className:"basic-single",classNamePrefix:"select",options:e.options,onChange:function(n){return e.onChange&&e.onChange(n.value)},isSearchable:!0,defaultValue:e.options[0],value:e.options.find(function(n){return n.value===e.value})})]})},e.label)})})}),eD=null,eU=null;return"left"===(void 0===o?"left":o)?(eD=eT,eU=ez):(eD=ez,eU=eT),(0,h.useEffect)(function(){I(ek+1),ed(void 0)},[ek]),(0,O.jsxs)(O.Fragment,{children:[void 0!==u&&u&&(0,O.jsx)(j.Z,{children:(0,O.jsx)(v.ZP,{cols:void 0===x?14:x,children:(0,O.jsxs)(v.ZP.Row,{collapse:"1160",gutter:void 0===w?[]:w,align:void 0===P?"center":P,children:[eD,eU]})})}),(0,O.jsxs)(d.iA,N(N({variant:void 0===n?"medium":n},eg()),{},{children:[(0,O.jsx)("thead",{children:em.map(function(e){return(0,h.createElement)("tr",N(N({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map(function(e){var n,t;return(0,h.createElement)("th",N(N({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:e.id}),e.render("Header"),"\xa0",(0,O.jsx)("span",{children:(n=e.isSorted,t=e.isSortedDesc,n?(0,O.jsx)(B,{icon:t?b.u9C:b.foy,size:"sm"}):null)}))}))})}),(0,O.jsx)("tbody",N(N({},ex()),{},{children:(0,O.jsx)(C.Z,{ready:!K,showLoadingAnimation:!0,customPlaceholder:eN,children:eb.length>0?eb.map(function(e){return ej(e),(0,h.createElement)("tr",N(N({},e.getRowProps()),{},{className:(null==el?void 0:el.original["".concat(ei)])===(null==e?void 0:e.original["".concat(ei)])?"active":"",key:null==e?void 0:e.id,onClick:function(){return eE(e)}}),e.cells.map(function(e){return(0,h.createElement)("td",N(N({},e.getCellProps()),{},{key:e.value}),e.render("Cell"))}))}):(0,O.jsx)("tr",{children:(0,O.jsx)("td",{colSpan:10,children:ee})})})}))]})),void 0!==en&&en&&_>0&&(0,O.jsx)(v.ZP,{cols:12,children:(0,O.jsxs)(v.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,O.jsx)(v.ZP.Col,{span:8,children:(0,O.jsx)(L,{children:(0,O.jsx)(A,{canNextPage:ew,nextPage:eZ,canPreviousPage:eP,previousPage:eC,pageIndex:ek,pageOptions:ey})})}),(0,O.jsx)(v.ZP.Col,{span:4,children:(0,O.jsx)("div",{style:{textAlign:"right"},children:(0,O.jsx)(z,{menuPosition:"fixed",defaultValue:ek||eB()[0],options:eB(),onChange:function(e){return eL(e.value)}})})})]})})]})}},77740:function(e,n,t){t.d(n,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},76944:function(e,n,t){t.d(n,{v:function(){return c}});var r,a=t(50029),i=t(87794),o=t.n(i),s=t(21963),c=(r=(0,a.Z)(o().mark(function e(n){var t;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.e.post("events",n).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)})},37226:function(e,n,t){t.d(n,{A_:function(){return Z},H0:function(){return k},Jl:function(){return N},Uw:function(){return B},WN:function(){return F},XJ:function(){return C},ct:function(){return S},hG:function(){return y},zD:function(){return O}});var r,a,i,o,s,c,u,l,d,p=t(50029),h=t(87794),f=t.n(h),v=t(21963),g=t(75316),x=t.n(g),m=t(25751),j=t.n(m),b=t(76427),P=t.n(b),w=t(31513),y=(r=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.post("requests",n).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[(0,w.UB)(t),null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)}),Z=(a=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.post("request",{requestId:j()(n)?parseInt(n):n}).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[(0,w.UB)(t),null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return a.apply(this,arguments)}),C=(i=(0,p.Z)(f().mark(function e(){var n,t,r=arguments;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{include:r.length>0&&void 0!==r[0]?r[0]:"active"}},e.prev=2,e.next=5,v.e.get("requests",n).then(function(e){return e.data});case 5:return t=e.sent,t=x()(t,["createdAt"],["desc"]),e.abrupt("return",[t.map(w.UB),null]);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",(0,v.z)(e.t0));case 13:case"end":return e.stop()}},e,null,[[2,10]])})),function(){return i.apply(this,arguments)}),k=(o=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.get("team-integrations/".concat(n)).then(function(e){return e.data});case 3:return t=e.sent,t=x()(t,["createdAt"],["desc"]),e.abrupt("return",[t.map(w.UB),null]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return o.apply(this,arguments)}),S=(s=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.get("requests/".concat(n,"/resubmit")).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[(0,w.UB)(t),null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return s.apply(this,arguments)}),O=(c=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.post("requests-all",n).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[{count:t.count,rows:t.rows.map(w.UB)},null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return c.apply(this,arguments)}),F=(u=(0,p.Z)(f().mark(function e(n){var t,r,a,i=arguments;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]&&i[1],e.prev=1,r="requests",t&&(r="".concat(r,"?submit=true")),(n=P()(n,["user","lastChanges"])).devLoginTitle=n.devLoginTitle||"",n.testLoginTitle=n.testLoginTitle||"",n.prodLoginTitle=n.prodLoginTitle||"",e.next=10,v.e.put(r,n).then(function(e){return e.data});case 10:return a=e.sent,e.abrupt("return",[(0,w.UB)(a),null]);case 14:return e.prev=14,e.t0=e.catch(1),e.abrupt("return",(0,v.z)(e.t0));case 17:case"end":return e.stop()}},e,null,[[1,14]])})),function(e){return u.apply(this,arguments)}),N=(l=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.delete("requests",{params:{id:n}}).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[t,null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return l.apply(this,arguments)}),B=(d=(0,p.Z)(f().mark(function e(n){var t;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.e.put("request-metadata",n).then(function(e){return e.data});case 3:return t=e.sent,e.abrupt("return",[(0,w.UB)(t),null]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,v.z)(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return d.apply(this,arguments)})}}]);