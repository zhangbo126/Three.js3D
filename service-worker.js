if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const d=e=>s(e,t),c={module:{uri:t},exports:n,require:d};i[t]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(l(...e),n)))}}define(["./workbox-d6430d1c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prodect"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/three.js3d/image/1.png",revision:"bd9eb735393f074ff5de84f3a82dda2f"},{url:"/three.js3d/image/2.png",revision:"1d6023be96cc6614f1517378d8151003"},{url:"/three.js3d/image/3.png",revision:"d81f936f057e528d881ad97598c3d57c"},{url:"/three.js3d/image/4.png",revision:"e65d36060fbe7aa796f2a8d9acd3092e"},{url:"/three.js3d/image/5.png",revision:"04b2a0e55457fab891d8b62ccdd00441"},{url:"/three.js3d/image/6.png",revision:"97b9108f2b73f5f3551ff7ce782bd419"},{url:"/three.js3d/image/7.png",revision:"cca3fec7c78028e78aba087987c81003"},{url:"/three.js3d/index.html",revision:"f78da33058bfefae3b640f63d8ea6ccd"},{url:"/three.js3d/manifest.json",revision:"d80c1c6fd48c6571b794ce458130db07"},{url:"/three.js3d/modelBase.html",revision:"615aaeca861824a92245cae2a4338d8f"},{url:"/three.js3d/preview.html",revision:"1d3e92bcd0a3480d116534f4c585022d"},{url:"/three.js3d/static/css/213.fa33467e.css",revision:null},{url:"/three.js3d/static/css/529.89ed7b94.css",revision:null},{url:"/three.js3d/static/css/902.623d7f09.css",revision:null},{url:"/three.js3d/static/css/chunk-vendors.60cc3978.css",revision:null},{url:"/three.js3d/static/css/index.3bed9fb7.css",revision:null},{url:"/three.js3d/static/css/modelBase.3bed9fb7.css",revision:null},{url:"/three.js3d/static/css/preview.3bed9fb7.css",revision:null},{url:"/three.js3d/static/img/1.997d64fe.png",revision:null},{url:"/three.js3d/static/img/1.b184894a.png",revision:null},{url:"/three.js3d/static/img/11.13ce97ab.png",revision:null},{url:"/three.js3d/static/img/11.b383bd33.png",revision:null},{url:"/three.js3d/static/img/12.e67aac8d.png",revision:null},{url:"/three.js3d/static/img/13.f3367a6f.png",revision:null},{url:"/three.js3d/static/img/14.a60646d4.png",revision:null},{url:"/three.js3d/static/img/14.e1be3616.png",revision:null},{url:"/three.js3d/static/img/15.5c6d2fbc.png",revision:null},{url:"/three.js3d/static/img/16.22a93a4d.png",revision:null},{url:"/three.js3d/static/img/17.76ba3108.png",revision:null},{url:"/three.js3d/static/img/18.79bb051a.png",revision:null},{url:"/three.js3d/static/img/2.60b592ae.png",revision:null},{url:"/three.js3d/static/img/21.b2d1f5c0.png",revision:null},{url:"/three.js3d/static/img/3.ebc2b040.png",revision:null},{url:"/three.js3d/static/img/4.0a19b0ab.png",revision:null},{url:"/three.js3d/static/img/4.af2a9b55.png",revision:null},{url:"/three.js3d/static/img/5.cc1193ef.png",revision:null},{url:"/three.js3d/static/img/6.4c9e7c38.png",revision:null},{url:"/three.js3d/static/img/9.3eea1578.png",revision:null},{url:"/three.js3d/static/img/loading.f8c1d232.svg",revision:null},{url:"/three.js3d/static/img/model-bg-1.0a206b6d.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-10.a1cb3d2e.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-11.a8dbafcc.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-15.0c294766.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-16.0b99f7b2.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-17.439185f8.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-18.92870b31.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-2.390c1b3c.jpeg",revision:null},{url:"/three.js3d/static/img/model-bg-3.6c273dac.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-4.60b57f01.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-5.3abe7bac.png",revision:null},{url:"/three.js3d/static/img/model-bg-6.5bdad556.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-7.f1700613.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-8.4e79ca43.jpg",revision:null},{url:"/three.js3d/static/img/model-bg-9.8fbcc3a1.jpg",revision:null},{url:"/three.js3d/static/img/view-1.b9faa946.png",revision:null},{url:"/three.js3d/static/img/view-10.d43a4500.png",revision:null},{url:"/three.js3d/static/img/view-11.31b82c75.png",revision:null},{url:"/three.js3d/static/img/view-12.8f526afe.png",revision:null},{url:"/three.js3d/static/img/view-13.4102fa96.png",revision:null},{url:"/three.js3d/static/img/view-14.0d1ec365.png",revision:null},{url:"/three.js3d/static/img/view-15.b5606961.png",revision:null},{url:"/three.js3d/static/img/view-16.2f2c27b9.png",revision:null},{url:"/three.js3d/static/img/view-2.aa6be168.png",revision:null},{url:"/three.js3d/static/img/view-3.2b48e6c8.png",revision:null},{url:"/three.js3d/static/img/view-4.46878642.png",revision:null},{url:"/three.js3d/static/img/view-5.ae02f355.png",revision:null},{url:"/three.js3d/static/img/view-6.faed5122.png",revision:null},{url:"/three.js3d/static/img/view-7.eaf3287f.png",revision:null},{url:"/three.js3d/static/img/view-8.9e00cd9c.png",revision:null},{url:"/three.js3d/static/img/view-9.8f6431f2.png",revision:null},{url:"/three.js3d/static/js/213.199bc595.js",revision:null},{url:"/three.js3d/static/js/529.b5a9e086.js",revision:null},{url:"/three.js3d/static/js/614.9f55a067.js",revision:null},{url:"/three.js3d/static/js/618.dcc7ca15.js",revision:null},{url:"/three.js3d/static/js/768.d14d9e71.js",revision:null},{url:"/three.js3d/static/js/902.1838e8fb.js",revision:null},{url:"/three.js3d/static/js/chunk-vendors.423b0eb3.js",revision:null},{url:"/three.js3d/static/js/index.3964e4cf.js",revision:null},{url:"/three.js3d/static/js/modelBase.073f907b.js",revision:null},{url:"/three.js3d/static/js/preview.b934114b.js",revision:null},{url:"/three.js3d/threeFile/file/draco_wasm_wrapper.js",revision:"1f4fb91e4321eeac482193cf1dc3b163"},{url:"/three.js3d/threeFile/glb/glb-10.glb",revision:"a343ab3e7cab200e812faee0862bbfee"},{url:"/three.js3d/threeFile/glb/glb-11.glb",revision:"6acc38a09056277250bb3c1fac120c61"},{url:"/three.js3d/threeFile/glb/glb-12.glb",revision:"36da9f159acf2c6e8d2458ffe1b96735"},{url:"/three.js3d/threeFile/glb/glb-22.glb",revision:"04c6d1d75281915063844b8f418dee1d"},{url:"/three.js3d/threeFile/glb/glb-8.glb",revision:"97c1fde15121d75ffb84a7600d1385f2"},{url:"/three.js3d/threeFile/glb/glb-9.glb",revision:"320a0ca3cfef6d6f9c623b46664bbeee"},{url:"/three.js3d/threeFile/gltf/draco_decoder.js",revision:"caf13debd23c283f89c7ee8f419114a6"},{url:"/three.js3d/threeFile/gltf/draco_decoder.wasm",revision:"279c1ac3a88b5620490d0b9835ab222f"},{url:"/three.js3d/threeFile/gltf/draco_encoder.js",revision:"64b497f25214eee6b9fcb0b141729784"},{url:"/three.js3d/threeFile/gltf/draco_wasm_wrapper.js",revision:"4d1884e22834312b531fdf4d614f9a89"}],{})}));
