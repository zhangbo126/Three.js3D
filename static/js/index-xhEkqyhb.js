import{f as a,O as r,j as c,l as i,u as p,N as l,o as d,_ as f}from"./main-BacqxwQj.js";import{c as m}from"./initThreeTemplate-BnHMucCq.js";import"./CSS3DRenderer-CITJV_e9.js";const _={class:"iframe-box"},u={__name:"index",setup(x){const n=l(),e=a(null),o=window.location.href.split("?modelConfig=")[1];if(o){const t=decodeURIComponent(o).replace(/'/g,'"');e.value=JSON.parse(t)}else r.alert("当前页面出错,返回首页","提示",{confirmButtonText:"确认",type:"warning"}).then(()=>{n.push({path:"/"})});const s=m(e.value);return(t,g)=>(d(),c("div",_,[i(p(s))]))}},B=f(u,[["__scopeId","data-v-db5d010d"]]);export{B as default};
