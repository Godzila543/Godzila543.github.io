import{c as g,b as T,f as q,j as x,g as C,X as O,Y as b,w as S,I as M,o as Q,U as W,W as H}from"./index.87a04e90.js";import{u as k,b as B}from"./use-dark.b2a1d048.js";var A=g({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:o}){const e=T(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>q(t.tag,{class:e.value},x(o.default))}}),F=g({name:"QCard",props:{...k,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:o}){const{proxy:{$q:e}}=C(),n=B(t,e),r=T(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>q(t.tag,{class:r.value},x(o.default))}});const D=[null,document,document.body,document.scrollingElement,document.documentElement];function N(t,o){let e=O(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return D.includes(e)?window:e}function E(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function L(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}function z(t,o,e=0){const n=arguments[3]===void 0?performance.now():arguments[3],r=E(t);if(e<=0){r!==o&&w(t,o);return}requestAnimationFrame(s=>{const i=s-n,a=r+(o-r)/Math.max(i,e)*i;w(t,a),a!==o&&z(t,o,e-i,s)})}function P(t,o,e=0){const n=arguments[3]===void 0?performance.now():arguments[3],r=L(t);if(e<=0){r!==o&&p(t,o);return}requestAnimationFrame(s=>{const i=s-n,a=r+(o-r)/Math.max(i,e)*i;p(t,a),a!==o&&P(t,o,e-i,s)})}function w(t,o){if(t===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}t.scrollTop=o}function p(t,o){if(t===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}t.scrollLeft=o}function V(t,o,e){if(e){z(t,o,e);return}w(t,o)}function $(t,o,e){if(e){P(t,o,e);return}p(t,o)}let f;function j(){if(f!==void 0)return f;const t=document.createElement("p"),o=document.createElement("div");b(t,{width:"100%",height:"200px"}),b(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let n=t.offsetWidth;return e===n&&(n=o.clientWidth),o.remove(),f=e-n,f}function I(t,o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const{passive:y}=H,X=["both","horizontal","vertical"];var U=g({name:"QScrollObserver",props:{axis:{type:String,validator:t=>X.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:o}){const e={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,r,s;S(()=>t.scrollTarget,()=>{h(),a()});function i(){n!==null&&n();const d=Math.max(0,E(r)),u=L(r),l={top:d-e.position.top,left:u-e.position.left};if(t.axis==="vertical"&&l.top===0||t.axis==="horizontal"&&l.left===0)return;const v=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";e.position={top:d,left:u},e.directionChanged=e.direction!==v,e.delta=l,e.directionChanged===!0&&(e.direction=v,e.inflectionPoint=e.position),o("scroll",{...e})}function a(){r=N(s,t.scrollTarget),r.addEventListener("scroll",c,y),c(!0)}function h(){r!==void 0&&(r.removeEventListener("scroll",c,y),r=void 0)}function c(d){if(d===!0||t.debounce===0||t.debounce==="0")i();else if(n===null){const[u,l]=t.debounce?[setTimeout(i,t.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];n=()=>{l(u),n=null}}}const{proxy:m}=C();return S(()=>m.$q.lang.rtl,i),M(()=>{s=m.$el.parentNode,a()}),Q(()=>{n!==null&&n(),h()}),Object.assign(m,{trigger:c,getPosition:()=>e}),W}});export{U as Q,F as a,A as b,L as c,E as d,$ as e,N as f,j as g,I as h,V as s};
