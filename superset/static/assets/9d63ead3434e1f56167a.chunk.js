"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6693],{96693:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c}),r(67294);var n=r(63475),l=r(99381),a=r(11965);function c(e){const{height:t,width:r,echartOptions:c,selectedValues:s,refs:u}=e,i=(0,l.C0)(e);return(0,a.tZ)(n.Z,{refs:u,height:t,width:r,echartOptions:c,eventHandlers:i,selectedValues:s})}},63475:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(78580),l=r.n(n),a=r(67294),c=r(51995),s=r(31431),u=r(11965);const i=c.iK.div`
  height: ${e=>{let{height:t}=e;return t}};
  width: ${e=>{let{width:t}=e;return t}};
`;function o(e,t){let{width:r,height:n,echartOptions:c,eventHandlers:o,zrEventHandlers:h,selectedValues:d={},refs:f}=e;const p=(0,a.useRef)(null);f&&(f.divRef=p);const g=(0,a.useRef)(),v=(0,a.useMemo)((()=>Object.keys(d)||[]),[d]),m=(0,a.useRef)([]);(0,a.useImperativeHandle)(t,(()=>({getEchartInstance:()=>g.current}))),(0,a.useEffect)((()=>{p.current&&(g.current||(g.current=(0,s.S1)(p.current)),Object.entries(o||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=g.current)||t.off(n),null==(r=g.current)||r.on(n,l)})),Object.entries(h||{}).forEach((e=>{var t,r;let[n,l]=e;null==(t=g.current)||t.getZr().off(n),null==(r=g.current)||r.getZr().on(n,l)})),g.current.setOption(c,!0))}),[c,o,h]),(0,a.useEffect)((()=>{g.current&&(g.current.dispatchAction({type:"downplay",dataIndex:m.current.filter((e=>!l()(v).call(v,e)))}),v.length&&g.current.dispatchAction({type:"highlight",dataIndex:v}),m.current=v)}),[v]);const b=(0,a.useCallback)((e=>{let{width:t,height:r}=e;g.current&&g.current.resize({width:t,height:r})}),[]);return(0,a.useEffect)((()=>(b({width:r,height:n}),()=>{var e;return null==(e=g.current)?void 0:e.dispose()})),[]),(0,a.useLayoutEffect)((()=>{b({width:r,height:n})}),[r,n,b]),(0,u.tZ)(i,{ref:p,height:n,width:r})}const h=(0,a.forwardRef)(o)},99381:(e,t,r)=>{r.d(t,{C0:()=>d});var n=r(78580),l=r.n(n),a=r(51115),c=r(67190),s=r(10581),u=r(6915);const i=(e,t,r)=>n=>{const a=Object.values(e);let c;c=l()(a).call(a,n)?a.filter((e=>e!==n)):[n];const s=c.map((e=>r[e]));return{dataMask:{extraFormData:{filters:0===c.length?[]:t.map(((e,t)=>{const r=s.map((e=>e[t]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}}))},filterState:{value:s.length?s:null,selectedValues:c.length?c:null}},isCurrentValueSelected:l()(a).call(a,n)}},o=(e,t,r)=>n=>{var l;let{name:a}=n;if(!r)return;const c=null==(l=e(a))?void 0:l.dataMask;c&&t(c)},h=(e,t,r,n,l,i)=>o=>{if(t){o.event.stop();const h=o.event.event,d=[];if(e.length>0){const t=r[o.name];e.forEach(((e,r)=>{d.push({col:e,op:"==",val:t[r],formattedVal:(0,u.mj)(t[r],{timeFormatter:(0,a.bt)(l.dateFormat),numberFormatter:(0,c.JB)(l.numberFormat),coltype:null==i?void 0:i[(0,s.Z)(e)]})})}))}t(h.clientX,h.clientY,{drillToDetail:d,crossFilter:n(o.name),drillBy:{filters:d,groupbyFieldName:"groupby"}})}},d=e=>{const{groupby:t,onContextMenu:r,setDataMask:n,labelMap:l,emitCrossFilters:a,selectedValues:c,coltypeMapping:s,formData:u}=e;return{click:o(i(c,t,l),n,a),contextmenu:h(t,r,l,i(c,t,l),u,s)}}}}]);
//# sourceMappingURL=9d63ead3434e1f56167a.chunk.js.map