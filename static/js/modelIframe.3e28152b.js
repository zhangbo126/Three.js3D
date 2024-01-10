(function(){"use strict";var e={517:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t){const n=(0,o.up)("router-view"),r=(0,o.up)("el-config-provider");return(0,o.wg)(),(0,o.j4)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n)])),_:1})}var a=n(89);const s={},u=(0,a.Z)(s,[["render",i]]);var l=u,c=n(2483);const d=[{name:"layout",path:"/",component:()=>n.e(618).then(n.bind(n,7618)),children:[{path:"/",name:"modelEdit",meta:{keepAlive:!0},component:()=>Promise.all([n.e(869),n.e(693)]).then(n.bind(n,693))},{path:"/preview",name:"modelPreview",meta:{keepAlive:!1},component:()=>Promise.all([n.e(869),n.e(614),n.e(962)]).then(n.bind(n,5962))},{path:"/modelIframe",name:"modelIframe",meta:{keepAlive:!1},component:()=>Promise.all([n.e(869),n.e(614),n.e(582)]).then(n.bind(n,5582))},{path:"/modelBase",name:"modelBase",meta:{keepAlive:!1},component:()=>Promise.all([n.e(869),n.e(614),n.e(973)]).then(n.bind(n,8973))}]}],f=(0,c.p7)({history:(0,c.PO)("/three.js3d/"),base:"/three.js3d/",model:"hash",routes:d});var p=f,m=n(2594);const v=(0,m.WB)();var g=v;n(560);let h=window.indexedDB,b="threeEdit",y=1,S=null;function w(){return new Promise(((e,t)=>{const n=h.open(b,y);n.onupgradeneeded=e=>{const t=e.target.result;t.objectStoreNames.contains("mystore")||t.createObjectStore("mystore",{autoIncrement:!0})},n.onsuccess=t=>{S=t.target.result,e()},n.onerror=e=>{console.error("IndexedDB",e),t(e)}}))}w();var k=n(4014),O=n(1373),j=n(7247);const P={install(e){e.config.globalProperties.$session=j.n,e.config.globalProperties.$local=j.I,e.config.globalProperties.$session=j.n,e.config.globalProperties.$bus=(0,O.Z)()}};var C={...P},E=n(2748);const I={install(e){for(const[t,n]of Object.entries(E))e.component(t,n);e.config.productionTip=!1}};var N=I;const _=e=>((0,o.dD)("data-v-44f86e18"),e=e(),(0,o.Cn)(),e),x={id:"loading-mark"},A={class:"loading-box"},T={class:"loading"},B=["src"],D=_((()=>(0,o._)("div",{class:"loading-txt"},"模型文件首次加载时间较长请耐心等待...",-1)));function L(e,t){return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",A,[(0,o._)("div",T,[(0,o._)("img",{src:n(7622)},null,8,B),D])])])}const $={},F=(0,a.Z)($,[["render",L],["__scopeId","data-v-44f86e18"]]);var J=F;const Z=e=>{e.directive("zLoading",{mounted(e,t,n){const o=(0,r.ri)(J),i=o.mount(document.createElement("div"));e.style.position="relative",i.$el.style.display="none",e.appendChild(i.$el)},updated(e,t,n){const r=e.parentElement.querySelector("#loading-mark"),{value:o}=t;o?(e.style.position="relative",r.style.display="block"):(e.style.position="",r.style.display="none")},unmounted(e,t,n){const r=e.children[0];e.removeChild(r)}})},q={install(e){Z(e)}};var z=q;n(3837),n(4478);const M=(0,r.ri)(l);M.use(k.Z,{size:"small",zIndex:3e3}),M.use(C),M.use(N),M.use(z),M.use(g),M.use(p),M.mount("#app")},7247:function(e,t,n){n.d(t,{I:function(){return o},n:function(){return r}});const r={set:(e,t)=>{if(!e||!t)return null;sessionStorage.setItem(e,JSON.stringify(t))},get:e=>{if(!e)return null;var t=JSON.parse(sessionStorage.getItem(e));return t},remove:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},o={set:(e,t)=>{if(!e||!t)return null;localStorage.setItem(e,JSON.stringify(t))},get:e=>{if(!e)return null;var t=JSON.parse(localStorage.getItem(e));return t},remove:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}}},7622:function(e,t,n){e.exports=n.p+"static/img/loading.2fc63fd9.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{582:"14104b91",614:"f411a28f",618:"f585f1b1",693:"e5154651",869:"a09a7404",962:"7cb0cf04",973:"e6484369"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{582:"1e4d31dc",693:"dbd026b7",962:"b7d54cc7",973:"31c38446"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="prodect:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/three.js3d/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={918:0,826:0,493:0,421:0};n.f.miniCss=function(e,t){var n={582:1,693:1,962:1,973:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={918:0,826:0,493:0,421:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkprodect"]=self["webpackChunkprodect"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(517)}));r=n.O(r)})();