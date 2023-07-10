"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8623],{88623:(t,e,r)=>{r.r(e),r.d(e,{DEFAULT_MAX_ZOOM:()=>m,DEFAULT_POINT_RADIUS:()=>w,default:()=>M});var i=r(5872),o=r.n(i),s=r(67294),n=r(45697),a=r.n(n),l=r(90530),g=r(81458);function d(t,e){let r,i=e;return r=e?Math.round(t*(i=10**i))/i:Math.round(t),r}function p(t,e,r){const i=e*(Math.PI/180);return d(t/(40075.16*Math.cos(i)/2**(r+9)),2)}var h=r(11965);const u={aggregation:a().string,compositeOperation:a().string,dotRadius:a().number,lngLatAccessor:a().func,locations:a().arrayOf(a().object).isRequired,pointRadiusUnit:a().string,renderWhileDragging:a().bool,rgb:a().arrayOf(a().oneOfType([a().string,a().number])),zoom:a().number};class c extends s.PureComponent{constructor(t){super(t),this.redraw=this.redraw.bind(this)}drawText(t,e,r){void 0===r&&(r={});const{fontHeight:i=0,label:o="",radius:s=0,rgb:n=[0,0,0],shadow:a=!1}=r,l=1.8*s,g=.2126*n[1]+.7152*n[2]+.0722*n[3];t.globalCompositeOperation="source-over",t.fillStyle=g<=110?"white":"black",t.font=`${i}px sans-serif`,t.textAlign="center",t.textBaseline="middle",a&&(t.shadowBlur=15,t.shadowColor=g<=110?"black":"");const d=t.measureText(o).width;if(d>l){const e=i/d;t.font=e*l+"px sans-serif"}const{compositeOperation:p}=this.props;t.fillText(o,e[0],e[1]),t.globalCompositeOperation=p,t.shadowBlur=0,t.shadowColor=""}redraw(t){let{width:e,height:r,ctx:i,isDragging:o,project:s}=t;const{aggregation:n,compositeOperation:a,dotRadius:l,lngLatAccessor:g,locations:h,pointRadiusUnit:u,renderWhileDragging:c,rgb:b,zoom:m}=this.props,w=l,f=[];h.forEach(((t,e)=>{t.properties.cluster&&(f[e]=((t,e)=>{const r=t.point_count;if(!e)return r;if("sum"===e||"min"===e||"max"===e)return t[e];const{sum:i}=t,o=i/r;if("mean"===e)return Math.round(100*o)/100;const{squaredSum:s}=t,n=s/r-(i/r)**2;return"var"===e?Math.round(100*n)/100:"stdev"===e?Math.round(100*Math.sqrt(n))/100:r})(t.properties,n))}),this);const C=Math.max(...f.filter((t=>!Number.isNaN(t))));i.clearRect(0,0,e,r),i.globalCompositeOperation=a,!c&&o||!h||h.forEach((function(t,o){const n=s(g(t)),a=[d(n[0],1),d(n[1],1)];if(a[0]+w>=0&&a[0]-w<e&&a[1]+w>=0&&a[1]-w<r)if(i.beginPath(),t.properties.cluster){let t=f[o];const e=d((t/C)**.5*w,1),r=d(.5*e,1),[s,n]=a,l=i.createRadialGradient(s,n,e,s,n,0);l.addColorStop(1,`rgba(${b[1]}, ${b[2]}, ${b[3]}, 0.8)`),l.addColorStop(0,`rgba(${b[1]}, ${b[2]}, ${b[3]}, 0)`),i.arc(a[0],a[1],e,0,2*Math.PI),i.fillStyle=l,i.fill(),Number.isFinite(parseFloat(t))&&(t>=1e4?t=`${Math.round(t/1e3)}k`:t>=1e3&&(t=Math.round(t/100)/10+"k"),this.drawText(i,a,{fontHeight:r,label:t,radius:e,rgb:b,shadow:!0}))}else{const e=w/6,r=t.properties.radius,o=t.properties.metric;let s,n=null===r?e:r;if(null!==r){const e=g(t)[1];"Kilometers"===u?(s=`${d(n,2)}km`,n=p(n,e,m)):"Miles"===u&&(s=`${d(n,2)}mi`,n=p(1.60934*n,e,m))}null!==o&&(s=Number.isFinite(parseFloat(o))?d(o,2):o),n||(n=e),i.arc(a[0],a[1],d(n,1),0,2*Math.PI),i.fillStyle=`rgb(${b[1]}, ${b[2]}, ${b[3]})`,i.fill(),void 0!==s&&this.drawText(i,a,{fontHeight:d(n,1),label:s,radius:n,rgb:b,shadow:!1})}}),this)}render(){return(0,h.tZ)(l.s0,{redraw:this.redraw})}}c.propTypes=u,c.defaultProps={compositeOperation:"source-over",dotRadius:4,lngLatAccessor:t=>[t[0],t[1]],renderWhileDragging:!0};const b=c,m=16,w=60,f={width:a().number,height:a().number,aggregatorName:a().string,clusterer:a().object,globalOpacity:a().number,hasCustomMetric:a().bool,mapStyle:a().string,mapboxApiKey:a().string.isRequired,onViewportChange:a().func,pointRadius:a().number,pointRadiusUnit:a().string,renderWhileDragging:a().bool,rgb:a().array,bounds:a().array},C={width:400,height:400,globalOpacity:1,onViewportChange:()=>{},pointRadius:w,pointRadiusUnit:"Pixels"};class y extends s.Component{constructor(t){super(t);const{width:e,height:r,bounds:i}=this.props,o=new g.Z({width:e,height:r}).fitBounds(i),{latitude:s,longitude:n,zoom:a}=o;this.state={viewport:{longitude:n,latitude:s,zoom:a}},this.handleViewportChange=this.handleViewportChange.bind(this)}handleViewportChange(t){this.setState({viewport:t});const{onViewportChange:e}=this.props;e(t)}render(){const{width:t,height:e,aggregatorName:r,clusterer:i,globalOpacity:s,mapStyle:n,mapboxApiKey:a,pointRadius:g,pointRadiusUnit:d,renderWhileDragging:p,rgb:u,hasCustomMetric:c,bounds:m}=this.props,{viewport:w}=this.state,f=void 0!==w.isDragging&&w.isDragging,C=.5*t/100,y=.5*e/100,M=[m[0][0]-C,m[0][1]-y,m[1][0]+C,m[1][1]+y],x=i.getClusters(M,Math.round(w.zoom));return(0,h.tZ)(l.ZP,o()({},w,{mapStyle:n,width:t,height:e,mapboxApiAccessToken:a,onViewportChange:this.handleViewportChange,preserveDrawingBuffer:!0}),(0,h.tZ)(b,o()({},w,{isDragging:f,locations:x,dotRadius:g,pointRadiusUnit:d,rgb:u,globalOpacity:s,compositeOperation:"screen",renderWhileDragging:p,aggregation:c?r:null,lngLatAccessor:t=>{const{coordinates:e}=t.geometry;return[e[0],e[1]]}})))}}y.propTypes=f,y.defaultProps=C;const M=y}}]);
//# sourceMappingURL=0dfe5fdeff8c56bcee19.chunk.js.map