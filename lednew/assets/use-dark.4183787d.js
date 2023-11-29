import{r as y,d as k,H as c,c as h,o as v,T as R,U as b,f as g,g as T,V as m,b as z,j as O}from"./index.274b16d3.js";function x(){const t=y(!k.value);return t.value===!1&&c(()=>{t.value=!0}),t}const w=typeof ResizeObserver!="undefined",p=w===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=h({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:i}){let n=null,r,s={width:-1,height:-1};function a(e){e===!0||t.debounce===0||t.debounce==="0"?u():n===null&&(n=setTimeout(u,t.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:e,offsetHeight:o}=r;(e!==s.width||o!==s.height)&&(s={width:e,height:o},i("resize",s))}}const{proxy:d}=T();if(w===!0){let e;const o=l=>{r=d.$el.parentNode,r?(e=new ResizeObserver(a),e.observe(r),u()):l!==!0&&b(()=>{o(!0)})};return c(()=>{o()}),v(()=>{n!==null&&clearTimeout(n),e!==void 0&&(e.disconnect!==void 0?e.disconnect():r&&e.unobserve(r))}),R}else{let l=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",a,m.passive),o=void 0)},f=function(){l(),r&&r.contentDocument&&(o=r.contentDocument.defaultView,o.addEventListener("resize",a,m.passive),u())};const e=x();let o;return c(()=>{b(()=>{r=d.$el,r&&f()})}),v(l),d.trigger=a,()=>{if(e.value===!0)return g("object",{style:p.style,tabindex:-1,type:"text/html",data:p.url,"aria-hidden":"true",onLoad:f})}}}}),L=h({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:i}){const n=z(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},O(i.default))}});const Q={dark:{type:Boolean,default:null}};function j(t,i){return z(()=>t.dark===null?i.dark.isActive:t.dark)}export{E as Q,L as a,j as b,Q as u};
