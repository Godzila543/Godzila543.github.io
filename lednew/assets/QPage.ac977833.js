import{u as he,e as me,Q as N,a as pe,s as K,f as T}from"./QScrollObserver.3af06963.js";import{ad as be,ae as ze,a3 as q,T as ye,af as ge,ag as E,ah as O,ai as U,aj as H,ak as F,al as $,K as Se,c as te,r as m,b as f,am as Ce,w as qe,P as _e,S as Pe,o as we,h as b,g as Me,J as V,j as ae,i as x,e as C,d as Ee,l as Ae,k as Te}from"./index.37872d6e.js";const B={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Oe=Object.keys(B);B.all=!0;function I(l){const a={};for(const n of Oe)l[n]===!0&&(a[n]=!0);return Object.keys(a).length===0?B:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const He=["INPUT","TEXTAREA"];function J(l,a){return a.event===void 0&&l.target!==void 0&&l.target.draggable!==!0&&typeof a.handler=="function"&&He.includes(l.target.nodeName.toUpperCase())===!1&&(l.qClonedBy===void 0||l.qClonedBy.indexOf(a.uid)===-1)}function $e(){if(window.getSelection!==void 0){const l=window.getSelection();l.empty!==void 0?l.empty():l.removeAllRanges!==void 0&&(l.removeAllRanges(),be.is.mobile!==!0&&l.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function j(l,a,n){const s=F(l);let e,r=s.left-a.event.x,i=s.top-a.event.y,t=Math.abs(r),v=Math.abs(i);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?e=r<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?e=i<0?"up":"down":c.up===!0&&i<0?(e="up",t>v&&(c.left===!0&&r<0?e="left":c.right===!0&&r>0&&(e="right"))):c.down===!0&&i>0?(e="down",t>v&&(c.left===!0&&r<0?e="left":c.right===!0&&r>0&&(e="right"))):c.left===!0&&r<0?(e="left",t<v&&(c.up===!0&&i<0?e="up":c.down===!0&&i>0&&(e="down"))):c.right===!0&&r>0&&(e="right",t<v&&(c.up===!0&&i<0?e="up":c.down===!0&&i>0&&(e="down")));let z=!1;if(e===void 0&&n===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,z=!0,e==="left"||e==="right"?(s.left-=r,t=0,r=0):(s.top-=i,v=0,i=0)}return{synthetic:z,payload:{evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:s,direction:e,isFirst:a.event.isFirst,isFinal:n===!0,duration:Date.now()-a.event.time,distance:{x:t,y:v},offset:{x:r,y:i},delta:{x:s.left-a.event.lastX,y:s.top-a.event.lastY}}}}let je=0;var G=ze({name:"touch-pan",beforeMount(l,{value:a,modifiers:n}){if(n.mouse!==!0&&q.has.touch!==!0)return;function s(r,i){n.mouse===!0&&i===!0?Se(r):(n.stop===!0&&H(r),n.prevent===!0&&U(r))}const e={uid:"qvtp_"+je++,handler:a,modifiers:n,direction:I(n),noop:ye,mouseStart(r){J(r,e)&&ge(r)&&(E(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(J(r,e)){const i=r.target;E(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,i){if(q.is.firefox===!0&&O(l,!0),e.lastEvt=r,i===!0||n.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const c=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&U(c),r.cancelBubble===!0&&H(c),Object.assign(c,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:c}}H(r)}const{left:t,top:v}=F(r);e.event={x:t,y:v,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:v}},move(r){if(e.event===void 0)return;const i=F(r),t=i.left-e.event.x,v=i.top-e.event.y;if(t===0&&v===0)return;e.lastEvt=r;const c=e.event.mouse===!0,z=()=>{s(r,c);let p;n.preserveCursor!==!0&&n.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),$e(),e.styleCleanup=g=>{if(e.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),c===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{_(),g()},50):_()}else g!==void 0&&g()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(r,e.event.mouse);const{payload:p,synthetic:g}=j(r,e,!1);p!==void 0&&(e.handler(p)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&z(),e.event.lastX=p.position.left,e.event.lastY=p.position.top,e.event.lastDir=g===!0?void 0:p.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||c===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){z(),e.event.detected=!0,e.move(r);return}const y=Math.abs(t),h=Math.abs(v);y!==h&&(e.direction.horizontal===!0&&y>h||e.direction.vertical===!0&&y<h||e.direction.up===!0&&y<h&&v<0||e.direction.down===!0&&y<h&&v>0||e.direction.left===!0&&y>h&&t<0||e.direction.right===!0&&y>h&&t>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,i){if(e.event!==void 0){if($(e,"temp"),q.is.firefox===!0&&O(l,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(j(r===void 0?e.lastEvt:r,e).payload);const{payload:t}=j(r===void 0?e.lastEvt:r,e,!0),v=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(l.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";E(e,"main",[[l,"mousedown","mouseStart",`passive${r}`]])}q.has.touch===!0&&E(e,"main",[[l,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[l,"touchmove","noop","notPassiveCapture"]])},updated(l,a){const n=l.__qtouchpan;n!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&n.end(),n.handler=a.value),n.direction=I(a.modifiers))},beforeUnmount(l){const a=l.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),$(a,"main"),$(a,"temp"),q.is.firefox===!0&&O(l,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete l.__qtouchpan)}});function A(l,a,n){return n<=a?a:Math.min(n,Math.max(a,l))}function Be(l,a,n){if(n<=a)return a;const s=n-a+1;let e=a+(l-a)%s;return e<a&&(e=s+e),e===0?0:e}const W=["vertical","horizontal"],D={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Z={prevent:!0,mouse:!0,mouseAllDir:!0},ee=l=>l>=250?50:Math.ceil(l/5);var Qe=te({name:"QScrollArea",props:{...he,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:a,emit:n}){const s=m(!1),e=m(!1),r=m(!1),i={vertical:m(0),horizontal:m(0)},t={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:v}=ae(),c=me(l,v.$q);let z=null,y;const h=m(null),p=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=f(()=>{const o=t.vertical.size.value-i.vertical.value;if(o<=0)return 0;const u=A(t.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),t.vertical.thumbHidden=f(()=>(l.visible===null?r.value:l.visible)!==!0&&s.value===!1&&e.value===!1||t.vertical.size.value<=i.vertical.value+1),t.vertical.thumbStart=f(()=>t.vertical.percentage.value*(i.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=f(()=>Math.round(A(i.vertical.value*i.vertical.value/t.vertical.size.value,ee(i.vertical.value),i.vertical.value))),t.vertical.style=f(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=f(()=>{const o=t.horizontal.size.value-i.horizontal.value;if(o<=0)return 0;const u=A(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(u*1e4)/1e4}),t.horizontal.thumbHidden=f(()=>(l.visible===null?r.value:l.visible)!==!0&&s.value===!1&&e.value===!1||t.horizontal.size.value<=i.horizontal.value+1),t.horizontal.thumbStart=f(()=>t.horizontal.percentage.value*(i.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=f(()=>Math.round(A(i.horizontal.value*i.horizontal.value/t.horizontal.size.value,ee(i.horizontal.value),i.horizontal.value))),t.horizontal.style=f(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=f(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),_=[[G,o=>{L(o,"vertical")},void 0,{vertical:!0,...Z}]],re=[[G,o=>{L(o,"horizontal")},void 0,{horizontal:!0,...Z}]];function Q(){const o={};return W.forEach(u=>{const d=t[u];o[u+"Position"]=d.position.value,o[u+"Percentage"]=d.percentage.value,o[u+"Size"]=d.size.value,o[u+"ContainerSize"]=i[u].value}),o}const k=Ce(()=>{const o=Q();o.ref=v,n("scroll",o)},0);function R(o,u,d){if(W.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?K:T)(h.value,u,d)}function le({height:o,width:u}){let d=!1;i.vertical.value!==o&&(i.vertical.value=o,d=!0),i.horizontal.value!==u&&(i.horizontal.value=u,d=!0),d===!0&&P()}function oe({position:o}){let u=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,u=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,u=!0),u===!0&&P()}function ie({height:o,width:u}){t.horizontal.size.value!==u&&(t.horizontal.size.value=u,P()),t.vertical.size.value!==o&&(t.vertical.size.value=o,P())}function L(o,u){const d=t[u];if(o.isFirst===!0){if(d.thumbHidden.value===!0)return;y=d.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const S=D[u],M=i[u].value,ve=(d.size.value-M)/(M-d.thumbSize.value),de=o.distance[S.dist],fe=y+(o.direction===S.dir?1:-1)*de*ve;Y(fe,u)}function X(o,u){const d=t[u];if(d.thumbHidden.value!==!0){const S=o[D[u].offset];if(S<d.thumbStart.value||S>d.thumbStart.value+d.thumbSize.value){const M=S-d.thumbSize.value/2;Y(M/i[u].value*d.size.value,u)}d.ref.value!==null&&d.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function ne(o){X(o,"vertical")}function ue(o){X(o,"horizontal")}function P(){s.value=!0,z!==null&&clearTimeout(z),z=setTimeout(()=>{z=null,s.value=!1},l.delay),l.onScroll!==void 0&&k()}function Y(o,u){h.value[D[u].scroll]=o}function se(){r.value=!0}function ce(){r.value=!1}let w=null;return qe(()=>v.$q.lang.rtl,o=>{h.value!==null&&T(h.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),_e(()=>{w={top:t.vertical.position.value,left:t.horizontal.position.value}}),Pe(()=>{if(w===null)return;const o=h.value;o!==null&&(T(o,w.left),K(o,w.top))}),we(k.cancel),Object.assign(v,{getScrollTarget:()=>h.value,getScroll:Q,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:R,setScrollPercentage(o,u,d){R(o,u*(t[o].size.value-i[o].value)*(o==="horizontal"&&v.$q.lang.rtl===!0?-1:1),d)}}),()=>b("div",{class:p.value,onMouseenter:se,onMouseleave:ce},[b("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[b("div",{class:"q-scrollarea__content absolute",style:g.value},Me(a.default,[b(N,{debounce:0,onResize:ie})])),b(pe,{axis:"both",onScroll:oe})]),b(N,{debounce:0,onResize:le}),b("div",{class:t.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:ne}),b("div",{class:t.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:ue}),V(b("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),_),V(b("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),re)])}}),ke=te({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(l,{slots:a}){const{proxy:{$q:n}}=ae(),s=x(Ae,C);if(s===C)return console.error("QPage needs to be a deep child of QLayout"),C;if(x(Te,C)===C)return console.error("QPage needs to be child of QPageContainer"),C;const r=f(()=>{const t=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof l.styleFn=="function"){const v=s.isContainer.value===!0?s.containerHeight.value:n.screen.height;return l.styleFn(t,v)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-t+"px":n.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}}),i=f(()=>`q-page${l.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:i.value,style:r.value},Ee(a.default))}});export{ke as Q,G as T,Qe as a,A as b,$e as c,I as g,Be as n,J as s};
