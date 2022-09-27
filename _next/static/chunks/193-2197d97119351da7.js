"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{9392:function(n,e,t){t.d(e,{Kk:function(){return Z},MO:function(){return C},ZP:function(){return y},c4:function(){return w}});var r,i,a,o=t(50029),u=t(71383),s=t(87794),c=t.n(s),l=t(11163),d=t(85444),p=t(99603),h=t(59417),f=t(63537),v=t(89704),x=t(64575),g=t(34798),m=t.n(g),j=t(50334),b=t(85893),w=d.default.div(r||(r=(0,u.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),Z=(0,d.default)(p.G)(i||(i=(0,u.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(n.activeColor||"#000","; }")}),(function(n){return n.isUnread?"color: ".concat(x.Uo):""})),C=d.default.div(a||(a=(0,u.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function y(n){var e=n.request,t=n.onDelete,r=n.defaultActiveColor,i=n.children,a=n.editIconStyle,u=void 0===a?{}:a,s=n.delIconStyle,d=void 0===s?{}:s,p=(0,l.useRouter)(),g=((e||{}).archived,(0,j.$8)(e)),C=(0,j.uP)(e),y="delete-modal-".concat(null===e||void 0===e?void 0:e.id),k=function(){var n=(0,o.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.stopPropagation(),C){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,p.push("/request/".concat(e.id,"?status=").concat(e.status));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=(0,o.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,v.Jl)(e.id);case 5:window.location.hash="#",t&&t(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(w,{children:[i,(0,b.jsx)(Z,{disabled:!C,icon:h.Xcf,role:"button","aria-label":"edit",onClick:k,activeColor:r,title:"Edit",size:"lg",style:u}),(0,b.jsx)(Z,{icon:h.$aW,role:"button","aria-label":"delete",onClick:g?function(){e.id&&g&&(window.location.hash=y)}:m(),disabled:!g,activeColor:x.Uo,title:"Delete",size:"lg",style:d})]}),(0,b.jsx)(f.Z,{id:y,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:P,title:"Confirm Deletion",confirmText:"Delete"})]})}},45349:function(n,e,t){t.d(e,{Z:function(){return c}});var r,i=t(71383),a=(t(67294),t(85444)),o=t(23761),u=t(85893),s=a.default.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function c(n){var e=n.events;return(0,u.jsx)(s,{children:e&&0!==e.length?e.map((function(n){return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:"Event Code: "}),n.eventCode]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:"Created Time: "}),(e=n.createdAt,new Date(e).toLocaleString())]}),n.idirUserDisplayName&&(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("strong",{children:"Created By: "}),n.idirUserDisplayName]})}),n.details&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:(0,u.jsx)("strong",{children:"Details"})}),"request-update-success"===n.eventCode?(0,u.jsxs)(u.Fragment,{children:[(0,o.Sx)(n.details.changes),(0,u.jsx)("strong",{children:"Comment: "}),(0,u.jsx)("p",{children:n.details.comment})]}):(0,u.jsx)("pre",{children:(0,u.jsx)("code",{children:JSON.stringify(n.details||{},void 0,2)})})]}),(0,u.jsx)("hr",{})]},n.id);var e})):(0,u.jsx)("div",{children:"No events found"})})}},70065:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,a=t(71383),o=(t(67294),t(85444)),u=t(99603),s=t(59417),c=t(64575),l=t(85893),d=(0,o.default)(u.G)(r||(r=(0,a.Z)(["\n  margin-right: 10px;\n"]))),p=o.default.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));function h(n){var e=n.children;return(0,l.jsxs)(p,{children:[(0,l.jsx)(d,{icon:s.sqG,color:c.UH,size:"2x"}),(0,l.jsx)("span",{children:(0,l.jsx)("em",{children:e})})]})}},9431:function(n,e,t){var r,i=t(71383),a=t(85444).default.div(r||(r=(0,i.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 12px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"])));e.Z=a},44832:function(n,e,t){var r,i=t(71383),a=t(85444);e.Z=a.default.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"])))},91832:function(n,e,t){t.d(e,{s:function(){return B},Z:function(){return q}});var r,i,a,o,u,s,c=t(71383),l=t(42050),d=t(85444),p=t(64575),h=d.default.h3(r||(r=(0,c.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"])),p.CA),f=t(99603),v=t(59417),x=t(74150),g=d.default.p(i||(i=(0,c.Z)(["\n  font-size: ",";\n  color: "," !important;\n"])),p.KN,p.we),m=t(11752),j=t.n(m),b=t(44832),w=t(70065),Z=t(85893),C=(j()()||{}).publicRuntimeConfig,y=(void 0===C?{}:C).app_env,k=(0,d.default)(h)(a||(a=(0,c.Z)(["\n  border-bottom: none;\n  margin-top: 10px;\n"]))),P=(0,d.default)(k)(o||(o=(0,c.Z)(["\n  font-size: 14px;\n"]))),S=d.default.a(u||(u=(0,c.Z)(["\n  color: ",";\n"])),p.nc),F=(0,d.default)(l.Z)(s||(s=(0,c.Z)(["\n  margin-bottom: 10px;\n"]))),A=function(n){switch(n){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function B(n){var e=n.integration,t=e.status,r=e.updatedAt,i=function(n){switch(n){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),a=new Date(r||"").toLocaleString();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{now:A(t),animated:!0,variant:i?"danger":void 0}),(0,Z.jsxs)(g,{children:["Last updated at ",a]})]})}function q(n){var e=n.integration,t=n.title,r=e.status,i=e.prNumber,a=function(n){switch(n){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(r),o=[(0,Z.jsxs)("li",{children:["Process request submitted",(0,Z.jsx)(f.G,{icon:v.f8k,color:"#00C45B"})]},"1")],u=function(n){switch(n){case"submitted":default:return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6}}(r);if(u<1)o.push((0,Z.jsxs)("li",{children:["Pull request created",(0,Z.jsx)(f.G,{icon:v.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===u)o.push((0,Z.jsxs)("li",{children:["Pull request creation failed",(0,Z.jsx)(f.G,{icon:v.nYk,color:"#FF0000"})]},"2"));else{var s="production"===y?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);o.push((0,Z.jsxs)("li",{children:["Pull request created (",(0,Z.jsx)(x.default,{external:!0,href:s,children:"link"}),")",(0,Z.jsx)(f.G,{icon:v.f8k,color:"#00C45B"})]},"2"))}return u<3?o.push((0,Z.jsxs)("li",{children:["Terraform plan succeeded",(0,Z.jsx)(f.G,{icon:v.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===u?o.push((0,Z.jsxs)("li",{children:["Terraform plan failed",(0,Z.jsx)(f.G,{icon:v.nYk,color:"#FF0000"})]},"3")):o.push((0,Z.jsxs)("li",{children:["Terraform plan succeeded",(0,Z.jsx)(f.G,{icon:v.f8k,color:"#00C45B"})]},"3")),u<5?o.push((0,Z.jsxs)("li",{children:["Request processed",(0,Z.jsx)(f.G,{icon:v.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===u?o.push((0,Z.jsxs)("li",{children:["Request failed",(0,Z.jsx)(f.G,{icon:v.nYk,color:"#FF0000"})]},"4")):o.push((0,Z.jsxs)("li",{children:["Request processed",(0,Z.jsx)(f.G,{icon:v.f8k,color:"#00C45B"})]},"4")),(0,Z.jsxs)(Z.Fragment,{children:[t&&(0,Z.jsx)(k,{children:t}),(0,Z.jsx)(P,{children:a}),(0,Z.jsx)(B,{integration:e}),(0,Z.jsx)(b.Z,{children:o}),(0,Z.jsxs)(w.Z,{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,Z.jsx)(S,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,Z.jsx)(S,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}},15338:function(n,e,t){var r,i,a,o,u,s,c=t(71383),l=t(67294),d=t(85444),p=t(34798),h=t.n(p),f=t(11915),v=t(4826),x=t(35611),g=t(64735),m=t(53918),j=t(85330),b=t(9431),w=t(11177),Z=t(65837),C=t(76457),y=(t(86389),t(64575)),k=t(85893),P=((0,d.default)(f.default)(r||(r=(0,c.Z)(["\n  input {\n    width: 100%;\n  }\n"]))),(0,d.default)(w.NU)(i||(i=(0,c.Z)(["\n  font-size: 0.9rem;\n\n  .dropdown-container {\n    border: 1.8px solid black !important;\n\n    .dropdown-heading {\n      height: 32px;\n    }\n  }\n"])))),S=(0,d.default)(m.Z)(a||(a=(0,c.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]))),F=d.default.label(o||(o=(0,c.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  & * {\n    font-weight: normal;\n  }\n"]))),A=d.default.li(u||(u=(0,c.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]))),B=d.default.div(s||(s=(0,c.Z)(["\n  display: grid;\n  grid-template-columns:\n    ","\n    &> * {\n    margin-right: 10px;\n    white-space: nowrap;\n  }\n"])),(function(n){return"repeat(".concat(n.itemsLength,", 1fr);")})),q={allItemsAreSelected:"All",selectSomeItems:""},L=function(n){for(var e=n.rowCount,t=n.limit,r=n.page,i=n.onPage,a=n.onPrev,o=n.onNext,u=parseInt(String((e-1)/t+1)),s=[(0,k.jsx)(m.Z.Item,{disabled:1===r,onClick:function(){return a()},children:"Previous"},"prev")],c=function(n){s.push((0,k.jsx)(m.Z.Item,{active:n===r,onClick:function(){return i(n)},children:n},n)),u===n&&s.push((0,k.jsx)(m.Z.Item,{disabled:r===n,onClick:function(){return o()},children:"Next"},"next"))},l=1;l<=u;l++)c(l);return(0,k.jsx)(k.Fragment,{children:s})},N=function(n){var e=n.rowCount,t=n.limit,r=n.page,i=n.onPrev,a=n.onNext,o=parseInt(String((e-1)/t+1)),u=parseInt(String((r-1)*t+1)),s=u+t-1;return s>e&&(s=e),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z.Item,{disabled:1===r,onClick:function(){return i(r-1)},children:"Previous"},"prev"),(0,k.jsx)(m.Z.Item,{disabled:r===o,onClick:function(){return a(r+1)},children:"Next"},"next"),(0,k.jsx)(A,{children:"".concat(u,"-").concat(s," of ").concat(e)})]})};e.Z=function(n){var e=n.variant,t=void 0===e?"medium":e,r=n.headers,i=n.children,a=n.pagination,o=void 0!==a&&a,u=n.onSearch,s=void 0===u?h():u,c=n.onEnter,d=void 0===c?h():c,p=n.filters,f=void 0===p?[]:p,m=n.searchLocation,w=void 0===m?"left":m,A=n.totalColSpan,T=void 0===A?14:A,z=n.searchColSpan,U=void 0===z?4:z,G=n.filterColSpan,I=void 0===G?10:G,R=n.showFilters,D=void 0===R||R,E=n.showContent,_=void 0===E||E,M=n.headerAlign,J=void 0===M?"center":M,O=n.headerGutter,Y=void 0===O?[]:O,K=n.onLimit,X=void 0===K?h():K,$=n.onPage,H=n.onPrev,V=void 0===H?h():H,W=n.onNext,Q=void 0===W?h():W,nn=n.pageLimits,en=void 0===nn?[]:nn,tn=n.searchKey,rn=void 0===tn?"":tn,an=n.searchPlaceholder,on=void 0===an?"Search...":an,un=n.page,sn=void 0===un?1:un,cn=n.limit,ln=void 0===cn?10:cn,dn=n.rowCount,pn=void 0===dn?10:dn,hn=n.loading,fn=(0,l.useState)(rn),vn=fn[0],xn=fn[1],gn=pn||ln;pn>ln&&(gn=ln);var mn,jn=(0,k.jsx)("td",{colSpan:100,children:(0,k.jsx)("div",{style:{height:"".concat(gn*(y.eX+y.gM)-y.gM,"px"),paddingTop:"10px"},children:(0,k.jsx)(Z.TextBlock,{rows:2*gn,color:"#CCC"})})}),bn=(0,k.jsx)(g.ZP.Col,{span:U,children:(0,k.jsx)(g.ZP,{cols:12,children:(0,k.jsxs)(g.ZP.Row,{gutter:[5,0],align:"center",children:[(0,k.jsx)(g.ZP.Col,{span:8,children:(0,k.jsx)(j.E1,{type:"text",size:"small",maxLength:"1000",placeholder:on,value:vn,onChange:function(n){xn(n.target.value)},onKeyUp:function(n){"Enter"===n.key&&d(vn)}})}),(0,k.jsx)(g.ZP.Col,{span:4,children:(0,k.jsx)(v.default,{type:"button",size:"small",onClick:function(){s(vn)},children:"Search"})})]})})}),wn=(0,k.jsx)(g.ZP.Col,{span:I,style:{textAlign:"right"},children:(0,k.jsx)(B,{itemsLength:f.length,children:f.map((function(n,e){return(0,k.jsx)(F,{children:n.multiselect?(0,k.jsxs)(k.Fragment,{children:[n.label,(0,k.jsx)(P,{className:"multiselect",options:n.options,value:Array.isArray(n.value)?n.value:[],onChange:n.onChange,labelledBy:"Select",hasSelectAll:!1,overrideStrings:q})]}):(0,k.jsxs)(k.Fragment,{children:[n.label,(0,k.jsx)(x.default,{"data-test-id":n.key,onChange:function(e){return(null===n||void 0===n?void 0:n.onChange)&&n.onChange(e.target.value)},value:"string"===typeof n.value?n.value:"",children:n.options.map((function(n){return(0,k.jsx)("option",{value:n.value,children:n.label},Array.isArray(n.value)?JSON.stringify(n.value):n.value)}))})]})},e)}))})}),Zn=null,Cn=null;return"left"===w?(Zn=bn,Cn=wn):(Zn=wn,Cn=bn),(0,k.jsxs)(k.Fragment,{children:[D&&(0,k.jsx)(b.Z,{children:(0,k.jsx)(g.ZP,{cols:T,children:(0,k.jsxs)(g.ZP.Row,{collapse:"1160",gutter:Y,align:J,children:[Zn,Cn]})})}),_&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.iA,{variant:t,children:(0,k.jsxs)(C.Z,{ready:!hn||!1,showLoadingAnimation:!0,customPlaceholder:jn,children:[(0,k.jsx)("thead",{children:(0,k.jsx)("tr",{children:r.map((function(n,e){return(0,k.jsx)("th",{style:n.style||{},children:n.name},e)}))})}),(0,k.jsx)("tbody",{children:i})]})}),o&&pn>0&&(0,k.jsx)(g.ZP,{cols:12,children:(0,k.jsxs)(g.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,k.jsx)(g.ZP.Col,{span:8,children:(0,k.jsx)(S,{children:$?(0,k.jsx)(L,{rowCount:pn,limit:ln,page:sn,onPage:$}):(0,k.jsx)(N,{rowCount:pn,limit:ln,page:sn,onPrev:V,onNext:Q})})}),(null===en||void 0===en?void 0:en.length)>0&&(0,k.jsx)(g.ZP.Col,{span:4,style:{textAlign:"right"},children:(0,k.jsx)(x.default,{style:{display:"inline-block",width:"160px"},value:String(ln),onChange:function(n){X(Number(n.target.value))},children:(mn=en,(0,k.jsx)(k.Fragment,{children:mn.map((function(n){return(0,k.jsx)("option",{value:n.value,children:n.text},n.value)}))}))})})]})})]})]})}},50334:function(n,e,t){t.d(e,{$8:function(){return r},VV:function(){return o},Yr:function(){return u},te:function(){return a},uP:function(){return i}});var r=function(n){return!(!n||n.apiServiceAccount||n.archived||["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""))&&(!n.usesTeam||"admin"===n.userTeamRole)},i=function(n){return!(!n||n.apiServiceAccount||n.archived||!["draft","applied"].includes(n.status||""))},a=function(n){return!(!n||Number(n.integrationCount)>0)&&"admin"===n.role},o=function(n){return!!n&&"admin"===n.role},u=function(n){return!(!n||n.apiServiceAccount||n.archived||["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""))&&(!n.usesTeam||"admin"===n.userTeamRole)}},25506:function(n,e,t){t.d(e,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},69413:function(n,e,t){t.d(e,{v:function(){return u}});var r=t(50029),i=t(87794),a=t.n(i),o=t(62297),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.post("events",e).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[null,n.t0]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},89704:function(n,e,t){t.d(e,{A_:function(){return v},H0:function(){return g},Jl:function(){return b},Uw:function(){return w},WN:function(){return j},XJ:function(){return x},hG:function(){return f},zD:function(){return m}});var r=t(50029),i=t(87794),a=t.n(i),o=t(62297),u=t(75316),s=t.n(u),c=t(25751),l=t.n(c),d=t(76427),p=t.n(d),h=t(23761),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.post("requests",e).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[(0,h.UB)(t),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.post("request",{requestId:l()(e)?parseInt(e):e}).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[(0,h.UB)(t),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"active",t={params:{include:e}},n.prev=2,n.next=5,o.e.get("requests",t).then((function(n){return n.data}));case 5:return r=n.sent,r=s()(r,["createdAt"],["desc"]),n.abrupt("return",[r.map(h.UB),null]);case 10:return n.prev=10,n.t0=n.catch(2),n.abrupt("return",(0,o.z)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.get("team-integrations/".concat(e)).then((function(n){return n.data}));case 3:return t=n.sent,t=s()(t,["createdAt"],["desc"]),n.abrupt("return",[t.map(h.UB),null]);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.post("requests-all",e).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[{count:t.count,rows:t.rows.map(h.UB)},null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]&&u[1],n.prev=1,r="requests",t&&(r="".concat(r,"?submit=true")),(e=p()(e,["user","lastChanges"])).devLoginTitle=e.devLoginTitle||"",e.testLoginTitle=e.testLoginTitle||"",e.prodLoginTitle=e.prodLoginTitle||"",n.next=10,o.e.put(r,e).then((function(n){return n.data}));case 10:return i=n.sent,n.abrupt("return",[(0,h.UB)(i),null]);case 14:return n.prev=14,n.t0=n.catch(1),n.abrupt("return",(0,o.z)(n.t0));case 17:case"end":return n.stop()}}),n,null,[[1,14]])})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.delete("requests",{params:{id:e}}).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.e.put("request-metadata",e).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[(0,h.UB)(t),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,o.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);