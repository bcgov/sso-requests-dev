(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{19344:function(e,t,n){"use strict";var r,i,a,l=n(71383),s=n(31513),u=n(37797),o=n(85893),c=u.default.table(r||(r=(0,l.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),d=u.default.span(i||(i=(0,l.Z)(["\n  font-weight: 600;\n"]))),v=u.default.ul(a||(a=(0,l.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),p=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:n}),(1===(null===t||void 0===t?void 0:t.length)||i)&&(0,o.jsx)(d,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,o.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)}))})]}),!i&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(d,{children:(0,o.jsx)(v,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})})})})]})},h=function(e){return!!e&&(1!==e.length||""!==e[0])};t.Z=function(e){var t=e.children,n=e.request;if(!n)return null;var r,i="gold"===("gold"===n.serviceType?"gold":"silver")?n.devIdps:(0,s.LF)(null===n||void 0===n?void 0:n.realm);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{children:(0,o.jsxs)("tbody",{children:[(null===n||void 0===n?void 0:n.team)&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Associated Team:"}),(0,o.jsx)("td",{children:(0,o.jsx)(d,{children:n.team.name})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Are you accountable for this project?"}),(0,o.jsx)("td",{children:(0,o.jsx)(d,{children:(r=null===n||void 0===n?void 0:n.projectLead,void 0===r?"":r?"Yes":"No")})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Client Type:"}),(0,o.jsx)("td",{children:(0,o.jsx)(d,{children:null!==n&&void 0!==n&&n.publicAccess?"Public":"Confidential"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"Project Name:"}),(0,o.jsx)("td",{children:(0,o.jsx)(d,{children:null===n||void 0===n?void 0:n.projectName})})]}),(0,o.jsx)(p,{list:i,title:"Identity Providers Required:",inline:!0}),h(null===n||void 0===n?void 0:n.devValidRedirectUris)&&(0,o.jsx)(p,{list:null===n||void 0===n?void 0:n.devValidRedirectUris,title:"Dev Redirect URIs:"}),h(null===n||void 0===n?void 0:n.testValidRedirectUris)&&(0,o.jsx)(p,{list:null===n||void 0===n?void 0:n.testValidRedirectUris,title:"Test Redirect URIs:"}),h(null===n||void 0===n?void 0:n.prodValidRedirectUris)&&(0,o.jsx)(p,{list:null===n||void 0===n?void 0:n.prodValidRedirectUris,title:"Prod Redirect URIs:"}),t]})})})}},66732:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return re}});var r,i=n(16835),a=n(50029),l=n(71383),s=n(87794),u=n.n(s),o=n(67294),c=n(37797),d=n(11163),v=n(96486),p=n(51436),h=n(64735),f=n(59912),x=n(96807),j=n(37226),m=n(76691),b=n(61165),g=n(63055),S=n(31513),E=n(59499),w=n(73192),y=n(73118),U=n(4826),R=n(19344),C=n(35611),P=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],Z=n(85893),T=(0,c.default)(C.ZP)(r||(r=(0,l.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"])));var A,_=function(e){var t=e.request,n=e.onUpdate,r=(0,o.useState)(t.status),i=r[0],l=r[1],s="edit-metadata",c=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Uw)({id:t.id,status:i});case 2:if(!n){e.next=5;break}return e.next=5,n();case 5:window.location.hash="#";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){l(t.status)}),[t.id]);var d=(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(T,{label:"Integration Status",onChange:function(e){l(e.target.value)},value:i,children:P.map((function(e){return(0,Z.jsx)("option",{value:e.value,children:e.label},e.value)}))})});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(U.ZP,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=s},children:"Edit Metadata"}),(0,Z.jsx)(b.Z,{id:s,content:d,onConfirm:c,icon:p.UJf,title:"Edit Metadata",closable:!0})]})},k=c.default.div(A||(A=(0,l.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function q(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,Z.jsxs)(k,{children:[(0,Z.jsx)("br",{}),(0,Z.jsxs)(R.Z,{request:n,hasBceid:!1,children:[(0,Z.jsx)("br",{}),t.isAdmin&&(0,Z.jsx)(_,{request:n,onUpdate:r})]})]}):null}var I,D=n(56839),F=n(70300),O=n(76944),L=n(83333),N=c.default.div(I||(I=(0,l.Z)(["\n  text-align: center;\n"]))),K=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function Q(e){var t=e.requestId,n=(0,o.useState)("all"),r=n[0],l=n[1],s=(0,o.useState)([]),c=s[0],d=s[1],v=(0,o.useState)(!1),p=v[0],h=v[1],f=(0,o.useState)(!1),x=f[0],j=f[1],m=function(){var e=(0,a.Z)(u().mark((function e(){var n,a,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,(0,O.v)({requestId:t,eventCode:r});case 5:n=e.sent,a=(0,i.Z)(n,2),l=a[0],a[1]?j(!0):l&&d(l.rows),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){m()}),[t,r]);var b;return x?null:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(F.Z,{children:[(0,Z.jsx)("br",{}),(0,Z.jsx)(C.ZP,{style:{display:"inline-block",width:"250px"},value:r,onChange:function(e){l(e.target.value)},children:(b=K,(0,Z.jsx)(Z.Fragment,{children:b.map((function(e){return(0,Z.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),p?(0,Z.jsx)(N,{children:(0,Z.jsx)(D.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:p})}):(0,Z.jsx)(L.Z,{events:c})]})}var M,V=n(332);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=c.default.div(M||(M=(0,l.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));var Y,J=function(e){var t=e.currentUser,n=e.selectedRequest,r=e.defaultTabKey,l=e.setActiveKey,s=e.setRows,o=e.activeKey,c=void 0===o?r:o;if(!n)return null;var d,v=n.environments,h=void 0===v?[]:v,f=n.status,x=n.bceidApproved,m=(0,S.Jx)(n),g=m&&h.includes("prod"),E=g&&"applied"!==f&&x,R="bceid-approval-modal";d=g&&"applied"===f&&!x?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("p",{children:"To begin the BCeID integration in production, Click Below."}),(0,Z.jsx)(U.ZP,{onClick:function(){return window.location.hash=R},children:"Approve Production"})]}):E?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(V.Z,{selectedRequest:n,title:"The terraform script will take approximately 20 minutes to complete."})}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("p",{children:["This request is ",x?"already approved.":"not ready to approve production."]})});var C=function(){var e=(0,a.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.WN)(B(B({},n),{},{bceidApproved:!0}),!0);case 2:t=e.sent,r=(0,i.Z)(t,2),r[1]||s();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(y.H,{activeKey:c,onSelect:function(e){return l(e)},children:[(0,Z.jsx)(w.Z,{eventKey:"details",title:"Details",children:(0,Z.jsx)(W,{children:(0,Z.jsx)(q,{currentUser:t,request:n,onUpdate:s})})}),m&&(0,Z.jsx)(w.Z,{eventKey:"prod-configuration",title:"Prod Configuration",children:(0,Z.jsxs)(W,{children:[(0,Z.jsx)("br",{}),d]})}),(0,Z.jsx)(w.Z,{eventKey:"events",title:"Events",children:(0,Z.jsx)(W,{children:(0,Z.jsx)(Q,{requestId:n.id})})})]}),(0,Z.jsx)(b.Z,{id:R,content:"Are you sure you want to approve this integration for production?",onConfirm:C,icon:p.eHv,title:"Approve Production"})]})},X=c.default.div(Y||(Y=(0,l.Z)(["\n  text-align: center;\n"]))),G=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],H=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],$=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],ee=[{value:"silver",label:"Silver"},{value:"gold",label:"Gold"}],te=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],ne=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function re(e){var t,n,r=e.session,l=(0,d.useRouter)(),s=(0,o.useState)(!1),c=s[0],E=s[1],w=(0,o.useState)(!1),y=w[0],U=w[1],R=(0,o.useState)([]),C=R[0],T=R[1],A=(0,o.useState)(String((null===(t=l.query)||void 0===t?void 0:t.id)||"")),_=A[0],k=A[1],q=(0,o.useState)(0),I=q[0],D=q[1],F=(0,o.useState)(5),O=F[0],L=F[1],N=(0,o.useState)(1),K=N[0],Q=N[1],M=(0,o.useState)(Number(null===(n=l.query)||void 0===n?void 0:n.id)||void 0),V=M[0],z=M[1],B=(0,o.useState)([]),W=B[0],Y=B[1],re=(0,o.useState)([]),ie=re[0],ae=re[1],le=(0,o.useState)([]),se=le[0],ue=le[1],oe=(0,o.useState)([]),ce=oe[0],de=oe[1],ve=(0,o.useState)([]),pe=ve[0],he=ve[1],fe=(0,o.useState)("details"),xe=fe[0],je=fe[1],me=C.find((function(e){return e.id===V})),be=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,S.UT)(ie,W),n=(0,i.Z)(t,2),r=n[0],a=n[1],e.abrupt("return",(0,j.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:O,page:K,status:se.map((function(e){return e.value})),archiveStatus:ce.map((function(e){return e.value})),realms:r,environments:a,types:pe.map((function(e){return e.value}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,be();case 3:t=e.sent,n=(0,i.Z)(t,2),r=n[0],n[1]?U(!0):r&&(T(r.rows),D(r.count)),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,o.useEffect)((function(){z(void 0),ge()}),[_,O,K,se,ce,ie,W,pe]),(0,o.useEffect)((function(){var e;return(0,S.rn)(C)&&(e=setTimeout((0,a.Z)(u().mark((function t(){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be();case 2:n=t.sent,r=(0,i.Z)(n,2),a=r[0],r[1]?clearInterval(e):a&&(T(a.rows),D(a.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[C]),y)return null;var Se=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},Ee=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},we=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Se(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,l.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Ee(t)){e.next=2;break}return e.abrupt("return");case 2:z(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ee){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,j.Jl)(V);case 4:return e.next=6,be();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(f.Z,{rules:ne,children:[(0,Z.jsx)(h.ZP,{cols:10,children:(0,Z.jsxs)(h.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,Z.jsx)(h.ZP.Col,{span:6,children:(0,Z.jsx)(x.Z,{filters:[{value:W,multiselect:!0,onChange:Y,options:$,label:"Environments"},{value:ie,multiselect:!0,onChange:ae,options:G,label:"IDPs"},{value:se,multiselect:!0,onChange:ue,options:P,label:"Workflow Status"},{value:ce,multiselect:!0,onChange:de,options:H,label:"Archive Status"},{value:pe,multiselect:!0,onChange:he,options:ee,label:"Service Type"}],headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Service Type"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pageLimits:te,searchKey:_,searchPlaceholder:"Project ID or Name",limit:O,page:K,rowCount:I,onSearch:function(e){k(e),Q(1)},onEnter:function(e){k(e),Q(1)},onLimit:function(e){Q(1),L(e)},onPrev:Q,onNext:Q,loading:c,children:C.length>0?C.map((function(e){return(0,Z.jsxs)("tr",{className:V===e.id?"active":"",onClick:function(){z(e.id),je("details")},children:[(0,Z.jsx)("td",{children:(0,v.padStart)(String(e.id),8,"0")}),(0,Z.jsx)("td",{children:e.projectName}),(0,Z.jsx)("td",{children:(0,v.startCase)(e.status)}),(0,Z.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,Z.jsx)("td",{children:"gold"===e.serviceType?"Gold":"Silver"}),(0,Z.jsx)("td",{children:(0,Z.jsxs)(m.c4,{children:[(0,Z.jsx)(m.Kk,{icon:p.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),z(e.id),je("events")},title:"Events"}),(0,Z.jsx)(m.MO,{}),(0,Z.jsx)(m.Kk,{disabled:!Se(e),icon:p.Xcf,role:"button","aria-label":"edit",onClick:function(){return we(e)},title:"Edit"}),(0,Z.jsx)(m.MO,{}),(0,Z.jsx)(m.Kk,{icon:p.$aW,role:"button","aria-label":"delete",onClick:function(){return ye(e)},disabled:!Ee(e),activeColor:g.Uo,title:"Delete"})]})})]},e.id)})):(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:10,children:(0,Z.jsx)(X,{children:"No clients found."})})})})}),(0,Z.jsx)(h.ZP.Col,{span:4,children:me&&(0,Z.jsx)(J,{currentUser:r,selectedRequest:me,defaultTabKey:"details",setActiveKey:je,activeKey:xe,setRows:ge})})]})}),(0,Z.jsx)(b.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:Ue,confirmText:"Delete",title:"Confirm Deletion"})]})}},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(66732)}])}},function(e){e.O(0,[163,181,665,774,888,179],(function(){return t=25809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);