(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{5683:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return n(3937)}])},3937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),o=n(7294),l=n(6094),i=n(6367),a=n(3652),s=n(3308),u=n(411),c=n(7074),p=n(3643);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=a.V.extend({defaultProps:{__TYPE:"InputTextarea",__parentMetadata:null,autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0},css:{classes:{root:function(e){var t=e.props,n=e.isFilled;return(0,p.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":t.disabled,"p-filled":n,"p-inputtextarea-resizable":t.autoResize},t.className)}},styles:"\n@layer primereact {\n    .p-inputtextarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n    \n    .p-fluid .p-inputtextarea {\n        width: 100%;\n    }\n}\n"}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){!function(e,t,n){var r;r=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==d(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===d(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=o.memo(o.forwardRef(function(e,t){var n=(0,s.c)(),r=o.useContext(i.Ou),l=y.getProps(e,r),d=o.useRef(t),m=o.useRef(0),h=y.setMetaData(b(b({props:l},l.__parentMetadata),{},{context:{disabled:l.disabled}})),g=h.ptm,v=h.cx,x=h.isUnstyled;(0,a.e)(y.css.styles,x,{name:"inputtextarea"});var j=function(e){var t=d.current;t&&p.p7.isVisible(t)&&(m.current||(m.current=t.scrollHeight,t.style.overflow="hidden"),(m.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",m.current=t.scrollHeight))};o.useEffect(function(){p.gb.combinedRefs(d,t)},[d,t]),o.useEffect(function(){l.autoResize&&j(!0)},[l.autoResize]);var O=o.useMemo(function(){return p.gb.isNotEmpty(l.value)||p.gb.isNotEmpty(l.defaultValue)},[l.value,l.defaultValue]),w=p.gb.isNotEmpty(l.tooltip),P=n({ref:d,className:v("root",{isFilled:O}),onFocus:function(e){l.autoResize&&j(),l.onFocus&&l.onFocus(e)},onBlur:function(e){l.autoResize&&j(),l.onBlur&&l.onBlur(e)},onKeyUp:function(e){l.autoResize&&j(),l.onKeyUp&&l.onKeyUp(e)},onKeyDown:function(e){l.onKeyDown&&l.onKeyDown(e),l.keyfilter&&u.F.onKeyPress(e,l.keyfilter,l.validateOnly)},onBeforeInput:function(e){l.onBeforeInput&&l.onBeforeInput(e),l.keyfilter&&u.F.onBeforeInput(e,l.keyfilter,l.validateOnly)},onInput:function(e){var t=e.target;l.autoResize&&j(p.gb.isEmpty(t.value)),l.onInput&&l.onInput(e),p.gb.isNotEmpty(t.value)?p.p7.addClass(t,"p-filled"):p.p7.removeClass(t,"p-filled")},onPaste:function(e){l.onPaste&&l.onPaste(e),l.keyfilter&&u.F.onPaste(e,l.keyfilter,l.validateOnly)}},y.getOtherProps(l),g("root"));return o.createElement(o.Fragment,null,o.createElement("textarea",P),w&&o.createElement(c.u,f({target:d,content:l.tooltip},l.tooltipOptions,{pt:g("tooltip")})))}));function g(){let[e,t]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[a,s]=(0,o.useState)(""),[u,c]=(0,o.useState)("");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:"min-h-screen pt-5",children:(0,r.jsx)("div",{className:"ml-10",children:(0,r.jsxs)("div",{id:"bespokeForm",className:"m-5",children:[(0,r.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,r.jsx)("label",{htmlFor:"businessName",children:"Business name"}),(0,r.jsx)(l.o,{id:"businessName","aria-describedby":"businessName-help",value:e,onChange:e=>t(e.target.value)}),(0,r.jsx)("small",{id:"businessName-help",children:"Provide your business name as it is to be referred to within the final article"})]}),(0,r.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,r.jsx)("label",{htmlFor:"industry",children:"Industry"}),(0,r.jsx)(l.o,{id:"industry",value:n,onChange:e=>i(e.target.value)})]}),(0,r.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,r.jsx)("label",{htmlFor:"targetAudience",children:"Target audience"}),(0,r.jsx)(h,{autoResize:!0,value:a,"aria-describedby":"targetAudience-help",onChange:e=>s(e.target.value),rows:5,cols:30}),(0,r.jsx)("small",{id:"targetAudience-help",children:"What can you tell us about the people you want to target?"})]}),(0,r.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,r.jsx)("label",{htmlFor:"reasoning",children:"Reason for advertising"}),(0,r.jsx)(h,{autoResize:!0,value:u,onChange:e=>c(e.target.value),rows:5,cols:30})]})]})})})})}h.displayName="InputTextarea"}},function(e){e.O(0,[94,888,774,179],function(){return e(e.s=5683)}),_N_E=e.O()}]);