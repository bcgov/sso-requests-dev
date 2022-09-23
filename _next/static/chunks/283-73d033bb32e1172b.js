"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{76935:function(n,e,r){var t,a=r(71383),u=r(85444).default.span(t||(t=(0,a.Z)(["\n  color: #dc3545;\n  margin: 0;\n  padding: 0;\n"])));e.Z=u},8813:function(n,e,r){var t,a=r(16835),u=r(50029),c=r(71383),s=r(87794),i=r.n(s),o=r(67294),l=r(11915),p=r(85444),f=r(85330),d=r(11693),v=r(56839),h=r(7541),m=r(76935),b=r(80419),x=r(77945),w=r(85893),g=p.default.div(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  & button {\n    min-width: 180px;\n  }\n"]))),j={idirEmail:"",role:"member",id:(new Date).getTime()};e.Z=(0,h.hU)((function(n){var e=n.onSubmit,r=n.alert,t=((0,o.useContext)(x.SessionContext)||{}).session,c=(0,o.useState)([j]),s=c[0],p=c[1],h=(0,o.useState)(""),y=h[0],Z=h[1],k=(0,o.useState)(!1),z=k[0],O=k[1],C=(0,o.useState)(),P=C[0],T=C[1],E=function(){var n=(0,u.Z)(i().mark((function n(){var t,u,c,o,l,f,v,h,m;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t={name:y,members:s},u=(0,b.p)(t),c=(0,a.Z)(u,2),o=c[0],l=c[1],!o){n.next=4;break}return n.abrupt("return",T(l));case 4:return O(!0),n.next=7,(0,d.Cm)(t);case 7:if(f=n.sent,v=(0,a.Z)(f,2),h=v[0],(m=v[1])?r.show({variant:"danger",fadeOut:1e4,closable:!0,content:m}):r.show({variant:"success",fadeOut:1e4,closable:!0,content:"Team ".concat(y," successfully created")}),!h){n.next=15;break}return n.next=15,e(h.id);case 15:p([j]),Z(""),O(!1),window.location.hash="#";case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,w.jsxs)("div",{children:[(0,w.jsx)(l.ZP,{label:"Team Name",onChange:function(n){Z(n.target.value)},value:y}),P&&P.name&&(0,w.jsx)(m.Z,{children:null===P||void 0===P?void 0:P.name}),(0,w.jsx)("br",{}),(0,w.jsx)("strong",{children:"Team Members"}),(0,w.jsx)(b.Z,{errors:P,members:s,setMembers:p,currentUser:t}),(0,w.jsxs)(g,{children:[(0,w.jsx)(f.zx,{variant:"secondary",onClick:function(){window.location.hash="#"},children:"Cancel"}),(0,w.jsx)(f.zx,{type:"button",onClick:E,children:z?(0,w.jsx)(v.rj,{color:"#FFF",height:18,width:50,visible:z}):"Send Invitation"})]})]})}))},80419:function(n,e,r){r.d(e,{p:function(){return B}});var t,a,u,c,s,i,o,l,p,f,d=r(59499),v=r(27812),h=r(71383),m=(r(67294),r(11915)),b=r(35611),x=r(85444),w=r(48966),g=r.n(w),j=r(99603),y=r(59417),Z=r(76935),k=r(74150),z=r(85893);function O(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function C(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){(0,d.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var P=x.default.div(t||(t=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: end;\n  margin-bottom: 10px;\n  grid-gap: 0 1em;\n"]))),T=(0,x.default)(b.ZP)(a||(a=(0,h.Z)(["\n  & .pg-select-wrapper {\n    height: 44px;\n    ","\n  }\n"])),(function(n){return n.readOnlyRole?"padding-left:6px;":""})),E=x.default.div(u||(u=(0,h.Z)(["\n  border-bottom: 1px solid black;\n  grid-column: 1 / 3;\n"]))),A=x.default.span(c||(c=(0,h.Z)(["\n  margin: 10px 0;\n  cursor: pointer;\n  & span {\n    margin-left: 5px;\n  }\n"]))),S=x.default.section(s||(s=(0,h.Z)(["\n  max-height: 50vh;\n  overflow-y: scroll;\n"]))),U=(0,x.default)(P)(i||(i=(0,h.Z)(["\n  grid-template-columns: 2.2fr 0.9fr 1.2fr;\n  align-items: start;\n  margin-bottom: 20px;\n"]))),N=(0,x.default)(j.G)(o||(o=(0,h.Z)(["\n  align-self: center;\n  color: red;\n  cursor: pointer;\n"]))),D=(0,x.default)(j.G)(l||(l=(0,h.Z)(["\n  padding: 3px;\n  border-radius: 25px;\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n"]))),M=(0,x.default)(j.G)(p||(p=(0,h.Z)(["\n  padding: 3px;\n  border-radius: 25px;\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n  color: white;\n  background-color: black;\n"]))),q=x.default.p(f||(f=(0,h.Z)(["\n  font-style: italic;\n  font-size: 0.95em;\n"])));var B=function(n){var e={name:null,members:[]};return n.name||(e.name="Please enter a name"),n.members.forEach((function(n,r){n.idirEmail&&g().isEmail(n.idirEmail)||(e.members[r]="Please enter an email")})),[e.name||e.members.length>0,e]};e.Z=function(n){var e=n.errors,r=n.members,t=n.setMembers,a=n.allowDelete,u=void 0===a||a,c=n.currentUser,s=void 0===c?null:c;return(0,z.jsxs)("div",{children:[(0,z.jsxs)("p",{children:["Enter your team member\u2019s government email address and they will be sent an invitation to join the project. Once they accept the invitation, they will have access to your project. Their invitation will expire in"," ",(0,z.jsx)("strong",{children:"2 business days"}),"."]}),(0,z.jsxs)("p",{children:[(0,z.jsx)("span",{className:"strong",children:"Roles:"}),(0,z.jsx)("br",{}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{children:(0,z.jsx)(M,{icon:y.Tab})}),"\xa0\xa0",(0,z.jsx)("span",{className:"underline",style:{verticalAlign:"top"},children:"Admins"}),(0,z.jsxs)("span",{style:{verticalAlign:"top"},children:["\xa0have ",(0,z.jsx)("b",{children:"managing"})," powers"]})]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{children:(0,z.jsx)(D,{icon:y.Tab})}),"\xa0\xa0",(0,z.jsx)("span",{className:"underline",style:{verticalAlign:"top"},children:"Members"}),(0,z.jsxs)("span",{style:{verticalAlign:"top"},children:["\xa0have ",(0,z.jsx)("b",{children:"viewing"})," powers"]})]}),(0,z.jsx)("br",{}),(0,z.jsx)("div",{children:(0,z.jsx)("span",{className:"underline",children:(0,z.jsx)(k.ZP,{external:!0,href:"https://github.com/bcgov/sso-keycloak/wiki/CSS-App-My-Teams",children:"View a detailed breakdown of roles on our wiki page"})})})]}),(0,z.jsxs)(S,{children:[(0,z.jsxs)(P,{children:[(0,z.jsx)("strong",{children:"Member"}),(0,z.jsx)("strong",{children:"Role"}),(0,z.jsx)(E,{})]}),(0,z.jsxs)(q,{children:["*Please enter a"," ",(0,z.jsx)("span",{className:"underline",children:(0,z.jsx)("span",{className:"strong",children:"government email address"})})," ",'ending in "@gov.bc.ca", to allow your user to login']}),s&&(0,z.jsxs)(U,{children:[(0,z.jsx)(m.ZP,{value:(null===s||void 0===s?void 0:s.email)||"",readOnly:!0}),(0,z.jsx)(T,{label:"Role",disabled:!0,value:"admin",readOnlyRole:!0,children:(0,z.jsx)("option",{value:"admin",children:"Admin"})})]}),r.map((function(n,a){return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(U,{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(m.ZP,{placeholder:"Enter email address",onChange:function(n){return function(n,e){var a=C({},r[n]);a.idirEmail=e.target.value;var u=(0,v.Z)(r);u[n]=a,t(u)}(a,n)},value:n.idirEmail}),e&&e.members&&e.members[a]&&(0,z.jsx)(Z.Z,{children:e.members[a]})]}),(0,z.jsxs)(T,{label:"Role",onChange:function(n){return function(n,e){var a=C({},r[n]);a.role=e.target.value;var u=(0,v.Z)(r);u[n]=a,t(u)}(a,n)},value:n.role,children:[(0,z.jsx)("option",{value:"member",children:"Member"}),(0,z.jsx)("option",{value:"admin",children:"Admin"})]}),a>=0&&u&&(0,z.jsx)(N,{icon:y.uMC,onClick:function(){return n=a,void t(r.filter((function(e,r){return r!==n})));var n},title:"Delete"})]},n.id)})})),(0,z.jsxs)(A,{onClick:function(){t([].concat((0,v.Z)(r),[{idirEmail:"",role:"member",id:(new Date).getTime(),pending:!0}]))},children:[(0,z.jsx)(j.G,{style:{color:"#006fc4"},icon:y.KtF,title:"Add Item"}),(0,z.jsx)("span",{children:"Add another team member"})]})]})]})}},89704:function(n,e,r){r.d(e,{A_:function(){return h},H0:function(){return b},Jl:function(){return g},Uw:function(){return j},WN:function(){return w},XJ:function(){return m},hG:function(){return v},zD:function(){return x}});var t=r(50029),a=r(87794),u=r.n(a),c=r(62297),s=r(75316),i=r.n(s),o=r(25751),l=r.n(o),p=r(76427),f=r.n(p),d=r(23761),v=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("requests",e).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,d.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("request",{requestId:l()(e)?parseInt(e):e}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,d.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(u().mark((function n(){var e,r,t,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"active",r={params:{include:e}},n.prev=2,n.next=5,c.e.get("requests",r).then((function(n){return n.data}));case 5:return t=n.sent,t=i()(t,["createdAt"],["desc"]),n.abrupt("return",[t.map(d.UB),null]);case 10:return n.prev=10,n.t0=n.catch(2),n.abrupt("return",(0,c.z)(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("team-integrations/".concat(e)).then((function(n){return n.data}));case 3:return r=n.sent,r=i()(r,["createdAt"],["desc"]),n.abrupt("return",[r.map(d.UB),null]);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("requests-all",e).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[{count:r.count,rows:r.rows.map(d.UB)},null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t,a,s=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],n.prev=1,t="requests",r&&(t="".concat(t,"?submit=true")),(e=f()(e,["user","lastChanges"])).devLoginTitle=e.devLoginTitle||"",e.testLoginTitle=e.testLoginTitle||"",e.prodLoginTitle=e.prodLoginTitle||"",n.next=10,c.e.put(t,e).then((function(n){return n.data}));case 10:return a=n.sent,n.abrupt("return",[(0,d.UB)(a),null]);case 14:return n.prev=14,n.t0=n.catch(1),n.abrupt("return",(0,c.z)(n.t0));case 17:case"end":return n.stop()}}),n,null,[[1,14]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.delete("requests",{params:{id:e}}).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.put("request-metadata",e).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[(0,d.UB)(r),null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},11693:function(n,e,r){r.d(e,{Cm:function(){return o},Dc:function(){return s},Gc:function(){return j},MH:function(){return v},Sx:function(){return x},YY:function(){return f},ZT:function(){return w},fC:function(){return m},l8:function(){return i},rU:function(){return h},rl:function(){return b},vM:function(){return g},w2:function(){return l},yG:function(){return p},yN:function(){return y},zZ:function(){return d}});var t=r(50029),a=r(87794),u=r.n(a),c=r(62297),s=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("teams").then((function(n){return n.data}));case 3:return e=n.sent,n.abrupt("return",[e,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("allowed-teams").then((function(n){return n.data}));case 3:return e=n.sent,n.abrupt("return",[e,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("teams",e).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t,a,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=e.name,t=e.id,a={name:r},n.next=5,c.e.put("teams/".concat(t),a).then((function(n){return n.data}));case 5:return s=n.sent,n.abrupt("return",[s,null]);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=e.id,t=e.members,n.next=4,c.e.post("teams/".concat(r,"/members"),t).then((function(n){return n.data}));case 4:return a=n.sent,n.abrupt("return",[a,null]);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("teams/".concat(e,"/members")).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e,r,t){var a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.put("teams/".concat(e,"/members/").concat(r),t).then((function(n){return n.data}));case 3:return a=n.sent,n.abrupt("return",[a,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.delete("teams/".concat(r,"/members/").concat(e)).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("teams/".concat(r,"/invite"),e).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.delete("teams/".concat(e)).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.post("teams/".concat(e,"/service-accounts")).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("teams/".concat(e,"/service-accounts")).then((function(n){return n.data}));case 3:return r=n.sent,n.abrupt("return",[r,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("teams/".concat(e,"/service-accounts/").concat(r)).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.get("teams/".concat(e,"/service-accounts/").concat(r,"/credentials")).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),j=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.put("teams/".concat(e,"/service-accounts/").concat(r,"/credentials")).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),y=function(){var n=(0,t.Z)(u().mark((function n(e,r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.e.delete("teams/".concat(e,"/service-accounts/").concat(r)).then((function(n){return n.data}));case 3:return t=n.sent,n.abrupt("return",[t,null]);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,c.z)(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()}}]);