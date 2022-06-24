(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{76691:function(e,n,t){"use strict";t.d(n,{Kk:function(){return b},MO:function(){return j},ZP:function(){return w},c4:function(){return g}});var r,i,a,o=t(50029),s=t(71383),l=t(87794),c=t.n(l),d=t(11163),u=t(37797),m=t(92814),h=t(51436),f=t(61165),p=t(37226),x=t(63055),v=t(85893),g=u.default.div(r||(r=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),b=(0,u.default)(m.G)(i||(i=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(e.activeColor||"#000","; }")}),(function(e){return e.isUnread?"color: ".concat(x.Uo):""})),j=u.default.div(a||(a=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function w(e){var n=e.request,t=e.onDelete,r=e.defaultActiveColor,i=e.children,a=(0,d.useRouter)(),s=(n||{}).archived,l=!s&&!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""),u=!s&&["draft","applied"].includes(n.status||""),m="delete-modal-".concat(null===n||void 0===n?void 0:n.id),j=function(){var e=(0,o.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),u){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,a.push("/request/".concat(n.id,"?status=").concat(n.status));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||"")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,p.Jl)(n.id);case 5:window.location.hash="#",t&&t(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(g,{children:[i,(0,v.jsx)(b,{disabled:!u,icon:h.Xcf,role:"button","aria-label":"edit",onClick:j,activeColor:r,title:"Edit",size:"lg"}),(0,v.jsx)(b,{icon:h.$aW,role:"button","aria-label":"delete",onClick:function(){n.id&&l&&(window.location.hash=m)},disabled:!l,activeColor:x.Uo,title:"Delete",size:"lg"})]}),(0,v.jsx)(f.Z,{id:m,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:w,title:"Confirm Deletion",confirmText:"Delete"})]})}},73118:function(e,n,t){"use strict";t.d(n,{H:function(){return l}});var r,i=t(71383),a=t(37797),o=t(2556),s=t(63055),l=(0,a.default)(o.Z)(r||(r=(0,i.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n    font-weight: 600;\n  }\n"])),s.CA)},88214:function(e,n,t){"use strict";var r,i=t(71383),a=t(37797),o=t(63055),s=a.default.table(r||(r=(0,i.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: ",";\n    }\n  }\n\n  & tbody {\n    font-size: ",";\n    tr {\n      height: ",";\n      background-color: #f8f8f8;\n      ","\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  & th.w60,\n  & td.w60 {\n    width: 60px;\n  }\n\n  & th.min-width-60,\n  & td.min-width-60 {\n    min-width: 60px;\n  }\n"])),o.gM,(function(e){return"mini"===e.variant?"30px":"140px"}),(function(e){return"mini"===e.variant?"14px":"16px"}),(function(e){return"mini"===e.variant?"".concat(o.ZW,"px"):"".concat(o.eX,"px")}),(function(e){return!e.readOnly&&"\n        &:hover {\n          background-color: ".concat(o.uB,";\n          cursor: pointer;\n        }\n        &.active {\n          background-color: ").concat(o.uB,";\n          font-weight: bold;\n          border: 2px solid #9fadc0 !important;\n        }\n      ")}));n.Z=s},49910:function(e,n,t){"use strict";t.d(n,{FE:function(){return x}});var r,i,a=t(71383),o=t(67294),s=t(11163),l=t(64735),c=t(37797),d=t(73192),u=t(73118),m=t(59912),h=t(60377),f=t(23130),p=t(85893),x=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],v=c.default.div(r||(r=(0,a.Z)(["\n  overflow: auto;\n"]))),g=c.default.div(i||(i=(0,a.Z)(["\n  padding-top: 2px;\n"]))),b=o.createContext({});n.ZP=function(e){var n,t=e.tab,r=e.leftPanel,i=e.rightPanel,a=e.children,c=(0,s.useRouter)(),j=(0,o.useReducer)(h.Z,h.E),w=j[0],y=j[1],Z=(0,o.useContext)(f.SessionContext)||{},k=Z.user,C=Z.enableGold,S=null===k||void 0===k||null===(n=k.integrations)||void 0===n?void 0:n.find((function(e){return"silver"===e.serviceType})),O=(0,o.useMemo)((function(){return{state:w,dispatch:y}}),[w,y]),T=(0,p.jsxs)(u.H,{onSelect:function(e){c.replace("/my-dashboard/".concat(e))},activeKey:t,children:[(0,p.jsx)(d.Z,{eventKey:"integrations",title:"My Projects"}),(0,p.jsx)(d.Z,{eventKey:"teams",title:"My Teams"}),C&&S&&(0,p.jsx)(d.Z,{eventKey:"s2g",title:"*New - Silver to Gold Upgrade"})]});return(0,p.jsx)(m.Z,{rules:x,children:(0,p.jsx)(b.Provider,{value:O,children:a?(0,p.jsxs)(g,{children:[T,a]}):(0,p.jsx)(l.ZP,{cols:10,children:(0,p.jsxs)(l.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,p.jsx)(l.ZP.Col,{span:6,children:(0,p.jsxs)(v,{children:[T,r&&r(w,y)]})}),(0,p.jsx)(l.ZP.Col,{span:4,children:i&&i(w,y)})]})})})})}},6178:function(e,n,t){"use strict";var r,i=t(71383),a=t(67294),o=t(11163),s=t(46312),l=t(37797),c=t(73192),d=t(59912),u=t(73118),m=t(60377),h=t(23130),f=t(49910),p=t(85893),x=l.default.div(r||(r=(0,i.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),v=a.createContext({});n.Z=function(e){var n,t=e.tab,r=e.leftPanel,i=e.rightPanel,l=e.showResizable,g=void 0===l||l,b=(e.children,(0,o.useRouter)()),j=(0,a.useReducer)(m.Z,m.E),w=j[0],y=j[1],Z=(0,a.useContext)(h.SessionContext)||{},k=Z.user,C=Z.enableGold,S=null===k||void 0===k||null===(n=k.integrations)||void 0===n?void 0:n.find((function(e){return"silver"===e.serviceType})),O=(0,a.useMemo)((function(){return{state:w,dispatch:y}}),[w,y]),T=(0,p.jsxs)(u.H,{onSelect:function(e){b.replace("/my-dashboard/".concat(e))},activeKey:t,children:[(0,p.jsx)(c.Z,{eventKey:"integrations",title:"My Projects"}),(0,p.jsx)(c.Z,{eventKey:"teams",title:"My Teams"}),C&&S&&(0,p.jsx)(c.Z,{eventKey:"s2g",title:"*New - Silver to Gold Upgrade"})]});return(0,p.jsx)(d.Z,{rules:f.FE,children:(0,p.jsxs)(v.Provider,{value:O,children:[T,g?(0,p.jsx)(s.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.4*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,p.jsx)(x,{children:r&&r(w,y)})}):r&&r(w,y),(0,p.jsx)("br",{}),i&&i(w,y)]})})}},61401:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ce}});var r,i,a,o,s,l,c=t(16835),d=t(50029),u=t(87794),m=t.n(u),h=t(67294),f=t(6178),p=t(59499),x=t(71383),v=t(11163),g=t(37797),b=t(73192),j=t(73118),w=t(88214),y=t(85330),Z=t(35611),k=t(61165),C=t(91679),S=t(37226),O=t(48966),T=t.n(O),P=t(3016),N=t(15812),E=t(76457),D=t(92814),R=t(51436),z=t(31513),A=t(76691),M=t(85893),U=(0,g.default)(D.G)(r||(r=(0,x.Z)(["\n  color: #ff0303;\n"]))),G=g.default.div(i||(i=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"]))),K=function(e){var n=e.title,t=e.content;return(0,M.jsxs)(G,{children:[(0,M.jsx)(U,{icon:R.RLE,size:"3x"}),(0,M.jsxs)("div",{children:[n&&(0,M.jsx)("strong",{children:n}),t&&(0,M.jsx)("p",{children:t})]})]})},F=t(73366);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var _=((0,t(11752).default)()||{}).publicRuntimeConfig,q=((void 0===_?{}:_).enable_gold,g.default.div(a||(a=(0,x.Z)(["\n  padding-left: 1rem;\n  ","\n"])),(function(e){return"\n  margin-top: ".concat(e.marginTop||"0",";\n  margin-bottom: ").concat(e.marginBottom||"0",";\n  margin-left: ").concat(e.marginLeft||"0",";\n  margin-right: ").concat(e.marginRight||"0",";\n  ")}))),L=(0,g.default)(y.zx)(o||(o=(0,x.Z)(["\n  padding: 0 !important;\n  margin: 20px 0 !important;\n"]))),B=g.default.td(s||(s=(0,x.Z)(["\n  text-align: left !important;\n"]))),H="add-member-modal",W="delete-member-modal",X=function(e,n){var t={members:[]};return e.forEach((function(e,n){e.idirEmail&&T().isEmail(e.idirEmail)?e.idirEmail.endsWith("@gov.bc.ca")||(t.members[n]="Please enter a government email address"):t.members[n]="Please enter an email"})),0===t.members.length?(n(null),null):(n(t),t)},Y={idirEmail:"",role:"member",pending:!0},$=function(e){var n=e.onConfirmDelete,t={confirmText:"Delete",buttonStyle:"danger"},r="",i="";switch(e.type){case"allow":r="Once they are deleted, they will no longer have access to the team's integrations.",i="Are you sure that you want to delete this team member?",t.onConfirm=n;break;case"notAllowed":r="Before you delete the last team admin, you must assign a new admin.",t.confirmText="Okay",t.buttonStyle="custom"}return(0,M.jsx)(k.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,p.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Delete Team Member",icon:null,id:W,content:(0,M.jsx)(K,{content:r,title:i}),closable:!0},t))},J=(0,g.default)(D.G)(l||(l=(0,x.Z)(["\n  margin-right: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),Q=function(e){var n=e.status;if(!n)return null;var t=R.RLE,r="black";return"draft"===n?(t=R.Xcf,r="#1a5a96"):"submitted"===n?(t=R.SZw,r="#fcba19"):["prFailed","applyFailed","planFailed"].includes(n)?(t=R.nYk,r="#ff0303"):"applied"===n&&(r="#2e8540",t=R.f8k),(0,M.jsx)(D.G,{icon:t,title:n,style:{color:r}})},V=function(e){var n=e.pending,t=e.invitationSendTime;if(!t)return null;var r,i,a,o=(new Date).getTime()-new Date(t).getTime();return n&&o/864e5>2?(r=R.RLE,i="#ff0303",a="Invitation Expired"):n?(r=R.SZw,i="#fcba19",a="Invitation Sent"):(i="#2e8540",r=R.f8k,a="Active Member"),(0,M.jsx)(D.G,{icon:r,title:a,style:{color:i}})};var ee,ne=(0,N.hU)((function(e){var n,t=e.alert,r=e.currentUser,i=e.team,a=e.loadTeams,o=(0,v.useRouter)(),s=(0,h.useState)([]),l=s[0],u=s[1],f=(0,h.useState)([]),p=f[0],x=f[1],g=(0,h.useState)(null),y=g[0],O=g[1],T=(0,h.useState)(null),N=T[0],D=T[1],U=(0,h.useState)([Y]),G=U[0],K=U[1],I=(0,h.useState)(),_=I[0],ee=I[1],ne=(0,h.useState)(!1),te=ne[0],re=ne[1],ie=(0,h.useState)(),ae=ie[0],oe=ie[1],se=(0,h.useState)("allow"),le=se[0],ce=se[1],de=function(){var e=(0,d.Z)(m().mark((function e(n){var t,i,a,o,s,l,d,h,f,p,v,g,b,j;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re(!0),e.next=3,Promise.all([(0,P.YY)(n),(0,S.H0)(n),(0,P.ZT)(n)]);case 3:t=e.sent,i=(0,c.Z)(t,3),a=i[0],o=i[1],s=i[2],l=(0,c.Z)(a,2),d=l[0],h=l[1],f=(0,c.Z)(o,2),p=f[0],v=f[1],g=(0,c.Z)(s,2),b=g[0],j=g[1],h||v||j?(u([]),D(null),x([]),O(null)):(u(d),D(d.find((function(e){return e.idirEmail===r.email}))),x(p||[]),O(b)),re(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){de(i.id)}),[null===i||void 0===i?void 0:i.id]),(0,h.useEffect)((function(){return y&&"submitted"===y.status&&(clearInterval(n),n=setInterval((0,d.Z)(m().mark((function e(){var t,r,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.ZT)(i.id);case 2:t=e.sent,r=(0,c.Z)(t,2),a=r[0],r[1]?clearInterval(n):O(a);case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[y]);var ue=function(){var e=(0,d.Z)(m().mark((function e(){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!X(G,ee)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,P.yG)({members:G,id:i.id});case 5:if(n=e.sent,r=(0,c.Z)(n,2),!r[1]){e.next=12;break}t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to add new members. Please ensure the emails you have entered are valid,\n        and reach out to the SSO team if the problem persists"}),e.next=17;break;case 12:return e.next=14,de(i.id);case 14:K([Y]),window.location.hash="",t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Invited new members to your team!"});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(){var e=(0,d.Z)(m().mark((function e(){var n,r,a,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae&&i.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,P.MH)(Number(ae),i.id);case 4:n=e.sent,r=(0,c.Z)(n,2),r[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to delete team member."}):(u(l.filter((function(e){return e.id!==ae}))),o=null===(a=l.find((function(e){return e.id===ae})))||void 0===a?void 0:a.idirEmail,t.show({variant:"success",fadeOut:1e4,closable:!0,content:"".concat(o," has successfully been deleted.")}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,d.Z)(m().mark((function e(n){var r,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,P.rU)(n,i.id);case 4:r=e.sent,a=(0,c.Z)(r,2),a[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to resend invitation."}):t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Sent new invitation for team member ".concat(n.idirEmail)});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fe=function(){var e=(0,d.Z)(m().mark((function e(n,r){var a,o,s,d,h;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.zZ)(i.id,n,{role:r});case 2:if(a=e.sent,o=(0,c.Z)(a,2),s=o[0],!(d=o[1])){e.next=9;break}return console.error(d),e.abrupt("return");case 9:h=l.map((function(e){return e.id===n?s:e})),u(h),t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Member role updated successfully"});case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!i||!N)return null;var pe="admin"===N.role;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(j.H,{defaultActiveKey:"members",children:[(0,M.jsx)(b.Z,{eventKey:"members",title:"Members",children:(0,M.jsxs)(q,{children:[pe?(0,M.jsx)(L,{variant:"plainText",onClick:function(){return window.location.hash=H},children:"+ Add new team members"}):(0,M.jsx)("br",{}),(0,M.jsx)(E.Z,{type:"text",rows:7,ready:!te,style:{marginTop:"20px"},children:(0,M.jsxs)(w.Z,{variant:"medium",readOnly:!0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{className:"min-width-60",children:"Status"}),(0,M.jsx)("th",{className:"min-width-60",children:"Email"}),(0,M.jsxs)("th",{className:"min-width-60",children:["Role\xa0",(0,M.jsx)(F.Z,{title:"",content:'Admin: can manage integrations <span class="strong">and</span> teams. <br> Members: can <span class="strong">only</span> manage integrations.',hide:200})]}),(0,M.jsx)("th",{className:"min-width-60",style:{textAlign:"right"},children:"Actions"})]})}),(0,M.jsx)("tbody",{children:l.map((function(e){var n=pe&&N.id!==e.id;return(0,M.jsxs)("tr",{children:[(0,M.jsx)("td",{className:"min-width-60",children:(0,M.jsx)(V,{pending:e.pending,invitationSendTime:e.createdAt})}),(0,M.jsx)("td",{className:"min-width-60",children:e.idirEmail}),(0,M.jsx)("td",{className:"min-width-60",children:n&&!e.pending?(0,M.jsxs)(Z.ZP,{onChange:function(n){return fe(e.id,n.target.value)},value:e.role,children:[(0,M.jsx)("option",{value:"member",children:"Member"}),(0,M.jsx)("option",{value:"admin",children:"Admin"})]}):(0,z.kC)(e.role)}),(0,M.jsxs)("td",{style:{textAlign:"right"},children:[n&&e.pending&&(0,M.jsx)(J,{icon:R.zBy,size:"lg",onClick:function(){return he(e)},title:"Resend Invitation",style:{marginRight:"6px"}}),n&&(0,M.jsx)(J,{icon:R.$aW,onClick:function(){return function(e){if(e){var n=(0,z.Wv)(l,e);ce(n?"allow":"notAllowed"),oe(e),window.location.hash=W}}(e.id)},size:"lg",title:"Delete User",style:{marginRight:"16px"}})]})]},e.id)}))})]})})]})}),(0,M.jsx)(b.Z,{eventKey:"integrations",title:"Integrations",children:(0,M.jsx)(q,{marginTop:"20px",children:(0,M.jsx)(E.Z,{type:"text",rows:7,ready:!te,style:{marginTop:"20px"},children:(0,M.jsxs)(w.Z,{variant:"medium",readOnly:!0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{className:"min-width-60",children:"Status"}),(0,M.jsx)("th",{className:"min-width-60",children:"Request ID"}),(0,M.jsx)("th",{className:"min-width-60",children:"Project Name"}),(0,M.jsx)("th",{className:"min-width-60",style:{textAlign:"right",paddingRight:"30px"},children:"Actions"})]})}),(0,M.jsx)("tbody",{children:(null===p||void 0===p?void 0:p.length)>0?null===p||void 0===p?void 0:p.map((function(e){return(0,M.jsxs)("tr",{children:[(0,M.jsx)("td",{className:"min-width-60",children:(0,M.jsx)(Q,{status:null===e||void 0===e?void 0:e.status})}),(0,M.jsx)("td",{className:"min-width-60",children:e.id}),(0,M.jsx)("td",{className:"min-width-60",children:e.projectName}),(0,M.jsx)("td",{className:"min-width-60",style:{float:"right",marginTop:"20px"},children:(0,M.jsx)(A.ZP,{request:e,onDelete:function(){a(),de(null===i||void 0===i?void 0:i.id)},children:(0,M.jsx)(A.Kk,{icon:R.Mdf,onClick:function(){return n=e.id,void o.push({pathname:"/my-dashboard/integrations",query:{integr:n}});var n},size:"lg"})})})]},e.id)})):(0,M.jsx)("tr",{children:(0,M.jsxs)(B,{colSpan:5,children:[(0,M.jsx)("br",{}),"There are no integrations for this team yet.",(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),"To add this team to an ",(0,M.jsx)("span",{className:"strong",children:"existing integration"}),":",(0,M.jsx)("span",{className:"line-height-200"}),(0,M.jsxs)("ol",{children:[(0,M.jsxs)("li",{children:["Go to your"," ",(0,M.jsx)("span",{className:"text-blue",children:(0,M.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,M.jsx)("li",{children:'Select the "pencil" icon to edit the integration'}),(0,M.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]}),(0,M.jsx)("br",{}),"To add this team to a ",(0,M.jsx)("span",{className:"strong",children:"new integration"}),":",(0,M.jsx)("span",{className:"line-height-200"}),(0,M.jsxs)("ol",{children:[(0,M.jsxs)("li",{children:["Go to your"," ",(0,M.jsx)("span",{className:"text-blue",children:(0,M.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,M.jsx)("li",{children:'Select "+ Request SSO Integration"'}),(0,M.jsx)("li",{children:'Select "Yes" to allow multiple team members to manage the integration'}),(0,M.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]})]})})})]})})})})]}),(0,M.jsx)(k.Z,{title:"Add a New Team Member",icon:null,id:H,content:(0,M.jsx)(C.Z,{members:G,setMembers:K,allowDelete:pe,errors:_,currentUser:r}),onConfirm:ue,skipCloseOnConfirm:!0,buttonStyle:"custom",closable:!0}),(0,M.jsx)($,{onConfirmDelete:me,type:le})]})})),te=t(96486),re=t(39772),ie=t(11915),ae=t(56839),oe=t(36575),se=g.default.div(ee||(ee=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"])));function le(e){var n=e.onSubmit,t=e.teamId,r=e.initialTeamName,i=(0,h.useState)(""),a=i[0],o=i[1],s=(0,h.useState)(!1),l=s[0],u=s[1],f=(0,h.useState)(),p=f[0],x=f[1];(0,h.useEffect)((function(){o(r)}),[r]);var v=function(e){var n={members:[]},t=!1;return e.name.trim()||(n.name="Please enter a name",t=!0),t?n:(x(void 0),null)},g=function(){var e=(0,d.Z)(m().mark((function e(){var r,i,o,s,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={name:a.trim(),id:t},!(i=v(r))){e.next=4;break}return e.abrupt("return",x(i));case 4:return u(!0),e.next=7,(0,P.w2)(r);case 7:return o=e.sent,s=(0,c.Z)(o,2),(l=s[1])&&console.error(l),e.next=13,n();case 13:u(!1),window.location.hash="#";case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,M.jsxs)("div",{children:[(0,M.jsx)(ie.ZP,{label:"New Team Name",onChange:function(e){o(e.target.value)},value:a}),p&&p.name&&(0,M.jsx)(oe.Z,{children:null===p||void 0===p?void 0:p.name}),(0,M.jsx)("br",{}),(0,M.jsxs)(se,{children:[(0,M.jsx)(y.zx,{variant:"secondary",onClick:function(){o(r),window.location.hash="#"},style:{marginRight:"20px"},children:"Cancel"}),(0,M.jsx)(y.zx,{type:"button",onClick:g,children:l?(0,M.jsx)(ae.rj,{color:"#FFF",height:18,width:50,visible:l}):"Save"})]})]})}var ce,de,ue,me,he=t(90352),fe=t(31637),pe="delete-team-modal",xe="edit-team-name-modal",ve=g.default.th(ce||(ce=(0,x.Z)(["\n  text-align: right;\n  min-width: 100px;\n"]))),ge=g.default.div(de||(de=(0,x.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]))),be=g.default.div(ue||(ue=(0,x.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]))),je=(0,g.default)(y.zx)(me||(me=(0,x.Z)(["\n  &&& {\n    margin: 0;\n  }\n"]))),we=(0,M.jsxs)(ge,{children:[(0,M.jsx)(D.G,{icon:R.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),ye=function(e){var n=e.message;return(0,M.jsxs)(be,{children:[(0,M.jsx)(D.G,{icon:R.sqG,title:"Information"}),"\xa0 ",n]})},Ze=function(e){var n=e.handleNewTeamClick;return(0,M.jsx)(je,{size:"large",onClick:n,variant:"callout",children:"+ Create a new Team"})};function ke(e){var n=e.currentUser,t=e.setTeam,r=e.loading,i=e.teams,a=e.loadTeams,o=e.state,s=(e.dispatch,(0,h.useState)(null)),l=s[0],c=s[1],u=(0,h.useState)(void 0),f=u[0],p=u[1],x=o.downloadError,v=l&&0===Number(l.integrationCount),g=function(e){c(e),p(null===e||void 0===e?void 0:e.id),t(e)};(0,h.useEffect)((function(){(null===i||void 0===i?void 0:i.length)>0?f&&i.find((function(e){return e.id===f}))||g(i[0]):g(null)}),[i]);var b=function(){var e=(0,d.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.location.hash=he.zw);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=x?we:i&&0!==(null===i||void 0===i?void 0:i.length)?(0,M.jsxs)(w.Z,{children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{children:"Team Name"}),(0,M.jsx)(ve,{children:"Actions"})]})}),(0,M.jsx)("tbody",{children:i&&i.map((function(e){var n=0===Number(e.integrationCount);return(0,M.jsxs)("tr",{className:f===e.id?"active":"",onClick:function(){return g(e)},children:[(0,M.jsx)("td",{children:e.name}),(0,M.jsx)("td",{style:{float:"right",marginTop:"20px"},children:(0,M.jsxs)(A.c4,{children:[(0,M.jsx)(A.Kk,{icon:R.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg",onClick:function(){return function(e){g(e),window.location.hash=xe}(e)}}),(0,M.jsx)(A.Kk,{disabled:!n,icon:R.$aW,role:"button","aria-label":"delete",title:"Delete",size:"lg",onClick:function(){return n?function(e){g(e),window.location.hash=pe}(e):te.noop},style:{marginRight:"2px",marginLeft:"6px"}})]})})]},e.id)}))})]}):(0,M.jsx)(ye,{message:"You have not been added to any teams yet."}),y=function(){var e=(0,d.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,P.fC)(f);case 4:return e.next=6,a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?(0,M.jsx)(fe.Z,{}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("br",{}),(0,M.jsx)(Ze,{handleNewTeamClick:b}),(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),j,(0,M.jsx)(k.Z,{title:"Create a new team",icon:null,onConfirm:function(){return console.log("confirm")},id:he.zw,content:(0,M.jsx)(re.Z,{onSubmit:a,currentUser:n}),showCancel:!1,showConfirm:!1,closable:!0}),(0,M.jsx)(k.Z,{title:"Edit Team Name",icon:null,onConfirm:function(){return console.log("confirm")},id:xe,content:(0,M.jsx)(le,{onSubmit:a,teamId:f,initialTeamName:(null===l||void 0===l?void 0:l.name)||""}),showCancel:!1,showConfirm:!1,closable:!0}),(0,M.jsx)(k.Z,{title:"Delete team",icon:null,onConfirm:y,id:pe,content:(0,M.jsx)(K,{title:"Are you sure that you want to delete this team?",content:v?"Once you delete this team, this action cannot be undone.":"Before you delete this team, you will need to delete the integration(s) the team is responsible for."}),buttonStyle:v?"danger":"custom",confirmText:v?"Delete Team":"Okay",closable:!0})]})}var Ce=function(e){var n=e.session,t=(0,h.useState)(!0),r=t[0],i=t[1],a=(0,h.useState)(null),o=a[0],s=a[1],l=(0,h.useState)([]),u=l[0],p=l[1],x=function(){var e=(0,d.Z)(m().mark((function e(){var n,t,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,(0,P.Dc)();case 3:n=e.sent,t=(0,c.Z)(n,2),r=t[0],t[1],r&&p(r||[]),i(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){x()}),[]),(0,M.jsx)(f.Z,{tab:"teams",leftPanel:function(e,t){return(0,M.jsx)(ke,{currentUser:n,setTeam:s,loading:r,teams:u,loadTeams:x,state:e,dispatch:t})},rightPanel:function(e,t){return o&&(0,M.jsx)(ne,{team:o,currentUser:n,loadTeams:x,state:e,dispatch:t})}})}},60377:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var r=t(59499);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o={};n.Z=function(e,n){switch(n.type){case"setPanelTab":return a(a({},e),{},{panelTab:n.payload});case"setDownloadError":return a(a({},e),{},{downloadError:n.payload});default:return e}}},69137:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/teams",function(){return t(61401)}])}},function(e){e.O(0,[163,960,202,774,888,179],(function(){return n=69137,e(e.s=n);var n}));var n=e.O();_N_E=n}]);