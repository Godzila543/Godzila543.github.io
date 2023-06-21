import{c as F,b as v,f as q,j as S,i as _,e as m,r as O,w as b,o as D,a0 as R,l as L,g as M,a1 as X,a2 as N,a3 as C,N as Y,a4 as j,a5 as E,a6 as z,a7 as T,a8 as k,a9 as B,aa as P,H as U,k as I}from"./index.283135ea.js";import{Q as K}from"./QToolbar.b0fdc5e3.js";var re=F({name:"QToolbarTitle",props:{shrink:Boolean},setup(n,{slots:t}){const a=v(()=>"q-toolbar__title ellipsis"+(n.shrink===!0?" col-shrink":""));return()=>q("div",{class:a.value},S(t.default))}}),ne=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:t,emit:a}){const{proxy:{$q:s}}=M(),e=_(L,m);if(e===m)return console.error("QHeader needs to be child of QLayout"),m;const r=O(parseInt(n.heightHint,10)),o=O(!0),l=v(()=>n.reveal===!0||e.view.value.indexOf("H")>-1||s.platform.is.ios&&e.isContainer.value===!0),d=v(()=>{if(n.modelValue!==!0)return 0;if(l.value===!0)return o.value===!0?r.value:0;const i=r.value-e.scroll.value.position;return i>0?i:0}),u=v(()=>n.modelValue!==!0||l.value===!0&&o.value!==!0),g=v(()=>n.modelValue===!0&&u.value===!0&&n.reveal===!0),p=v(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(n.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus":"")),h=v(()=>{const i=e.rows.value.top,y={};return i[0]==="l"&&e.left.space===!0&&(y[s.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),i[2]==="r"&&e.right.space===!0&&(y[s.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),y});function c(i,y){e.update("header",i,y)}function f(i,y){i.value!==y&&(i.value=y)}function w({height:i}){f(r,i),c("size",i)}function V(i){g.value===!0&&f(o,!0),a("focusin",i)}b(()=>n.modelValue,i=>{c("space",i),f(o,!0),e.animate()}),b(d,i=>{c("offset",i)}),b(()=>n.reveal,i=>{i===!1&&f(o,n.modelValue)}),b(o,i=>{e.animate(),a("reveal",i)}),b(e.scroll,i=>{n.reveal===!0&&f(o,i.direction==="up"||i.position<=n.revealOffset||i.position-i.inflectionPoint<100)});const H={};return e.instances.header=H,n.modelValue===!0&&c("size",r.value),c("space",n.modelValue),c("offset",d.value),D(()=>{e.instances.header===H&&(e.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const i=R(t.default,[]);return n.elevated===!0&&i.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(q(K,{debounce:0,onResize:w})),q("header",{class:p.value,style:h.value,onFocusin:V},i)}}});const ae={dark:{type:Boolean,default:null}};function oe(n,t){return v(()=>n.dark===null?t.dark.isActive:n.dark)}const x={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},G=Object.keys(x);x.all=!0;function $(n){const t={};for(const a of G)n[a]===!0&&(t[a]=!0);return Object.keys(t).length===0?x:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const J=["INPUT","TEXTAREA"];function A(n,t){return t.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof t.handler=="function"&&J.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(t.uid)===-1)}function W(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),X.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Q(n,t,a){const s=B(n);let e,r=s.left-t.event.x,o=s.top-t.event.y,l=Math.abs(r),d=Math.abs(o);const u=t.direction;u.horizontal===!0&&u.vertical!==!0?e=r<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=o<0?"up":"down":u.up===!0&&o<0?(e="up",l>d&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.down===!0&&o>0?(e="down",l>d&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.left===!0&&r<0?(e="left",l<d&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down"))):u.right===!0&&r>0&&(e="right",l<d&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down")));let g=!1;if(e===void 0&&a===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};e=t.event.lastDir,g=!0,e==="left"||e==="right"?(s.left-=r,l=0,r=0):(s.top-=o,d=0,o=0)}return{synthetic:g,payload:{evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:s,direction:e,isFirst:t.event.isFirst,isFinal:a===!0,duration:Date.now()-t.event.time,distance:{x:l,y:d},offset:{x:r,y:o},delta:{x:s.left-t.event.lastX,y:s.top-t.event.lastY}}}}let Z=0;var ie=N({name:"touch-pan",beforeMount(n,{value:t,modifiers:a}){if(a.mouse!==!0&&C.has.touch!==!0)return;function s(r,o){a.mouse===!0&&o===!0?U(r):(a.stop===!0&&k(r),a.prevent===!0&&T(r))}const e={uid:"qvtp_"+Z++,handler:t,modifiers:a,direction:$(a),noop:Y,mouseStart(r){A(r,e)&&j(r)&&(E(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(A(r,e)){const o=r.target;E(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,o){if(C.is.firefox===!0&&z(n,!0),e.lastEvt=r,o===!0||a.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&T(u),r.cancelBubble===!0&&k(u),Object.assign(u,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:u}}k(r)}const{left:l,top:d}=B(r);e.event={x:l,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:d}},move(r){if(e.event===void 0)return;const o=B(r),l=o.left-e.event.x,d=o.top-e.event.y;if(l===0&&d===0)return;e.lastEvt=r;const u=e.event.mouse===!0,g=()=>{s(r,u);let c;a.preserveCursor!==!0&&a.preservecursor!==!0&&(c=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),W(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,c!==void 0&&(document.documentElement.style.cursor=c),document.body.classList.remove("non-selectable"),u===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{w(),f()},50):w()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(r,e.event.mouse);const{payload:c,synthetic:f}=Q(r,e,!1);c!==void 0&&(e.handler(c)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&g(),e.event.lastX=c.position.left,e.event.lastY=c.position.top,e.event.lastDir=f===!0?void 0:c.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){g(),e.event.detected=!0,e.move(r);return}const p=Math.abs(l),h=Math.abs(d);p!==h&&(e.direction.horizontal===!0&&p>h||e.direction.vertical===!0&&p<h||e.direction.up===!0&&p<h&&d<0||e.direction.down===!0&&p<h&&d>0||e.direction.left===!0&&p>h&&l<0||e.direction.right===!0&&p>h&&l>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,o){if(e.event!==void 0){if(P(e,"temp"),C.is.firefox===!0&&z(n,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(Q(r===void 0?e.lastEvt:r,e).payload);const{payload:l}=Q(r===void 0?e.lastEvt:r,e,!0),d=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(n.__qtouchpan=e,a.mouse===!0){const r=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";E(e,"main",[[n,"mousedown","mouseStart",`passive${r}`]])}C.has.touch===!0&&E(e,"main",[[n,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,t){const a=n.__qtouchpan;a!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&a.end(),a.handler=t.value),a.direction=$(t.modifiers))},beforeUnmount(n){const t=n.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),P(t,"main"),P(t,"temp"),C.is.firefox===!0&&z(n,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete n.__qtouchpan)}});function ue(n,t,a){return a<=t?t:Math.min(a,Math.max(t,n))}function se(n,t,a){if(a<=t)return t;const s=a-t+1;let e=t+(n-t)%s;return e<t&&(e=s+e),e===0?0:e}var le=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:t}){const{proxy:{$q:a}}=M(),s=_(L,m);if(s===m)return console.error("QPage needs to be a deep child of QLayout"),m;if(_(I,m)===m)return console.error("QPage needs to be child of QPageContainer"),m;const r=v(()=>{const l=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof n.styleFn=="function"){const d=s.isContainer.value===!0?s.containerHeight.value:a.screen.height;return n.styleFn(l,d)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-l+"px":a.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":a.screen.height-l+"px"}}),o=v(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:o.value,style:r.value},S(t.default))}});export{ne as Q,ie as T,le as a,re as b,oe as c,ue as d,W as e,$ as g,se as n,A as s,ae as u};
