(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{71431:function(e,t,n){var r=1/0,i=0/0,a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,o="\ud800-\udfff",c="\\u0300-\\u036f\\ufe20-\\ufe23",d="\\u20d0-\\u20f0",p="\\ufe0e\\ufe0f",f="["+c+d+"]",v="\ud83c[\udffb-\udfff]",h="[^"+o+"]",x="(?:\ud83c[\udde6-\uddff]){2}",j="[\ud800-\udbff][\udc00-\udfff]",b="\\u200d",g="(?:"+f+"|"+v+")?",m="["+p+"]?",S="(?:"+b+"(?:"+[h,x,j].join("|")+")"+m+g+")*",y=RegExp(v+"(?="+v+")|(?:"+[h+f+"?",f,x,j,"["+o+"]"].join("|")+")"+(m+g+S),"g"),E=RegExp("["+b+o+c+d+p+"]"),w=parseInt,A="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,C="object"==typeof self&&self&&self.Object===Object&&self,R=A||C||Function("return this")();function U(e){return E.test(e)}function P(e){return U(e)?function(e){for(var t=y.lastIndex=0;y.test(e);)t++;return t}(e):null==e?void 0:e.length}var T=Object.prototype.toString,_=R.Symbol,Z=Math.ceil,k=Math.floor,O=_?_.prototype:void 0,I=O?O.toString:void 0;function F(e,t){var n="";if(!e||t<1||t>9007199254740991)return n;do t%2&&(n+=e),(t=k(t/2))&&(e+=e);while(t);return n}function q(e){if("string"==typeof e)return e;if(N(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return"symbol"==typeof e||!!e&&"object"==typeof e&&"[object Symbol]"==T.call(e)}e.exports=function(e,t,n){e=null==(o=e)?"":q(o),p=(d=(c=t)?(c=function(e){if("number"==typeof e)return e;if(N(e))return i;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||u.test(e)?w(e.slice(2),n?2:8):l.test(e)?i:+e}(c))===r||c===-r?(c<0?-1:1)*17976931348623157e292:c==c?c:0:0===c?c:0)%1;var o,c,d,p,f=(t=d==d?p?d-p:d:0)?P(e):0;return t&&f<t?function(e,t){var n,r,i,a=(t=void 0===t?" ":q(t)).length;if(a<2)return a?F(t,e):t;var l=F(t,Z(e/P(t)));return U(t)?(n=U(l)?l.match(y)||[]:l.split(""),r=e,i=n.length,(r=void 0===r?i:r)>=i?n:function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}(n,0,r)).join(""):l.slice(0,e)}(t-f,n)+e:e}},19344:function(e,t,n){"use strict";var r,i,a,l=n(71383),s=n(85444),u=n(77740),o=n(63005),c=n(85893),d=s.default.table(r||(r=(0,l.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=s.default.span(i||(i=(0,l.Z)(["\n  font-weight: 600;\n"]))),f=s.default.ul(a||(a=(0,l.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),v=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n}),((null==t?void 0:t.length)===1||i)&&(0,c.jsx)(p,{children:null==t?void 0:t.map(function(e,n){return(0,c.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)})})]}),!i&&((null==t?void 0:t.length)||0)>1&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:(0,c.jsx)(f,{children:null==t?void 0:t.map(function(e){return(0,c.jsx)("li",{children:e},e)})})})})})]})};t.Z=function(e){var t,n,r,i,a,l=e.children,s=e.request,f=e.teams;if(!s)return null;var h="gold"==("gold"===s.serviceType?"gold":"silver")?s.devIdps:o.GO[s.realm||"onestopauth"],x="saml"!==s.protocol,j="";return s.usesTeam&&(j=(null===(a=(void 0===f?[]:f).find(function(e){return String(e.id)===String(s.teamId)}))||void 0===a?void 0:a.name)||s.team&&s.team.name),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{children:(0,c.jsxs)("tbody",{children:[j?(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Associated Team:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:j})})]}):(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Are you accountable for this project?"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:void 0===(t=s.projectLead)?"":t?"Yes":"No"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Protocol:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:x?"OpenID Connect":"SAML"})})]}),x&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Type:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:s.publicAccess?"Public":"Confidential"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Usecase:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:u.F[s.authType||"browser-login"]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Project Name:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:s.projectName})})]}),s.additionalRoleAttribute&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Additional Role Attribute:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:s.additionalRoleAttribute})})]}),(0,c.jsx)(v,{list:h,title:"Identity Providers Required:",inline:!0}),(null===(n=s.environments)||void 0===n?void 0:n.includes("dev"))&&(0,c.jsx)(v,{list:s.devValidRedirectUris,title:"Dev Redirect URIs:"}),(null===(r=s.environments)||void 0===r?void 0:r.includes("test"))&&(0,c.jsx)(v,{list:s.testValidRedirectUris,title:"Test Redirect URIs:"}),(null===(i=s.environments)||void 0===i?void 0:i.includes("prod"))&&(0,c.jsx)(v,{list:s.prodValidRedirectUris,title:"Prod Redirect URIs:"}),l]})})})}},66400:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ev}});var r,i,a,l,s,u,o,c=n(16835),d=n(50029),p=n(71383),f=n(87794),v=n.n(f),h=n(67294),x=n(85444),j=n(11163),b=n(71431),g=n.n(b),m=n(20070),S=n.n(m),y=n(59417),E=n(96807),w=n(37226),A=n(76691),C=n(61165),R=n(63055),U=n(31513),P=n(85330),T=n(99154),_=n(19344),Z=n(4826),k=n(35611),O=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],I=n(85893),F=(0,x.default)(k.default)(r||(r=(0,p.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"]))),q=function(e){var t,n=e.request,r=e.onUpdate,i=(0,h.useState)(n.status),a=i[0],l=i[1],s="edit-metadata",u=(t=(0,d.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.Uw)({id:n.id,status:a});case 2:if(!r){e.next=5;break}return e.next=5,r();case 5:window.location.hash="#";case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){l(n.status)},[n.id]);var o=(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(F,{label:"Integration Status",onChange:function(e){l(e.target.value)},value:a,children:O.map(function(e){return(0,I.jsx)("option",{value:e.value,children:e.label},e.value)})})});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Z.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=s},children:"Edit Metadata"}),(0,I.jsx)(C.Z,{id:s,content:o,onConfirm:u,icon:y.UJf,title:"Edit Metadata",closable:!0})]})},D=x.default.div(i||(i=(0,p.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function N(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,I.jsxs)(D,{children:[(0,I.jsx)("br",{}),(0,I.jsxs)(_.Z,{request:n,children:[(0,I.jsx)("br",{}),t.isAdmin&&(0,I.jsx)(q,{request:n,onUpdate:r})]})]}):null}var L=n(56839),K=n(70300),Q=n(76944),M=n(83333),B=x.default.div(a||(a=(0,p.Z)(["\n  text-align: center;\n"]))),G=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function z(e){var t,n=e.requestId,r=(0,h.useState)("all"),i=r[0],a=r[1],l=(0,h.useState)([]),s=l[0],u=l[1],o=(0,h.useState)(!1),p=o[0],f=o[1],x=(0,h.useState)(!1),j=x[0],b=x[1],g=(t=(0,d.Z)(v().mark(function e(){var t,r,a;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,Q.v)({requestId:n,eventCode:i});case 5:t=e.sent,a=(r=(0,c.Z)(t,2))[0],r[1]?b(!0):a&&u(a.rows),f(!1);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return((0,h.useEffect)(function(){g()},[n,i]),j)?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(K.Z,{children:[(0,I.jsx)("br",{}),(0,I.jsx)(k.default,{style:{display:"inline-block",width:"250px"},value:i,onChange:function(e){a(e.target.value)},children:(0,I.jsx)(I.Fragment,{children:G.map(function(e){return(0,I.jsx)("option",{value:e.value,children:e.text},e.value)})})})]}),p?(0,I.jsx)(B,{children:(0,I.jsx)(L.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:p})}):(0,I.jsx)(M.Z,{events:s})]})}var $=n(59499),V=n(12059);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(t){(0,$.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var H=x.default.div(l||(l=(0,p.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),J=function(e){var t,n,r=e.integration,i=e.type,a=e.canApproveProd,l=e.awaitingTFComplete,s=e.onApproved;if(!r)return null;var u=S()(i),o="".concat(i,"-approval-modal"),p="bceid"===i?(0,U.he)(r):(0,U.R5)(r);n=a?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("p",{children:"To begin the ".concat(u," integration in production, Click Below.")}),(0,I.jsx)(Z.default,{onClick:function(){return window.location.hash=o},disabled:l,children:"Approve Prod"})]}):l&&p?(0,I.jsx)(V.Z,{integration:r,title:"The terraform script will take approximately 20 minutes to complete."}):(0,I.jsx)("p",{children:"This integration has already been approved."});var f=(t=(0,d.Z)(v().mark(function e(){var t,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.WN)(Y(Y({},r),{},(0,$.Z)({},"".concat(i,"Approved"),!0)),!0);case 2:t=e.sent,n=(0,c.Z)(t,2)[1],s&&!n&&s();case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(H,{children:[(0,I.jsx)("br",{}),n]}),(0,I.jsx)(C.Z,{id:o,content:"Are you sure you want to approve this integration for ".concat(u," production?"),onConfirm:f,icon:y.eHv,title:"".concat(u," Approve")})]})},X=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bceidApproved;return(0,I.jsx)(J,{type:"bceid",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},ee=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.githubApproved;return(0,I.jsx)(J,{type:"github",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},et=x.default.div(s||(s=(0,p.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),en=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,l=e.activeKey;if(!n)return null;var s=n.environments,u=(void 0===s?[]:s).includes("prod"),o=(0,T.Jx)(n),c=(0,T.dV)(n);return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(P.mQ,{activeKey:void 0===l?r:l,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,I.jsx)(P.OK,{tab:"Details",children:(0,I.jsx)(et,{children:(0,I.jsx)(N,{currentUser:t,request:n,onUpdate:a})})},"details"),o&&u&&(0,I.jsx)(P.OK,{tab:"BCeID Prod",children:(0,I.jsx)(X,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),c&&u&&(0,I.jsx)(P.OK,{tab:"GitHub Prod",children:(0,I.jsx)(ee,{integration:n,onApproved:function(){return a()}})},"github-prod"),(0,I.jsx)(P.OK,{tab:"Events",children:(0,I.jsx)(et,{children:(0,I.jsx)(z,{requestId:n.id})})},"events")]})})},er=n(46312),ei=n(59912),ea=n(49910),el=x.default.div(u||(u=(0,p.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),es=function(e){var t=e.leftPanel,n=e.rightPanel,r=e.showResizable;return e.children,(0,I.jsxs)(ei.Z,{rules:ea.F,children:[void 0===r||r?(0,I.jsx)(er.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.45*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,I.jsx)(el,{children:t&&t()})}):t&&t(),(0,I.jsx)("br",{}),n&&n()]})},eu=x.default.div(o||(o=(0,p.Z)(["\n  text-align: center;\n"]))),eo=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],ec=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],ed=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],ep=[{value:"silver",label:"Silver"},{value:"gold",label:"Gold"}],ef=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}];function ev(e){var t,n,r,i,a,l,s,u=e.session,o=(0,j.useRouter)(),p=(0,h.useState)(!1),f=p[0],x=p[1],b=(0,h.useState)(!1),m=b[0],P=b[1],T=(0,h.useState)([]),_=T[0],Z=T[1],k=(0,h.useState)(String((null===(l=o.query)||void 0===l?void 0:l.id)||"")),F=k[0],q=k[1],D=(0,h.useState)(0),N=D[0],L=D[1],K=(0,h.useState)(5),Q=K[0],M=K[1],B=(0,h.useState)(1),G=B[0],z=B[1],$=(0,h.useState)(Number(null===(s=o.query)||void 0===s?void 0:s.id)||void 0),V=$[0],W=$[1],Y=(0,h.useState)([]),H=Y[0],J=Y[1],X=(0,h.useState)([]),ee=X[0],et=X[1],er=(0,h.useState)([]),ei=er[0],ea=er[1],el=(0,h.useState)([]),ev=el[0],eh=el[1],ex=(0,h.useState)([]),ej=ex[0],eb=ex[1],eg=(0,h.useState)("details"),em=eg[0],eS=eg[1],ey=_.find(function(e){return e.id===V}),eE=(t=(0,d.Z)(v().mark(function e(){var t,n,r,i;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,U.UT)(ee,H),r=(n=(0,c.Z)(t,2))[0],i=n[1],e.abrupt("return",(0,w.zD)({searchField:["id","projectName"],searchKey:F,order:[["updatedAt","desc"],["status","desc"]],limit:Q,page:G,status:ei.map(function(e){return e.value}),archiveStatus:ev.map(function(e){return e.value}),realms:r,environments:i,types:ej.map(function(e){return e.value})}));case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),ew=(n=(0,d.Z)(v().mark(function e(){var t,n,r;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,eE();case 3:t=e.sent,r=(n=(0,c.Z)(t,2))[0],n[1]?P(!0):r&&(Z(r.rows),L(r.count)),x(!1);case 9:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});if((0,h.useEffect)(function(){W(void 0),ew()},[F,Q,G,ei,ev,ee,H,ej]),(0,h.useEffect)(function(){var e;return(0,U.rn)(_)&&(e=setTimeout((0,d.Z)(v().mark(function t(){var n,r,i;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,eE();case 2:n=t.sent,i=(r=(0,c.Z)(n,2))[0],r[1]?clearInterval(e):i&&(Z(i.rows),L(i.count));case 7:case"end":return t.stop()}},t)})),5e3)),function(){e&&clearInterval(e)}},[_]),m)return null;var eA=function(e){return["applied"].includes((null==e?void 0:e.status)||"")},eC=function(e){return!["pr","planned","submitted"].includes((null==e?void 0:e.status)||"")},eR=(r=(0,d.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eA(t))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),eU=(i=(0,d.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eC(t))){e.next=2;break}return e.abrupt("return");case 2:W(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),eP=(a=(0,d.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(eC){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.Jl)(V);case 4:return e.next=6,eE();case 6:window.location.hash="#";case 7:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)});return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(es,{leftPanel:function(){return(0,I.jsx)(E.Z,{filters:[{value:H,multiselect:!0,onChange:J,options:ed,label:"Environments"},{value:ee,multiselect:!0,onChange:et,options:eo,label:"IDPs"},{value:ei,multiselect:!0,onChange:ea,options:O,label:"Workflow Status"},{value:ev,multiselect:!0,onChange:eh,options:ec,label:"Archive Status"},{value:ej,multiselect:!0,onChange:eb,options:ep,label:"Service Type"}],headers:[{label:"Request ID"},{label:"Project Name"},{label:"Request Status"},{label:"File Status"},{label:"Service Type"},{label:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pagination:!0,pageLimits:ef,searchKey:F,searchPlaceholder:"Project ID or Name",limit:Q,page:G,rowCount:N,onSearch:function(e){q(e),z(1)},onEnter:function(e){q(e),z(1)},onLimit:function(e){z(1),M(e)},onPrev:z,onNext:z,loading:f,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],children:_.length>0?_.map(function(e){return(0,I.jsxs)("tr",{className:V===e.id?"active":"",onClick:function(){W(e.id),eS("details")},children:[(0,I.jsx)("td",{children:g()(String(e.id),8,"0")}),(0,I.jsx)("td",{children:e.projectName}),(0,I.jsx)("td",{children:S()(e.status)}),(0,I.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,I.jsx)("td",{children:"gold"===e.serviceType?"Gold":"Silver"}),(0,I.jsx)("td",{children:(0,I.jsxs)(A.c4,{children:[(0,I.jsx)(A.Kk,{icon:y.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),W(e.id),eS("events")},title:"Events"}),(0,I.jsx)(A.MO,{}),(0,I.jsx)(A.Kk,{disabled:!eA(e),icon:y.Xcf,role:"button","aria-label":"edit",onClick:function(){return eR(e)},title:"Edit"}),(0,I.jsx)(A.MO,{}),(0,I.jsx)(A.Kk,{icon:y.$aW,role:"button","aria-label":"delete",onClick:function(){return eU(e)},disabled:!eC(e),activeColor:R.Uo,title:"Delete"})]})})]},e.id)}):(0,I.jsx)("tr",{children:(0,I.jsx)("td",{colSpan:10,children:(0,I.jsx)(eu,{children:"No clients found."})})})})},rightPanel:function(){return ey&&(0,I.jsx)(en,{currentUser:u,integration:ey,defaultTabKey:"details",setActiveKey:eS,activeKey:em,setRows:ew})}}),(0,I.jsx)(C.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:eP,confirmText:"Delete",title:"Confirm Deletion"})]})}},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(66400)}])}},function(e){e.O(0,[436,726,659,926,131,774,888,179],function(){return e(e.s=25809)}),_N_E=e.O()}]);