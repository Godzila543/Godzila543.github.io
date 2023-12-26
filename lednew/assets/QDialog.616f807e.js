import{P as fe,o as H,U as Be,Y as me,g as Q,Z as ee,b as p,_ as V,r as P,n as Fe,$ as He,f as T,a0 as $e,a1 as De,a2 as Me,a3 as f,V as h,K as ze,a4 as Oe,L as Ae,c as Ve,w as te,a5 as oe,j as Ke,a6 as je}from"./index.fe229f07.js";import{a as Re,b as We,c as Qe}from"./use-model-toggle.b72af064.js";import{d as Ie,e as Ye,h as Ge}from"./palette.2e48d08b.js";function Xe(){let e;const t=Q();function o(){e=void 0}return fe(o),H(o),{removeTick:o,registerTick(n){e=n,Be(()=>{e===n&&(me(t)===!1&&e(),e=void 0)})}}}function Ue(){let e=null;const t=Q();function o(){e!==null&&(clearTimeout(e),e=null)}return fe(o),H(o),{removeTimeout:o,registerTimeout(n,l){o(),me(t)===!1&&(e=setTimeout(n,l))}}}let Ne=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Ne=e.scrollLeft>=0,e.remove()}function Ze(e,t,o){let n;function l(){n!==void 0&&(ee.remove(n),n=void 0)}return H(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},ee.add(n)}}}const Je={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function et(e,t=()=>{},o=()=>{}){return{transitionProps:p(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let w=[],C=[];function ve(e){C=C.filter(t=>t!==e)}function tt(e){ve(e),C.push(e)}function ne(e){ve(e),C.length===0&&w.length!==0&&(w[w.length-1](),w=[])}function ot(e){C.length===0?e():w.push(e)}function wt(e){w=w.filter(t=>t!==e)}const K=[];function yt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return V(e)}else if(e.__qPortal===!0){const o=V(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=V(e)}while(e!=null)}function nt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function it(e,t,o,n){const l=P(!1),a=P(!1);let s=null;const c={},u=n==="dialog"&&nt(e);function d(v){if(v===!0){ne(c),a.value=!0;return}a.value=!1,l.value===!1&&(u===!1&&s===null&&(s=De(!1,n)),l.value=!0,K.push(e.proxy),tt(c))}function m(v){if(a.value=!1,v!==!0)return;ne(c),l.value=!1;const q=K.indexOf(e.proxy);q!==-1&&K.splice(q,1),s!==null&&(Me(s),s=null)}return Fe(()=>{m(!0)}),e.proxy.__qPortal=!0,He(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:m,portalIsActive:l,portalIsAccessible:a,renderPortal:()=>u===!0?o():l.value===!0?[T($e,{to:s},o())]:void 0}}let S=0,j,R,k,W=!1,ie,le,se,g=null;function lt(e){st(e)&&ze(e)}function st(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Oe(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let a=0;a<t.length;a++){const s=t[a];if(Ge(s,n))return n?l<0&&s.scrollTop===0?!0:l>0&&s.scrollTop+s.clientHeight===s.scrollHeight:l<0&&s.scrollLeft===0?!0:l>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function B(e){W!==!0&&(W=!0,requestAnimationFrame(()=>{W=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(k===void 0||t!==window.innerHeight)&&(k=o-t,document.scrollingElement.scrollTop=n),n>k&&(document.scrollingElement.scrollTop-=Math.ceil((n-k)/8))}))}function re(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);j=Ie(window),R=Ye(window),ie=t.style.left,le=t.style.top,se=window.location.href,t.style.left=`-${j}px`,t.style.top=`-${R}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,f.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",B,h.passiveCapture),window.visualViewport.addEventListener("scroll",B,h.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ae,h.passiveCapture))}f.is.desktop===!0&&f.is.mac===!0&&window[`${e}EventListener`]("wheel",lt,h.notPassive),e==="remove"&&(f.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",B,h.passiveCapture),window.visualViewport.removeEventListener("scroll",B,h.passiveCapture)):window.removeEventListener("scroll",ae,h.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ie,t.style.top=le,window.location.href===se&&window.scrollTo(j,R),k=void 0)}function at(e){let t="add";if(e===!0){if(S++,g!==null){clearTimeout(g),g=null;return}if(S>1)return}else{if(S===0||(S--,S>0))return;if(t="remove",f.is.ios===!0&&f.is.nativeMobile===!0){g!==null&&clearTimeout(g),g=setTimeout(()=>{re(t),g=null},100);return}}re(t)}function rt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,at(t))}}}const y=[];let x;function ut(e){x=e.keyCode===27}function ct(){x===!0&&(x=!1)}function dt(e){x===!0&&(x=!1,Ae(e,27)===!0&&y[y.length-1](e))}function he(e){window[e]("keydown",ut),window[e]("blur",ct),window[e]("keyup",dt),x=!1}function ft(e){f.is.desktop===!0&&(y.push(e),y.length===1&&he("addEventListener"))}function ue(e){const t=y.indexOf(e);t>-1&&(y.splice(t,1),y.length===0&&he("removeEventListener"))}const b=[];function ge(e){b[b.length-1](e)}function mt(e){f.is.desktop===!0&&(b.push(e),b.length===1&&document.body.addEventListener("focusin",ge))}function ce(e){const t=b.indexOf(e);t>-1&&(b.splice(t,1),b.length===0&&document.body.removeEventListener("focusin",ge))}let F=0;const vt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},de={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var bt=Ve({name:"QDialog",inheritAttrs:!1,props:{...Re,...Je,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...We,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const l=Q(),a=P(null),s=P(!1),c=P(!1);let u=null,d=null,m,v;const q=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:I}=rt(),{registerTimeout:Y}=Ue(),{registerTick:pe,removeTick:G}=Xe(),{transitionProps:we,transitionStyle:X}=et(e,()=>de[e.position][0],()=>de[e.position][1]),{showPortal:U,hidePortal:N,portalIsAccessible:ye,renderPortal:be}=it(l,a,_e,"dialog"),{hide:L}=Qe({showing:s,hideOnRouteChange:q,handleShow:ke,handleHide:Pe,processOnMount:!0}),{addToHistory:Te,removeFromHistory:xe}=Ze(s,L,q),qe=p(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${vt[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),_=p(()=>s.value===!0&&e.seamless!==!0),Ee=p(()=>e.autoClose===!0?{onClick:Ce}:{}),Se=p(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${_.value===!0?"modal":"seamless"}`,n.class]);te(()=>e.maximized,i=>{s.value===!0&&M(i)}),te(_,i=>{I(i),i===!0?(mt(z),ft(D)):(ce(z),ue(D))});function ke(i){Te(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,M(e.maximized),U(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),pe(E)):G(),Y(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:r,bottom:O}=document.activeElement.getBoundingClientRect(),{innerHeight:J}=window,A=window.visualViewport!==void 0?window.visualViewport.height:J;r>0&&O>A/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-A,O>=J?1/0:Math.ceil(document.scrollingElement.scrollTop+O-A/2))),document.activeElement.scrollIntoView()}v=!0,a.value.click(),v=!1}U(!0),c.value=!1,o("show",i)},e.transitionDuration)}function Pe(i){G(),xe(),Z(!0),c.value=!0,N(),d!==null&&(((i&&i.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),Y(()=>{N(!0),c.value=!1,o("hide",i)},e.transitionDuration)}function E(i){ot(()=>{let r=a.value;r===null||r.contains(document.activeElement)===!0||(r=(i!==""?r.querySelector(i):null)||r.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function $(i){i&&typeof i.focus=="function"?i.focus({preventScroll:!0}):E(),o("shake");const r=a.value;r!==null&&(r.classList.remove("q-animate--scale"),r.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,a.value!==null&&(r.classList.remove("q-animate--scale"),E())},170))}function D(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&$():(o("escapeKey"),L()))}function Z(i){u!==null&&(clearTimeout(u),u=null),(i===!0||s.value===!0)&&(M(!1),e.seamless!==!0&&(I(!1),ce(z),ue(D))),i!==!0&&(d=null)}function M(i){i===!0?m!==!0&&(F<1&&document.body.classList.add("q-body--dialog"),F++,m=!0):m===!0&&(F<2&&document.body.classList.remove("q-body--dialog"),F--,m=!1)}function Ce(i){v!==!0&&(L(i),o("click",i))}function Le(i){e.persistent!==!0&&e.noBackdropDismiss!==!0?L(i):e.noShake!==!0&&$()}function z(i){e.allowFocusOutside!==!0&&ye.value===!0&&je(a.value,i.target)!==!0&&E('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:E,shake:$,__updateRefocusTarget(i){d=i||null}}),H(Z);function _e(){return T("div",{role:"dialog","aria-modal":_.value===!0?"true":"false",...n,class:Se.value},[T(oe,{name:"q-transition--fade",appear:!0},()=>_.value===!0?T("div",{class:"q-dialog__backdrop fixed-full",style:X.value,"aria-hidden":"true",tabindex:-1,onClick:Le}):null),T(oe,we.value,()=>s.value===!0?T("div",{ref:a,class:qe.value,style:X.value,tabindex:-1,...Ee.value},Ke(t.default)):null)])}return be}});export{bt as Q,Ue as a,ot as b,wt as c,Je as d,et as e,it as f,mt as g,ce as h,ue as i,yt as j,ft as k,K as p,Ne as r,Xe as u};