"use strict";(self["webpackChunkprodect"]=self["webpackChunkprodect"]||[]).push([[716],{8567:function(e,t,n){n.r(t)},5249:function(e,t,n){var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var u=arguments[t],o=0,a=u.length;o<a;o++,i++)r[i]=u[o];return r};t.__esModule=!0;var i=n(6866),u=n(2935);t["default"]=i.defineComponent({name:"DraggableContainer",props:{disabled:{type:Boolean,default:!1},adsorbParent:{type:Boolean,default:!0},adsorbCols:{type:Array,default:null},adsorbRows:{type:Array,default:null},referenceLineVisible:{type:Boolean,default:!0},referenceLineColor:{type:String,default:"#f00"}},setup:function(e){var t=i.reactive({}),n=function(e,n){t[e]=n},r=function(e){var n=Object.assign({},t);return e&&delete n[e],n},o=i.reactive({matchedLine:null}),a=i.computed((function(){return o.matchedLine&&o.matchedLine.row||[]})),l=i.computed((function(){return o.matchedLine&&o.matchedLine.col||[]})),c=function(e){o.matchedLine=e};return i.provide("identity",u.IDENTITY),i.provide("updatePosition",n),i.provide("getPositionStore",r),i.provide("setMatchedLine",c),i.provide("disabled",i.toRef(e,"disabled")),i.provide("adsorbParent",i.toRef(e,"adsorbParent")),i.provide("adsorbCols",e.adsorbCols||[]),i.provide("adsorbRows",e.adsorbRows||[]),{matchedRows:a,matchedCols:l}},methods:{renderReferenceLine:function(){var e=this;return this.referenceLineVisible?r(this.matchedCols.map((function(t){return i.h("div",{style:{width:"0",height:"100%",top:"0",left:t+"px",borderLeft:"1px dashed "+e.referenceLineColor,position:"absolute"}})})),this.matchedRows.map((function(t){return i.h("div",{style:{width:"100%",height:"0",left:"0",top:t+"px",borderTop:"1px dashed "+e.referenceLineColor,position:"absolute"}})}))):[]}},render:function(){return i.h("div",{style:{width:"100%",height:"100%",position:"relative"}},r([this.$slots["default"]&&this.$slots["default"]()],this.renderReferenceLine()))}})},9107:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var u=arguments[t],o=0,a=u.length;o<a;o++,i++)r[i]=u[o];return r};t.__esModule=!0,t.ALL_HANDLES=void 0;var u=n(6866),o=n(2465);n(8567);var a=n(2935);t.ALL_HANDLES=["tl","tm","tr","ml","mr","bl","bm","br"];var l={initW:{type:Number,default:null},initH:{type:Number,default:null},w:{type:Number,default:0},h:{type:Number,default:0},x:{type:Number,default:0},y:{type:Number,default:0},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},disabledX:{type:Boolean,default:!1},disabledY:{type:Boolean,default:!1},disabledW:{type:Boolean,default:!1},disabledH:{type:Boolean,default:!1},minW:{type:Number,default:20},minH:{type:Number,default:20},active:{type:Boolean,default:!1},parent:{type:Boolean,default:!1},handles:{type:Array,default:t.ALL_HANDLES,validator:function(e){return a.filterHandles(e).length===e.length}},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},lockAspectRatio:{type:Boolean,default:!1}},c=["activated","deactivated","drag-start","resize-start","dragging","resizing","drag-end","resize-end","update:w","update:h","update:x","update:y","update:active"],s=u.defineComponent({name:"Vue3DraggableResizable",props:l,emits:c,setup:function(e,t){var n=t.emit,i=o.initState(e,n),l=u.inject("identity",Symbol()),c=null;l===a.IDENTITY&&(c={updatePosition:u.inject("updatePosition"),getPositionStore:u.inject("getPositionStore"),disabled:u.inject("disabled"),adsorbParent:u.inject("adsorbParent"),adsorbCols:u.inject("adsorbCols"),adsorbRows:u.inject("adsorbRows"),setMatchedLine:u.inject("setMatchedLine")});var s=u.ref(),d=o.initParent(s),f=o.initLimitSizeAndMethods(e,d,i);o.initDraggableContainer(s,i,f,u.toRef(e,"draggable"),n,c,d);var v=o.initResizeHandle(i,f,d,e,n);return o.watchProps(e,f),r(r(r(r({containerRef:s,containerProvider:c},i),d),f),v)},computed:{style:function(){return{width:this.width+"px",height:this.height+"px",top:this.top+"px",left:this.left+"px"}},klass:function(){var e;return e={},e[this.classNameActive]=this.enable,e[this.classNameDragging]=this.dragging,e[this.classNameResizing]=this.resizing,e[this.classNameDraggable]=this.draggable,e[this.classNameResizable]=this.resizable,e}},mounted:function(){if(this.containerRef){this.containerRef.ondragstart=function(){return!1};var e=a.getElSize(this.containerRef),t=e.width,n=e.height;this.setWidth(null===this.initW?this.w||t:this.initW),this.setHeight(null===this.initH?this.h||n:this.initH),this.containerProvider&&this.containerProvider.updatePosition(this.id,{x:this.left,y:this.top,w:this.width,h:this.height})}},render:function(){var e=this;return u.h("div",{ref:"containerRef",class:["vdr-container",this.klass],style:this.style},i([this.$slots["default"]&&this.$slots["default"]()],this.handlesFiltered.map((function(t){return u.h("div",{class:["vdr-handle","vdr-handle-"+t,e.classNameHandle,e.classNameHandle+"-"+t],style:{display:e.enable?"block":"none"},onMousedown:function(n){return e.resizeHandleDown(n,t)},onTouchstart:function(n){return e.resizeHandleDown(n,t)}})}))))}});t["default"]=s},2465:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0,t.watchProps=t.initResizeHandle=t.initDraggableContainer=t.initLimitSizeAndMethods=t.initParent=t.initState=t.useState=void 0;var i=n(6866),u=n(2935);function o(e){var t=i.ref(e),n=function(e){return t.value=e,e};return[t,n]}function a(e,t){var n=o(e.initW),r=n[0],a=n[1],l=o(e.initH),c=l[0],s=l[1],d=o(e.x),f=d[0],v=d[1],h=o(e.y),p=h[0],g=h[1],m=o(e.active),y=m[0],b=m[1],w=o(!1),x=w[0],R=w[1],M=o(!1),D=M[0],H=M[1],S=o(""),E=S[0],z=S[1],W=o(1/0),_=W[0],C=W[1],L=o(1/0),P=L[0],A=L[1],k=o(e.minW),N=k[0],T=k[1],j=o(e.minH),B=j[0],U=j[1],I=i.computed((function(){return c.value/r.value}));return i.watch(r,(function(e){t("update:w",e)}),{immediate:!0}),i.watch(c,(function(e){t("update:h",e)}),{immediate:!0}),i.watch(p,(function(e){t("update:y",e)})),i.watch(f,(function(e){t("update:x",e)})),i.watch(y,(function(e,n){t("update:active",e),!n&&e?t("activated"):n&&!e&&t("deactivated")})),i.watch((function(){return e.active}),(function(e){b(e)})),{id:u.getId(),width:r,height:c,top:p,left:f,enable:y,dragging:x,resizing:D,resizingHandle:E,resizingMaxHeight:P,resizingMaxWidth:_,resizingMinWidth:N,resizingMinHeight:B,aspectRatio:I,setEnable:b,setDragging:R,setResizing:H,setResizingHandle:z,setResizingMaxHeight:A,setResizingMaxWidth:C,setResizingMinWidth:T,setResizingMinHeight:U,setWidth:function(e){return a(Math.floor(e))},setHeight:function(e){return s(Math.floor(e))},setTop:function(e){return g(Math.floor(e))},setLeft:function(e){return v(Math.floor(e))}}}function l(e){var t=i.ref(0),n=i.ref(0);return i.onMounted((function(){if(e.value&&e.value.parentElement){var r=u.getElSize(e.value.parentElement),i=r.width,o=r.height;t.value=i,n.value=o}})),{parentWidth:t,parentHeight:n}}function c(e,t,n){var u=n.width,o=n.height,a=n.left,l=n.top,c=n.resizingMaxWidth,s=n.resizingMaxHeight,d=n.resizingMinWidth,f=n.resizingMinHeight,v=n.setWidth,h=n.setHeight,p=n.setTop,g=n.setLeft,m=t.parentWidth,y=t.parentHeight,b={minWidth:i.computed((function(){return d.value})),minHeight:i.computed((function(){return f.value})),maxWidth:i.computed((function(){var t=1/0;return e.parent&&(t=Math.min(m.value,c.value)),t})),maxHeight:i.computed((function(){var t=1/0;return e.parent&&(t=Math.min(y.value,s.value)),t})),minLeft:i.computed((function(){return e.parent?0:-1/0})),minTop:i.computed((function(){return e.parent?0:-1/0})),maxLeft:i.computed((function(){return e.parent?m.value-u.value:1/0})),maxTop:i.computed((function(){return e.parent?y.value-o.value:1/0}))},w={setWidth:function(t){return e.disabledW?u.value:v(Math.min(b.maxWidth.value,Math.max(b.minWidth.value,t)))},setHeight:function(t){return e.disabledH?o.value:h(Math.min(b.maxHeight.value,Math.max(b.minHeight.value,t)))},setTop:function(t){return e.disabledY?l.value:p(Math.min(b.maxTop.value,Math.max(b.minTop.value,t)))},setLeft:function(t){return e.disabledX?a.value:g(Math.min(b.maxLeft.value,Math.max(b.minLeft.value,t)))}};return r(r({},b),w)}t.useState=o,t.initState=a,t.initParent=l,t.initLimitSizeAndMethods=c;var s=["mousedown","touchstart"],d=["mouseup","touchend"],f=["mousemove","touchmove"];function v(e){return"touches"in e?[e.touches[0].pageX,e.touches[0].pageY]:[e.pageX,e.pageY]}function h(e,t,n,r,o,a,l){var c=t.left,h=t.top,p=t.width,g=t.height,m=t.dragging,y=t.id,b=t.setDragging,w=t.setEnable,x=t.setResizing,R=t.setResizingHandle,M=n.setTop,D=n.setLeft,H=0,S=0,E=0,z=0,W=null,_=document.documentElement,C=function(t){var n,r=t.target;(null===(n=e.value)||void 0===n?void 0:n.contains(r))||(w(!1),b(!1),x(!1),R(""))},L=function(){b(!1),u.removeEvent(_,d,L),u.removeEvent(_,f,P),W=null,a&&(a.updatePosition(y,{x:c.value,y:h.value,w:p.value,h:g.value}),a.setMatchedLine(null))},P=function(t){if(t.preventDefault(),m.value&&e.value){var n=v(t),r=n[0],i=n[1],u=r-E,l=i-z,c=H+u,s=S+l;if(null!==W){var d={col:[c,c+p.value/2,c+p.value],row:[s,s+g.value/2,s+g.value]},f={row:d.row.map((function(e,t){var n=null;return Object.values(W.row).forEach((function(t){e>=t.min&&e<=t.max&&(n=t.value)})),null!==n&&(0===t?s=n:1===t?s=Math.floor(n-g.value/2):2===t&&(s=Math.floor(n-g.value))),n})).filter((function(e){return null!==e})),col:d.col.map((function(e,t){var n=null;return Object.values(W.col).forEach((function(t){e>=t.min&&e<=t.max&&(n=t.value)})),null!==n&&(0===t?c=n:1===t?c=Math.floor(n-p.value/2):2===t&&(c=Math.floor(n-p.value))),n})).filter((function(e){return null!==e}))};a.setMatchedLine(f)}o("dragging",{x:D(c),y:M(s)})}},A=function(e){r.value&&(b(!0),H=c.value,S=h.value,E=v(e)[0],z=v(e)[1],u.addEvent(_,f,P),u.addEvent(_,d,L),a&&!a.disabled.value&&(W=u.getReferenceLineMap(a,l,y)))};return i.watch(m,(function(e,t){!t&&e?(o("drag-start",{x:c.value,y:h.value}),w(!0),b(!0)):(o("drag-end",{x:c.value,y:h.value}),b(!1))})),i.onMounted((function(){var t=e.value;t&&(t.style.left=c+"px",t.style.top=h+"px",u.addEvent(_,s,C),u.addEvent(t,s,A))})),i.onUnmounted((function(){e.value&&(u.removeEvent(_,s,C),u.removeEvent(_,d,L),u.removeEvent(_,f,P))})),{containerRef:e}}function p(e,t,n,r,o){var a=t.setWidth,l=t.setHeight,c=t.setLeft,s=t.setTop,h=e.width,p=e.height,g=e.left,m=e.top,y=e.aspectRatio,b=e.setResizing,w=e.setResizingHandle,x=e.setResizingMaxWidth,R=e.setResizingMaxHeight,M=e.setResizingMinWidth,D=e.setResizingMinHeight,H=n.parentWidth,S=n.parentHeight,E=0,z=0,W=0,_=0,C=0,L=0,P=1,A="",k="",N=document.documentElement,T=function(e){e.preventDefault();var t=v(e),n=t[0],i=t[1],u=n-C,d=i-L,f=u,y=d;r.lockAspectRatio&&(u=Math.abs(u),d=u*P,(f<0||"m"===k&&y<0)&&(u=-u,d=-d)),"t"===A?(l(z-d),s(_-(p.value-z))):"b"===A&&l(z+d),"l"===k?(a(E-u),c(W-(h.value-E))):"r"===k&&a(E+u),o("resizing",{x:g.value,y:m.value,w:h.value,h:p.value})},j=function(){o("resize-end",{x:g.value,y:m.value,w:h.value,h:p.value}),w(""),b(!1),x(1/0),R(1/0),M(r.minW),D(r.minH),u.removeEvent(N,f,T),u.removeEvent(N,d,j)},B=function(e,t){if(r.resizable){e.stopPropagation(),w(t),b(!0),A=t[0],k=t[1],r.lockAspectRatio&&(["tl","tm","ml","bl"].includes(t)?(A="t",k="l"):(A="b",k="r"));var n=r.minH,i=r.minW;if(r.lockAspectRatio&&(n/i>y.value?i=n/y.value:n=i*y.value),M(i),D(n),r.parent){var a="t"===A?m.value+p.value:S.value-m.value,l="l"===k?g.value+h.value:H.value-g.value;r.lockAspectRatio&&(a/l<y.value?l=a/y.value:a=l*y.value),R(a),x(l)}E=h.value,z=p.value,W=g.value,_=m.value;var c=v(e);C=c[0],L=c[1],P=y.value,o("resize-start",{x:g.value,y:m.value,w:h.value,h:p.value}),u.addEvent(N,f,T),u.addEvent(N,d,j)}};i.onUnmounted((function(){u.removeEvent(N,d,j),u.removeEvent(N,f,T)}));var U=i.computed((function(){return r.resizable?u.filterHandles(r.handles):[]}));return{handlesFiltered:U,resizeHandleDown:B}}function g(e,t){var n=t.setWidth,r=t.setHeight,u=t.setLeft,o=t.setTop;i.watch((function(){return e.w}),(function(e){n(e)})),i.watch((function(){return e.h}),(function(e){r(e)})),i.watch((function(){return e.x}),(function(e){u(e)})),i.watch((function(){return e.y}),(function(e){o(e)}))}t.initDraggableContainer=h,t.initResizeHandle=p,t.watchProps=g},2935:function(e,t,n){n(7658);var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0,t.getReferenceLineMap=t.getId=t.filterHandles=t.removeEvent=t.addEvent=t.getElSize=t.IDENTITY=void 0;var i=n(9107);function u(e){var t=window.getComputedStyle(e);return{width:parseFloat(t.getPropertyValue("width")),height:parseFloat(t.getPropertyValue("height"))}}function o(e){return function(t,n,r){t&&("string"===typeof n&&(n=[n]),n.forEach((function(n){return t[e](n,r,{passive:!1})})))}}function a(e){if(e&&e.length>0){var t=[];return e.forEach((function(e){i.ALL_HANDLES.includes(e)&&!t.includes(e)&&t.push(e)})),t}return[]}function l(){return String(Math.random()).substr(2)+String(Date.now())}function c(e,t,n){var i,u;if(e.disabled.value)return null;var o={row:[],col:[]},a=t.parentWidth,l=t.parentHeight;(i=o.row).push.apply(i,e.adsorbRows),(u=o.col).push.apply(u,e.adsorbCols),e.adsorbParent.value&&(o.row.push(0,l.value,l.value/2),o.col.push(0,a.value,a.value/2));var c=e.getPositionStore(n);Object.values(c).forEach((function(e){var t=e.x,n=e.y,r=e.w,i=e.h;o.row.push(n,n+i,n+i/2),o.col.push(t,t+r,t+r/2)}));var s={row:o.row.reduce((function(e,t){var n;return r(r({},e),(n={},n[t]={min:t-5,max:t+5,value:t},n))}),{}),col:o.col.reduce((function(e,t){var n;return r(r({},e),(n={},n[t]={min:t-5,max:t+5,value:t},n))}),{})};return s}t.IDENTITY=Symbol("Vue3DraggableResizable"),t.getElSize=u,t.addEvent=o("addEventListener"),t.removeEvent=o("removeEventListener"),t.filterHandles=a,t.getId=l,t.getReferenceLineMap=c},2522:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]});t.__esModule=!0;var i=n(9107),u=n(5249);i["default"].install=function(e){return e.component(i["default"].name,i["default"]),e.component(u["default"].name,u["default"]),e};var o=n(5249);r(t,o,"default","DraggableContainer"),t["default"]=i["default"]},6866:function(e,t,n){n.r(t),n.d(t,{BaseTransition:function(){return r.P$},BaseTransitionPropsValidators:function(){return r.nJ},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},assertNumber:function(){return r.Wu},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return i},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineModel:function(){return r.Gn},defineOptions:function(){return r.Yu},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},defineSlots:function(){return r.Wl},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hasInjectionContext:function(){return r.EM},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeModels:function(){return r.Vf},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},toValue:function(){return r.Tn},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useModel:function(){return r.tT},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=n(9242);const i=()=>{0}},4716:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});n(7658);var r=n(3396),i=n(7139),u=n(9242),o=n(4870),a=n(2522),l=n.n(a),c=n(2614),s={__name:"index",props:{config:{type:Object,default:{}}},emits:["onDragActived","onDragDeactivated"],setup(e,{emit:t}){const n=e,u=(0,o.iH)(""),a=e=>{u.value="mask-dragging"},s=e=>{u.value="mask-dragactive"},d=e=>{u.value="mask-dragactive",t("onDragActived",n.config)},f=e=>{u.value="",t("onDragDeactivated",n.config.modelKey)},v=(0,c.Z)(n.config);return(e,t)=>((0,r.wg)(),(0,r.j4)((0,o.SU)(l()),{class:"draggable-resizable",classNameDragging:"dragging",classNameActive:"active",initW:n.config.width,initH:n.config.height,x:n.config.x,"onUpdate:x":t[0]||(t[0]=e=>n.config.x=e),y:n.config.y,"onUpdate:y":t[1]||(t[1]=e=>n.config.y=e),w:n.config.width,"onUpdate:w":t[2]||(t[2]=e=>n.config.width=e),h:n.config.height,"onUpdate:h":t[3]||(t[3]=e=>n.config.height=e),parent:!1,resizable:!0,draggable:!0,onDragEnd:s,onDragging:a,onActivated:d,onDeactivated:f},{default:(0,r.w5)((()=>[(0,r.Wm)((0,o.SU)(v),{width:n.config.width,height:n.config.height},null,8,["width","height"]),(0,r._)("div",{class:(0,i.C_)([u.value,"mask"])},null,2)])),_:1},8,["initW","initH","x","y","w","h"]))}},d=n(89);const f=(0,d.Z)(s,[["__scopeId","data-v-4868f57a"]]);var v=f,h=(0,r.aZ)({props:{rightMenuPositon:{type:Object,default:{}}},data(){return{mouseX:0,mouseY:0,display:"none",modelKey:null}},watch:{rightMenuPositon:{handler(e){const{x:t,y:n,modelKey:r}=e,{innerWidth:i,innerHeight:u}=window;this.mouseX=t+100>i?i-100:t,this.mouseY=n+28>u?u-28:n,this.display="block",this.modelKey=r,document.addEventListener("mouseup",this.onMouseup,!1)},deep:!0}},methods:{onDelete(){this.$emit("onDelete",this.modelKey)},onMouseup(e){0===e.button&&(this.display="none",document.removeEventListener("mouseup",this.onMouseup))}},render(){return(0,r.h)((0,r.Wm)("ul",{class:"right-menu",style:{top:this.mouseY+"px",left:this.mouseX+"px",display:this.display}},[(0,r.Wm)("li",{class:"right-menu-item",onClick:this.onDelete},[(0,r.Wm)((0,r.up)("el-space"),null,{default:()=>[(0,r.Wm)((0,r.up)("el-icon"),{size:14,color:"#6bacf2"},{default:()=>[(0,r.Wm)((0,r.up)("Delete"),null,null)]}),(0,r.Wm)((0,r.up)("el-text"),{type:"primary"},{default:()=>[(0,r.Uk)("删除")]})]})])]))}});const p=(0,d.Z)(h,[["__scopeId","data-v-4d632f54"]]);var g=p,m=n(872),y=n(1794),b=n(2346),w=n(7178);const x=e=>((0,r.dD)("data-v-45c450ce"),e=e(),(0,r.Cn)(),e),R={class:"model-base"},M={class:"base-header"},D={class:"lf-box"},H={class:"center-box"},S=x((()=>(0,r._)("p",null,"3D组件模型库",-1))),E={class:"lr-box"},z={class:"base-container"},W={class:"menu-list"},_=["onDragstart"],C={class:"model-image"},L={class:"model-info"},P={class:"model-name"},A={id:"drag-content"};var k={__name:"index",setup(e){const{$local:t,$bus:n}=(0,r.FN)().proxy,l=(0,o.iH)([]),c=(0,o.iH)([]),s=(0,o.iH)(null),d=(0,o.iH)({}),f=(e,t)=>{s.value=(0,b.p$)(t)},h=e=>{e.preventDefault()},p=e=>{e.preventDefault();const{x:t,y:n}=s.value;if(!t||!n)return s.value=null,!1;s.value.width=520,s.value.height=360,s.value.modelKey=(0,b.d1)(20,2),c.value.push(s.value),s.value=null,c.value.length>=8&&w.z8.warning("请注意:当前面板模型组件加载过多!!!")},x=e=>{e.preventDefault();const t=document.querySelector("#drag-content").getBoundingClientRect(),n=e.clientX-t.left-260,r=e.clientY-t.top-180;s.value.x=n,s.value.y=r},k=e=>{s.value=e},N=e=>{e==s.value.modelKey&&(s.value=null)},T=e=>{d.value={x:e.clientX,y:e.clientY,modelKey:s.value.modelKey},e.preventDefault()},j=e=>{c.value=c.value.filter((t=>t.modelKey!=e))},B=()=>{const e=t.get(m.Aw);if(!Array.isArray(e)){let e=[];y.H1.forEach((t=>{e.push({...m.f1,fileInfo:{...t}})})),t.set(m.Aw,e)}l.value=t.get(m.Aw)},U=()=>{c.value=t.get(m.PF)||[]},I=()=>{t.set(m.PF,c.value),w.z8.success("更新成功")};return(0,r.bv)((async()=>{(0,r.Y3)((()=>{B(),U()})),window.addEventListener("keydown",(e=>{if(46===e.keyCode&&"Delete"==e.key&&s.value){const{modelKey:e}=s.value;c.value=c.value.filter((t=>t.modelKey!=e)),s.value=null}}))})),(e,t)=>{const n=(0,r.up)("el-button"),s=(0,r.up)("Film"),m=(0,r.up)("el-icon"),y=(0,r.up)("el-space"),b=(0,r.up)("el-image"),w=(0,r.up)("el-tooltip"),B=(0,r.up)("el-scrollbar");return(0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("header",M,[(0,r._)("div",D,[(0,r.Wm)(n,{type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push({path:"/"})),icon:"DArrowLeft"},{default:(0,r.w5)((()=>[(0,r.Uk)("返回编辑器")])),_:1})]),(0,r._)("div",H,[(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),S])),_:1})]),(0,r._)("div",E,[(0,r.Wm)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{type:"primary",icon:"Tickets",onClick:I},{default:(0,r.w5)((()=>[(0,r.Uk)("保存数据")])),_:1})])),_:1})])]),(0,r._)("div",z,[(0,r.Wm)(B,{"max-height":"calc(100vh - 45px)",class:"base-menu"},{default:(0,r.w5)((()=>[(0,r._)("ul",W,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.value,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.fileInfo.id,draggable:"true",onDragstart:t=>f(t,e),onDrag:t[1]||(t[1]=e=>h(e)),onDragend:p},[(0,r._)("div",C,[(0,r.Wm)(b,{fit:"scale-down",src:e.fileInfo.icon},null,8,["src"])]),(0,r._)("div",L,[(0,r._)("div",P,[(0,r.Wm)(w,{effect:"dark",content:e.fileInfo.name,placement:"top"},{default:(0,r.w5)((()=>[(0,r._)("span",null,(0,i.zw)(e.fileInfo.name),1)])),_:2},1032,["content"])])])],40,_)))),128))])])),_:1},8,["max-height"]),(0,r._)("div",A,[(0,r._)("div",{class:"content",onDrop:x,onDragover:t[2]||(t[2]=(0,u.iM)((()=>{}),["prevent"]))},[(0,r.Wm)((0,o.SU)(a.DraggableContainer),{adsorbParent:!0,disabled:!0},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.value,(e=>((0,r.wg)(),(0,r.j4)((0,o.SU)(v),{onOnDragActived:k,onOnDragDeactivated:N,onContextmenu:(0,u.iM)(T,["prevent"]),key:e.modelKey,config:e},null,8,["onContextmenu","config"])))),128))])),_:1}),(0,r.Wm)((0,o.SU)(g),{rightMenuPositon:d.value,onOnDelete:j},null,8,["rightMenuPositon"])],32)])])])}}};const N=(0,d.Z)(k,[["__scopeId","data-v-45c450ce"]]);var T=N}}]);