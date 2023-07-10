(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6209],{13433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),o=n(45697),a=n.n(o),l=n(55867),i=n(58593),s=n(14114),c=n(10222),d=n(11965);const u={copyNode:a().node,getText:a().func,onCopyEnd:a().func,shouldShowText:a().bool,text:a().string,wrapped:a().bool,tooltipText:a().string,addDangerToast:a().func.isRequired,addSuccessToast:a().func.isRequired,hideTooltip:a().bool},g={copyNode:(0,d.tZ)("span",null,(0,l.t)("Copy")),onCopyEnd:()=>{},shouldShowText:!0,wrapped:!0,tooltipText:(0,l.t)("Copy to clipboard"),hideTooltip:!1};var p={name:"8irbms",styles:"display:inline-flex;align-items:center"};class h extends r.Component{constructor(e){super(e),this.copyToClipboard=this.copyToClipboard.bind(this),this.onClick=this.onClick.bind(this)}onClick(){this.props.getText?this.props.getText((e=>{this.copyToClipboard(Promise.resolve(e))})):this.copyToClipboard(Promise.resolve(this.props.text))}getDecoratedCopyNode(){return r.cloneElement(this.props.copyNode,{style:{cursor:"pointer"},onClick:this.onClick})}copyToClipboard(e){(0,c.Z)((()=>e)).then((()=>{this.props.addSuccessToast((0,l.t)("Copied to clipboard!"))})).catch((()=>{this.props.addDangerToast((0,l.t)("Sorry, your browser does not support copying. Use Ctrl / Cmd + C!"))})).finally((()=>{this.props.onCopyEnd()}))}renderTooltip(e){return(0,d.tZ)(r.Fragment,null,this.props.hideTooltip?this.getDecoratedCopyNode():(0,d.tZ)(i.u,{id:"copy-to-clipboard-tooltip",placement:"topRight",style:{cursor:e},title:this.props.tooltipText,trigger:["hover"],arrowPointAtCenter:!0},this.getDecoratedCopyNode()))}renderNotWrapped(){return this.renderTooltip("pointer")}renderLink(){return(0,d.tZ)("span",{css:p},this.props.shouldShowText&&this.props.text&&(0,d.tZ)("span",{className:"m-r-5"},this.props.text),this.renderTooltip())}render(){const{wrapped:e}=this.props;return e?this.renderLink():this.renderNotWrapped()}}const m=(0,s.ZP)(h);h.propTypes=u,h.defaultProps=g},61806:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(72570);function o(e,t){switch(void 0===e&&(e=[]),t.type){case r.h:{const{payload:n}=t,r=e.slice();return n.noDuplicate&&r.find((e=>e.text===n.text))?e:[n,...e]}case r.K7:{const{payload:{id:n}}=t;return[...e].filter((e=>e.id!==n))}default:return e}}},54076:(e,t,n)=>{"use strict";n.d(t,{EI:()=>f,G6:()=>R,G9:()=>p,Mv:()=>v,Tb:()=>d,cD:()=>b,fV:()=>_,jy:()=>u,li:()=>c,lo:()=>h});var r=n(78580),o=n.n(r),a=n(51115),l=n(42846),i=n(31069),s=n(55786);const c="<NULL>",d="TRUE",u="FALSE",g=(0,a.bt)(l.Z.DATABASE_DATETIME);function p(e){return i.Z.post({endpoint:"/kv/store/",postPayload:{data:e}}).then((e=>`${window.location.origin+window.location.pathname}?id=${e.json.id}`))}function h(e){return null===e?c:""===e?"<empty string>":!0===e?d:!1===e?u:"string"!=typeof e&&e.toString?e.toString():e}function m(e){return e.name||e}function v(e,t){let n=t.length?`${t.map(m).join("\t")}\n`:"";for(let r=0;r<e.length;r+=1){const o={};for(let n=0;n<t.length;n+=1){const a=m(t[n]);a in e[r]?o[n]=e[r][a]:o[n]=e[r][parseFloat(a)]}n+=`${Object.values(o).join("\t")}\n`}return n}function b(e,t){return e&&0!==e.length&&0!==(0,s.Z)(t).length?e.map((e=>({...e,...t.reduce(((t,n)=>(null!==e[n]&&void 0!==e[n]&&(t[n]=g(e[n])),t)),{})}))):e}const f=()=>{},_=()=>{const{appVersion:e}=navigator;return o()(e).call(e,"Win")?"Windows":o()(e).call(e,"Mac")?"MacOS":o()(e).call(e,"X11")?"UNIX":o()(e).call(e,"Linux")?"Linux":"Unknown OS"},R=()=>{const{userAgent:e}=navigator;return e&&/^((?!chrome|android).)*safari/i.test(e)}},3297:(e,t,n)=>{"use strict";n.d(t,{B:()=>o,Z:()=>a});var r=n(67294);const o={name:"l8l8b8",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},a=()=>{const[e,t]=(0,r.useState)(!0),n=(0,r.useRef)(null),[o,a]=(0,r.useState)(0),[l,i]=(0,r.useState)(0);return(0,r.useEffect)((()=>{var e,t,r,o;a(null!=(e=null==(t=n.current)?void 0:t.offsetWidth)?e:0),i(null!=(r=null==(o=n.current)?void 0:o.scrollWidth)?r:0)})),(0,r.useEffect)((()=>{t(o<l)}),[o,l]),[n,e]}},55786:(e,t,n)=>{"use strict";function r(e){return null==e?[]:Array.isArray(e)?e:[e]}n.d(t,{Z:()=>r})},35932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(5872),o=n.n(r),a=n(11965),l=n(21804),i=n.n(l),s=n(67294),c=n(84967),d=n(94184),u=n.n(d),g=n(4715),p=n(51995),h=n(58593);function m(e){const{tooltip:t,placement:n,disabled:r=!1,buttonSize:l,buttonStyle:d,className:m,cta:v,children:b,href:f,showMarginRight:_=!0,...R}=e,E=(0,p.Fg)(),{colors:N,transitionTiming:S,borderRadius:C,typography:O}=E,{primary:y,grayscale:x,success:T,warning:Z,error:w}=N;let A=32,k=18;"xsmall"===l?(A=22,k=5):"small"===l&&(A=30,k=10);let I=y.light4,$=(0,c.CD)(.1,y.base,y.light4),D=(0,c.CD)(.25,y.base,y.light4),P=x.light2,U=y.dark1,L=U,M=0,F="none",z="transparent",B="transparent",W="transparent";"primary"===d?(I=y.base,$=y.dark1,D=(0,c.CD)(.2,x.dark2,y.dark1),U=x.light5,L=U):"tertiary"===d||"dashed"===d?(I=x.light5,$=x.light5,D=x.light5,P=x.light5,M=1,F="dashed"===d?"dashed":"solid",z=y.dark1,B=y.light1,W=x.light2):"danger"===d?(I=w.base,$=(0,c.CD)(.1,x.light5,w.base),D=(0,c.CD)(.2,x.dark2,w.base),U=x.light5,L=U):"warning"===d?(I=Z.base,$=(0,c.CD)(.1,x.dark2,Z.base),D=(0,c.CD)(.2,x.dark2,Z.base),U=x.light5,L=U):"success"===d?(I=T.base,$=(0,c.CD)(.1,x.light5,T.base),D=(0,c.CD)(.2,x.dark2,T.base),U=x.light5,L=U):"link"===d&&(I="transparent",$="transparent",D="transparent",L=y.base);const G=b;let K=[];K=G&&G.type===s.Fragment?s.Children.toArray(G.props.children):s.Children.toArray(b);const q=_&&K.length>1?2*E.gridUnit:0,V=(0,a.tZ)(g.C0,o()({href:r?void 0:f,disabled:r,className:u()(m,"superset-button",{cta:!!v}),css:(0,a.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1.5715,fontSize:O.sizes.s,fontWeight:O.weights.bold,height:A,textTransform:"uppercase",padding:`0px ${k}px`,transition:`all ${S}s`,minWidth:v?36*E.gridUnit:void 0,minHeight:v?8*E.gridUnit:void 0,boxShadow:"none",borderWidth:M,borderStyle:F,borderColor:z,borderRadius:C,color:U,backgroundColor:I,"&:hover":{color:L,backgroundColor:$,borderColor:B},"&:active":{color:U,backgroundColor:D},"&:focus":{color:U,backgroundColor:I,borderColor:z},"&[disabled], &[disabled]:hover":{color:x.base,backgroundColor:"link"===d?"transparent":P,borderColor:"link"===d?"transparent":W,pointerEvents:"none"},marginLeft:0,"& + .superset-button":{marginLeft:2*E.gridUnit},"& > :first-of-type":{marginRight:q}},"","")},R),b);return t?(0,a.tZ)(h.u,{placement:n,id:`${i()(t)}-tooltip`,title:t},r?(0,a.tZ)("span",{css:(0,a.iv)({cursor:"not-allowed","& > .superset-button":{marginLeft:2*E.gridUnit}},"","")},V):V):V}},91178:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(78580),o=n.n(r),a=n(67294),l=n(51995),i=n(55867),s=n(54076),c=n(74069),d=n(35932),u=n(70163),g=n(13433),p=n(11965);const h=l.iK.div`
  align-items: center;
  background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{level:t,theme:n}=e;return n.colors[t].base}};
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-left: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
  }

  .icon {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .link {
    color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
    text-decoration: underline;
  }
`,m=(0,l.iK)(c.Z)`
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .icon {
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
  }
`,v=l.iK.div`
  align-items: center;
  display: flex;
`;function b(e){var t;let{body:n,copyText:r,level:c="error",source:b="dashboard",subtitle:f,title:_,description:R}=e;const E=(0,l.Fg)(),[N,S]=(0,a.useState)(!1),[C,O]=(0,a.useState)(!1),y=o()(t=["explore","sqllab"]).call(t,b),x=E.colors[c].base;return(0,p.tZ)(h,{level:c,role:"alert"},(0,p.tZ)("div",{className:"top-row"},(0,p.tZ)(v,null,"error"===c?(0,p.tZ)(u.Z.ErrorSolid,{className:"icon",iconColor:x}):(0,p.tZ)(u.Z.WarningSolid,{className:"icon",iconColor:x}),(0,p.tZ)("strong",null,_)),!y&&!R&&(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>S(!0)},(0,i.t)("See more"))),R&&(0,p.tZ)("div",{className:"error-body"},(0,p.tZ)("p",null,R),!y&&(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>S(!0)},(0,i.t)("See more"))),y?(0,p.tZ)("div",{className:"error-body"},(0,p.tZ)("p",null,f),n&&(0,p.tZ)(a.Fragment,null,!C&&(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!0)},(0,i.t)("See more")),C&&(0,p.tZ)(a.Fragment,null,(0,p.tZ)("br",null),n,(0,p.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>O(!1)},(0,i.t)("See less"))))):(0,p.tZ)(m,{level:c,show:N,onHide:()=>S(!1),title:(0,p.tZ)("div",{className:"header"},"error"===c?(0,p.tZ)(u.Z.ErrorSolid,{className:"icon",iconColor:x}):(0,p.tZ)(u.Z.WarningSolid,{className:"icon",iconColor:x}),(0,p.tZ)("div",{className:"title"},_)),footer:(0,p.tZ)(a.Fragment,null,r&&(0,p.tZ)(g.Z,{text:r,shouldShowText:!1,wrapped:!1,copyNode:(0,p.tZ)(d.Z,{onClick:s.EI},(0,i.t)("Copy message"))}),(0,p.tZ)(d.Z,{cta:!0,buttonStyle:"primary",onClick:()=>S(!1)},(0,i.t)("Close")))},(0,p.tZ)(a.Fragment,null,(0,p.tZ)("p",null,f),f&&n&&(0,p.tZ)("br",null),n)))}},92869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(90537),o=n(1875);class a extends r.Z{constructor(){super({name:"ErrorMessageComponent",overwritePolicy:r.r.ALLOW})}}const l=(0,o.Z)(a)},67663:(e,t,n)=>{"use strict";n.d(t,{C:()=>r});const r={FRONTEND_CSRF_ERROR:"FRONTEND_CSRF_ERROR",FRONTEND_NETWORK_ERROR:"FRONTEND_NETWORK_ERROR",FRONTEND_TIMEOUT_ERROR:"FRONTEND_TIMEOUT_ERROR",GENERIC_DB_ENGINE_ERROR:"GENERIC_DB_ENGINE_ERROR",COLUMN_DOES_NOT_EXIST_ERROR:"COLUMN_DOES_NOT_EXIST_ERROR",TABLE_DOES_NOT_EXIST_ERROR:"TABLE_DOES_NOT_EXIST_ERROR",SCHEMA_DOES_NOT_EXIST_ERROR:"SCHEMA_DOES_NOT_EXIST_ERROR",CONNECTION_INVALID_USERNAME_ERROR:"CONNECTION_INVALID_USERNAME_ERROR",CONNECTION_INVALID_PASSWORD_ERROR:"CONNECTION_INVALID_PASSWORD_ERROR",CONNECTION_INVALID_HOSTNAME_ERROR:"CONNECTION_INVALID_HOSTNAME_ERROR",CONNECTION_PORT_CLOSED_ERROR:"CONNECTION_PORT_CLOSED_ERROR",CONNECTION_INVALID_PORT_ERROR:"CONNECTION_INVALID_PORT_ERROR",CONNECTION_HOST_DOWN_ERROR:"CONNECTION_HOST_DOWN_ERROR",CONNECTION_ACCESS_DENIED_ERROR:"CONNECTION_ACCESS_DENIED_ERROR",CONNECTION_UNKNOWN_DATABASE_ERROR:"CONNECTION_UNKNOWN_DATABASE_ERROR",CONNECTION_DATABASE_PERMISSIONS_ERROR:"CONNECTION_DATABASE_PERMISSIONS_ERROR",CONNECTION_MISSING_PARAMETERS_ERRORS:"CONNECTION_MISSING_PARAMETERS_ERRORS",OBJECT_DOES_NOT_EXIST_ERROR:"OBJECT_DOES_NOT_EXIST_ERROR",SYNTAX_ERROR:"SYNTAX_ERROR",VIZ_GET_DF_ERROR:"VIZ_GET_DF_ERROR",UNKNOWN_DATASOURCE_TYPE_ERROR:"UNKNOWN_DATASOURCE_TYPE_ERROR",FAILED_FETCHING_DATASOURCE_INFO_ERROR:"FAILED_FETCHING_DATASOURCE_INFO_ERROR",TABLE_SECURITY_ACCESS_ERROR:"TABLE_SECURITY_ACCESS_ERROR",DATASOURCE_SECURITY_ACCESS_ERROR:"DATASOURCE_SECURITY_ACCESS_ERROR",DATABASE_SECURITY_ACCESS_ERROR:"DATABASE_SECURITY_ACCESS_ERROR",QUERY_SECURITY_ACCESS_ERROR:"QUERY_SECURITY_ACCESS_ERROR",MISSING_OWNERSHIP_ERROR:"MISSING_OWNERSHIP_ERROR",BACKEND_TIMEOUT_ERROR:"BACKEND_TIMEOUT_ERROR",DATABASE_NOT_FOUND_ERROR:"DATABASE_NOT_FOUND_ERROR",MISSING_TEMPLATE_PARAMS_ERROR:"MISSING_TEMPLATE_PARAMS_ERROR",INVALID_TEMPLATE_PARAMS_ERROR:"INVALID_TEMPLATE_PARAMS_ERROR",RESULTS_BACKEND_NOT_CONFIGURED_ERROR:"RESULTS_BACKEND_NOT_CONFIGURED_ERROR",DML_NOT_ALLOWED_ERROR:"DML_NOT_ALLOWED_ERROR",INVALID_CTAS_QUERY_ERROR:"INVALID_CTAS_QUERY_ERROR",INVALID_CVAS_QUERY_ERROR:"INVALID_CVAS_QUERY_ERROR",SQLLAB_TIMEOUT_ERROR:"SQLLAB_TIMEOUT_ERROR",RESULTS_BACKEND_ERROR:"RESULTS_BACKEND_ERROR",ASYNC_WORKERS_ERROR:"ASYNC_WORKERS_ERROR",GENERIC_COMMAND_ERROR:"GENERIC_COMMAND_ERROR",GENERIC_BACKEND_ERROR:"GENERIC_BACKEND_ERROR",INVALID_PAYLOAD_FORMAT_ERROR:"INVALID_PAYLOAD_FORMAT_ERROR",INVALID_PAYLOAD_SCHEMA_ERROR:"INVALID_PAYLOAD_SCHEMA_ERROR"}},70163:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(5872),o=n.n(r),a=n(18029),l=n.n(a),i=n(67294),s=n(78580),c=n.n(s),d=n(62816),u=n(16165),g=n(51995);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const h=function(e){return i.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e))};var m=n(11965);const v=(0,g.iK)((e=>{let{iconColor:t,iconSize:n,viewBox:r,...a}=e;return(0,m.tZ)(u.Z,o()({viewBox:r||"0 0 24 24"},a))}))`
  ${e=>{let{iconColor:t}=e;return t&&`color: ${t};`}};
  font-size: ${e=>{let{iconSize:t,theme:n}=e;return t?`${n.typography.sizes[t]||n.typography.sizes.m}px`:"24px"}};
`,b=e=>{const{fileName:t,...r}=e,[,a]=(0,i.useState)(!1),l=(0,i.useRef)(),s=t.replace("_","-");return(0,i.useEffect)((()=>{let e=!1;return async function(){l.current=(await n(85494)(`./${t}.svg`)).default,e||a(!0)}(),()=>{e=!0}}),[t,l]),(0,m.tZ)(v,o()({component:l.current||h,"aria-label":s},r))},f=Object.keys(d).filter((e=>!c()(e).call(e,"TwoTone"))).map((e=>({[e]:t=>(0,m.tZ)(v,o()({component:d[e]},t))}))).reduce(((e,t)=>({...e,...t}))),_={};["alert","alert_solid","alert_solid_small","area-chart-tile","bar-chart-tile","big-number-chart-tile","binoculars","bolt","bolt_small","bolt_small_run","calendar","cancel","cancel_solid","cancel-x","card_view","cards","cards_locked","caret_down","caret_left","caret_right","caret_up","certified","check","checkbox-half","checkbox-off","checkbox-on","circle_check","circle_check_solid","circle","clock","close","code","cog","collapse","color_palette","current-rendered-tile","components","copy","cursor_target","database","dataset_physical","dataset_virtual_greyscale","dataset_virtual","download","drag","edit_alt","edit","email","error","error_solid","error_solid_small","exclamation","expand","eye","eye_slash","favorite-selected","favorite_small_selected","favorite-unselected","field_abc","field_boolean","field_date","field_derived","field_num","field_struct","file","filter","filter_small","folder","full","function_x","gear","grid","image","import","info","info-solid","info_solid_small","join","keyboard","layers","lightbulb","line-chart-tile","link","list","list_view","location","lock_locked","lock_unlocked","map","message","minus","minus_solid","more_horiz","more_vert","move","nav_charts","nav_dashboard","nav_data","nav_explore","nav_home","nav_lab","note","offline","paperclip","pie-chart-tile","placeholder","plus","plus_large","plus_small","plus_solid","queued","refresh","running","save","sql","search","server","share","slack","sort_asc","sort_desc","sort","table","table-chart-tile","tag","trash","triangle_change","triangle_down","triangle_up","up-level","user","warning","warning_solid","x-large","x-small","tags","ballot","category","undo","redo"].forEach((e=>{const t=l()(e).replace(/ /g,"");_[t]=t=>(0,m.tZ)(b,o()({fileName:e},t))}));const R={...f,..._}},37921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(5872),o=n.n(r),a=n(11965),l=(n(67294),n(4715)),i=n(51995);function s(e){const t=(0,i.Fg)(),{colors:n,transitionTiming:r}=t,{type:s="default",onClick:c,children:d,...u}=e,{alert:g,primary:p,secondary:h,grayscale:m,success:v,warning:b,error:f,info:_}=n;let R=m.light3,E=c?p.light2:m.light3,N=c?m.light2:"transparent",S=c?p.light1:"transparent",C=m.dark1;if("default"!==s){let e;C=m.light4,"alert"===s?(C=m.dark1,e=g):e="success"===s?v:"warning"===s?b:"danger"===s?f:"info"===s?_:"secondary"===s?h:p,R=e.base,E=c?e.dark1:e.base,N=c?e.dark1:"transparent",S=c?e.dark2:"transparent"}return(0,a.tZ)(l.Vp,o()({onClick:c},u,{css:(0,a.iv)({transition:`background-color ${r}s`,whiteSpace:"nowrap",cursor:c?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:R,borderColor:N,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:C,maxWidth:"100%","&:hover":{backgroundColor:E,borderColor:S,opacity:1}},"","")}),d)}},38703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),l=n(89419),i=n(11965);const s=r.iK.img`
  z-index: 99;
  width: 50px;
  height: unset;
  position: relative;
  margin: 10px;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function c(e){let{position:t="floating",image:n,className:r}=e;return(0,i.tZ)(s,{className:a()("loading",t,r),alt:"Loading...",src:n||l,role:"status","aria-live":"polite","aria-label":"Loading"})}},72570:(e,t,n)=>{"use strict";n.d(t,{Dz:()=>g,Gb:()=>p,K7:()=>s,RS:()=>c,bM:()=>d,fz:()=>i,h:()=>l,s2:()=>h,ws:()=>u});var r=n(14670),o=n.n(r),a=n(1927);const l="ADD_TOAST";function i(e){let{toastType:t,text:n,duration:r=8e3,noDuplicate:a=!1}=e;return{type:l,payload:{id:(i=t,`${i}-${o().generate()}`),toastType:t,text:n,duration:r,noDuplicate:a}};var i}const s="REMOVE_TOAST";function c(e){return{type:s,payload:{id:e}}}function d(e,t){return i({text:e,toastType:a.p.INFO,duration:4e3,...t})}function u(e,t){return i({text:e,toastType:a.p.SUCCESS,duration:4e3,...t})}function g(e,t){return i({text:e,toastType:a.p.WARNING,duration:6e3,...t})}function p(e,t){return i({text:e,toastType:a.p.DANGER,duration:8e3,...t})}const h={addInfoToast:d,addSuccessToast:u,addWarningToast:g,addDangerToast:p}},1927:(e,t,n)=>{"use strict";var r;n.d(t,{p:()=>r}),function(e){e.INFO="INFO_TOAST",e.SUCCESS="SUCCESS_TOAST",e.WARNING="WARNING_TOAST",e.DANGER="DANGER_TOAST"}(r||(r={}))},14114:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s,e1:()=>c});var r=n(67294),o=n(14890),a=n(28216),l=n(72570);const i={addInfoToast:l.bM,addSuccessToast:l.ws,addWarningToast:l.Dz,addDangerToast:l.Gb};function s(e){return(0,a.$j)(null,(e=>(0,o.DE)(i,e)))(e)}function c(){const e=(0,a.I0)();return(0,r.useMemo)((()=>(0,o.DE)(i,e)),[e])}},74069:(e,t,n)=>{"use strict";n.d(t,{o:()=>v,Z:()=>R});var r=n(5872),o=n.n(r),a=n(14293),l=n.n(a),i=n(67294),s=n(51995),c=n(55867),d=n(11965),u=n(4715),g=n(35932),p=n(29119),h=n(61193),m=n.n(h);const v=(0,s.iK)((e=>(0,d.tZ)(u.xT,o()({},e,{maskTransitionName:""}))))`
  ${e=>{let{theme:t,responsive:n,maxWidth:r}=e;return n&&(0,d.iv)("max-width:",null!=r?r:"900px",";padding-left:",3*t.gridUnit,"px;padding-right:",3*t.gridUnit,"px;padding-bottom:0;top:0;","")}}

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    max-height: ${e=>{let{theme:t}=e;return`calc(100vh - ${8*t.gridUnit}px)`}};
    margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    margin-top: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  .ant-modal-header {
    flex: 0 0 auto;
    background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light4}};
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px
      ${e=>{let{theme:t}=e;return t.borderRadius}}px 0 0;
    padding-left: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    padding-right: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
      color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};
      font-size: 32px;
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.light}};
    }
  }

  .ant-modal-body {
    flex: 0 1 auto;
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    overflow: auto;
    ${e=>{let{resizable:t,height:n}=e;return!t&&n&&`height: ${n};`}}
  }
  .ant-modal-footer {
    flex: 0 0 1;
    border-top: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px solid
      ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${e=>{let{draggable:t,theme:n}=e;return t&&`\n    .ant-modal-header {\n      padding: 0;\n      .draggable-trigger {\n          cursor: move;\n          padding: ${4*n.gridUnit}px;\n          width: 100%;\n        }\n    }\n  `}};

  ${e=>{let{resizable:t,hideFooter:n}=e;return t&&`\n    .resizable {\n      pointer-events: all;\n\n      .resizable-wrapper {\n        height: 100%;\n      }\n\n      .ant-modal-content {\n        height: 100%;\n\n        .ant-modal-body {\n          /* 100% - header height - footer height */\n          height: ${n?"calc(100% - 55px);":"calc(100% - 55px - 65px);"}\n        }\n      }\n    }\n  `}}
`,b=e=>({maxHeight:"100vh",maxWidth:"100vw",minHeight:e?109:174,minWidth:"380px",enable:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,top:!1,topLeft:!1,topRight:!1,right:!0}}),f=e=>{let{children:t,disablePrimaryButton:n=!1,primaryButtonLoading:r=!1,onHide:a,onHandledPrimaryAction:s,primaryButtonName:u=(0,c.t)("OK"),primaryButtonType:h="primary",show:f,name:_,title:R,width:E,maxWidth:N,responsive:S=!1,centered:C,footer:O,hideFooter:y,wrapProps:x,draggable:T=!1,resizable:Z=!1,resizableConfig:w=b(y),draggableConfig:A,destroyOnClose:k,...I}=e;const $=(0,i.useRef)(null),[D,P]=(0,i.useState)(),[U,L]=(0,i.useState)(!0);let M;i.isValidElement(O)&&(M=i.cloneElement(O,{closeModal:a}));const F=l()(M)?[(0,d.tZ)(g.Z,{key:"back",onClick:a,cta:!0},(0,c.t)("Cancel")),(0,d.tZ)(g.Z,{key:"submit",buttonStyle:h,disabled:n,loading:r,onClick:s,cta:!0},u)]:M,z=E||(S?"100vw":"600px"),B=!(Z||T),W=(0,i.useMemo)((()=>0===Object.keys(w).length?b(y):w),[y,w]);return(0,d.tZ)(v,o()({centered:!!C,onOk:s,onCancel:a,width:z,maxWidth:N,responsive:S,visible:f,title:(0,d.tZ)((()=>T?(0,d.tZ)("div",{className:"draggable-trigger",onMouseOver:()=>U&&L(!1),onMouseOut:()=>!U&&L(!0)},R):(0,d.tZ)(i.Fragment,null,R)),null),closeIcon:(0,d.tZ)("span",{className:"close","aria-hidden":"true"},"×"),footer:y?null:F,hideFooter:y,wrapProps:{"data-test":`${_||R}-modal`,...x},modalRender:e=>Z||T?(0,d.tZ)(m(),o()({disabled:!T||U,bounds:D,onStart:(e,t)=>((e,t)=>{var n,r,o;const{clientWidth:a,clientHeight:l}=null==(n=window)||null==(r=n.document)?void 0:r.documentElement,i=null==$||null==(o=$.current)?void 0:o.getBoundingClientRect();i&&P({left:-(null==i?void 0:i.left)+(null==t?void 0:t.x),right:a-((null==i?void 0:i.right)-(null==t?void 0:t.x)),top:-(null==i?void 0:i.top)+(null==t?void 0:t.y),bottom:l-((null==i?void 0:i.bottom)-(null==t?void 0:t.y))})})(0,t)},A),Z?(0,d.tZ)(p.e,o()({className:"resizable"},W),(0,d.tZ)("div",{className:"resizable-wrapper",ref:$},e)):(0,d.tZ)("div",{ref:$},e)):e,mask:B,draggable:T,resizable:Z,destroyOnClose:k},I),t)};f.displayName="Modal";const _={okButtonProps:{className:"modal-functions-ok-button"},cancelButtonProps:{className:"modal-functions-cancel-button"}},R=Object.assign(f,{error:e=>u.xT.error({...e,..._}),warning:e=>u.xT.warning({...e,..._}),confirm:e=>u.xT.confirm({...e,..._}),useModal:u.xT.useModal})},64158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),l=n(11965);const i=r.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
        background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
        cursor: default;
        background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s(e){let{children:t}=e;return(0,l.tZ)(i,{role:"navigation"},t)}s.Next=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"»"))},s.Prev=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"«"))},s.Item=function(e){let{active:t,children:n,onClick:r}=e;return(0,l.tZ)("li",{className:a()({active:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||r(e)}},n))},s.Ellipsis=function(e){let{disabled:t,onClick:n}=e;return(0,l.tZ)("li",{className:a()({disabled:t})},(0,l.tZ)("span",{role:"button",tabIndex:t?-1:0,onClick:e=>{e.preventDefault(),t||n(e)}},"…"))};const c=s;var d=n(52630);const u=(0,d.YM)({WrapperComponent:c,itemTypeToComponent:{[d.iB.PAGE]:e=>{let{value:t,isActive:n,onClick:r}=e;return(0,l.tZ)(c.Item,{active:n,onClick:r},t)},[d.iB.ELLIPSIS]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(c.Ellipsis,{disabled:t,onClick:n})},[d.iB.PREVIOUS_PAGE_LINK]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(c.Prev,{disabled:t,onClick:n})},[d.iB.NEXT_PAGE_LINK]:e=>{let{isActive:t,onClick:n}=e;return(0,l.tZ)(c.Next,{disabled:t,onClick:n})},[d.iB.FIRST_PAGE_LINK]:()=>null,[d.iB.LAST_PAGE_LINK]:()=>null}})},84101:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(5872),o=n.n(r),a=n(18446),l=n.n(a),i=n(67294),s=n(55867),c=n(55786),d=n(23279),u=n.n(d),g=n(70163),p=n(98286),h=n(27600),m=n(85633),v=n(47767),b=n(26579),f=n(34891),_=n(11965);const R=e=>{let{error:t}=e;return(0,_.tZ)(v.BD,null,(0,_.tZ)(g.Z.ErrorSolid,null)," ",(0,_.tZ)(v.Vv,null,t))},E=(e,t,n)=>`${e};${t};${n}`,N=(0,i.forwardRef)(((e,t)=>{let{allowClear:n,allowNewOptions:r=!1,ariaLabel:a,fetchOnlyOnSearch:d,filterOption:g=!0,header:N=null,headerPosition:S="top",helperText:C,invertSelection:O=!1,lazyLoading:y=!0,loading:x,mode:T="single",name:Z,notFoundContent:w,onError:A,onChange:k,onClear:I,onDropdownVisibleChange:$,optionFilterProps:D=["label","value"],options:P,pageSize:U=b.L8,placeholder:L=(0,s.t)("Select ..."),showSearch:M=!0,sortComparator:F=b.Ns,tokenSeparators:z,value:B,getPopupContainer:W,oneLine:G,maxTagCount:K,...q}=e;const V="single"===T,[Y,H]=(0,i.useState)(B),[j,Q]=(0,i.useState)(""),[X,J]=(0,i.useState)(x),[ee,te]=(0,i.useState)(""),[ne,re]=(0,i.useState)(!1),[oe,ae]=(0,i.useState)(0),[le,ie]=(0,i.useState)(0),[se,ce]=(0,i.useState)(!y),[de,ue]=(0,i.useState)(!1),ge=(0,i.useRef)(Y),pe=(0,i.useRef)(new Map),he=V?void 0:r?"tags":"multiple",me=!d||j,[ve,be]=(0,i.useState)(null!=K?K:b.pM);(0,i.useEffect)((()=>{G&&be(ne?0:1)}),[ne,G]),(0,i.useEffect)((()=>{ge.current=Y}),[Y]);const fe=(0,i.useCallback)(((e,t)=>(0,m.Y1)(e,t,ge.current)),[]),_e=(0,i.useCallback)(((e,t)=>(0,m.tj)(e,t,j,fe,F)),[j,F,fe]),Re=(0,i.useCallback)(((e,t)=>(0,m.Sl)(e,t,fe,F)),[F,fe]),[Ee,Ne]=(0,i.useState)(b.DW),Se=(0,i.useMemo)((()=>{const e=(0,c.Z)(Y).filter((e=>!(0,m.Gq)((0,m.NA)(e),Ee))).map((e=>(0,m.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(Ee):Ee}),[Ee,Y]),Ce=(0,i.useCallback)((e=>(0,p.O$)(e).then((e=>{const{error:t}=e;te(t),A&&A(t)}))),[A]),Oe=(0,i.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set(e.map((e=>e.value)));Ne((r=>(t=r.filter((e=>!n.has(e.value))).concat(e).sort(Re),t)))}return t}),[Re]),ye=(0,i.useMemo)((()=>(e,t)=>{if(ae(t),de)return void J(!1);const n=E(e,t,U),r=pe.current.get(n);if(void 0!==r)return ie(r),void J(!1);J(!0),P(e,t,U).then((t=>{let{data:r,totalCount:o}=t;const a=Oe(r);pe.current.set(n,o),ie(o),!d&&""===e&&a.length>=o&&ue(!0)})).catch(Ce).finally((()=>{J(!1)}))}),[de,d,Oe,Ce,P,U]),xe=(0,i.useMemo)((()=>u()(ye,h.M$)),[ye]);(0,i.useEffect)((()=>{pe.current.clear(),ue(!1),Ne(b.DW)}),[P]),(0,i.useEffect)((()=>{H(B)}),[B]),(0,i.useEffect)((()=>()=>{xe.cancel()}),[xe]),(0,i.useEffect)((()=>{se&&me&&(j?xe(j,0):ye("",0))}),[se,ye,me,j,xe]),(0,i.useEffect)((()=>{void 0!==x&&x!==X&&J(x)}),[X,x]);const Te=()=>pe.current.clear();return(0,i.useImperativeHandle)(t,(()=>({...t.current,clearCache:Te})),[t]),(0,_.tZ)(v.PQ,{headerPosition:S},N&&(0,_.tZ)(v.eb,{headerPosition:S},N),(0,_.tZ)(v.Qr,o()({allowClear:!X&&n,"aria-label":a||Z,autoClearSearchValue:!1,dropdownRender:e=>(0,m.RI)(e,ne,X,Se.length,C,ee?(0,_.tZ)(R,{error:ee}):void 0),filterOption:(e,t)=>(0,m.Dz)(e,t,D,g),filterSort:_e,getPopupContainer:W||(e=>e.parentNode),headerPosition:S,labelInValue:!0,maxTagCount:ve,mode:he,notFoundContent:X?(0,s.t)("Loading..."):w,onDeselect:e=>{Array.isArray(Y)&&((0,m.nq)(e)?H(Y.filter((t=>t.value!==e.value))):H(Y.filter((t=>t!==e)))),Q("")},onDropdownVisibleChange:e=>{if(re(e),se!==e&&ce(e),!e&&X&&setTimeout((()=>{J(!1)}),250),e&&!j&&Ee.length>1){const e=Ee.slice().sort(Re);l()(e,Ee)||Ne(e)}$&&$(e)},onPopupScroll:e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);!X&&oe*U+U<le&&n&&ye(j,oe+1)},onSearch:M?e=>{const t=e.trim();if(r&&V){const e=t&&!(0,m.Gq)(t,Se,!0)&&{label:t,value:t,isNewOption:!0},n=Se.filter((e=>!e.isNewOption||(0,m.Gq)(e.value,Y))),r=e?[e,...n]:n;Ne(r)}de||!se||pe.current.has(E(t,0,U))||J(!(d&&!t)),Q(e)}:void 0,onSelect:e=>{H(V?e:t=>{const n=(0,c.Z)(t),r=(0,m.NA)(e);if(!(0,m.Gq)(r,n)){const t=[...n,e];return(0,m.nq)(e),t}return t}),Q("")},onClear:()=>{H(void 0),I&&I()},onChange:k,options:(0,m.$)(Se)?void 0:Se,placeholder:L,showSearch:M,showArrow:!0,tokenSeparators:z||b.pp,value:Y,suffixIcon:(0,m.AI)(X,M,ne),menuItemSelectedIcon:O?(0,_.tZ)(v.F6,{iconSize:"m","aria-label":"stop"}):(0,_.tZ)(v.Y1,{iconSize:"m","aria-label":"check"}),oneLine:G,tagRender:f.Z},q,{ref:t}),(0,m.$)(Se)&&(0,m.PO)(Se)))}))},34891:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(5872),o=n.n(r),a=n(78580),l=n.n(a),i=(n(67294),n(60331)),s=n(51995),c=n(3297),d=n(58593),u=n(85633),g=n(47767),p=n(11965);const h=(0,s.iK)(i.Z)`
  & .ant-tag-close-icon {
    display: inline-flex;
    align-items: center;
    margin-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }

  & .tag-content {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,m=e=>{const[t,n]=(0,c.Z)();return(0,p.tZ)(d.u,{title:n?e.children:null},(0,p.tZ)(h,o()({},e,{className:"ant-select-selection-item"}),(0,p.tZ)("span",{className:"tag-content",ref:t},e.children)))},v=e=>{const{label:t,value:n}=e;return n!==u.qP?(0,p.tZ)(m,o()({onMouseDown:e=>{var t;const n=e.target;("svg"===n.tagName||"path"===n.tagName||"span"===n.tagName&&l()(t=n.className).call(t,"ant-tag-close-icon"))&&e.stopPropagation()}},e),t):(0,p.tZ)(g.WC,null)}},81315:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(5872),o=n.n(r),a=n(18446),l=n.n(a),i=n(67294),s=n(55867),c=n(55786),d=n(67190),u=n(45636),g=n(64749),p=n(85633),h=n(47767),m=n(26579),v=n(34891),b=n(11965);const f=(0,i.forwardRef)(((e,t)=>{let{allowClear:n,allowNewOptions:r=!1,allowSelectAll:a=!0,ariaLabel:f,filterOption:_=!0,header:R=null,headerPosition:E="top",helperText:N,invertSelection:S=!1,labelInValue:C=!1,loading:O,mode:y="single",name:x,notFoundContent:T,onChange:Z,onClear:w,onDropdownVisibleChange:A,optionFilterProps:k=["label","value"],options:I,placeholder:$=(0,s.t)("Select ..."),showSearch:D=!0,sortComparator:P=m.Ns,tokenSeparators:U,value:L,getPopupContainer:M,oneLine:F,maxTagCount:z,...B}=e;const W="single"===y,G=!!r||D,[K,q]=(0,i.useState)(L),[V,Y]=(0,i.useState)(""),[H,j]=(0,i.useState)(O),[Q,X]=(0,i.useState)(!1),[J,ee]=(0,i.useState)(null!=z?z:m.pM);(0,i.useEffect)((()=>{F&&ee(Q?0:1)}),[Q,F]);const te=W?void 0:r?"tags":"multiple",{Option:ne}=g.default,re=(0,i.useCallback)(((e,t)=>(0,p.Y1)(e,t,K)),[K]),oe=(0,i.useCallback)(((e,t)=>(0,p.tj)(e,t,V,re,P)),[V,P,re]),ae=(0,i.useMemo)((()=>I&&Array.isArray(I)?I.slice():m.DW),[I]),le=(0,i.useMemo)((()=>ae.slice().sort(re)),[ae,re]),[ie,se]=(0,i.useState)(le),ce=(0,i.useMemo)((()=>{const e=(0,c.Z)(K).filter((e=>!(0,p.Gq)((0,p.NA)(e),ie))).map((e=>(0,p.nq)(e)?e:{value:e,label:String(e)}));return(e.length>0?e.concat(ie):ie).filter((e=>e.value!==p.qP))}),[ie,K]),de=(0,i.useMemo)((()=>ce.filter((e=>!e.disabled))),[ce]),ue=(0,i.useMemo)((()=>ce.filter((e=>(0,p.Gq)(e.value,K)||!e.disabled))),[ce,K]),ge=(0,i.useMemo)((()=>!W&&a&&ie.length>0&&de.length>1&&!V),[W,a,ie.length,de.length,V]),pe=(0,i.useMemo)((()=>(0,c.Z)(K).length===ue.length+1),[K,ue]),he=()=>{q(ce.filter((e=>e.disabled&&(0,p.Gq)(e.value,K))).map((e=>C?{label:e.label,value:e.value}:e.value)))};(0,i.useEffect)((()=>{se(ae)}),[ae]),(0,i.useEffect)((()=>{void 0!==O&&O!==H&&j(O)}),[H,O]),(0,i.useEffect)((()=>{q(L)}),[L]),(0,i.useEffect)((()=>{ge&&(0,c.Z)(L).length===ue.length&&q(C?[...(0,c.Z)(L),p.tP]:[...(0,c.Z)(L),p.qP])}),[C,ue.length,ge,L]),(0,i.useEffect)((()=>{if((0,c.Z)(K).some((e=>(0,p.NA)(e)===p.qP))&&!pe){const e=ue.map((e=>C?e:e.value));e.push(C?p.tP:p.qP),q(e)}}),[K,pe,C,ue]);const me=(0,i.useMemo)((()=>()=>`${p.qP} (${(0,d.uf)(u.Z.INTEGER,ue.length)})`),[ue]),ve=(0,i.useMemo)((()=>ge||(0,p.$)(I)),[ge,I]);return(0,b.tZ)(h.PQ,{headerPosition:E},R&&(0,b.tZ)(h.eb,{headerPosition:E},R),(0,b.tZ)(h.Qr,o()({allowClear:!H&&n,"aria-label":f||x,autoClearSearchValue:!1,dropdownRender:e=>(0,p.RI)(e,Q,H,ce.length,N),filterOption:(e,t)=>(0,p.Dz)(e,t,k,_),filterSort:oe,getPopupContainer:M||(e=>e.parentNode),headerPosition:E,labelInValue:C,maxTagCount:J,maxTagPlaceholder:()=>{const e=(0,c.Z)(K).length;return pe?`+ ${e-J-1} ...`:`+ ${e-J} ...`},mode:te,notFoundContent:H?(0,s.t)("Loading..."):T,onDeselect:e=>{if(Array.isArray(K))if((0,p.NA)(e)===(0,p.NA)(p.qP))he();else{let t=K;t=t.filter((t=>(0,p.NA)(t)!==(0,p.NA)(e))),pe&&ie.some((t=>t.value===(0,p.NA)(e)))&&(t=t.filter((e=>(0,p.NA)(e)!==p.qP))),q(t)}Y("")},onDropdownVisibleChange:e=>{X(e),e&&!V&&ie.length>1&&(l()(le,ie)||se(le)),A&&A(e)},onPopupScroll:void 0,onSearch:G?e=>{const t=e.trim();if(r&&W){const e=t&&!(0,p.Gq)(t,ce,!0)&&{label:t,value:t,isNewOption:!0},n=(0,c.Z)(ce).filter((e=>!e.isNewOption||(0,p.Gq)(e.value,K))),r=e?[e,...n]:n;se(r)}Y(e)}:void 0,onSelect:e=>{q(W?e:t=>{const n=(0,c.Z)(t),r=(0,p.NA)(e);if(r===(0,p.NA)(p.qP))return(0,p.nq)(e)?[...ue,p.tP]:[p.qP,...ue.map((e=>e.value))];if(!(0,p.Gq)(r,n)){const t=[...n,e];return t.length===ue.length&&ge?(0,p.nq)(e)?[...t,p.tP]:[...t,p.qP]:t}return t}),Y("")},onClear:()=>{he(),w&&w()},onChange:(e,t)=>{let n=e,r=t;if(!W)if((0,c.Z)(n).some((e=>(0,p.NA)(e)===p.qP)))pe?n=(0,c.Z)(e).filter((e=>(0,p.NA)(e)!==p.qP)):(n=(0,p.Q8)(ue,C),r=(0,p.vi)(ue));else if((0,c.Z)(e).length===ue.length&&pe){const e=ue.filter((e=>(0,p.Gq)(e.value,K)&&e.disabled));n=(0,p.Q8)(e,C),r=(0,p.vi)(e)}null==Z||Z(n,r)},placeholder:$,showSearch:G,showArrow:!0,tokenSeparators:U||m.pp,value:K,suffixIcon:(0,p.AI)(H,G,Q),menuItemSelectedIcon:S?(0,b.tZ)(h.F6,{iconSize:"m","aria-label":"stop"}):(0,b.tZ)(h.Y1,{iconSize:"m","aria-label":"check"})},!ve&&{options:ce},{oneLine:F,tagRender:v.Z},B,{ref:t}),ge&&(0,b.tZ)(ne,{id:"select-all",className:"select-all",key:p.qP,value:p.qP},me()),ve&&(0,p.PO)(ce)))}))},26579:(e,t,n)=>{"use strict";n.d(t,{L8:()=>s,Ns:()=>c,DW:()=>i,pM:()=>a,pp:()=>l});var r=n(78580),o=n.n(r);const a=4,l=[",","\r\n","\n","\t",";"],i=[],s=100,c=(e,t,n)=>{let r,a;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,a=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,a=t.value),"string"==typeof r&&"string"==typeof a?n?function(e,t,n){const r=e.toLowerCase()||"",a=t.toLowerCase()||"",l=n.toLowerCase()||"";return n&&(Number(t===n)-Number(e===n)||Number(t.startsWith(n))-Number(e.startsWith(n))||Number(a===l)-Number(r===l)||Number(a.startsWith(l))-Number(r.startsWith(l))||Number(o()(t).call(t,n))-Number(o()(e).call(e,n))||Number(o()(a).call(a,l))-Number(o()(e).call(e,l)))||e.localeCompare(t)}(r,a,n):r.localeCompare(a):e.value-t.value}},47767:(e,t,n)=>{"use strict";n.d(t,{BD:()=>b,F6:()=>g,H$:()=>h,PQ:()=>c,Qr:()=>d,SC:()=>m,Vv:()=>f,WC:()=>u,Y1:()=>p,eb:()=>s,oz:()=>v});var r=n(51995),o=n(70163),a=n(60331),l=n(11382),i=n(64749);const s=r.iK.span`
  ${e=>{let{theme:t,headerPosition:n}=e;return`\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-right: ${"left"===n?2*t.gridUnit:0}px;\n  `}}
`,c=r.iK.div`
  ${e=>{let{headerPosition:t}=e;return`\n    display: flex;\n    flex-direction: ${"top"===t?"column":"row"};\n    align-items: ${"left"===t?"center":void 0};\n    width: 100%;\n  `}}
`,d=(0,r.iK)(i.default,{shouldForwardProp:e=>"headerPosition"!==e&&"oneLine"!==e})`
  ${e=>{let{theme:t,headerPosition:n,oneLine:r}=e;return`\n    flex: ${"left"===n?1:0};\n    && .ant-select-selector {\n      border-radius: ${t.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n    .select-all {\n      border-bottom: 1px solid ${t.colors.grayscale.light3};\n    }\n    ${r&&`\n        .ant-select-selection-overflow {\n          flex-wrap: nowrap;\n        }\n\n        .ant-select-selection-overflow-item:not(.ant-select-selection-overflow-item-rest):not(.ant-select-selection-overflow-item-suffix) {\n          flex-shrink: 1;\n          min-width: ${13*t.gridUnit}px;\n        }\n\n        .ant-select-selection-overflow-item-suffix {\n          flex: unset;\n          min-width: 0px;\n        }\n      `};\n `}}
`,u=r.iK.span`
  display: none;
`,g=((0,r.iK)(a.Z)`
  ${e=>{let{theme:t}=e;return`\n    background: ${t.colors.grayscale.light3};\n    font-size: ${t.typography.sizes.m}px;\n    border: none;\n  `}}
`,(0,r.iK)(o.Z.StopOutlined)`
  vertical-align: 0;
`),p=(0,r.iK)(o.Z.CheckOutlined)`
  vertical-align: 0;
`,h=(0,r.iK)(l.Z)`
  margin-top: ${e=>{let{theme:t}=e;return-t.gridUnit}}px;
`,m=r.iK.div`
  ${e=>{let{theme:t}=e;return`\n   margin-left: ${3*t.gridUnit}px;\n   line-height: ${8*t.gridUnit}px;\n   color: ${t.colors.grayscale.light1};\n `}}
`,v=r.iK.div`
  ${e=>{let{theme:t}=e;return`\n   padding: ${2*t.gridUnit}px ${3*t.gridUnit}px;\n   color: ${t.colors.grayscale.base};\n   font-size: ${t.typography.sizes.s}px;\n   cursor: default;\n   border-bottom: 1px solid ${t.colors.grayscale.light2};\n `}}
`,b=r.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*t.gridUnit}px;\n    color: ${t.colors.error.base};\n    & svg {\n      margin-right: ${2*t.gridUnit}px;\n    }\n  `}}
`,f=r.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`},85633:(e,t,n)=>{"use strict";n.d(t,{$:()=>T,AI:()=>O,Dz:()=>x,Gq:()=>R,NA:()=>_,PO:()=>Z,Q8:()=>w,RI:()=>y,Sl:()=>C,Y1:()=>N,mj:()=>E,nq:()=>f,qP:()=>m,tP:()=>v,tj:()=>S,vi:()=>A});var r=n(5872),o=n.n(r),a=n(78580),l=n.n(a),i=n(55786),s=n(55867),c=n(64749),d=n(67294),u=n(70163),g=n(47767),p=n(11965);const{Option:h}=c.default,m="Select All",v={value:m,label:String(m)};function b(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}function f(e){return b(e)&&"value"in e&&"label"in e}function _(e){return f(e)?e.value:e}function R(e,t,n){return void 0===n&&(n=!1),void 0!==(0,i.Z)(t).find((t=>t==e||b(t)&&("value"in t&&t.value==e||n&&"label"in t&&t.label===e)))}const E=e=>(t,n)=>"string"==typeof t[e]&&"string"==typeof n[e]?t[e].localeCompare(n[e]):t[e]-n[e],N=(e,t,n)=>n&&void 0!==e.value&&void 0!==t.value?Number(R(t.value,n))-Number(R(e.value,n)):0,S=(e,t,n,r,o)=>r(e,t)||o(e,t,n),C=(e,t,n,r)=>n(e,t)||r(e,t,""),O=(e,t,n)=>e?(0,p.tZ)(g.H$,{size:"small"}):t&&n?(0,p.tZ)(u.Z.SearchOutlined,{iconSize:"s"}):(0,p.tZ)(u.Z.DownOutlined,{iconSize:"s"}),y=(e,t,n,r,o,a)=>{var l,i;return t||null==(l=e.ref)||null==(i=l.current)||i.scrollTo({top:0}),n&&0===r?(0,p.tZ)(g.SC,null,(0,s.t)("Loading...")):a||(0,p.tZ)(d.Fragment,null,o&&(0,p.tZ)(g.oz,{role:"note"},o),e)},x=(e,t,n,r)=>{if("function"==typeof r)return r(e,t);if(r){const r=e.trim().toLowerCase();if(null!=n&&n.length)return n.some((e=>{const n=null!=t&&t[e]?String(t[e]).trim().toLowerCase():"";return l()(n).call(n,r)}))}return!1},T=e=>null==e?void 0:e.some((e=>!(null==e||!e.customLabel))),Z=e=>e.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:a,...l}=e;return(0,p.tZ)(h,o()({},l,{key:r,label:n,value:r}),t&&a?a:n)})),w=(e,t)=>t?e.map((e=>({key:e.value,value:e.value,label:e.label}))):e.map((e=>e.value)),A=e=>e.map((e=>({children:e.label,key:e.value,value:e.value,label:e.label,disabled:e.disabled})))},97754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(5872),o=n.n(r),a=n(78580),l=n.n(a),i=n(67294),s=n(94184),c=n.n(s),d=n(51995),u=n(70163),g=n(11965);const p=d.iK.table`
  ${e=>{let{theme:t}=e;return`\n    background-color: ${t.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${t.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${t.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*t.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${t.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${t.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${t.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${t.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${t.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${t.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${t.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*t.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}}
`;p.displayName="table";const h=i.memo((e=>{let{getTableProps:t,getTableBodyProps:n,prepareRow:r,headerGroups:a,columns:i,rows:s,loading:d,highlightRowId:h,columnsForWrapText:m}=e;return(0,g.tZ)(p,o()({},t(),{className:"table table-hover"}),(0,g.tZ)("thead",null,a.map((e=>(0,g.tZ)("tr",e.getHeaderGroupProps(),e.headers.map((e=>{let t=(0,g.tZ)(u.Z.Sort,null);return e.isSorted&&e.isSortedDesc?t=(0,g.tZ)(u.Z.SortDesc,null):e.isSorted&&!e.isSortedDesc&&(t=(0,g.tZ)(u.Z.SortAsc,null)),e.hidden?null:(0,g.tZ)("th",o()({},e.getHeaderProps(e.canSort?e.getSortByToggleProps():{}),{className:c()({[e.size||""]:e.size})}),(0,g.tZ)("span",null,e.render("Header"),e.canSort&&t))})))))),(0,g.tZ)("tbody",n(),d&&0===s.length&&[...new Array(12)].map(((e,t)=>(0,g.tZ)("tr",{key:t},i.map(((e,t)=>e.hidden?null:(0,g.tZ)("td",{key:t,className:c()("table-cell",{"table-cell-loader":d})},(0,g.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),s.length>0&&s.map((e=>{r(e);const t=e.original.id;return(0,g.tZ)("tr",o()({},e.getRowProps(),{className:c()("table-row",{"table-row-selected":e.isSelected||void 0!==t&&t===h})}),e.cells.map((e=>{if(e.column.hidden)return null;const t=e.column.cellProps||{},n=null==m?void 0:l()(m).call(m,e.column.Header);return(0,g.tZ)("td",o()({className:c()("table-cell table-cell__"+(n?"wrap":"nowrap"),{"table-cell-loader":d,[e.column.size||""]:e.column.size})},e.getCellProps(),t),(0,g.tZ)("span",{className:c()({"loading-bar":d}),role:d?"progressbar":void 0},(0,g.tZ)("span",null,e.render("Cell"))))})))}))))}))},46977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R,u:()=>r});var r,o=n(5872),a=n.n(o),l=n(67294),i=n(18446),s=n.n(i),c=n(51995),d=n(55867),u=n(79521),g=n(4715),p=n(64158),h=n(97754),m=n(11965);!function(e){e.Default="Default",e.Small="Small"}(r||(r={}));const v=c.iK.div`
  margin: ${e=>{let{theme:t}=e;return 40*t.gridUnit}}px 0;
`,b=c.iK.div`
  ${e=>{let{scrollTable:t,theme:n}=e;return t&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*n.gridUnit}px;\n    overflow: auto;\n  `}}

  .table-row {
    ${e=>{let{theme:t,small:n}=e;return!n&&`height: ${11*t.gridUnit-1}px;`}}

    .table-cell {
      ${e=>{let{theme:t,small:n}=e;return n&&`\n        padding-top: ${t.gridUnit+1}px;\n        padding-bottom: ${t.gridUnit+1}px;\n        line-height: 1.45;\n      `}}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${e=>{let{theme:t}=e;return`${t.gridUnit-2}px solid ${t.colors.grayscale.light2}`}};
    ${e=>{let{small:t}=e;return t&&"padding-bottom: 0;"}}
  }
`,f=c.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};

  ${e=>{let{isPaginationSticky:t}=e;return t&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "}};

  .row-count-container {
    margin-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`,_=e=>{let{columns:t,data:n,pageSize:o,totalCount:i=n.length,initialPageIndex:c,initialSortBy:_=[],loading:R=!1,withPagination:E=!0,emptyWrapperType:N=r.Default,noDataText:S,showRowCount:C=!0,serverPagination:O=!1,columnsForWrapText:y,onServerPagination:x=(()=>{}),scrollTopOnPagination:T=!1,...Z}=e;const w={pageSize:null!=o?o:10,pageIndex:null!=c?c:0,sortBy:_},{getTableProps:A,getTableBodyProps:k,headerGroups:I,page:$,rows:D,prepareRow:P,pageCount:U,gotoPage:L,state:{pageIndex:M,pageSize:F,sortBy:z}}=(0,u.useTable)({columns:t,data:n,initialState:w,manualPagination:O,manualSortBy:O,pageCount:Math.ceil(i/w.pageSize)},u.useFilters,u.useSortBy,u.usePagination),B=E?$:D;let W;switch(N){case r.Small:W=e=>{let{children:t}=e;return(0,m.tZ)(l.Fragment,null,t)};break;case r.Default:default:W=e=>{let{children:t}=e;return(0,m.tZ)(v,null,t)}}const G=!R&&0===B.length,K=U>1&&E,q=(0,l.useRef)(null);return(0,l.useEffect)((()=>{O&&M!==w.pageIndex&&x({pageIndex:M})}),[M]),(0,l.useEffect)((()=>{O&&!s()(z,w.sortBy)&&x({pageIndex:0,sortBy:z})}),[z]),(0,m.tZ)(l.Fragment,null,(0,m.tZ)(b,a()({},Z,{ref:q}),(0,m.tZ)(h.Z,{getTableProps:A,getTableBodyProps:k,prepareRow:P,headerGroups:I,rows:B,columns:t,loading:R,columnsForWrapText:y}),G&&(0,m.tZ)(W,null,S?(0,m.tZ)(g.HY,{image:g.HY.PRESENTED_IMAGE_SIMPLE,description:S}):(0,m.tZ)(g.HY,{image:g.HY.PRESENTED_IMAGE_SIMPLE}))),K&&(0,m.tZ)(f,{className:"pagination-container",isPaginationSticky:Z.isPaginationSticky},(0,m.tZ)(p.Z,{totalPages:U||0,currentPage:U?M+1:0,onChange:e=>(e=>{var t;T&&(null==q||null==(t=q.current)||t.scroll(0,0)),L(e)})(e-1),hideFirstAndLastPageLinks:!0}),C&&(0,m.tZ)("div",{className:"row-count-container"},!R&&(0,d.t)("%s-%s of %s",F*M+($.length&&1),F*M+$.length,i))))},R=l.memo(_)},76962:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z,u:()=>r.u});var r=n(46977)},71262:(e,t,n)=>{"use strict";n.d(t,{Xv:()=>h,cl:()=>v,ZP:()=>b});var r=n(5872),o=n.n(r),a=(n(67294),n(11965)),l=n(51995),i=n(20838),s=n(70163);const c=e=>{let{animated:t=!1,fullWidth:n=!0,allowOverflow:r=!0,...l}=e;return(0,a.tZ)(i.default,o()({animated:t},l,{css:e=>a.iv`
      overflow: ${r?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${r?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${n&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `}))},d=(0,l.iK)(i.default.TabPane)``,u=Object.assign(c,{TabPane:d}),g=(0,l.iK)(c)`
  ${e=>{let{theme:t,fullWidth:n}=e;return`\n    .ant-tabs-content-holder {\n      background: ${t.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*t.gridUnit}px;\n    }\n\n    ${n?a.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}}
`,p=(0,l.iK)(s.Z.CancelX)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,h=Object.assign(g,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,a.tZ)(p,{role:"button",tabIndex:0})};const m=(0,l.iK)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
    padding: ${e=>{let{theme:t}=e;return`${3*t.gridUnit}px ${t.gridUnit}px`}};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,v=Object.assign(m,{TabPane:d}),b=u},58593:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var r=n(5872),o=n.n(r),a=n(67294),l=n(51995),i=n(11965),s=n(31097);const c=e=>{const t=(0,l.Fg)();return(0,i.tZ)(a.Fragment,null,(0,i.tZ)(i.xB,{styles:i.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,i.tZ)(s.Z,o()({overlayStyle:{fontSize:t.typography.sizes.s,lineHeight:"1.6"},overlayInnerStyle:{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:40,WebkitBoxOrient:"vertical",textOverflow:"ellipsis"},color:`${t.colors.grayscale.dark2}e6`},e)))}},4715:(e,t,n)=>{"use strict";n.d(t,{Ak:()=>E.Z,C0:()=>R.Z,D6:()=>A.Z,Gj:()=>C.Z,HY:()=>s.Z,IZ:()=>T.Z,JX:()=>l.Z,KU:()=>w.Z,O5:()=>_.Z,Od:()=>g.Z,Ol:()=>S.Z,Ph:()=>r.Z,Rg:()=>h.Z,T:()=>p.Z,Vp:()=>m.Z,X2:()=>u.Z,ZT:()=>b.Z,_e:()=>k.Z,aV:()=>d.ZP,gq:()=>f.Z,iz:()=>i.Z,mp:()=>v.Z,oc:()=>y.Z,qE:()=>a.C,qb:()=>o.Z,qz:()=>O.Z,r4:()=>N.Z,rb:()=>Z.Z,rj:()=>c.ZP,xT:()=>x.Z});var r=n(81315),o=n(84101),a=n(51890),l=n(15746),i=n(27049),s=n(14277),c=n(75302),d=n(8243),u=n(71230),g=n(33860),p=n(19650),h=n(27220),m=n(60331),v=n(6802),b=n(16809),f=n(81306),_=n(35247),R=n(71577),E=n(39144),N=n(9676),S=n(46445),C=n(13013),O=n(33746),y=n(77808),x=n(99441),T=n(8834),Z=n(31955),w=n(59314),A=n(73453),k=n(31097)},99543:(e,t,n)=>{"use strict";n.d(t,{E8:()=>Z,JB:()=>w,SJ:()=>E,_0:()=>y,gP:()=>C,gf:()=>S,hU:()=>T,p1:()=>O,wK:()=>N,zd:()=>x});var r=n(28368),o=n.n(r),a=n(45220),l=n.n(a),i=n(52353),s=n.n(i),c=n(57557),d=n.n(c),u=n(14176),g=n.n(u),p=n(18446),h=n.n(p),m=n(14670),v=n.n(m),b=n(14890),f=n(64417),_=n.n(f),R=n(55786);function E(e,t,n){const r={...e[t]},o={...n};return o.id||(o.id=v().generate()),r[o.id]=o,{...e,[t]:r}}function N(e,t,n,r){const o={...e[t]};return o[n.id]={...o[n.id],...r},{...e,[t]:o}}function S(e,t,n,r,o){void 0===o&&(o="id");const a=[];return e[t].forEach((e=>{n[o]===e[o]?a.push({...e,...r}):a.push(e)})),{...e,[t]:a}}function C(e,t,n,r){void 0===r&&(r="id");const o=[];return e[t].forEach((e=>{n[r]!==e[r]&&o.push(e)})),{...e,[t]:o}}function O(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function y(e,t,n,r){void 0===r&&(r=!1);const o={...n};o.id||(o.id=v().generate());const a={};return a[t]=r?[o,...e[t]]:[...e[t],o],{...e,...a}}function x(e,t,n,r){void 0===r&&(r=!1);const o=[...n];o.forEach((e=>{e.id||(e.id=v().generate())}));const a={};return a[t]=r?[...o,...e[t]]:[...e[t],...o],{...e,...a}}function T(e,t,n){void 0===e&&(e=!0),void 0===t&&(t={}),void 0===n&&(n=!1);const{paths:r,config:o}=t,a=b.qC;return e?a(_()(r,o)):a()}function Z(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let r=0;r<n;r+=1)if(e[r]!==t[r])return!1;return!0}function w(e,t,n){var r;void 0===n&&(n={ignoreUndefined:!1,ignoreNull:!1,ignoreFields:[]});let a=e,i=t;if(n.ignoreUndefined&&(a=g()(a,s()),i=g()(i,s())),n.ignoreNull&&(a=g()(a,l()),i=g()(i,l())),null!=(r=n.ignoreFields)&&r.length){const e=(0,R.Z)(n.ignoreFields);return o()(a,i,((t,n)=>h()((0,R.Z)(t).map((t=>d()(t,e))),(0,R.Z)(n).map((t=>d()(t,e))))))}return h()(a,i)}},10222:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(54076);const o=e=>(async e=>{if((0,r.G6)())try{const t=new ClipboardItem({"text/plain":e()});await navigator.clipboard.write([t])}catch{const t=await e();await navigator.clipboard.writeText(t)}else{const t=await e();await navigator.clipboard.writeText(t)}})(e).catch((()=>e().then((e=>new Promise(((t,n)=>{const r=document.getSelection();if(r){r.removeAllRanges();const t=document.createRange(),o=document.createElement("span");o.textContent=e,o.style.position="fixed",o.style.top="0",o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",document.body.appendChild(o),t.selectNode(o),r.addRange(t);try{document.execCommand("copy")||n()}catch(e){n()}document.body.removeChild(o),r.removeRange?r.removeRange(t):r.removeAllRanges()}t()}))))))},66785:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={SESSION_TIMED_OUT:"Your session timed out, please refresh your page and try again."}},98286:(e,t,n)=>{"use strict";n.d(t,{HR:()=>i,MV:()=>l,O$:()=>s,d7:()=>c});var r=n(55867),o=n(67663),a=n(66785);function l(e){let t={...e};var n,o,l;(t.errors&&t.errors.length>0&&(t.error=t.description=t.errors[0].message,t.link=null==(n=t.errors[0])||null==(o=n.extra)?void 0:o.link),!t.error&&t.message)&&("object"==typeof t.message&&(t.error=(null==(l=Object.values(t.message)[0])?void 0:l[0])||(0,r.t)("Invalid input")),"string"==typeof t.message&&(t.error=t.message));return t.stack?t={...t,error:(0,r.t)("Unexpected error: ")+(t.description||(0,r.t)("(no description, click to see stack trace)")),stacktrace:t.stack}:t.responseText&&t.responseText.indexOf("CSRF")>=0&&(t={...t,error:(0,r.t)(a.Z.SESSION_TIMED_OUT)}),{...t,error:t.error}}async function i(e,t){const{error:n,message:o}=await s(e);let a=(0,r.t)("Sorry, an unknown error occurred.");return n&&(a=(0,r.t)("Sorry, there was an error saving this %s: %s",t,n)),"string"==typeof o&&"Forbidden"===o&&(a=(0,r.t)("You do not have permission to edit this %s",t)),a}function s(e){return new Promise((t=>{if("string"==typeof e)return void t({error:e});if(e instanceof TypeError&&"Failed to fetch"===e.message)return void t({error:(0,r.t)("Network error")});if("timeout"in e&&"statusText"in e&&"timeout"===e.statusText)return void t({...e,error:(0,r.t)("Request timed out"),errors:[{error_type:o.C.FRONTEND_TIMEOUT_ERROR,extra:{timeout:e.timeout/1e3,issue_codes:[{code:1e3,message:(0,r.t)("Issue 1000 - The dataset is too large to query.")},{code:1001,message:(0,r.t)("Issue 1001 - The database is under an unusual load.")}]},level:"error",message:"Request timed out"}]});const n=e instanceof Response?e:e.response;if(n&&!n.bodyUsed)return void n.clone().json().then((e=>{const r={...n,...e};t(l(r))})).catch((()=>{n.text().then((e=>{t({...n,error:e})}))}));let a=e.statusText||e.message;a||(console.error("non-standard error:",e),a=(0,r.t)("An error occurred")),t({...n,error:a})}))}function c(e,t){let n=e;const r=(null==t?void 0:t.message)||(null==t?void 0:t.error);return r&&(n=`${n}:\n${r}`),n}},85494:(e,t,n)=>{var r={"./alert.svg":[57249,7249],"./alert_solid.svg":[52797,2797],"./alert_solid_small.svg":[71256,1256],"./area-chart-tile.svg":[37989,7989],"./ballot.svg":[87760,7760],"./bar-chart-tile.svg":[72122,3187],"./big-number-chart-tile.svg":[1402,1402],"./binoculars.svg":[38970,8970],"./bolt.svg":[4794,4794],"./bolt_small.svg":[49510,9510],"./bolt_small_run.svg":[36883,6883],"./calendar.svg":[65816,5816],"./cancel-x.svg":[77654,7654],"./cancel.svg":[14757,4757],"./cancel_solid.svg":[55777,5777],"./card_view.svg":[25838,5838],"./cards.svg":[81293,1293],"./cards_locked.svg":[69052,9052],"./caret_down.svg":[87832,7832],"./caret_left.svg":[80310,310],"./caret_right.svg":[64817,4817],"./caret_up.svg":[6011,9811],"./category.svg":[24851,4851],"./certified.svg":[88695,8695],"./check.svg":[83544,3544],"./checkbox-half.svg":[57405,7405],"./checkbox-off.svg":[75281,5281],"./checkbox-on.svg":[99013,9013],"./circle.svg":[60183,183],"./circle_check.svg":[93558,3558],"./circle_check_solid.svg":[70992,992],"./clock.svg":[50597,597],"./close.svg":[50999,999],"./code.svg":[16981,6981],"./cog.svg":[45962,5962],"./collapse.svg":[24266,4266],"./color_palette.svg":[65580,5580],"./components.svg":[80312,312],"./copy.svg":[23141,3141],"./cross-filter-badge.svg":[64625,4625],"./current-rendered-tile.svg":[82955,2955],"./cursor_target.svg":[96758,6758],"./database.svg":[15249,5249],"./dataset_physical.svg":[8312,8312],"./dataset_virtual.svg":[77156,5330],"./dataset_virtual_greyscale.svg":[84810,4810],"./default_db_image.svg":[51398,1398],"./download.svg":[112,112],"./drag.svg":[86507,6507],"./edit.svg":[93871,3871],"./edit_alt.svg":[86167,6167],"./email.svg":[50504,6668],"./error.svg":[67584,7584],"./error_solid.svg":[25641,5641],"./error_solid_small.svg":[92561,2983],"./error_solid_small_red.svg":[4273,4273],"./exclamation.svg":[35771,5771],"./expand.svg":[47922,7922],"./eye.svg":[11493,1493],"./eye_slash.svg":[45014,9109],"./favorite-selected.svg":[51568,1568],"./favorite-unselected.svg":[86682,6682],"./favorite_small_selected.svg":[1351,1351],"./field_abc.svg":[66545,215],"./field_boolean.svg":[87405,5507],"./field_date.svg":[65226,5226],"./field_derived.svg":[37404,4732],"./field_num.svg":[35201,5201],"./field_struct.svg":[91899,1899],"./file.svg":[20057,57],"./filter.svg":[19305,9305],"./filter_small.svg":[54474,4474],"./folder.svg":[86420,6420],"./full.svg":[23985,3985],"./function_x.svg":[44662,4662],"./gear.svg":[7610,7610],"./grid.svg":[68425,8425],"./image.svg":[92264,2264],"./import.svg":[42698,2698],"./info-solid.svg":[71605,1605],"./info.svg":[2713,2713],"./info_solid_small.svg":[33606,3606],"./join.svg":[85998,5998],"./keyboard.svg":[87850,7850],"./layers.svg":[85832,5832],"./lightbulb.svg":[54797,4797],"./line-chart-tile.svg":[88491,8491],"./link.svg":[99558,9558],"./list.svg":[45707,5707],"./list_view.svg":[38682,8682],"./location.svg":[61174,1174],"./lock_locked.svg":[55359,5359],"./lock_unlocked.svg":[6207,6207],"./map.svg":[18463,8463],"./message.svg":[64458,4458],"./minus.svg":[97183,7183],"./minus_solid.svg":[6371,6371],"./more_horiz.svg":[39325,9325],"./more_vert.svg":[91185,1185],"./move.svg":[74139,4139],"./nav_charts.svg":[75350,5350],"./nav_dashboard.svg":[66303,6303],"./nav_data.svg":[2267,2267],"./nav_explore.svg":[83749,3749],"./nav_home.svg":[44667,4667],"./nav_lab.svg":[43567,3567],"./note.svg":[46597,6126],"./offline.svg":[53265,3265],"./paperclip.svg":[22079,2079],"./pie-chart-tile.svg":[9873,9873],"./placeholder.svg":[18349,8349],"./plus.svg":[17460,7460],"./plus_large.svg":[66150,6150],"./plus_small.svg":[96447,6447],"./plus_solid.svg":[70600,600],"./queued.svg":[63240,3240],"./redo.svg":[99207,9207],"./refresh.svg":[25367,5367],"./running.svg":[5224,5224],"./save.svg":[36254,6254],"./search.svg":[30177,177],"./server.svg":[11075,1075],"./share.svg":[11263,1263],"./slack.svg":[42439,2439],"./sort.svg":[20336,336],"./sort_asc.svg":[79393,9393],"./sort_desc.svg":[32646,2646],"./sql.svg":[13325,3325],"./table-chart-tile.svg":[4421,4421],"./table.svg":[72403,2403],"./tag.svg":[30158,158],"./tags.svg":[90363,363],"./transparent.svg":[87803,7803],"./trash.svg":[62105,2105],"./triangle_change.svg":[98398,8398],"./triangle_down.svg":[40826,826],"./triangle_up.svg":[36819,6819],"./undo.svg":[39622,9622],"./up-level.svg":[65972,5972],"./user.svg":[99767,9767],"./warning.svg":[4758,4758],"./warning_solid.svg":[75224,5592],"./x-large.svg":[63955,3955],"./x-small.svg":[7716,7716]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=85494,e.exports=o},89419:(e,t,n)=>{"use strict";e.exports=n.p+"loading.cff8a5da..gif"}}]);
//# sourceMappingURL=6209.8914c31d64f4becfe0d6.entry.js.map