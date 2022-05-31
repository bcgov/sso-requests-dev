(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{35611:function(e,n,t){"use strict";n.ZP=void 0;var r=t(96282),a=t(69829),i={shared:{label:"\n      display: block;\n      margin-bottom: 0.2777em;\n    ",wrapper:"\n      position: relative;\n      display: flex;\n      background: #fff;\n      overflow: hidden;\n      border: 2px solid #606060;\n      border-radius: 0;\n      padding: 0.3em 0;\n\n      &:after {\n        content: ' ';\n        background-image: "+(0,a.toSvgUrl)(a.ChevronDown)+";\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: absolute;\n        right: 0.2em;\n        width: 1.2em;\n        height: 100%;\n        text-align: center;\n        cursor: pointer;\n        pointer-events: none;\n        -webkit-transition: .25s all ease;\n        -o-transition: .25s all ease;\n        transition: .25s all ease;\n      }\n\n      &:focus-within  {\n        outline: 4px solid #3B99FC;\n        outline-offset: 1px;\n      }\n\n      &:hover::after {}\n  ",input:"\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      -ms-appearance: none;\n      appearance: none;\n      outline: 0;\n      box-shadow: none;\n      border: 0 !important;\n      background: #fff;\n      background-image: none;\n      display: inline-block;\n      flex: 1;\n      padding: 0 .5em;\n      color: #000;\n      cursor: pointer;\n\n      &::-ms-expand {\n        display: none;\n      }\n    "},size:{small:{container:"\n        font-size: 0.8rem;\n      "},medium:{container:"\n        font-size: 1rem;\n      "},large:{container:"\n        font-size: 1.2rem;\n      "}},rounded:{wrapper:"\n      border-radius: 0.25em;\n    "}};var o=(0,r.applyTheme)(i,{defaultProps:{size:"medium",rounded:!0,required:!1},staticProps:["fullWidth"],includeWrapper:!0});n.ZP=o},96282:function(e,n,t){"use strict";var r=t(95318);Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.applyTheme=void 0;var a=r(t(22122)),i=r(t(19756)),o=r(t(67294)),s=r(t(86010)),c=t(80927),l=function(e,n){var t=(0,c.processStyle)(e),r=(0,c.createStyleBuilder)(t,n),l=n.as||{},u=r(l.container||"div","container"),d=r("label","label"),f=n.includeWrapper?r(l.wrapper||"div","wrapper"):null,m=r("select","input"),p=(0,c.createBootstrap)(t,"select");return function(e){var n=p(e),t=n.id,r=n.name,c=n.label,l=n.ariaLabel,h=n.styleProps,v=n.children,x=n.className,b=n.rest,g=b.style,j=b.labelStyle,w=b.inputStyle,y=b.wrapperStyle,Z=(0,i.default)(b,["style","labelStyle","inputStyle","wrapperStyle"]),k=o.default.createElement(m,(0,a.default)({"aria-label":l},Z,{id:t,name:r,style:w,className:"pg-select-input"}),v);return o.default.createElement(u,(0,a.default)({},h,{style:g,className:(0,s.default)("pg-select",x)}),c&&o.default.createElement(d,(0,a.default)({htmlFor:t},h,{style:j,className:"pg-select-label"}),c),f?o.default.createElement(f,(0,a.default)({},h,{style:y,className:"pg-select-wrapper"}),k):k)}};n.applyTheme=l;var u=l({},{staticProps:["fullWidth"]});n.default=u},61408:function(e,n,t){"use strict";t.d(n,{c4:function(){return b},Kk:function(){return g},MO:function(){return j},ZP:function(){return w}});var r=t(85893),a=t(809),i=t.n(a),o=t(92447),s=t(27261),c=t(11163),l=t(42745),u=t(17625),d=t(51436),f=t(98806),m=t(6645),p=t(30454);function h(){var e=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"]);return h=function(){return e},e}function v(){var e=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"]);return v=function(){return e},e}function x(){var e=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]);return x=function(){return e},e}var b=l.default.div(x()),g=(0,l.default)(u.G)(v(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"color: #CACACA;":"color: black; &:hover { color: ".concat(e.activeColor||"#137ac8","; }")}),(function(e){return e.isUnread?"color: ".concat(p.Uo):""})),j=l.default.div(h());function w(e){var n=e.request,t=e.onDelete,a=e.children,s=(0,c.useRouter)(),l=(n||{}).archived,u=!l&&!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""),h=!l&&["draft","applied"].includes(n.status||""),v="delete-modal-".concat(null===n||void 0===n?void 0:n.id),x=function(){var e=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),h){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,s.push("/request/".concat(n.id,"?status=").concat(n.status));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||"")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,m.Jl)(n.id);case 5:window.location.hash="#",t&&t(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b,{children:[a,(0,r.jsx)(g,{disabled:!h,icon:d.Xcf,role:"button","aria-label":"edit",onClick:x,title:"Edit",size:"lg"}),(0,r.jsx)(g,{icon:d.$aW,role:"button","aria-label":"delete",onClick:function(){n.id&&u&&(window.location.hash=v)},disabled:!u,activeColor:p.Uo,title:"Delete",size:"lg"})]}),(0,r.jsx)(f.Z,{id:v,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:j,title:"Confirm Deletion",confirmText:"Delete"})]})}},20374:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var r=t(27261),a=t(42745),i=t(42881),o=t(30454);function s(){var e=(0,r.Z)(["\n  .nav-link {\n    color: black !important;\n    height: 30px !important;\n    font-size: "," !important;\n    padding-top: 0; !important;\n    border-top: unset !important;\n    border-left: unset !important;\n    border-right: unset !important;\n  }\n  .nav-link.active {\n    background-color: unset !important;\n    border-bottom: 3px solid orange;\n    font-weight: 600;\n  }\n"]);return s=function(){return e},e}var c=(0,a.default)(i.Z)(s(),o.CA)},23451:function(e,n,t){"use strict";var r=t(27261),a=t(42745),i=t(30454);function o(){var e=(0,r.Z)(["\n  width: 100%;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  text-align: left;\n  border-collapse: separate;\n  border-spacing: 0 ","px;\n\n  & thead {\n    font-size: 16px;\n    color: black;\n\n    & th {\n      min-width: ",";\n    }\n  }\n\n  & tbody {\n    font-size: ",";\n    tr {\n      height: ",";\n      background-color: #f8f8f8;\n      ","\n    }\n  }\n\n  td:first-child {\n    padding-left: 1em;\n    text-align: left;\n  }\n\n  & th,\n  & td {\n    border: none;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  & th.w60,\n  & td.w60 {\n    width: 60px;\n  }\n\n  & th.w120,\n  & td.w120 {\n    width: 120px;\n  }\n"]);return o=function(){return e},e}var s=a.default.table(o(),i.gM,(function(e){return"mini"===e.variant?"30px":"140px"}),(function(e){return"mini"===e.variant?"14px":"16px"}),(function(e){return"mini"===e.variant?"".concat(i.ZW,"px"):"".concat(i.eX,"px")}),(function(e){return!e.readOnly&&"\n        &:hover {\n          background-color: ".concat(i.uB,";\n          cursor: pointer;\n        }\n        &.active {\n          background-color: ").concat(i.uB,";\n          font-weight: bold;\n          border: 2px solid #9fadc0 !important;\n        }\n      ")}));n.Z=s},83746:function(e,n,t){"use strict";t.d(n,{FE:function(){return v}});var r=t(85893),a=t(27261),i=t(67294),o=t(11163),s=t(64735),c=t(42745),l=t(56841),u=t(20374),d=t(40602),f=t(83727),m=t(81235);function p(){var e=(0,a.Z)(["\n  padding-top: 2px;\n"]);return p=function(){return e},e}function h(){var e=(0,a.Z)(["\n  overflow: auto;\n"]);return h=function(){return e},e}var v=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],x=c.default.div(h()),b=c.default.div(p()),g=i.createContext({});n.ZP=function(e){var n,t=e.tab,a=e.leftPanel,c=e.rightPanel,p=e.children,h=(0,o.useRouter)(),j=(0,i.useReducer)(f.Z,f.E),w=j[0],y=j[1],Z=(0,i.useContext)(m.SessionContext)||{},k=Z.user,O=Z.enableGold,C=null===k||void 0===k||null===(n=k.integrations)||void 0===n?void 0:n.find((function(e){return"silver"===e.serviceType})),S=(0,i.useMemo)((function(){return{state:w,dispatch:y}}),[w,y]),N=(0,r.jsxs)(u.H,{onSelect:function(e){h.replace("/my-dashboard/".concat(e))},activeKey:t,children:[(0,r.jsx)(l.Z,{eventKey:"integrations",title:"My Projects"}),(0,r.jsx)(l.Z,{eventKey:"teams",title:"My Teams"}),O&&C&&(0,r.jsx)(l.Z,{eventKey:"s2g",title:"*New - Silver to Gold Upgrade"})]});return(0,r.jsx)(d.Z,{rules:v,children:(0,r.jsx)(g.Provider,{value:S,children:p?(0,r.jsxs)(b,{children:[N,p]}):(0,r.jsx)(s.ZP,{cols:10,children:(0,r.jsxs)(s.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,r.jsx)(s.ZP.Col,{span:6,children:(0,r.jsxs)(x,{children:[N,a&&a(w,y)]})}),(0,r.jsx)(s.ZP.Col,{span:4,children:c&&c(w,y)})]})})})})}},70791:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Se}});var r=t(85893),a=t(809),i=t.n(a),o=t(64121),s=t(92447),c=t(67294),l=t(83746),u=t(26265),d=t(27261),f=t(11163),m=t(42745),p=t(56841),h=t(20374),v=t(23451),x=t(85330),b=t(35611),g=t(98806),j=t(89779),w=t(6645),y=t(38073),Z=t(28783),k=t(76457),O=t(17625),C=t(51436),S=t(6434),N=t(61408);function P(){var e=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n"]);return P=function(){return e},e}function T(){var e=(0,d.Z)(["\n  color: #ff0303;\n"]);return T=function(){return e},e}var E=(0,m.default)(O.G)(T()),_=m.default.div(P()),D=function(e){var n=e.title,t=e.content;return(0,r.jsxs)(_,{children:[(0,r.jsx)(E,{icon:C.RLE,size:"3x"}),(0,r.jsxs)("div",{children:[n&&(0,r.jsx)("strong",{children:n}),t&&(0,r.jsx)("p",{children:t})]})]})},R=t(82096),z=t(6180);function A(){var e=(0,d.Z)(["\n  margin-right: 10px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(){var e=(0,d.Z)(["\n  text-align: left !important;\n"]);return U=function(){return e},e}function I(){var e=(0,d.Z)(["\n  border: 3px solid #a6b1c4;\n  padding: 10px;\n"]);return I=function(){return e},e}function F(){var e=(0,d.Z)(["\n  padding: 0 !important;\n  margin: 20px 0 !important;\n"]);return F=function(){return e},e}function B(){var e=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  ","\n"]);return B=function(){return e},e}var G=((0,t(11752).default)()||{}).publicRuntimeConfig,L=(void 0===G?{}:G).enable_gold,q=m.default.div(B(),(function(e){return"\n  margin-top: ".concat(e.marginTop||"0",";\n  margin-bottom: ").concat(e.marginBottom||"0",";\n  margin-left: ").concat(e.marginLeft||"0",";\n  margin-right: ").concat(e.marginRight||"0",";\n  ")})),K=(0,m.default)(x.zx)(F()),W=m.default.div(I()),H=m.default.td(U()),X="add-member-modal",Y="delete-member-modal",$=function(e,n){var t={members:[]};return e.forEach((function(e,n){e.idirEmail||(t.members[n]="Please enter an email")})),0===t.members.length?(n(null),null):(n(t),t)},J={idirEmail:"",role:"member",pending:!0},V=function(e){var n=e.onConfirmDelete,t={confirmText:"Delete",buttonStyle:"danger"},a="",i="";switch(e.type){case"allow":a="Once they are deleted, they will no longer have access to the team's integrations.",i="Are you sure that you want to delete this team member?",t.onConfirm=n;break;case"notAllowed":a="Before you delete the last team admin, you must assign a new admin.",t.confirmText="Okay",t.buttonStyle="custom"}return(0,r.jsx)(g.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Delete Team Member",icon:null,id:Y,content:(0,r.jsx)(D,{content:a,title:i}),closable:!0},t))},Q=(0,m.default)(O.G)(A()),ee=function(e){var n=e.status;if(!n)return null;var t=C.RLE,a="black";return"draft"===n?(t=C.Xcf,a="#1a5a96"):"submitted"===n?(t=C.SZw,a="#fcba19"):["prFailed","applyFailed","planFailed"].includes(n)?(t=C.nYk,a="#ff0303"):"applied"===n&&(a="#2e8540",t=C.f8k),(0,r.jsx)(O.G,{icon:t,title:n,style:{color:a}})},ne=function(e){var n=e.pending,t=e.invitationSendTime;if(!t)return null;var a,i,o,s=(new Date).getTime()-new Date(t).getTime();return n&&s/864e5>2?(a=C.RLE,i="#ff0303",o="Invitation Expired"):n?(a=C.SZw,i="#fcba19",o="Invitation Sent"):(i="#2e8540",a=C.f8k,o="Active Member"),(0,r.jsx)(O.G,{icon:a,title:o,style:{color:i}})};var te=(0,Z.hU)((function(e){var n,t=e.alert,a=e.currentUser,l=e.team,u=e.loadTeams,d=(0,f.useRouter)(),m=(0,c.useState)([]),Z=m[0],O=m[1],P=(0,c.useState)([]),T=P[0],E=P[1],_=(0,c.useState)(null),D=_[0],A=_[1],M=(0,c.useState)(null),U=M[0],I=M[1],F=(0,c.useState)([J]),B=F[0],G=F[1],te=(0,c.useState)(),re=te[0],ae=te[1],ie=(0,c.useState)(!1),oe=ie[0],se=ie[1],ce=(0,c.useState)(),le=ce[0],ue=ce[1],de=(0,c.useState)("allow"),fe=de[0],me=de[1],pe=function(){var e=(0,s.Z)(i().mark((function e(n){var t,r,s,c,l,u,d,f,m,p,h,v,x,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se(!0),e.next=3,Promise.all([(0,y.YY)(n),(0,w.H0)(n),(0,y.ZT)(n)]);case 3:t=e.sent,r=(0,o.Z)(t,3),s=r[0],c=r[1],l=r[2],u=(0,o.Z)(s,2),d=u[0],f=u[1],m=(0,o.Z)(c,2),p=m[0],h=m[1],v=(0,o.Z)(l,2),x=v[0],b=v[1],f||h||b?(O([]),I(null),E([]),A(null)):(O(d),I(d.find((function(e){return e.idirEmail===a.email}))),E(p||[]),A(x)),se(!1);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){pe(l.id)}),[null===l||void 0===l?void 0:l.id]),(0,c.useEffect)((function(){return D&&"submitted"===D.status&&(clearInterval(n),n=setInterval((0,s.Z)(i().mark((function e(){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.ZT)(l.id);case 2:t=e.sent,r=(0,o.Z)(t,2),a=r[0],r[1]?clearInterval(n):A(a);case 7:case"end":return e.stop()}}),e)}))),5e3)),function(){n&&clearInterval(n)}}),[D]);var he=function(){var e=(0,s.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!$(B,ae)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,y.yG)({members:B,id:l.id});case 5:if(n=e.sent,r=(0,o.Z)(n,2),!r[1]){e.next=12;break}t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to add new members. Please ensure the emails you have entered are valid,\n        and reach out to the SSO team if the problem persists"}),e.next=17;break;case 12:return e.next=14,pe(l.id);case 14:G([J]),window.location.hash="",t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Invited new members to your team!"});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=(0,s.Z)(i().mark((function e(){var n,r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le&&l.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.MH)(Number(le),l.id);case 4:n=e.sent,r=(0,o.Z)(n,2),r[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to delete team member."}):(O(Z.filter((function(e){return e.id!==le}))),s=null===(a=Z.find((function(e){return e.id===le})))||void 0===a?void 0:a.idirEmail,t.show({variant:"success",fadeOut:1e4,closable:!0,content:"".concat(s," has successfully been deleted.")}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=(0,s.Z)(i().mark((function e(n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.rU)(n,l.id);case 4:r=e.sent,a=(0,o.Z)(r,2),a[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to resend invitation."}):t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Sent new invitation for team member ".concat(n.idirEmail)});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),be=function(){var e=(0,s.Z)(i().mark((function e(n,r){var a,s,c,u,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.zZ)(l.id,n,{role:r});case 2:if(a=e.sent,s=(0,o.Z)(a,2),c=s[0],!(u=s[1])){e.next=9;break}return console.error(u),e.abrupt("return");case 9:d=Z.map((function(e){return e.id===n?c:e})),O(d),t.show({variant:"success",fadeOut:1e4,closable:!0,content:"Member role updated successfully"});case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!l||!U)return null;var ge="admin"===U.role;return(0,r.jsxs)(W,{children:[(0,r.jsxs)(h.H,{defaultActiveKey:"members",children:[(0,r.jsx)(p.Z,{eventKey:"members",title:"Members",children:(0,r.jsxs)(q,{children:[ge?(0,r.jsx)(K,{variant:"plainText",onClick:function(){return window.location.hash=X},children:"+ Add new team members"}):(0,r.jsx)("br",{}),(0,r.jsx)(k.Z,{type:"text",rows:7,ready:!oe,style:{marginTop:"20px"},children:(0,r.jsxs)(v.Z,{variant:"medium",readOnly:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"w60",children:"Status"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsxs)("th",{className:"w120",children:["Role\xa0",(0,r.jsx)(R.Z,{title:"",content:'Admin: can manage integrations <span class="strong">and</span> teams. <br> Members: can <span class="strong">only</span> manage integrations.',hide:200})]}),(0,r.jsx)("th",{className:"w120",children:"Actions"})]})}),(0,r.jsx)("tbody",{children:Z.map((function(e){var n=ge&&U.id!==e.id;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w60",children:(0,r.jsx)(ne,{pending:e.pending,invitationSendTime:e.createdAt})}),(0,r.jsx)("td",{children:e.idirEmail}),(0,r.jsx)("td",{className:"w120",children:n&&!e.pending?(0,r.jsxs)(b.ZP,{onChange:function(n){return be(e.id,n.target.value)},value:e.role,children:[(0,r.jsx)("option",{value:"member",children:"Member"}),(0,r.jsx)("option",{value:"admin",children:"Admin"})]}):(0,S.kC)(e.role)}),(0,r.jsxs)("td",{className:"w120",children:[n&&e.pending&&(0,r.jsx)(Q,{icon:C.zBy,size:"lg",onClick:function(){return xe(e)},title:"Resend Invitation"}),n&&(0,r.jsx)(Q,{icon:C.$aW,onClick:function(){return function(e){if(e){var n=(0,S.Wv)(Z,e);me(n?"allow":"notAllowed"),ue(e),window.location.hash=Y}}(e.id)},size:"lg",title:"Delete User"})]})]},e.id)}))})]})})]})}),(0,r.jsx)(p.Z,{eventKey:"integrations",title:"Integrations",children:(0,r.jsx)(q,{marginTop:"20px",children:(0,r.jsx)(k.Z,{type:"text",rows:7,ready:!oe,style:{marginTop:"20px"},children:(0,r.jsxs)(v.Z,{variant:"medium",readOnly:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"w60",children:"Status"}),(0,r.jsx)("th",{children:"Request ID"}),(0,r.jsx)("th",{children:"Project Name"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:(null===T||void 0===T?void 0:T.length)>0?null===T||void 0===T?void 0:T.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"w60",children:(0,r.jsx)(ee,{status:null===e||void 0===e?void 0:e.status})}),(0,r.jsx)("td",{children:e.id}),(0,r.jsx)("td",{children:e.projectName}),(0,r.jsx)("td",{children:(0,r.jsx)(N.ZP,{request:e,onDelete:function(){u(),pe(null===l||void 0===l?void 0:l.id)},children:(0,r.jsx)(N.Kk,{icon:C.Mdf,onClick:function(){return n=e.id,void d.push({pathname:"/my-dashboard/integrations",query:{integr:n}});var n},size:"lg"})})})]},e.id)})):(0,r.jsx)("tr",{children:(0,r.jsxs)(H,{colSpan:5,children:[(0,r.jsx)("br",{}),"There are no integrations for this team yet.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"To add this team to an ",(0,r.jsx)("span",{className:"strong",children:"existing integration"}),":",(0,r.jsx)("span",{className:"line-height-200"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Go to your"," ",(0,r.jsx)("span",{className:"text-blue",children:(0,r.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,r.jsx)("li",{children:'Select the "pencil" icon to edit the integration'}),(0,r.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]}),(0,r.jsx)("br",{}),"To add this team to a ",(0,r.jsx)("span",{className:"strong",children:"new integration"}),":",(0,r.jsx)("span",{className:"line-height-200"}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Go to your"," ",(0,r.jsx)("span",{className:"text-blue",children:(0,r.jsx)("span",{className:"strong",children:"Projects"})})," ","tab"]}),(0,r.jsx)("li",{children:'Select "+ Request SSO Integration"'}),(0,r.jsx)("li",{children:'Select "Yes" to allow multiple team members to manage the integration'}),(0,r.jsx)("li",{children:'Select this team from the "Project Team" drop down'})]})]})})})]})})})}),L&&(0,r.jsx)(p.Z,{eventKey:"service-accounts",title:"Service Accounts",children:(0,r.jsx)(q,{marginTop:"20px",children:D?"submitted"===D.status?(0,r.jsx)("span",{children:"The service account is already requested."}):(0,r.jsx)(x.zx,{onClick:(0,s.Z)(i().mark((function e(){var n,t,r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.t)(l.id,D.id);case 2:t=e.sent,r=(0,o.Z)(t,1),a=r[0],s={tokenUrl:"".concat((a=a||{})["auth-server-url"],"/realms/").concat(a.realm,"/protocol/openid-connect/token"),clientId:"".concat(a.resource),clientSecret:"".concat(null===(n=a.credentials)||void 0===n?void 0:n.secret)},(0,z.Di)((0,z.ON)(s),"".concat(D.clientId,".json"));case 8:case"end":return e.stop()}}),e)}))),children:"Download"}):(0,r.jsx)(x.zx,{onClick:(0,s.Z)(i().mark((function e(){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.rl)(l.id);case 2:n=e.sent,r=(0,o.Z)(n,2),a=r[0],r[1]?t.show({variant:"danger",fadeOut:1e4,closable:!0,content:"Failed to request a service account."}):A(a);case 7:case"end":return e.stop()}}),e)}))),children:"Request"})})})]}),(0,r.jsx)(g.Z,{title:"Add a New Team Member",icon:null,id:X,content:(0,r.jsx)(j.Z,{members:B,setMembers:G,allowDelete:!1,errors:re,currentUser:a}),onConfirm:he,skipCloseOnConfirm:!0,buttonStyle:"custom",closable:!0}),(0,r.jsx)(V,{onConfirmDelete:ve,type:fe})]})})),re=t(96486),ae=t(65764),ie=t(11915),oe=t(31607),se=t(10633);function ce(){var e=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"]);return ce=function(){return e},e}var le=m.default.div(ce());function ue(e){var n=e.onSubmit,t=e.teamId,a=e.initialTeamName,l=(0,c.useState)(""),u=l[0],d=l[1],f=(0,c.useState)(!1),m=f[0],p=f[1],h=(0,c.useState)(),v=h[0],b=h[1];(0,c.useEffect)((function(){d(a)}),[a]);var g=function(e){var n={members:[]},t=!1;return e.name.trim()||(n.name="Please enter a name",t=!0),t?n:(b(void 0),null)},j=function(){var e=(0,s.Z)(i().mark((function e(){var r,a,s,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={name:u.trim(),id:t},!(a=g(r))){e.next=4;break}return e.abrupt("return",b(a));case 4:return p(!0),e.next=7,(0,y.w2)(r);case 7:return s=e.sent,c=(0,o.Z)(s,2),(l=c[1])&&console.error(l),e.next=13,n();case 13:p(!1),window.location.hash="#";case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(ie.ZP,{label:"New Team Name",onChange:function(e){d(e.target.value)},value:u}),v&&v.name&&(0,r.jsx)(se.Z,{children:null===v||void 0===v?void 0:v.name}),(0,r.jsx)("br",{}),(0,r.jsxs)(le,{children:[(0,r.jsx)(x.zx,{variant:"secondary",onClick:function(){d(a),window.location.hash="#"},style:{marginRight:"20px"},children:"Cancel"}),(0,r.jsx)(x.zx,{type:"button",onClick:j,children:m?(0,r.jsx)(oe.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:m}):"Save"})]})]})}var de=t(57120),fe=t(98224);function me(){var e=(0,d.Z)(["\n  &&& {\n    margin: 0;\n  }\n"]);return me=function(){return e},e}function pe(){var e=(0,d.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]);return pe=function(){return e},e}function he(){var e=(0,d.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]);return he=function(){return e},e}function ve(){var e=(0,d.Z)(["\n  text-align: center;\n  min-width: 100px;\n"]);return ve=function(){return e},e}var xe="delete-team-modal",be="edit-team-name-modal",ge=m.default.th(ve()),je=m.default.div(he()),we=m.default.div(pe()),ye=(0,m.default)(x.zx)(me()),Ze=(0,r.jsxs)(je,{children:[(0,r.jsx)(O.G,{icon:C.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]}),ke=function(e){var n=e.message;return(0,r.jsxs)(we,{children:[(0,r.jsx)(O.G,{icon:C.sqG,title:"Information"}),"\xa0 ",n]})},Oe=function(e){var n=e.handleNewTeamClick;return(0,r.jsx)(ye,{size:"large",onClick:n,variant:"callout",children:"+ Create a new Team"})};function Ce(e){var n=e.currentUser,t=e.setTeam,a=e.loading,o=e.teams,l=e.loadTeams,u=e.state,d=(e.dispatch,(0,c.useState)(null)),f=d[0],m=d[1],p=(0,c.useState)(void 0),h=p[0],x=p[1],b=u.downloadError,j=f&&0===Number(f.integrationCount),w=function(e){m(e),x(null===e||void 0===e?void 0:e.id),t(e)};(0,c.useEffect)((function(){(null===o||void 0===o?void 0:o.length)>0?h&&o.find((function(e){return e.id===h}))||w(o[0]):w(null)}),[o]);var Z=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.location.hash=de.zw);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=b?Ze:o&&0!==(null===o||void 0===o?void 0:o.length)?(0,r.jsxs)(v.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Team Name"}),(0,r.jsx)(ge,{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:o&&o.map((function(e){var n=0===Number(e.integrationCount);return(0,r.jsxs)("tr",{className:h===e.id?"active":"",onClick:function(){return w(e)},children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:(0,r.jsxs)(N.c4,{children:[(0,r.jsx)(N.Kk,{icon:C.Xcf,role:"button","aria-label":"edit",title:"Edit",size:"lg",onClick:function(){return function(e){w(e),window.location.hash=be}(e)}}),(0,r.jsx)(N.Kk,{disabled:!n,icon:C.$aW,role:"button","aria-label":"delete",title:"Delete",size:"lg",onClick:function(){return n?function(e){w(e),window.location.hash=xe}(e):re.noop}})]})})]},e.id)}))})]}):(0,r.jsx)(ke,{message:"You have not been added to any teams yet."}),O=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,y.fC)(h);case 4:return e.next=6,l();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?(0,r.jsx)(fe.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(Oe,{handleNewTeamClick:Z}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),k,(0,r.jsx)(g.Z,{title:"Create a new team",icon:null,onConfirm:function(){return console.log("confirm")},id:de.zw,content:(0,r.jsx)(ae.Z,{onSubmit:l,currentUser:n}),showCancel:!1,showConfirm:!1,closable:!0}),(0,r.jsx)(g.Z,{title:"Edit Team Name",icon:null,onConfirm:function(){return console.log("confirm")},id:be,content:(0,r.jsx)(ue,{onSubmit:l,teamId:h,initialTeamName:(null===f||void 0===f?void 0:f.name)||""}),showCancel:!1,showConfirm:!1,closable:!0}),(0,r.jsx)(g.Z,{title:"Delete team",icon:null,onConfirm:O,id:xe,content:(0,r.jsx)(D,{title:"Are you sure that you want to delete this team?",content:j?"Once you delete this team, this action cannot be undone.":"Before you delete this team, you will need to delete the integration(s) the team is responsible for."}),buttonStyle:j?"danger":"custom",confirmText:j?"Delete Team":"Okay",closable:!0})]})}var Se=function(e){var n=e.session,t=(0,c.useState)(!0),a=t[0],u=t[1],d=(0,c.useState)(null),f=d[0],m=d[1],p=(0,c.useState)([]),h=p[0],v=p[1],x=function(){var e=(0,s.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,y.Dc)();case 3:n=e.sent,t=(0,o.Z)(n,2),r=t[0],t[1],r&&v(r||[]),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){x()}),[]),(0,r.jsx)(l.ZP,{tab:"teams",leftPanel:function(e,t){return(0,r.jsx)(Ce,{currentUser:n,setTeam:m,loading:a,teams:h,loadTeams:x,state:e,dispatch:t})},rightPanel:function(e,t){return f&&(0,r.jsx)(te,{team:f,currentUser:n,loadTeams:x,state:e,dispatch:t})}})}},83727:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var r=t(26265);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o={};n.Z=function(e,n){switch(n.type){case"setPanelTab":return i(i({},e),{},{panelTab:n.payload});case"setDownloadError":return i(i({},e),{},{downloadError:n.payload});default:return e}}},6180:function(e,n,t){"use strict";t.d(n,{ON:function(){return r},TE:function(){return a},Di:function(){return i}});var r=function(e){return JSON.stringify(e,void 0,2)},a=function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),document.body.removeChild(n),!0}catch(t){return document.body.removeChild(n),!1}},i=function(e,n){var t=window.URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},20417:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-dashboard/teams",function(){return t(70791)}])},59999:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(75093);var a=t(40355);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},41070:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};n.__esModule=!0;var i=t(67294),o=t(65837),s=t(64643);n.default=function(e){var n=e.delay,t=void 0===n?0:n,c=e.type,l=void 0===c?"text":c,u=e.color,d=void 0===u?"#CDCDCD":u,f=e.rows,m=void 0===f?3:f,p=e.ready,h=e.firstLaunchOnly,v=e.children,x=e.className,b=e.showLoadingAnimation,g=e.customPlaceholder,j=a(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),w=i.useState(p),y=w[0],Z=w[1],k=i.useRef(null);return i.useEffect((function(){h||!y||p?p&&(k.current&&window.clearTimeout(k.current),y||Z(!0)):t&&t>0?k.current=window.setTimeout((function(){Z(!1)}),t):Z(!1)}),[h,y,p,t]),i.useEffect((function(){return function(){k.current&&window.clearTimeout(k.current)}}),[]),y?v:function(){var e=b?s.joinClassNames("show-loading-animation",x):x;if(g&&i.isValidElement(g)){var n=s.joinClassNames(g.props.className,e);return i.cloneElement(g,{className:n})}if(g)return g;var t=o[l];return i.createElement(t,r({},j,{color:d,rows:m,className:e}))}()}},76457:function(e,n,t){"use strict";var r=t(41070);n.Z=r.default},41985:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(72075),o=t(91817),s=t(64643),c={display:"flex"};n.default=function(e){var n=e.className,t=e.style,l=e.color,u=e.rows;return a.createElement("div",{className:s.joinClassNames("media-block",n),style:r(r({},c),t)},a.createElement(o.default,{color:l,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),a.createElement(i.default,{color:l,rows:u}))}},38588:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return a.createElement("div",{className:i.joinClassNames("rect-shape",n),style:r(r({},o),t)})}},91817:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.style,o={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return a.createElement("div",{className:i.joinClassNames("round-shape",n),style:r(r({},o),t)})}},72075:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(72992),o=t(64643),s={width:"100%"},c=[97,100,94,90,98,95,98,40];n.default=function(e){var n=e.rows,t=e.lineSpacing,l=e.color,u=e.style,d=e.className,f=e.widths,m=void 0===f?c:f,p=function(e){return{maxHeight:100/(2*n-1)+"%",width:m[(e+m.length)%m.length]+"%"}};return a.createElement("div",{className:o.joinClassNames("text-block",d),style:r(r({},s),u)},Array.apply(null,Array(n)).map((function(e,n){return a.createElement(i.default,{color:l,style:p(n),lineSpacing:0!==n?t:0,key:n})})))}},72992:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};n.__esModule=!0;var a=t(67294),i=t(64643);n.default=function(e){var n=e.className,t=e.maxHeight,o=e.color,s=e.lineSpacing,c=void 0===s?"0.7em":s,l=e.style,u={maxHeight:t,width:"100%",height:"1em",backgroundColor:o,marginTop:c};return a.createElement("div",{className:i.joinClassNames("text-row",n),style:r(r({},u),l)})}},65837:function(e,n,t){"use strict";n.__esModule=!0,n.media=n.text=n.rect=n.round=n.textRow=n.MediaBlock=n.TextBlock=n.RectShape=n.RoundShape=n.TextRow=void 0;var r=t(72992);n.TextRow=r.default;var a=t(91817);n.RoundShape=a.default;var i=t(38588);n.RectShape=i.default;var o=t(72075);n.TextBlock=o.default;var s=t(41985);n.MediaBlock=s.default,n.textRow=r.default,n.round=a.default,n.rect=i.default,n.text=o.default,n.media=s.default},64643:function(e,n){"use strict";n.__esModule=!0,n.joinClassNames=void 0,n.joinClassNames=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return e})).join(" ")}}},function(e){e.O(0,[376,591,774,888,179],(function(){return n=20417,e(e.s=n);var n}));var n=e.O();_N_E=n}]);