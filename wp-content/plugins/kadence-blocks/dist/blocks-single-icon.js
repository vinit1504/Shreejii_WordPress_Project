(()=>{var e={4184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var r in n)i.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9543:e=>{"use strict";e.exports=window.kadence.components},6222:e=>{"use strict";e.exports=window.kadence.helpers},9995:e=>{"use strict";e.exports=window.kadence.icons},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i);const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"title":"Single Icon","name":"kadence/single-icon","parent":["kadence/icon"],"category":"kadence-blocks","attributes":{"uniqueID":{"type":"string","default":""},"icon":{"type":"string","default":"fe_aperture"},"link":{"type":"string","default":""},"target":{"type":"string","default":"_self"},"size":{"type":"number","default":50},"width":{"type":"number","default":2},"title":{"type":"string","default":""},"color":{"type":"string","default":""},"background":{"type":"string","default":"transparent"},"border":{"type":"string","default":""},"borderRadius":{"type":"number","default":0},"borderWidth":{"type":"number","default":2},"padding":{"type":"array","default":["xs","xs","xs","xs"]},"paddingUnit":{"type":"string","default":"px"},"style":{"type":"string","default":"default"},"margin":{"type":"array","default":["","","",""]},"marginUnit":{"type":"string","default":"px"},"hColor":{"type":"string","default":""},"hBackground":{"type":"string","default":""},"hBorder":{"type":"string","default":""},"linkTitle":{"type":"string","default":""},"tabletSize":{"type":"number","default":""},"mobileSize":{"type":"number","default":""},"tabletMargin":{"type":"array","default":["","","",""]},"mobileMargin":{"type":"array","default":["","","",""]},"tabletPadding":{"type":"array","default":["","","",""]},"mobilePadding":{"type":"array","default":["","","",""]},"inQueryBlock":{"type":"boolean","default":false}},"supports":{"ktdynamic":true,"html":false,"reusable":false,"kbMetadata":true},"usesContext":["postId","queryId"]}');var t=n(9995),a=n(9307),o=n(9543),l=n(6222),r=n(9818);function d(e){let{attributes:t,previewDevice:n}=e;const{inQueryBlock:i,icon:r,link:d,target:c,size:s,width:u,title:g,text:p,hColor:b,hBackground:v,tabletSize:k,hBorder:m,color:f,background:y,border:h,borderRadius:C,padding:_,borderWidth:w,style:x,linkTitle:S,level:I,blockAlignment:P,textAlignment:E,tabletTextAlignment:B,mobileTextAlignment:O,tabletPadding:T,mobilePadding:z,paddingUnit:D,tabletMargin:U,mobileMargin:A,margin:R,marginUnit:M,mobileSize:q,uniqueID:N,verticalAlignment:K}=t,$=(0,l.getPreviewSize)(n,s||void 0,void 0!==k&&k?k:void 0,void 0!==q&&q?q:void 0),W=(0,l.getPreviewSize)(n,R&&void 0!==R[0]?R[0]:void 0,U&&void 0!==U[0]?U[0]:void 0,A&&void 0!==A[0]?A[0]:void 0),j=(0,l.getPreviewSize)(n,R&&void 0!==R[1]?R[1]:void 0,U&&void 0!==U[1]?U[1]:void 0,A&&void 0!==A[1]?A[1]:void 0),L=(0,l.getPreviewSize)(n,R&&void 0!==R[2]?R[2]:void 0,U&&void 0!==U[2]?U[2]:void 0,A&&void 0!==A[2]?A[2]:void 0),V=(0,l.getPreviewSize)(n,R&&void 0!==R[3]?R[3]:void 0,U&&void 0!==U[3]?U[3]:void 0,A&&void 0!==A[3]?A[3]:void 0),F=(0,l.getPreviewSize)(n,_&&void 0!==_[0]?_[0]:void 0,T&&void 0!==T[0]?T[0]:void 0,z&&void 0!==z[0]?z[0]:void 0),Q=(0,l.getPreviewSize)(n,_&&void 0!==_[1]?_[1]:void 0,T&&void 0!==T[1]?T[1]:void 0,z&&void 0!==z[1]?z[1]:void 0),H=(0,l.getPreviewSize)(n,_&&void 0!==_[2]?_[2]:void 0,T&&void 0!==T[2]?T[2]:void 0,z&&void 0!==z[2]?z[2]:void 0),J=(0,l.getPreviewSize)(n,_&&void 0!==_[3]?_[3]:void 0,T&&void 0!==T[3]?T[3]:void 0,z&&void 0!==z[3]?z[3]:void 0),G=void 0!==D&&D?D:"px",X=void 0!==M&&M?M:"px";return(0,a.createElement)("div",{className:`kt-svg-style-${x} kt-svg-icon-wrap kt-svg-item-${N}`},r&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.IconRender,{className:`kt-svg-icon kt-svg-icon-${r}`,name:r,size:$,strokeWidth:"fe"===r.substring(0,2)?u:void 0,title:g||"",style:{color:f?(0,l.KadenceColorOutput)(f):void 0,backgroundColor:y&&"default"!==x?(0,l.KadenceColorOutput)(y):void 0,paddingTop:F&&"default"!==x?(0,l.getSpacingOptionOutput)(F,G):void 0,paddingRight:Q&&"default"!==x?(0,l.getSpacingOptionOutput)(Q,G):void 0,paddingBottom:H&&"default"!==x?(0,l.getSpacingOptionOutput)(H,G):void 0,paddingLeft:J&&"default"!==x?(0,l.getSpacingOptionOutput)(J,G):void 0,borderColor:h&&"default"!==x?(0,l.KadenceColorOutput)(h):void 0,borderWidth:w&&"default"!==x?w+"px":void 0,borderRadius:C&&"default"!==x?C+"%":void 0,marginTop:W?(0,l.getSpacingOptionOutput)(W,X):void 0,marginRight:j?(0,l.getSpacingOptionOutput)(j,X):void 0,marginBottom:L?(0,l.getSpacingOptionOutput)(L,X):void 0,marginLeft:V?(0,l.getSpacingOptionOutput)(V,X):void 0}})))}var c=n(5736);function s(e){let{attributes:t,setAttributes:n}=e;const{margin:i,tabletMargin:l,mobileMargin:r,marginUnit:d,padding:s,tabletPadding:u,mobilePadding:g,paddingUnit:p,style:b}=t;return(0,a.createElement)(o.KadencePanelBody,{title:(0,c.__)("Icon","kadence-blocks")+" "+(0,c.__)("Spacing Settings","kadence-blocks"),initialOpen:!0,panelName:"iconSpacing",blockSlug:"kadence/icon"},"default"!==b&&(0,a.createElement)(o.ResponsiveMeasureRangeControl,{label:(0,c.__)("Icon Padding","kadence-blocks"),value:s||["","","",""],onChange:e=>n({padding:e}),tabletValue:u||["","","",""],onChangeTablet:e=>n({tabletPadding:e}),mobileValue:g||["","","",""],onChangeMobile:e=>n({mobilePadding:e}),min:0,max:"em"===(p||"px")||"rem"===(p||"px")?25:400,step:"em"===(p||"px")||"rem"===(p||"px")?.1:1,unit:p||"px",units:["px","em","rem"],onUnit:e=>n({paddingUnit:e})}),(0,a.createElement)(o.ResponsiveMeasureRangeControl,{label:(0,c.__)("Icon Margin","kadence-blocks"),value:i||["","","",""],onChange:e=>n({margin:e}),tabletValue:l||["","","",""],onChangeTablet:e=>n({tabletMargin:e}),mobileValue:r||["","","",""],onChangeMobile:e=>n({mobileMargin:e}),min:"em"===(d||"px")||"rem"===(d||"px")?-25:-400,max:"em"===(d||"px")||"rem"===(d||"px")?25:400,step:"em"===(d||"px")||"rem"===(d||"px")?.1:1,unit:d||"px",units:["px","em","rem"],onUnit:e=>n({marginUnit:e})}))}var u=n(2175),g=n(5609);var p=n(4184),b=n.n(p);const v=[{attributes:e.attributes,supports:e.supports,apiVersion:2,save:e=>{let{attributes:t}=e;const{icon:n,link:i,target:l,width:r,title:d,style:c,linkTitle:s,uniqueID:u}=t;return(0,a.createElement)("div",{className:`kt-svg-style-${c} kt-svg-icon-wrap kt-svg-item-${u}`},n&&i&&(0,a.createElement)("a",{href:i,className:"kt-svg-icon-link",target:"_blank"===l?l:void 0,rel:"_blank"===l?"noopener noreferrer":void 0,"aria-label":void 0!==s&&""!==s?s:void 0},(0,a.createElement)(o.IconSpanTag,{name:n,strokeWidth:"fe"===n.substring(0,2)?r:void 0,title:d||""})),n&&!i&&(0,a.createElement)(o.IconSpanTag,{name:n,strokeWidth:"fe"===n.substring(0,2)?r:void 0,title:d||""}))}}];(0,n(4981).registerBlockType)("kadence/single-icon",{...e,title:(0,c.__)("Single Icon","kadence-blocks"),description:(0,c.__)("Single icon within Icon block","kadence-blocks"),keywords:[(0,c.__)("icon","kadence-blocks"),(0,c.__)("svg","kadence-blocks"),"KB"],icon:{src:t.iconIcon},getEditWrapperProps(e){let{blockAlignment:t}=e;if("left"===t||"right"===t||"center"===t)return{"data-align":t}},edit:function(t){const{attributes:n,className:i,setAttributes:p,clientId:b,isSelected:v,name:k,context:m}=t,{inQueryBlock:f,icon:y,link:h,target:C,size:_,width:w,title:x,text:S,hColor:I,hBackground:P,tabletSize:E,hBorder:B,color:O,background:T,border:z,borderRadius:D,padding:U,borderWidth:A,style:R,linkTitle:M,level:q,tabletPadding:N,mobilePadding:K,paddingUnit:$,tabletMargin:W,mobileMargin:j,margin:L,marginUnit:V,mobileSize:F,uniqueID:Q}=n,H=["icon","link","target"],[J,G]=(0,a.useState)("general"),{addUniqueID:X}=(0,r.useDispatch)("kadenceblocks/data"),{isUniqueID:Y,isUniqueBlock:Z,previewDevice:ee,parentData:te}=(0,r.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,n)=>e("kadenceblocks/data").isUniqueBlock(t,n),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(b)),postId:e("core/editor").getCurrentPostId(),reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(b,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[b]);(0,a.useEffect)((()=>{(0,l.setBlockDefaults)("kadence/single-icon",n);const e=(0,l.getPostOrFseId)(t,te);let i=(0,l.getUniqueId)(Q,b,Y,Z,e);i!==Q?(n.uniqueID=i,p({uniqueID:i}),X(i,b)):X(Q,b),p({inQueryBlock:(0,l.getInQueryBlock)(m,f)})}),[]);const ne=(0,u.useBlockProps)({className:i}),ie=(0,a.createElement)("style",null,`.wp-block-kadence-single-icon .kt-svg-item-${Q}:hover .kt-svg-icon {\n\t\t\t\t\t${void 0!==I&&I?"color:"+(0,l.KadenceColorOutput)(I)+"!important;":""}\n            }\n            .wp-block-kadence-single-icon .kt-svg-style-stacked.kt-svg-item-${Q}:hover .kt-svg-icon {\n\t\t\t\t\t${void 0!==P&&P?"background:"+(0,l.KadenceColorOutput)(P)+"!important;":""}\n\t\t\t\t\t${void 0!==B&&B?"border-color:"+(0,l.KadenceColorOutput)(B)+"!important;":""}\n            }`);return(0,a.createElement)("div",ne,ie,(0,a.createElement)(u.BlockControls,null,(0,a.createElement)(o.CopyPasteAttributes,{attributes:n,excludedAttrs:H,defaultAttributes:e.attributes,blockSlug:e.name,onPaste:e=>p(e)})),(0,a.createElement)(o.KadenceInspectorControls,{blockSlug:"kadence/icon"},(0,a.createElement)(o.InspectorControlTabs,{panelName:"single-icon",allowedTabs:["general","advanced"],setActiveTab:e=>G(e),activeTab:J}),"general"===J&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.KadencePanelBody,{title:(0,c.__)("Icon Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-icon-settings"},(0,a.createElement)(o.KadenceIconPicker,{value:y,onChange:e=>{p({icon:e})}}),(0,a.createElement)(o.ResponsiveRangeControls,{label:(0,c.__)("Icon Size","kadence-blocks"),value:_||"",onChange:e=>{p({size:e})},tabletValue:void 0!==E?E:"",onChangeTablet:e=>{p({tabletSize:e})},mobileValue:void 0!==F?F:"",onChangeMobile:e=>{p({mobileSize:e})},min:0,max:300,step:1,unit:"px"}),y&&"fe"===y.substring(0,2)&&(0,a.createElement)(o.RangeControl,{label:(0,c.__)("Line Width"),value:w,onChange:e=>{p({width:e})},step:.5,min:.5,max:4}),(0,a.createElement)(o.KadenceRadioButtons,{label:(0,c.__)("Icon Style","kadence-blocks"),value:R,options:[{value:"default",label:(0,c.__)("Default","kadence-blocks")},{value:"stacked",label:(0,c.__)("Stacked","kadence-blocks")}],onChange:e=>p({style:e})}),(0,a.createElement)(o.PopColorControl,{label:(0,c.__)("Icon Color","kadence-blocks"),value:O||"",default:"",onChange:e=>{p({color:e})},swatchLabel2:(0,c.__)("Hover Color","kadence-blocks"),value2:I||"",default2:"",onChange2:e=>{p({hColor:e})}}),"default"!==R&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.PopColorControl,{label:(0,c.__)("Background Color","kadence-blocks"),value:T||"",default:"",onChange:e=>{p({background:e})},swatchLabel2:(0,c.__)("Hover Background","kadence-blocks"),value2:P||"",default2:"",onChange2:e=>{p({hBackground:e})}}),(0,a.createElement)(o.PopColorControl,{label:(0,c.__)("Border Color","kadence-blocks"),value:z||"",default:"",onChange:e=>{p({border:e})},swatchLabel2:(0,c.__)("Hover Border","kadence-blocks"),value2:B||"",default2:"",onChange2:e=>{p({hBorder:e})}}),(0,a.createElement)(o.RangeControl,{label:(0,c.__)("Border Size (px)","kadence-blocks"),value:A,onChange:e=>{p({borderWidth:e})},min:0,max:20}),(0,a.createElement)(o.RangeControl,{label:(0,c.__)("Border Radius (%)","kadence-blocks"),value:D,onChange:e=>{p({borderRadius:e})},min:0,max:50})),(0,a.createElement)(o.URLInputControl,{label:(0,c.__)("Link","kadence-blocks"),url:h,onChangeUrl:e=>{p({link:e})},additionalControls:!0,opensInNewTab:!(!C||"_blank"!=C),onChangeTarget:e=>{p(e?{target:"_blank"}:{target:"_self"})},linkTitle:M,onChangeTitle:e=>{p({linkTitle:e})},dynamicAttribute:"link",allowClear:!0,isSelected:v,attributes:n,setAttributes:p,name:k,clientId:b,context:m}),(0,a.createElement)(g.TextControl,{label:(0,c.__)("Title for Accessibility","kadence-blocks"),value:x,onChange:e=>{p({title:e})}}))),"advanced"===J&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s,{attributes:n,setAttributes:p}),(0,a.createElement)(o.KadenceBlockDefaults,{attributes:n,defaultAttributes:e.attributes,blockSlug:e.name,excludedAttrs:H}))),(0,a.createElement)(d,{attributes:n,previewDevice:ee}))},save:function(e){let{attributes:t,className:n}=e;const{icon:i,link:l,target:r,width:d,title:c,style:s,linkTitle:g,uniqueID:p}=t,v=b()({[`kt-svg-style-${s}`]:s,"kt-svg-icon-wrap":!0,[`kt-svg-item-${p}`]:p}),k=u.useBlockProps.save({className:v});return(0,a.createElement)("div",k,i&&l&&(0,a.createElement)("a",{href:l,className:"kt-svg-icon-link",target:"_blank"===r?r:void 0,rel:"_blank"===r?"noopener noreferrer":void 0,"aria-label":void 0!==g&&""!==g?g:void 0},(0,a.createElement)(o.IconSpanTag,{name:i,strokeWidth:"fe"===i.substring(0,2)?d:void 0,title:c||""})),i&&!l&&(0,a.createElement)(o.IconSpanTag,{name:i,strokeWidth:"fe"===i.substring(0,2)?d:void 0,title:c||""}))},deprecated:v,example:{}})})(),(this.kadence=this.kadence||{})["blocks-single-icon"]=i})();