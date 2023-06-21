import{u as E,c as F,d as q,T as Q}from"./QPage.225ccb29.js";import{Q as j}from"./QToolbar.b0fdc5e3.js";import{Q as re,s as B,a as _}from"./QScrollObserver.34f95098.js";import{c as M,r as n,b as i,ab as oe,w as ie,L as ne,M as ue,o as se,f as u,h as ce,G as $,g as L,j as V}from"./index.283135ea.js";const D=["vertical","horizontal"],p={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},k={prevent:!0,mouse:!0,mouseAllDir:!0},R=a=>a>=250?50:Math.ceil(a/5);var fe=M({name:"QScrollArea",props:{...E,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(a,{slots:b,emit:f}){const h=n(!1),s=n(!1),z=n(!1),o={vertical:n(0),horizontal:n(0)},e={vertical:{ref:n(null),position:n(0),size:n(0)},horizontal:{ref:n(null),position:n(0),size:n(0)}},{proxy:d}=L(),N=F(a,d.$q);let m=null,P;const c=n(null),G=i(()=>"q-scrollarea"+(N.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=i(()=>{const t=e.vertical.size.value-o.vertical.value;if(t<=0)return 0;const l=q(e.vertical.position.value/t,0,1);return Math.round(l*1e4)/1e4}),e.vertical.thumbHidden=i(()=>(a.visible===null?z.value:a.visible)!==!0&&h.value===!1&&s.value===!1||e.vertical.size.value<=o.vertical.value+1),e.vertical.thumbStart=i(()=>e.vertical.percentage.value*(o.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=i(()=>Math.round(q(o.vertical.value*o.vertical.value/e.vertical.size.value,R(o.vertical.value),o.vertical.value))),e.vertical.style=i(()=>({...a.thumbStyle,...a.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=i(()=>{const t=e.horizontal.size.value-o.horizontal.value;if(t<=0)return 0;const l=q(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(l*1e4)/1e4}),e.horizontal.thumbHidden=i(()=>(a.visible===null?z.value:a.visible)!==!0&&h.value===!1&&s.value===!1||e.horizontal.size.value<=o.horizontal.value+1),e.horizontal.thumbStart=i(()=>e.horizontal.percentage.value*(o.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=i(()=>Math.round(q(o.horizontal.value*o.horizontal.value/e.horizontal.size.value,R(o.horizontal.value),o.horizontal.value))),e.horizontal.style=i(()=>({...a.thumbStyle,...a.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const I=i(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),U=[[Q,t=>{H(t,"vertical")},void 0,{vertical:!0,...k}]],X=[[Q,t=>{H(t,"horizontal")},void 0,{horizontal:!0,...k}]];function C(){const t={};return D.forEach(l=>{const r=e[l];t[l+"Position"]=r.position.value,t[l+"Percentage"]=r.percentage.value,t[l+"Size"]=r.size.value,t[l+"ContainerSize"]=o[l].value}),t}const w=oe(()=>{const t=C();t.ref=d,f("scroll",t)},0);function T(t,l,r){if(D.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?B:_)(c.value,l,r)}function Y({height:t,width:l}){let r=!1;o.vertical.value!==t&&(o.vertical.value=t,r=!0),o.horizontal.value!==l&&(o.horizontal.value=l,r=!0),r===!0&&S()}function J({position:t}){let l=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,l=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,l=!0),l===!0&&S()}function K({height:t,width:l}){e.horizontal.size.value!==l&&(e.horizontal.size.value=l,S()),e.vertical.size.value!==t&&(e.vertical.size.value=t,S())}function H(t,l){const r=e[l];if(t.isFirst===!0){if(r.thumbHidden.value===!0)return;P=r.position.value,s.value=!0}else if(s.value!==!0)return;t.isFinal===!0&&(s.value=!1);const v=p[l],y=o[l].value,te=(r.size.value-y)/(y-r.thumbSize.value),le=t.distance[v.dist],ae=P+(t.direction===v.dir?1:-1)*le*te;O(ae,l)}function A(t,l){const r=e[l];if(r.thumbHidden.value!==!0){const v=t[p[l].offset];if(v<r.thumbStart.value||v>r.thumbStart.value+r.thumbSize.value){const y=v-r.thumbSize.value/2;O(y/o[l].value*r.size.value,l)}r.ref.value!==null&&r.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function W(t){A(t,"vertical")}function Z(t){A(t,"horizontal")}function S(){h.value=!0,m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,h.value=!1},a.delay),a.onScroll!==void 0&&w()}function O(t,l){c.value[p[l].scroll]=t}function x(){z.value=!0}function ee(){z.value=!1}let g=null;return ie(()=>d.$q.lang.rtl,t=>{c.value!==null&&_(c.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),ne(()=>{g={top:e.vertical.position.value,left:e.horizontal.position.value}}),ue(()=>{if(g===null)return;const t=c.value;t!==null&&(_(t,g.left),B(t,g.top))}),se(w.cancel),Object.assign(d,{getScrollTarget:()=>c.value,getScroll:C,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:T,setScrollPercentage(t,l,r){T(t,l*(e[t].size.value-o[t].value)*(t==="horizontal"&&d.$q.lang.rtl===!0?-1:1),r)}}),()=>u("div",{class:G.value,onMouseenter:x,onMouseleave:ee},[u("div",{ref:c,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[u("div",{class:"q-scrollarea__content absolute",style:I.value},ce(b.default,[u(j,{debounce:0,onResize:K})])),u(re,{axis:"both",onScroll:J})]),u(j,{debounce:0,onResize:Y}),u("div",{class:e.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:W}),u("div",{class:e.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:Z}),$(u("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),U),$(u("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),X)])}}),ze=M({name:"QCard",props:{...E,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:b}){const{proxy:{$q:f}}=L(),h=F(a,f),s=i(()=>"q-card"+(h.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>u(a.tag,{class:s.value},V(b.default))}}),me=M({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:b}){const f=i(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>u(a.tag,{class:f.value},V(b.default))}});export{ze as Q,me as a,fe as b};
