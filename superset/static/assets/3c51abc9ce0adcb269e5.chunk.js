"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1441,5422],{51331:(i,n,o)=>{o.d(n,{Z:()=>c});const e={pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingActive:!1,pickingAttribute:!1},c={inject:{"vs:DECKGL_FILTER_COLOR":"\n  picking_setPickingColor(geometry.pickingColor);\n  // for picking depth values\n  picking_setPickingAttribute(geometry.position.z);\n  ","fs:DECKGL_FILTER_COLOR":{order:99,injection:"\n  // use highlight color if this fragment belongs to the selected object.\n  color = picking_filterHighlightColor(color);\n\n  // use picking color if rendering to picking FBO.\n  color = picking_filterPickingColor(color);\n    "}},name:"picking",vs:"uniform bool picking_uActive;\nuniform bool picking_uAttribute;\nuniform vec3 picking_uSelectedColor;\nuniform bool picking_uSelectedColorValid;\n\nout vec4 picking_vRGBcolor_Avalid;\n\nconst float COLOR_SCALE = 1. / 255.;\n\nbool picking_isColorValid(vec3 color) {\n  return dot(color, vec3(1.0)) > 0.001;\n}\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    picking_uSelectedColorValid &&\n    !picking_isColorValid(abs(vertexColor - picking_uSelectedColor));\n}\n\nvoid picking_setPickingColor(vec3 pickingColor) {\n  if (picking_uActive) {\n    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n\n    if (!picking_uAttribute) {\n      picking_vRGBcolor_Avalid.rgb = pickingColor * COLOR_SCALE;\n    }\n  } else {\n    picking_vRGBcolor_Avalid.a = float(isVertexPicked(pickingColor));\n  }\n}\n\nvoid picking_setPickingAttribute(float value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.r = value;\n  }\n}\nvoid picking_setPickingAttribute(vec2 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rg = value;\n  }\n}\nvoid picking_setPickingAttribute(vec3 value) {\n  if (picking_uAttribute) {\n    picking_vRGBcolor_Avalid.rgb = value;\n  }\n}\n",fs:"uniform bool picking_uActive;\nuniform vec3 picking_uSelectedColor;\nuniform vec4 picking_uHighlightColor;\n\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\n  if (picking_uActive) {\n    return color;\n  }\n  bool selected = bool(picking_vRGBcolor_Avalid.a);\n\n  if (selected) {\n    float highLightAlpha = picking_uHighlightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\nvec4 picking_filterPickingColor(vec4 color) {\n  if (picking_uActive) {\n    if (picking_vRGBcolor_Avalid.a == 0.0) {\n      discard;\n    }\n    return picking_vRGBcolor_Avalid;\n  }\n  return color;\n}\nvec4 picking_filterColor(vec4 color) {\n  vec4 highightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highightColor);\n}\n\n",getUniforms:function(i=e){const n={};if(void 0!==i.pickingSelectedColor)if(i.pickingSelectedColor){const o=i.pickingSelectedColor.slice(0,3);n.picking_uSelectedColorValid=1,n.picking_uSelectedColor=o}else n.picking_uSelectedColorValid=0;if(i.pickingHighlightColor){const o=Array.from(i.pickingHighlightColor,(i=>i/255));Number.isFinite(o[3])||(o[3]=1),n.picking_uHighlightColor=o}return void 0!==i.pickingActive&&(n.picking_uActive=Boolean(i.pickingActive),n.picking_uAttribute=Boolean(i.pickingAttribute)),n}}}}]);
//# sourceMappingURL=3c51abc9ce0adcb269e5.chunk.js.map