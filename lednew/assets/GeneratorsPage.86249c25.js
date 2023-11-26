import{Q as Y,a as Z,b as Q}from"./QPage.c9e9531e.js";import{a as ee}from"./use-dark.b2a1d048.js";import{Q as ae}from"./QScrollArea.7e70b895.js";import{a as C,b as P}from"./QScrollObserver.96e5bc37.js";import{b as u,c as F,i as te,f as b,Q as h,U as le,aa as j,O as T,h as I,g as M,r as B,p as ne,j as oe,s as O,t as z,K as ie,x as m,y as D,z as r,ab as se,H as i,A as p,B as l,E as q,ac as R,ad as $,R as re,C as A,F as G,D as ce}from"./index.87a04e90.js";import{u as ue,a as de,b as be}from"./use-model-toggle.28a9ae70.js";import{u as fe}from"./uid.42677368.js";import{Q as ge}from"./QPageSticky.3ca4e600.js";import{Q as V}from"./QSpace.072bc939.js";import{t as ve,b as me}from"./palette.fef6045e.js";const he=["top","right","bottom","left"],N={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>he.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function E(e,a){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const o=e.hideLabel===null?a.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(o===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const H={start:"self-end",center:"self-center",end:"self-start"},_e=Object.keys(H);var L=F({name:"QFabAction",props:{...N,icon:{type:String,default:""},anchor:{type:String,validator:e=>_e.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const n=te(j,()=>({showing:{value:!0},onChildClick:le})),{formClass:t,labelProps:d}=E(e,n.showing),f=u(()=>{const s=H[e.anchor];return t.value+(s!==void 0?` ${s}`:"")}),g=u(()=>e.disable===!0||n.showing.value!==!0);function v(s){n.onChildClick(s),o("click",s)}function _(){const s=[];return a.icon!==void 0?s.push(a.icon()):e.icon!==""&&s.push(b(T,{name:e.icon})),(e.label!==""||a.label!==void 0)&&s[d.value.action](b("div",d.value.data,a.label!==void 0?a.label():[e.label])),I(a.default,s)}const y=M();return Object.assign(y.proxy,{click:v}),()=>b(h,{class:f.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:g.value,onClick:v},_)}});const ye=["up","right","down","left"],Ce=["left","center","right"];var pe=F({name:"QFab",props:{...N,...ue,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>ye.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Ce.includes(e)}},emits:de,setup(e,{slots:a}){const o=B(null),n=B(e.modelValue===!0),t=fe(),{proxy:{$q:d}}=M(),{formClass:f,labelProps:g}=E(e,n),v=u(()=>e.persistent!==!0),{hide:_,toggle:y}=be({showing:n,hideOnRouteChange:v}),s=u(()=>({opened:n.value})),K=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${f.value}`+(n.value===!0?" q-fab--opened":" q-fab--closed")),U=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value===!0?"opened":"closed"}`),W=u(()=>{const c={id:t,role:"menu"};return n.value!==!0&&(c["aria-hidden"]="true"),c}),J=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${n.value===!0?"opened":"closed"}`);function k(c,S){const x=a[c],w=`q-fab__${c} absolute-full`;return x===void 0?b(T,{class:w,name:e[S]||d.iconSet.fab[S]}):b("div",{class:w},x(s.value))}function X(){const c=[];return e.hideIcon!==!0&&c.push(b("div",{class:J.value},[k("icon","icon"),k("active-icon","activeIcon")])),(e.label!==""||a.label!==void 0)&&c[g.value.action](b("div",g.value.data,a.label!==void 0?a.label(s.value):[e.label])),I(a.tooltip,c)}return ne(j,{showing:n,onChildClick(c){_(c),o.value!==null&&o.value.$el.focus()}}),()=>b("div",{class:K.value},[b(h,{ref:o,class:f.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":t,onClick:y},X),b("div",{class:U.value,...W.value},oe(a.default))])}});const qe=O({__name:"GeneratorCard",props:{generator:{}},setup(e){const a=e,o=z();return(n,t)=>ie((m(),D(C,{class:se(["relative-position q-mx-md",a.generator===i(o).activeGenerator?"q-my-md inset-shadow inset-dark-glass":"q-my-sm shadow-4 hovering-glass"]),style:p([{borderRadius:a.generator===i(o).activeGenerator?"40px":"6px"},{cursor:"pointer",transition:"0.25s ease-out"}]),onClick:t[2]||(t[2]=d=>i(o).setActiveGenerator(a.generator))},{default:r(()=>[l(P,{horizontal:""},{default:r(()=>[l(P,{class:"text-h6 q-py-sm text-no-wrap"},{default:r(()=>[q(R(a.generator.name),1)]),_:1}),l(V),l(h,{flat:"",icon:"content_copy",dense:"",onClick:t[0]||(t[0]=$(d=>i(o).copyGenerator(a.generator),["stop"]))}),l(h,{flat:"",icon:"edit",onClick:t[1]||(t[1]=$(d=>i(o).editGenerator(a.generator),["stop"]))})]),_:1})]),_:1},8,["class","style"])),[[re]])}}),Le=O({__name:"GeneratorsPage",setup(e){const a=z();return(o,n)=>(m(),A(G,null,[l(Y,{elevated:"",class:"opaque-glass"},{default:r(()=>[l(ee,null,{default:r(()=>{var t;return[l(Q,{class:"text-black"},{default:r(()=>[q("Generators")]),_:1}),l(i(V)),l(Q,{class:"text-overline text-right",style:p({color:i(ve)((t=i(a).activePalette)==null?void 0:t.colors,-1)})},{default:r(()=>{var d;return[q(R((d=i(a).activeGenerator)==null?void 0:d.name),1)]}),_:1},8,["style"])]}),_:1})]),_:1}),l(Z,{padding:"",class:"row"},{default:r(()=>[l(C,{class:"raised-light-glass row-grow col-grow q-ma-sm row"},{default:r(()=>[l(C,{class:"q-ma-md overflow-hidden col-grow inset-shadow inset-dark-glass"},{default:r(()=>[l(ae,{class:"fit q-py-md","bar-style":"display: none"},{default:r(()=>[(m(!0),A(G,null,ce(i(a).generators,t=>(m(),D(qe,{key:t.name,generator:t},null,8,["generator"]))),128))]),_:1})]),_:1})]),_:1}),l(ge,{position:"bottom",offset:[18,44]},{default:r(()=>{var t;return[l(pe,{class:"our-fab",style:p(i(me)((t=i(a).activePalette)==null?void 0:t.colors)),icon:"add",direction:"up"},{default:r(()=>[l(L,{icon:"gradient",label:"Gradient",onClick:i(a).newGradient},null,8,["onClick"]),l(L,{icon:"filter_drama",label:"Particle",onClick:i(a).newParticle},null,8,["onClick"])]),_:1},8,["style"])]}),_:1})]),_:1})],64))}});export{Le as default};
