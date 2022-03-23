(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{92665:function(e,n,t){"use strict";var r=t(85893),i=t(27261),o=t(6434),a=t(29163);function s(){var e=(0,i.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]);return s=function(){return e},e}function c(){var e=(0,i.Z)(["\n  font-weight: 600;\n"]);return c=function(){return e},e}function l(){var e=(0,i.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]);return l=function(){return e},e}var u=a.default.table(l()),d=a.default.span(c()),h=a.default.ul(s()),f=function(e){var n=e.list,t=e.title,i=e.inline,o=void 0!==i&&i;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),(1===(null===n||void 0===n?void 0:n.length)||o)&&(0,r.jsx)(d,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,r.jsxs)("span",{children:[e,t!==n.length-1&&", "," "]},e)}))})]}),!o&&((null===n||void 0===n?void 0:n.length)||0)>1&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:(0,r.jsx)(h,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})})})})]})},p=function(e){return!!e&&(1!==e.length||""!==e[0])};n.Z=function(e){var n,t=e.children,i=e.request;return i?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{children:(0,r.jsxs)("tbody",{children:[(null===i||void 0===i?void 0:i.team)&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Associated Team:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:i.team.name})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Are you accountable for this project?"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:(n=null===i||void 0===i?void 0:i.projectLead,void 0===n?"":n?"Yes":"No")})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Client Type:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:null!==i&&void 0!==i&&i.publicAccess?"Public":"Confidential"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Project Name:"}),(0,r.jsx)("td",{children:(0,r.jsx)(d,{children:null===i||void 0===i?void 0:i.projectName})})]}),(0,r.jsx)(f,{list:(0,o.LF)(null===i||void 0===i?void 0:i.realm),title:"Identity Providers Required:",inline:!0}),p(null===i||void 0===i?void 0:i.devValidRedirectUris)&&(0,r.jsx)(f,{list:null===i||void 0===i?void 0:i.devValidRedirectUris,title:"Dev Redirect URIs:"}),p(null===i||void 0===i?void 0:i.testValidRedirectUris)&&(0,r.jsx)(f,{list:null===i||void 0===i?void 0:i.testValidRedirectUris,title:"Test Redirect URIs:"}),p(null===i||void 0===i?void 0:i.prodValidRedirectUris)&&(0,r.jsx)(f,{list:null===i||void 0===i?void 0:i.prodValidRedirectUris,title:"Prod Redirect URIs:"}),t]})})}):null}},80721:function(e,n,t){"use strict";var r=t(85893),i=t(27261),o=t(29163),a=t(30454),s=t(74150);function c(){var e=(0,i.Z)(["\n  margin-top: ",";\n"]);return c=function(){return e},e}function l(){var e=(0,i.Z)(["\n  &&& {\n    margin-left: 20px;\n  }\n"]);return l=function(){return e},e}function u(){var e=(0,i.Z)(["\n  & li {\n    margin: 0;\n  }\n"]);return u=function(){return e},e}function d(){var e=(0,i.Z)(["\n  text-transform: uppercase;\n  margin-bottom: 0;\n  font-size: ",";\n"]);return d=function(){return e},e}var h=o.default.h2(d(),a.CA),f=o.default.ul(u()),p=o.default.li(l()),v=o.default.div(c(),a.SI);n.Z=function(){return(0,r.jsxs)(v,{children:[(0,r.jsx)(h,{children:"Requirements"}),(0,r.jsxs)(f,{children:[(0,r.jsx)("li",{children:"Keep your email address active, and if you are not using your integration, clean it up"}),(0,r.jsxs)("li",{children:["If you are not using your client app configuration"," ",(0,r.jsx)(s.ZP,{external:!0,href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"ask us"})," ","for help"]})]}),(0,r.jsx)(h,{children:"We're a Community"}),(0,r.jsxs)(f,{children:[(0,r.jsxs)("li",{children:["As part of a community, we can solve things together and quickly. Please join the"," ",(0,r.jsx)(s.ZP,{external:!0,href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"#SSO channel on Rocket.Chat"})]}),(0,r.jsxs)("li",{children:["Please follow the",(0,r.jsx)(s.ZP,{external:!0,href:"https://digital.gov.bc.ca/resources/digital-principles",target:"_blank",rel:"noreferrer",children:"BC Government digital standards"})]}),(0,r.jsx)("li",{children:"Coordinate load testing with the Pathfinder SSO Team, and please only use the Test environment"}),(0,r.jsxs)("li",{children:["The SSO Service is multitenancy; meaning you share with others, so please coordinate with us (",(0,r.jsx)(s.ZP,{external:!0,href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"#SSO channel on Rocket.Chat"})," ","or email at ",(0,r.jsx)(s.ZP,{href:"mailto:bcgov.sso@gov.bc.ca",children:"bcgov.sso@gov.bc.ca"}),") :",(0,r.jsxs)("ul",{children:[(0,r.jsxs)(p,{children:["if you predict moderate or high loads",(0,r.jsx)("br",{}),"OR",(0,r.jsx)("br",{})]}),(0,r.jsx)(p,{children:"if you need to conduct load testing in TEST only"})]})]})]}),(0,r.jsx)(h,{children:"What's included in the service"}),(0,r.jsx)(f,{children:(0,r.jsx)("li",{children:"The Standard realm is configured to meet the general needs of the community. Currently, custom configurations, such as scopes or flows, are not available"})}),(0,r.jsx)(h,{children:"Understanding the service level"}),(0,r.jsxs)(f,{children:[(0,r.jsxs)("li",{children:['We are working towards enterprise service levels and in the interim the SSO Pathfinder service level is "best-effort" during business hours (Monday to Friday, 9am to 5pm), and after-hours resolution time is not guaranteed.',(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:'Please take this into account if you have a "critical" application'})})]}),(0,r.jsx)("li",{children:"From time to time, we may contact you to confirm if your configuration is needed"})]})]})}},86890:function(e,n,t){"use strict";t.d(n,{Z:function(){return kn}});var r=t(85893),i=t(809),o=t.n(i),a=t(26265),s=t(64121),c=t(92447),l=t(27261),u=t(67294),d=t(29163);function h(){var e=(0,l.Z)(["\n  font-weight: lighter;\n  color: #003366;\n  margin: 0;\n"]);return h=function(){return e},e}var f=d.default.h1(h()),p=t(96486);function v(e){var n=e.formStage,t=e.requestId,i=e.editing,o=(0,p.padStart)(String(t),8,"0"),a=["".concat((0,p.isNil)(t)?"":"Req ID: ".concat(o," - "),"Enter requester information"),"Req ID: ".concat(o," - Choose providers and provide URIs"),"Req ID: ".concat(o," - Terms and Conditions"),"Req ID: ".concat(o," - Review and Submit")],s=i?"Editing ":"";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f,{children:s+a[n]})})}var m=t(17625),x=t(51436);function b(){var e=(0,l.Z)(["\n  width: 100px;\n  margin: 0;\n"]);return b=function(){return e},e}function g(){var e=(0,l.Z)(["\n  height: 40px;\n  width: 40px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 40px;\n  border: 1px solid #b9d8f0;\n  background-color: white;\n  font-weight: bold;\n"]);return g=function(){return e},e}function j(){var e=(0,l.Z)(["\n  height: 60px;\n  width: 200px;\n  background-color: #ebf7ff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding: 20px;\n  cursor: pointer;\n  margin: 3px 0;\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n  border: ",";\n"]);return j=function(){return e},e}var y=d.default.div(j(),(function(e){return e.active&&"bold"}),(function(e){return e.active||e.visited?"#003366":"#B0D4ED"}),(function(e){return e.active||e.visited?"#BCE4FF":"#F5FBFF"}),(function(e){return e.active||e.visited?"1px solid #006fc4":"1px solid #B9D8F0"})),w=d.default.div(g()),k=d.default.p(b());function C(e){var n=e.stageNumber,t=e.title,i=e.active,o=e.visited,a=e.handleClick,s=e.hasError;return(0,r.jsxs)(y,{active:i||!1,visited:o||!1,onClick:a,children:[(0,r.jsx)(w,{children:s?(0,r.jsx)(m.G,{icon:x.eHv,color:"red",title:"Some additional fields require your attention."}):n}),(0,r.jsx)(k,{children:t})]})}var Z=t(64735);function S(){var e=(0,l.Z)(["\n  width: 824px;\n  max-width: 100%;\n"]);return S=function(){return e},e}var O=d.default.div(S());function P(e){var n=e.currentStage,t=e.setFormStage,i=e.errors,o=e.isNew,a=e.visited,s=e.stages;return(0,r.jsx)(O,{children:(0,r.jsx)(Z.ZP,{cols:4,children:(0,r.jsx)(Z.ZP.Row,{collapse:"992",gutter:[],children:null===s||void 0===s?void 0:s.map((function(e){return(0,r.jsx)(Z.ZP.Col,{children:(0,r.jsx)(C,{title:e.title,stageNumber:e.number+1,active:e.number===n,hasError:!!i[e.number],visited:a[e.number],handleClick:function(){return function(e){o||t(e)}(e.number)}},e.number)},e.title)}))})})})}var F=t(24184),T=t(11915),D=t(30996),q=t(35611);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e){switch(e){case"checkbox":return"checked";case"file":return"files";default:return"value"}}var B=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=R(n);return function(i){var o=i.value,a=i.onChange,s=i.label,c=i.schema,l=i.options,u=i.required,d=i.disabled,h=i.onBlur,f=i.id,p=void 0===f?"":f,v=i.readonly,m=c.pattern,x=c.minLength,b=c.maxLength,g=c.placeholder,j=c.fullWidth,y=c.rows,w=l.enumOptions,k=void 0===w?[]:w,C={onChange:function(e){var n=e.target[t];""===n&&(n=void 0),"true"===n&&(n=!0),"false"===n&&(n=!1),a(n)},label:s,name:name,maxLength:b,id:p,required:u,disabled:d,minLength:x,type:n,pattern:m,onBlur:h,fullWidth:j,rows:y,readOnly:v,value:o||"",placeholder:g,checked:"undefined"!==typeof o&&o};return"file"===n&&delete C.value,"checkbox"===n&&(C.value=!0),"radio"===n?(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:s}),k.map((function(n){return(0,r.jsx)(e,E(E({},C),{},{label:n.label,value:n.value,checked:n.value===o,style:{padding:"2px 0"},size:"small",readOnly:v,onBlur:h}),n.value)}))]}):(0,r.jsx)(e,E(E({},C),{},{onBlur:h&&function(e){return h(p,e.target.value)},children:k&&k.map((function(e){var n=e.value,t=e.label;return(0,r.jsx)("option",{value:n,children:t},n)}))}))}},A=t(6434);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L={TextWidget:B(T.ZP,"input"),EmailWidget:B(T.ZP,"email"),TextareaWidget:B(D.ZP,"textarea"),SelectWidget:B(q.ZP,"select")};function z(e){return(0,r.jsx)(F.ZP,U(U({},e),{},{widgets:L,noHtml5Validate:!0,ErrorList:function(){return null},transformErrors:A.O5}))}function W(e){var n=e.classNames,t=e.help,i=e.description,o=e.errors,a=e.children;return(0,r.jsxs)("div",{className:n,children:[i,a,o,t]})}var G=t(60873);function V(){var e=(0,l.Z)(["\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 0;\n"]);return V=function(){return e},e}var M=d.default.legend(V());function H(e){var n=e.classNames,t=e.label,i=e.help,o=e.errors,a=e.children,s=e.schema,c=s.tooltipTitle,l=s.tooltipContent,u=s.hide,d=void 0===u?250:u,h=s.description,f=s.displayTitle;return(0,r.jsxs)("div",{className:n,children:[(0,r.jsxs)(M,{children:[f||t,"\xa0",l&&(0,r.jsx)(G.Z,{tooltipTitle:c,tooltipContent:l,hide:d})]}),h,a,o,i]})}var K=t(30454),Y=t(57120),_=t(10633);function J(){var e=(0,l.Z)(["\n  grid-column: 2;\n  color: #7f7f7f;\n"]);return J=function(){return e},e}function $(){var e=(0,l.Z)(["\n  font-weight: bold;\n  cursor: pointer;\n"]);return $=function(){return e},e}function Q(){var e=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  align-items: center;\n  margin-top: ",";\n  cursor: pointer;\n"]);return Q=function(){return e},e}var X=d.default.div(Q(),K.SI),ee=d.default.label($()),ne=d.default.p(J());function te(e){var n=e.rawErrors,t=n&&n.length>0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(X,{onClick:function(){window.location.hash=Y.zw},children:[(0,r.jsx)(m.G,{style:{color:"#006fc4"},icon:x.KtF,onClick:e.onAddClick,title:"Add Item"}),(0,r.jsx)(ee,{children:"Create a new team (optional)"}),(0,r.jsx)(ne,{children:"Add other members to help manage the integration, and re-use your teams across multiple integrations"})]}),t&&(0,r.jsx)(_.Z,{children:n[0]})]})}var re=t(50308),ie=t.n(re),oe=t(69696);function ae(){var e=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n\n  & .pg-modal-main {\n    margin: auto;\n  }\n\n  z-index: 100;\n"]);return ae=function(){return e},e}var se=(0,d.default)(oe.ZP)(ae()),ce=t(4826),le=t(74857),ue=t(74150);function de(){var e=(0,l.Z)(["\n  margin-bottom: 10px;\n"]);return de=function(){return e},e}function he(){var e=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]);return he=function(){return e},e}function fe(){var e=(0,l.Z)(["\n  font-size: 20px;\n"]);return fe=function(){return e},e}function pe(){var e=(0,l.Z)(["\n  margin: 0;\n"]);return pe=function(){return e},e}var ve=d.default.h2(pe()),me=d.default.h3(fe()),xe=d.default.div(he()),be=(0,d.default)(le.ZP)(de());var ge=function(e){var n=e.id,t=e.open,i=e.onChange,a=void 0===i?ie():i,s=(0,u.useState)("server"),l=s[0],d=s[1],h=(0,u.useState)(null),f=h[0],p=h[1];(0,u.useEffect)((function(){window.location.hash=t?n:"#"}),[t]);var v=function(){d("server"),p(null),window.location.hash="#"},m=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a("cancel"),v();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a("server"===l&&!0===f?"confidential":"public"),v();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b="server"!==l||null!==f,g=b&&"server"===l&&!0===f;return(0,r.jsxs)(se,{id:n,children:[(0,r.jsx)(oe.ZP.Header,{children:(0,r.jsx)(ve,{children:"Choosing between Public and Confidential Client types"})}),(0,r.jsxs)(oe.ZP.Content,{children:[(0,r.jsx)("h3",{children:"Which type of application are you using?"}),(0,r.jsx)(be,{name:"type",label:"Server-side (ex. .Net, Java, PHP)",checked:"server"===l,onChange:function(){return d("server")}}),(0,r.jsx)(be,{name:"type",label:"Javascript (ex. Single Page Application, Hybrid Mobile)",checked:"javascript"===l,onChange:function(){return d("javascript")}}),(0,r.jsx)(be,{name:"type",label:"Other (ex. Embedded devices, Internet of Things (Apple TV)",checked:"other"===l,onChange:function(){return d("other")}}),"server"===l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Does the framework require a client secret, or have an option for a secret?"}),(0,r.jsx)(be,{name:"secret",label:"Yes",checked:!0===f,onChange:function(){return p(!0)}}),(0,r.jsx)(be,{name:"secret",label:"No",checked:!1===f,onChange:function(){return p(!1)}})]}),b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(r.Fragment,{children:g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(me,{children:"Recommendation: Confidential Client"}),(0,r.jsxs)("p",{children:["Based on your response, we recommend that you use a ",(0,r.jsx)("strong",{children:"confidential client."})," ","Confidential clients have back-end components that securely store an application's secret and use a secure OAuth flow called PKCE, or Proof Key for Code Exchange."]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(me,{children:"Recommendation: Public Client"}),(0,r.jsx)("p",{children:"Public clients do not use back-end secrets, but use a secure OAuth flow called PKCE, or Proof Key for Code Exchange. Based on your responses, the public client may better support your application's architecture."})]})}),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["To learn more about the difference between confidential and public clients, and to understand PKCEs better, visit our"," ",(0,r.jsx)(ue.ZP,{external:!0,href:"https://github.com/bcgov/ocp-sso/wiki/Using-Your-SSO-Client#confidential-vs-private-client",children:"wiki page."})]})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(xe,{children:[(0,r.jsx)(ce.ZP,{type:"submit",variant:"primary-inverse",onClick:m,children:"Cancel"}),(0,r.jsx)(ce.ZP,{type:"submit",variant:"primary",onClick:x,disabled:!b,children:"Save and Close"})]})]})]})};function je(){var e=(0,l.Z)(["\n  margin-top: 5px;\n  margin-bottom: 5px;\n\n  & > input {\n    margin-right: 5px;\n  }\n"]);return je=function(){return e},e}var ye=d.default.div(je()),we=function(e){var n=e.id,t=e.value,i=e.onChange,o=e.onBlur,a=e.schema,s=a.enum,c=a.enumNames,l=(0,u.useState)(!1),d=l[0],h=l[1];return(0,r.jsxs)("div",{children:[c.map((function(e,a){return(0,r.jsxs)(ye,{children:[(0,r.jsx)("input",{type:"radio",id:"".concat(n,"-").concat(e),name:n,value:e,checked:s[a]===t,onChange:function(){return i(s[a])},onBlur:function(){return o(n,t)}}),(0,r.jsx)("label",{htmlFor:"".concat(n,"-").concat(e),children:e})]},e)})),(0,r.jsxs)("div",{children:[(0,r.jsx)(ue.ZP,{onClick:function(){return h(!0)},style:{cursor:"pointer"},children:"Click here"})," ","to get help deciding which client type to use."]}),(0,r.jsx)(ge,{id:"client-helper",open:d,onChange:function(e){h(!1),"cancel"!==e&&i("public"===e)}})]})},ke=function(e){var n=(0,p.isNil)(null===e||void 0===e?void 0:e.id),t="applied"===(null===e||void 0===e?void 0:e.status);return{identityProviders:{"ui:widget":"checkboxes","ui:disabled":"true","ui:help":"Currently we only support the onestopauth realm and IDPs cant be changed."},projectLead:{"ui:widget":"radio","ui:FieldTemplate":H,"ui:readonly":!n},newToSso:{"ui:widget":"radio","ui:FieldTemplate":H},publicAccess:{"ui:widget":we,"ui:FieldTemplate":H},projectName:{"ui:FieldTemplate":W,"ui:placeholder":"Project Name"},usesTeam:{"ui:widget":"radio","ui:FieldTemplate":H,"ui:readonly":t&&(null===e||void 0===e?void 0:e.usesTeam)},realm:{"ui:widget":"radio","ui:FieldTemplate":H,"ui:default":"onestopauth","ui:readonly":t},bceidTo:{"ui:FieldTemplate":W,"ui:readonly":!0},bceidCc:{"ui:FieldTemplate":W},bceidBody:{"ui:widget":"textarea"},dev:{"ui:readonly":!0,"ui:FieldTemplate":H},test:{"ui:readonly":t&&!0===(null===e||void 0===e?void 0:e.test)},prod:{"ui:readonly":t&&!0===(null===e||void 0===e?void 0:e.prod)},createTeam:{"ui:FieldTemplate":te}}},Ce=t(31607);function Ze(){var e=(0,l.Z)(["\n  min-width: ",";\n  background-color: #b2b2b2;\n  color: white;\n  box-shadow: none !important;\n\n  &:hover {\n    box-shadow: 0px 0px 0px 2px #006fc4 inset !important;\n    background-color: #b2b2b2;\n  }\n"]);return Ze=function(){return e},e}var Se=(0,d.default)(ce.ZP)(Ze(),K.I2);function Oe(){var e=(0,l.Z)(["\n  margin-left: 10px;\n"]);return Oe=function(){return e},e}function Pe(){var e=(0,l.Z)(["\n  display: flex;\n"]);return Pe=function(){return e},e}function Fe(){var e=(0,l.Z)(["\n  width: 30px;\n"]);return Fe=function(){return e},e}var Te=d.default.span(Fe()),De=d.default.div(Pe()),qe=d.default.p(Oe());function Ie(e){var n=e.saving,t=e.saveMessage,i=null!==t&&void 0!==t&&t.error?x.eHv:x.LEp;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(De,{children:[(0,r.jsx)(Te,{children:n?(0,r.jsx)(Ce.Z,{type:"TailSpin",color:"#000",height:18,width:50,visible:!0,label:"request-saving"}):(0,r.jsx)(m.G,{style:{color:"#006fc4"},icon:i,title:"request-saved"})}),(0,r.jsx)(qe,{children:null===t||void 0===t?void 0:t.content})]})})}function Ee(){var e=(0,l.Z)(["\n  margin-top: ",";\n"]);return Ee=function(){return e},e}function Re(){var e=(0,l.Z)(["\n  margin-left: 10px;\n  min-width: ",";\n"]);return Re=function(){return e},e}var Be=(0,d.default)(ce.ZP)(Re(),K.I2),Ae=d.default.div(Ee(),K.oc);function Ne(e){var n=e.loading,t=e.backButton,i=e.text,o=e.handleSubmit,a=e.handleBackClick,s=e.formSubmission,c=e.saving,l=e.saveMessage;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Ae,{"data-test-id":"form-btns",children:[t||(0,r.jsx)(Se,{variant:"secondary",size:"medium",type:"button",onClick:a,children:i.back}),(0,r.jsx)(Be,{variant:"primary",size:"medium",onClick:o,type:s?"submit":"button",children:n?(0,r.jsx)(Ce.Z,{type:"Grid",color:"#FFF",height:18,width:50,visible:!0}):(0,r.jsx)(r.Fragment,{children:i.continue})})]}),(c||l)&&(0,r.jsx)(Ie,{saving:c,saveMessage:l})]})}var Ue=t(98806),Le=t(6645);function ze(){var e=(0,l.Z)(["\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 0;\n"]);return ze=function(){return e},e}function We(){var e=(0,l.Z)(["\n  display: inline-block;\n  margin: 0;\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: lighter;\n  padding-left: 10px;\n  color: #bbbbbb;\n"]);return We=function(){return e},e}function Ge(){var e=(0,l.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"]);return Ge=function(){return e},e}function Ve(){var e=(0,l.Z)(["\n  display: inline-block;\n  &:hover {\n    cursor: pointer;\n  }\n  margin-top: 0;\n"]);return Ve=function(){return e},e}function Me(){var e=(0,l.Z)(["\n  margin: 0;\n"]);return Me=function(){return e},e}function He(){var e=(0,l.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: ",";\n"]);return He=function(){return e},e}var Ke=d.default.div(He(),K.Ik),Ye=d.default.p(Me()),_e=d.default.div(Ve()),Je=(0,d.default)(_e)(Ge()),$e=d.default.p(We()),Qe=d.default.legend(ze());function Xe(e){var n=e.title,t=e.items,i=e.schema,o=i.description,a=i.tooltipTitle,s=i.tooltipContent,c=i.deletableIndex,l=void 0===c?1:c,d=i.hide,h=void 0===d?250:d,f=i.addItemText,v=(0,p.isFunction)(l)?l(t):parseInt(l);return(0,r.jsxs)("div",{children:[n&&(0,r.jsxs)(Qe,{children:[n," ",s&&(0,r.jsx)(G.Z,{tooltipTitle:a,tooltipContent:s,hide:h})]}),o&&(0,r.jsx)(Ye,{children:o}),t.map((function(e){return(0,r.jsx)(u.Fragment,{children:e.hasRemove&&(0,r.jsxs)(Ke,{children:[e.children,e.index>=v&&(0,r.jsx)(Je,{onClick:e.onDropIndexClick(e.index),children:(0,r.jsx)(m.G,{style:{color:"red"},icon:x.uMC,title:"Remove Item"})})]})},e.index)})),e.canAdd&&(0,r.jsxs)(_e,{onClick:e.onAddClick,children:[(0,r.jsx)(m.G,{style:{color:"#006fc4"},icon:x.KtF,onClick:e.onAddClick,title:"Add Item"}),(0,r.jsx)($e,{children:f})]})]})}var en=t(11163),nn=t(28783),tn=t(92665),rn=t(12070),on={comment:{"ui:FieldTemplate":W,"ui:widget":"textarea"}},an=t(6418);function sn(e){e.bceidEmailDetails,e.setBceidEmailDetails;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Once you submit the request, both you and the BCeID team will receive an email with your request details."}),(0,r.jsx)("p",{children:"On a best-effort basis, the BCeID team will endeavour to reach out to you within 2-3 business days to schedule an on-boarding meeting.\xa0"})]})}var cn=t(85330);var ln=function(e){var n=e.onConfirm,t="edit-cancel-confirmation",i=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,n();case 3:window.location.hash="#";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["Are you sure you want to press cancel?",(0,r.jsx)("br",{}),"If you continue, you will lose any data that you have provided."]})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Se,{variant:"secondary",size:"medium",type:"button",onClick:function(){return window.location.hash=t},children:"Cancel"}),(0,r.jsx)(Ue.Z,{id:t,content:a,onConfirm:i,icon:x.eHv,title:"Canceling request update",closable:!0})]})};var un=(0,nn.hU)((function(e){var n=e.formData,t=e.setFormData,i=e.setErrors,a=e.alert,l=e.isAdmin,d=e.teams,h=(0,u.useState)({}),f=h[0],v=h[1],m=(0,en.useRouter)(),x=(0,A.Jx)(n.realm),b=x&&n.prod,g="applied"===n.status,j=g&&l,y=function(){var e=(0,c.Z)(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Le.WN)(n,!0);case 3:t=e.sent,r=(0,s.Z)(t,2),(i=r[1])?a.show({variant:"danger",fadeOut:1e4,closable:!0,content:(0,A.nU)(i).message}):(a.show({variant:"success",fadeOut:1e4,closable:!0,content:"Request ID:".concat((0,p.padStart)(String(n.id),8,"0")," is successfully submitted!")}),m.push({pathname:l?"/admin-dashboard":"/my-dashboard",query:{id:n.id}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=g?(0,an.i)(d):(0,an.a)(d),t=(0,A.G$)(n,e);if(Object.keys(t).length>0)return a.show({variant:"danger",fadeOut:1e4,closable:!0,content:"There were errors with your submission. Please see the navigation tabs above for the form pages with errors."}),i(t);window.location.hash="confirmation-modal"},k=function(){var e=l?"/admin-dashboard":"/my-dashboard";m.push(e)},C=g?"Cancel":"Save and Close",Z=g?"Update":"Submit",S=g?(0,r.jsx)(ln,{onConfirm:k}):null;return(0,r.jsxs)("div",{children:[(0,r.jsx)(cn.wk,{title:"Please review your information to make sure it is correct.",number:1,children:(0,r.jsx)(tn.Z,{request:n,hasBceid:x||!1})}),(0,r.jsx)(cn.wk,{title:"Your ".concat(x?"Dev and/or Test":""," environment(s) will be provided by the SSO Pathfinder team."),number:2,children:(0,r.jsx)("p",{children:"Once you submit the request, access will be provided in 20 minutes or fewer."})}),j&&(0,r.jsx)(z,{schema:rn.Z,uiSchema:on,liveValidate:!0,onChange:function(e){t(e.formData)},formData:n,children:(0,r.jsx)(r.Fragment,{})}),b?(0,r.jsxs)(cn.wk,{number:3,title:"Your Prod environment will be provided by the BCeID Team",showLine:!1,children:[(0,r.jsx)(sn,{bceidEmailDetails:f,setBceidEmailDetails:v}),(0,r.jsx)(Ne,{backButton:S,text:{continue:Z,back:C},handleSubmit:w,handleBackClick:k})]}):(0,r.jsx)(Ne,{backButton:S,text:{continue:Z,back:C},handleSubmit:w,handleBackClick:k}),(0,r.jsx)(Ue.Z,{id:"confirmation-modal",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Are you sure you're ready to submit your request?"}),!l&&(0,r.jsxs)("p",{children:["If you need to change anything after submitting your request, please contact our"," ",(0,r.jsx)(ue.ZP,{external:!0,href:"https://chat.developer.gov.bc.ca/channel/sso/",children:"#SSO channel"})," ","or email ",(0,r.jsx)(ue.ZP,{href:"mailto:bcgov.sso@gov.bc.ca",children:"bcgov.sso@gov.bc.ca"})]})]}),title:"Submitting Request",onConfirm:y})]})})),dn=t(80721),hn=t(81283),fn=t(38073),pn=t(65764);function vn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function mn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?vn(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function xn(){var e=(0,l.Z)(["\n  color: #d94532;\n  font-weight: bold;\n"]);return xn=function(){return e},e}function bn(){var e=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 150px;\n"]);return bn=function(){return e},e}function gn(){var e=(0,l.Z)(["\n  margin: 0;\n"]);return gn=function(){return e},e}var jn=d.default.p(gn()),yn=d.default.div(bn()),wn=d.default.p(xn());var kn=(0,nn.hU)((function(e){var n=e.currentUser,t=e.request,i=e.alert,a=(0,en.useRouter)(),l=a.query.step,d=l?Number(l):0,h=(0,u.useState)(t||{}),f=h[0],m=h[1],x=(0,u.useState)(d),b=x[0],g=x[1],j=(0,u.useState)(!1),y=j[0],w=j[1],k=(0,u.useState)(void 0),C=k[0],Z=k[1],S=(0,u.useState)(!1),O=S[0],F=S[1],T=(0,u.useState)({}),D=T[0],q=T[1],I=(0,u.useState)(t?{0:!0}:{}),E=I[0],R=I[1],B=(0,u.useState)([]),N=B[0],U=B[1],L=(0,u.useState)(!1),W=L[0],G=L[1],V=(0,p.isNil)(null===t||void 0===t?void 0:t.id),M="applied"===(null===t||void 0===t?void 0:t.status),H=n.isAdmin||!1,K=(0,A.J$)({isApplied:M,formStage:b,teams:N}),_=K.stages,J=K.stageTitle,$=K.schema,Q=K.schemas,X=0!==b||f.usesTeam||f.projectLead,ee=(0,u.useCallback)((0,p.throttle)(function(){var e=(0,c.Z)(o().mark((function e(n){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V&&!M){e.next=2;break}return e.abrupt("return");case 2:if(!t){e.next=11;break}return F(!0),e.next=6,(0,Le.WN)(mn(mn({},n.formData),{},{id:t.id}));case 6:r=e.sent,i=(0,s.Z)(r,2),i[1]||Z({content:"Last saved at ".concat((new Date).toLocaleString()),error:!1}),F(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),2e3,{trailing:!0}),[null===t||void 0===t?void 0:t.id]),ne=function(){var e=(0,c.Z)(o().mark((function e(){var n,t,r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V?fn.Dc:fn.l8,e.next=3,n();case 3:t=e.sent,r=(0,s.Z)(t,2),i=r[0],(a=r[1])?console.error(a):U(i||[]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){ne()}),[]);var te=function(e){E[b]=!0,3===e&&(E[0]=!0,E[1]=!0,E[2]=!0);var n=(0,A.G$)(f,Q,E);q(n),g(e),R(E),i.hide()},re=function(){var e=H?"/admin-dashboard":"/my-dashboard";a.push({pathname:e})},ie=ke(t),oe=function(){var e=(0,c.Z)(o().mark((function e(){var n,t,r,c,l,u,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),e.prev=1,!V){e.next=22;break}return e.next=5,(0,Le.hG)(f);case 5:if(n=e.sent,t=(0,s.Z)(n,2),r=t[0],c=t[1],l=(r||{}).id,c&&i.show({variant:"danger",fadeOut:5e3,closable:!0,content:c}),!c&&l){e.next=14;break}return w(!1),e.abrupt("return");case 14:return u="",d={},H&&M?u="/admin-dashboard":(u="/request/".concat(l),d.step=1),e.next=19,a.push({pathname:u,query:d});case 19:m(mn(mn({},f),{},{id:l})),e.next=25;break;case 22:return e.next=24,(0,Le.WN)(f);case 24:ae();case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(1),console.error(e.t0);case 30:w(!1);case 31:case"end":return e.stop()}}),e,null,[[1,27]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==b){e.next=5;break}if(!V){e.next=5;break}return E[b]=!0,R(E),e.abrupt("return");case 5:te(b+1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,c.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:m(mn(mn({},f),{},{usesTeam:!0,teamId:String(n)}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ce=M?(0,r.jsx)(ln,{onConfirm:re}):null,le=M?"Cancel":"Save and Close";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(yn,{children:[(0,r.jsx)(v,{formStage:b,requestId:f.id,editing:M}),(0,r.jsx)(P,{currentStage:b,setFormStage:te,errors:D,isNew:V,visited:E,stages:_}),(0,r.jsxs)(jn,{children:["If new to SSO, please visit"," ",(0,r.jsx)(ue.ZP,{external:!0,href:"https://github.com/bcgov/sso-keycloak/wiki/Using-Your-SSO-Client",children:"github"})," ","for more information."]})]}),"Terms and conditions"===J&&(0,r.jsx)(dn.Z,{}),Y.Hg.includes(J)&&(0,r.jsx)(un,{formData:f,setErrors:q,errors:D,visited:E,saving:O,saveMessage:C,isAdmin:H,setFormData:m,teams:N}),Y.al.includes(J)&&(0,r.jsx)(z,{schema:$,uiSchema:ie,onChange:function(e){var n=!1===e.formData.projectLead&&!1===e.formData.usesTeam,t=!1===f.usesTeam&&!0===e.formData.usesTeam;m(t?mn(mn({},e.formData),{},{projectLead:void 0}):e.formData),n?(window.location.hash="info-modal",G(!0)):G(!1),ee(e)},onSubmit:oe,formData:f,ArrayFieldTemplate:Xe,liveValidate:E[b]||M,validate:hn.M,children:X?(0,r.jsx)(Ne,{formSubmission:0===b,backButton:ce,text:{continue:"Next",back:le},loading:y,handleSubmit:ae,handleBackClick:re,saving:O,saveMessage:C}):(0,r.jsx)(r.Fragment,{})}),"Requester Info"===J&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ue.Z,{id:"info-modal",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"If you are not accountable for this project, please refer this request to someone who is."}),(0,r.jsx)("p",{children:" Only the person who is responsible for this project can submit the intergration request."})]}),icon:!1,onConfirm:function(){window.location.hash="#"},confirmText:"Close",showCancel:!1,title:"Project Accountability",buttonStyle:"custom",buttonAlign:"center",closable:!0}),(0,r.jsx)(Ue.Z,{title:"Create a new team",icon:null,id:Y.zw,content:(0,r.jsx)(pn.Z,{onSubmit:function(e){return se(e)},currentUser:n}),showCancel:!1,showConfirm:!1,closable:!0}),W&&(0,r.jsx)(wn,{children:"If you are not accountable for this request, please refer this request to someone who is. Only the responsible person can submit the integration request."})]})]})}))}}]);