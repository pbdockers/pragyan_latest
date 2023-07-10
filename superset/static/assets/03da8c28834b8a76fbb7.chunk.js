"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5094],{25094:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var o=n(78580),a=n.n(o),i=n(67294),l=n(15926),s=n.n(l),r=n(45697),u=n.n(r),h=n(24198),d=n(35932),p=n(51995),c=n(55867),m=n(11064),y=n(60524),v=n(95826),g=n(31069),b=n(10581),T=n(81545),Z=n(68135),C=n(82199),w=n(79684),f=n(79069),S=n(10945),A=n(83734),L=n(82342),E=n(94301),_=n(69856),k=n(11965);const O="",x={name:u().string,annotationType:u().string,sourceType:u().string,color:u().string,opacity:u().string,style:u().string,width:u().number,showMarkers:u().bool,hideLine:u().bool,value:u().oneOfType([u().string,u().number]),overrides:u().object,show:u().bool,showLabel:u().bool,titleColumn:u().string,descriptionColumns:u().arrayOf(u().string),timeColumn:u().string,intervalEndColumn:u().string,vizType:u().string,error:u().string,colorScheme:u().string,addAnnotationLayer:u().func,removeAnnotationLayer:u().func,close:u().func},V={name:"",annotationType:S.qy,sourceType:"",color:O,opacity:"",style:"solid",width:1,showMarkers:!1,hideLine:!1,overrides:{},colorScheme:"d3Category10",show:!0,showLabel:!1,titleColumn:"",descriptionColumns:[],timeColumn:"",intervalEndColumn:"",addAnnotationLayer:()=>{},removeAnnotationLayer:()=>{},close:()=>{}},N=p.iK.div`
  && > div:first-child {
    padding-left: 0;
    padding-right: 0;
  }
`,D=()=>(0,k.tZ)(N,null,(0,k.tZ)(E.Tc,{title:(0,c.t)("No annotation layers"),description:(0,k.tZ)("span",null,(0,c.t)("Add an annotation layer")," ",(0,k.tZ)("a",{href:"/annotationlayer/list",target:"_blank",rel:"noopener noreferrer"},(0,c.t)("here")),"."),image:"empty.svg"}));var M={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};class R extends i.PureComponent{constructor(e){super(e);const{name:t,annotationType:n,sourceType:o,color:i,opacity:l,style:s,width:r,showMarkers:u,hideLine:h,value:d,overrides:p,show:c,showLabel:y,titleColumn:v,descriptionColumns:g,timeColumn:b,intervalEndColumn:T,vizType:Z}=e;("since"in p||"until"in p)&&(p.time_range=null,delete p.since,delete p.until);const C=(0,m.Z)().get(Z),w=(null==C?void 0:C.supportedAnnotationTypes)||[],f=a()(w).call(w,n)?n:w[0];this.state={name:t,annotationType:f,sourceType:o,value:d,overrides:p,show:c,showLabel:y,titleColumn:v,descriptionColumns:g,timeColumn:b,intervalEndColumn:T,color:i||O,opacity:l,style:s,width:r,showMarkers:u,hideLine:h,isNew:!t,isLoadingOptions:!0,valueOptions:[]},this.submitAnnotation=this.submitAnnotation.bind(this),this.deleteAnnotation=this.deleteAnnotation.bind(this),this.applyAnnotation=this.applyAnnotation.bind(this),this.fetchOptions=this.fetchOptions.bind(this),this.handleAnnotationType=this.handleAnnotationType.bind(this),this.handleAnnotationSourceType=this.handleAnnotationSourceType.bind(this),this.handleValue=this.handleValue.bind(this),this.isValidForm=this.isValidForm.bind(this)}componentDidMount(){const{annotationType:e,sourceType:t,isLoadingOptions:n}=this.state;this.fetchOptions(e,t,n)}componentDidUpdate(e,t){t.sourceType!==this.state.sourceType&&this.fetchOptions(this.state.annotationType,this.state.sourceType,!0)}getSupportedSourceTypes(e){var t;const n=(0,m.Z)().entries().filter((t=>{let{value:n}=t;return n.canBeAnnotationType(e)})).map((e=>{let{key:t,value:n}=e;return{value:t,label:n.name}}));return null!=(t=S.J_[e])&&t.supportNativeSource&&n.unshift(S.dS.NATIVE),n}isValidFormulaAnnotation(e,t){return t!==S.DT.FORMULA||(0,y.$)(e)}isValidForm(){const{name:e,annotationType:t,sourceType:n,value:o,timeColumn:a,intervalEndColumn:i}=this.state,l=[(0,v.Z)(e),(0,v.Z)(t),(0,v.Z)(o)];return n!==S.S4.NATIVE&&(t===S.DT.EVENT&&l.push((0,v.Z)(a)),t===S.DT.INTERVAL&&(l.push((0,v.Z)(a)),l.push((0,v.Z)(i)))),l.push(!this.isValidFormulaAnnotation(o,t)),!l.filter((e=>e)).length}handleAnnotationType(e){this.setState({annotationType:e,sourceType:null,value:null})}handleAnnotationSourceType(e){const{sourceType:t}=this.state;t!==e&&this.setState({sourceType:e,value:null,isLoadingOptions:!0})}handleValue(e){this.setState({value:e,descriptionColumns:[],intervalEndColumn:null,timeColumn:null,titleColumn:null,overrides:{time_range:null}})}fetchOptions(e,t,n){if(n)if(t===S.S4.NATIVE){const e=s().encode({page:0,page_size:_.cM});g.Z.get({endpoint:`/api/v1/annotation_layer/?q=${e}`}).then((e=>{let{json:t}=e;const n=t?t.result.map((e=>({value:e.id,label:e.name}))):[];this.setState({isLoadingOptions:!1,valueOptions:n})}))}else if((0,S.m7)(t)){const t=s().encode({filters:[{col:"id",opr:"chart_owned_created_favored_by_me",value:!0}],order_column:"slice_name",order_direction:"asc",page:0,page_size:_.cM});g.Z.get({endpoint:`/api/v1/chart/?q=${t}`}).then((t=>{let{json:n}=t;const o=(0,m.Z)();this.setState({isLoadingOptions:!1,valueOptions:n.result.filter((t=>{const n=o.get(t.viz_type);return n&&n.canBeAnnotationType(e)})).map((e=>{var t;return{value:e.id,label:e.slice_name,slice:{...e,data:{...e.form_data,groupby:null==(t=e.form_data.groupby)?void 0:t.map((e=>(0,b.Z)(e)))}}}}))})}))}else this.setState({isLoadingOptions:!1,valueOptions:[]})}deleteAnnotation(){this.props.removeAnnotationLayer(),this.props.close()}applyAnnotation(){if(this.isValidForm()){const e={};["name","annotationType","sourceType","color","opacity","style","width","showMarkers","hideLine","value","overrides","show","showLabel","titleColumn","descriptionColumns","timeColumn","intervalEndColumn"].forEach((t=>{null!==this.state[t]&&(e[t]=this.state[t])})),e.color===O&&(e.color=null),this.props.addAnnotationLayer(e),this.setState({isNew:!1})}}submitAnnotation(){this.applyAnnotation(),this.props.close()}renderOption(e){return(0,k.tZ)("span",{css:M,title:e.label},e.label)}renderValueConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,isLoadingOptions:a}=this.state;let i="",l="";return(0,S.m7)(t)?t===S.S4.NATIVE?(i=(0,c.t)("Annotation layer"),l=(0,c.t)("Select the Annotation Layer you would like to use.")):(i=(0,c.t)("Chart"),l=(0,c.t)("Use another existing chart as a source for annotations and overlays.\n          Your chart must be one of these visualization types: [%s]",this.getSupportedSourceTypes(e).map((e=>e.label)).join(", "))):e===S.DT.FORMULA&&(i=(0,c.t)("Formula"),l=(0,c.t)("Expects a formula with depending time parameter 'x'\n        in milliseconds since epoch. mathjs is used to evaluate the formulas.\n        Example: '2x+5'")),(0,S.m7)(t)?(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer value"),name:"annotation-layer-value",showHeader:!0,hovered:!0,description:l,label:i,placeholder:"",options:o,isLoading:a,value:n,onChange:this.handleValue,validationErrors:n?[]:["Mandatory"],optionRenderer:this.renderOption,notFoundContent:(0,k.tZ)(D,null)}):e===S.DT.FORMULA?(0,k.tZ)(w.Z,{name:"annotation-layer-value",hovered:!0,showHeader:!0,description:l,label:i,placeholder:"",value:n,onChange:this.handleValue,validationErrors:this.isValidFormulaAnnotation(n,e)?[]:[(0,c.t)("Bad formula.")]}):""}renderSliceConfiguration(){const{annotationType:e,sourceType:t,value:n,valueOptions:o,overrides:a,titleColumn:i,timeColumn:l,intervalEndColumn:s,descriptionColumns:r}=this.state,{slice:u}=o.find((e=>e.value===n))||{};if(t!==S.S4.NATIVE&&u){const t=(u.data.groupby||[]).concat(u.data.all_columns||[]).map((e=>({value:e,label:e}))),n=u.data.include_time?[{value:"__timestamp",label:"__timestamp"}].concat(t):t;return(0,k.tZ)("div",{style:{marginRight:"2rem"}},(0,k.tZ)(A.Z,{isSelected:!0,title:(0,c.t)("Annotation Slice Configuration"),info:(0,c.t)("This section allows you to configure how to use the slice\n              to generate annotations.")},(e===S.DT.EVENT||e===S.DT.INTERVAL)&&(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer time column"),hovered:!0,name:"annotation-layer-time-column",label:e===S.DT.INTERVAL?(0,c.t)("Interval start column"):(0,c.t)("Event time column"),description:(0,c.t)("This column must contain date/time information."),validationErrors:l?[]:["Mandatory"],clearable:!1,options:n,value:l,onChange:e=>this.setState({timeColumn:e})}),e===S.DT.INTERVAL&&(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer interval end"),hovered:!0,name:"annotation-layer-intervalEnd",label:(0,c.t)("Interval End column"),description:(0,c.t)("This column must contain date/time information."),validationErrors:s?[]:["Mandatory"],options:t,value:s,onChange:e=>this.setState({intervalEndColumn:e})}),(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer title column"),hovered:!0,name:"annotation-layer-title",label:(0,c.t)("Title Column"),description:(0,c.t)("Pick a title for you annotation."),options:[{value:"",label:(0,c.t)("None")}].concat(t),value:i,onChange:e=>this.setState({titleColumn:e})}),e!==S.DT.TIME_SERIES&&(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer description columns"),hovered:!0,name:"annotation-layer-title",label:(0,c.t)("Description Columns"),description:(0,c.t)("Pick one or more columns that should be shown in the annotation. If you don't select a column all of them will be shown."),multi:!0,options:t,value:r,onChange:e=>this.setState({descriptionColumns:e})}),(0,k.tZ)("div",{style:{marginTop:"1rem"}},(0,k.tZ)(f.Z,{hovered:!0,name:"annotation-override-time_range",label:(0,c.t)("Override time range"),description:(0,c.t)('This controls whether the "time_range" field from the current\n                  view should be passed down to the chart containing the annotation data.'),value:"time_range"in a,onChange:e=>{delete a.time_range,e?this.setState({overrides:{...a,time_range:null}}):this.setState({overrides:{...a}})}}),(0,k.tZ)(f.Z,{hovered:!0,name:"annotation-override-timegrain",label:(0,c.t)("Override time grain"),description:(0,c.t)("This controls whether the time grain field from the current\n                  view should be passed down to the chart containing the annotation data."),value:"time_grain_sqla"in a,onChange:e=>{delete a.time_grain_sqla,delete a.granularity,e?this.setState({overrides:{...a,time_grain_sqla:null,granularity:null}}):this.setState({overrides:{...a}})}}),(0,k.tZ)(w.Z,{hovered:!0,name:"annotation-layer-timeshift",label:(0,c.t)("Time Shift"),description:(0,c.t)("Time delta in natural language\n                  (example:  24 hours, 7 days, 56 weeks, 365 days)"),placeholder:"",value:a.time_shift,onChange:e=>this.setState({overrides:{...a,time_shift:e}})}))))}return""}renderDisplayConfiguration(){const{color:e,opacity:t,style:n,width:o,showMarkers:a,hideLine:i,annotationType:l}=this.state,s=(0,T.Z)().get(this.props.colorScheme).colors.concat();return e&&e!==O&&!s.find((t=>t.toLowerCase()===e.toLowerCase()))&&s.push(e),(0,k.tZ)(A.Z,{isSelected:!0,title:(0,c.t)("Display configuration"),info:(0,c.t)("Configure your how you overlay is displayed here.")},(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer stroke"),name:"annotation-layer-stroke",label:(0,c.t)("Style"),options:[{value:"solid",label:(0,c.t)("Solid")},{value:"dashed",label:(0,c.t)("Dashed")},{value:"longDashed",label:(0,c.t)("Long dashed")},{value:"dotted",label:(0,c.t)("Dotted")}],value:n,clearable:!1,onChange:e=>this.setState({style:e})}),(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer opacity"),name:"annotation-layer-opacity",label:(0,c.t)("Opacity"),options:[{value:"",label:(0,c.t)("Solid")},{value:"opacityLow",label:"0.2"},{value:"opacityMedium",label:"0.5"},{value:"opacityHigh",label:"0.8"}],value:t,onChange:e=>this.setState({opacity:e})}),(0,k.tZ)("div",null,(0,k.tZ)(L.Z,{label:(0,c.t)("Color")}),(0,k.tZ)("div",{style:{display:"flex",flexDirection:"column"}},(0,k.tZ)(h.Ie,{color:e,colors:s,onChangeComplete:e=>this.setState({color:e.hex})}),(0,k.tZ)(d.Z,{style:{marginTop:"0.5rem",marginBottom:"0.5rem"},buttonStyle:e===O?"success":"default",buttonSize:"xsmall",onClick:()=>this.setState({color:O})},(0,c.t)("Automatic Color")))),(0,k.tZ)(w.Z,{name:"annotation-layer-stroke-width",label:(0,c.t)("Line width"),isInt:!0,value:o,onChange:e=>this.setState({width:e})}),l===S.DT.TIME_SERIES&&(0,k.tZ)(f.Z,{hovered:!0,name:"annotation-layer-show-markers",label:(0,c.t)("Show Markers"),description:(0,c.t)("Shows or hides markers for the time series"),value:a,onChange:e=>this.setState({showMarkers:e})}),l===S.DT.TIME_SERIES&&(0,k.tZ)(f.Z,{hovered:!0,name:"annotation-layer-hide-line",label:(0,c.t)("Hide Line"),description:(0,c.t)("Hides the Line for the time series"),value:i,onChange:e=>this.setState({hideLine:e})}))}render(){const{isNew:e,name:t,annotationType:n,sourceType:o,show:a,showLabel:l}=this.state,s=this.isValidForm(),r=(0,m.Z)().get(this.props.vizType),u=r?r.supportedAnnotationTypes.map((e=>S.J_[e])):[],h=this.getSupportedSourceTypes(n);return(0,k.tZ)(i.Fragment,null,this.props.error&&(0,k.tZ)("span",{style:{color:this.props.theme.colors.error.base}},"ERROR: ",this.props.error),(0,k.tZ)("div",{style:{display:"flex",flexDirection:"row"}},(0,k.tZ)("div",{style:{marginRight:"2rem"}},(0,k.tZ)(A.Z,{isSelected:!0,title:(0,c.t)("Layer configuration"),info:(0,c.t)("Configure the basics of your Annotation Layer.")},(0,k.tZ)(w.Z,{name:"annotation-layer-name",label:(0,c.t)("Name"),placeholder:"",value:t,onChange:e=>this.setState({name:e}),validationErrors:t?[]:[(0,c.t)("Mandatory")]}),(0,k.tZ)(f.Z,{name:"annotation-layer-hide",label:(0,c.t)("Hide layer"),value:!a,onChange:e=>this.setState({show:!e})}),(0,k.tZ)(f.Z,{name:"annotation-label-show",label:(0,c.t)("Show label"),value:l,hovered:!0,description:(0,c.t)("Whether to always show the annotation label"),onChange:e=>this.setState({showLabel:e})}),(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation layer type"),hovered:!0,description:(0,c.t)("Choose the annotation layer type"),label:(0,c.t)("Annotation layer type"),name:"annotation-layer-type",clearable:!1,options:u,value:n,onChange:this.handleAnnotationType}),h.length>0&&(0,k.tZ)(C.Z,{ariaLabel:(0,c.t)("Annotation source type"),hovered:!0,description:(0,c.t)("Choose the source of your annotations"),label:(0,c.t)("Annotation source"),name:"annotation-source-type",options:h,notFoundContent:(0,k.tZ)(D,null),value:o,onChange:this.handleAnnotationSourceType,validationErrors:o?[]:[(0,c.t)("Mandatory")]}),this.renderValueConfiguration())),this.renderSliceConfiguration(),this.renderDisplayConfiguration()),(0,k.tZ)("div",{style:{display:"flex",justifyContent:"space-between"}},e?(0,k.tZ)(d.Z,{buttonSize:"small",onClick:()=>this.props.close()},(0,c.t)("Cancel")):(0,k.tZ)(d.Z,{buttonSize:"small",onClick:this.deleteAnnotation},(0,c.t)("Remove")),(0,k.tZ)("div",null,(0,k.tZ)(d.Z,{buttonSize:"small",disabled:!s,onClick:this.applyAnnotation},(0,c.t)("Apply")),(0,k.tZ)(d.Z,{buttonSize:"small",buttonStyle:"primary",disabled:!s,onClick:this.submitAnnotation},(0,c.t)("OK")))))}}R.propTypes=x,R.defaultProps=V;const I=(0,Z.b)(R)},60524:(e,t,n)=>{n.d(t,{$:()=>r,f:()=>s});var o=n(22087),a=n.n(o);const i=[[new RegExp(/==/g),"Eq"],[new RegExp(/>=/g),"Gte"],[new RegExp(/<=/g),"Lte"],[new RegExp(/>/g),"Gt"],[new RegExp(/</g),"Lt"]],l=[{type:3,token:"x",show:"x",value:"x"},{type:2,token:"&",show:"&",value:(e,t)=>e&t},{type:2,token:"|",show:"|",value:(e,t)=>e|t},{type:2,token:"and",show:"and",value:(e,t)=>e&&t},{type:2,token:"xor",show:"xor",value:(e,t)=>e^t},{type:2,token:"or",show:"or",value:(e,t)=>Number(e||t)},{type:2,token:"Eq",show:"Eq",value:(e,t)=>Number(e===t)},{type:2,token:"Lt",show:"Lt",value:(e,t)=>Number(e<t)},{type:2,token:"Lte",show:"Lte",value:(e,t)=>Number(e<=t)},{type:2,token:"Gt",show:"Gt",value:(e,t)=>Number(e>t)},{type:2,token:"Gte",show:"Gte",value:(e,t)=>Number(e>=t)}];function s(e,t){var n;let o=e;i.forEach((e=>{let[t,n]=e;o=o.replace(t,n)}));const s=String(o).split("=");return o=null!=(n=s[1])?n:s[0],Number(a().eval(o,l,{x:t}))}function r(e){try{s(e,0)}catch(e){return!1}return!0}}}]);
//# sourceMappingURL=03da8c28834b8a76fbb7.chunk.js.map