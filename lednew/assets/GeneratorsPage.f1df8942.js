import{Q as Z,a as J,b as Q}from"./QPage.11330775.js";import{a as ee}from"./QToolbar.90fb8a26.js";import{Q as C,a as P,b as ae}from"./QCardSection.7b0a1138.js";import{b as u,c as F,i as te,f as b,V as h,N as le,W as j,Q as T,h as I,g as M,r as $,p as ne,j as oe,q as O,s as V,G as ie,v as m,x as z,y as r,X as se,Y as i,z as p,A as l,Z as q,_ as N,$ as B,R as re,B as G,F as A,C as ce}from"./index.2ba2233b.js";import{u as ue,a as de,b as be}from"./use-model-toggle.ccbf1e34.js";import{u as fe}from"./uid.42677368.js";import{Q as ge}from"./QPageSticky.56cb195c.js";import{Q as R}from"./QSpace.a244b3fd.js";import{t as ve,b as me}from"./palette.4b85b2d6.js";import"./QScrollObserver.7acefe62.js";const he=["top","right","bottom","left"],D={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>he.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function W(e,a){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const o=e.hideLabel===null?a.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(o===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const E={start:"self-end",center:"self-center",end:"self-start"},_e=Object.keys(E);var L=F({name:"QFabAction",props:{...D,icon:{type:String,default:""},anchor:{type:String,validator:e=>_e.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const n=te(j,()=>({showing:{value:!0},onChildClick:le})),{formClass:t,labelProps:d}=W(e,n.showing),f=u(()=>{const s=E[e.anchor];return t.value+(s!==void 0?` ${s}`:"")}),g=u(()=>e.disable===!0||n.showing.value!==!0);function v(s){n.onChildClick(s),o("click",s)}function _(){const s=[];return a.icon!==void 0?s.push(a.icon()):e.icon!==""&&s.push(b(T,{name:e.icon})),(e.label!==""||a.label!==void 0)&&s[d.value.action](b("div",d.value.data,a.label!==void 0?a.label():[e.label])),I(a.default,s)}const y=M();return Object.assign(y.proxy,{click:v}),()=>b(h,{class:f.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:g.value,onClick:v},_)}});const ye=["up","right","down","left"],Ce=["left","center","right"];var pe=F({name:"QFab",props:{...D,...ue,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>ye.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>Ce.includes(e)}},emits:de,setup(e,{slots:a}){const o=$(null),n=$(e.modelValue===!0),t=fe(),{proxy:{$q:d}}=M(),{formClass:f,labelProps:g}=W(e,n),v=u(()=>e.persistent!==!0),{hide:_,toggle:y}=be({showing:n,hideOnRouteChange:v}),s=u(()=>({opened:n.value})),H=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${f.value}`+(n.value===!0?" q-fab--opened":" q-fab--closed")),K=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value===!0?"opened":"closed"}`),U=u(()=>{const c={id:t,role:"menu"};return n.value!==!0&&(c["aria-hidden"]="true"),c}),X=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${n.value===!0?"opened":"closed"}`);function k(c,S){const x=a[c],w=`q-fab__${c} absolute-full`;return x===void 0?b(T,{class:w,name:e[S]||d.iconSet.fab[S]}):b("div",{class:w},x(s.value))}function Y(){const c=[];return e.hideIcon!==!0&&c.push(b("div",{class:X.value},[k("icon","icon"),k("active-icon","activeIcon")])),(e.label!==""||a.label!==void 0)&&c[g.value.action](b("div",g.value.data,a.label!==void 0?a.label(s.value):[e.label])),I(a.tooltip,c)}return ne(j,{showing:n,onChildClick(c){_(c),o.value!==null&&o.value.$el.focus()}}),()=>b("div",{class:H.value},[b(h,{ref:o,class:f.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":t,onClick:y},Y),b("div",{class:K.value,...U.value},oe(a.default))])}});const qe=O({__name:"GeneratorCard",props:{generator:{}},setup(e){const a=e,o=V();return(n,t)=>ie((m(),z(C,{class:se(["relative-position q-mx-md",a.generator===i(o).activeGenerator?"q-my-md inset-shadow inset-dark-glass":"q-my-sm shadow-4 hovering-glass"]),style:p([{borderRadius:a.generator===i(o).activeGenerator?"40px":"6px"},{cursor:"pointer",transition:"0.25s ease-out"}]),onClick:t[2]||(t[2]=d=>i(o).setActiveGenerator(a.generator))},{default:r(()=>[l(P,{horizontal:""},{default:r(()=>[l(P,{class:"text-h6 q-py-sm text-no-wrap"},{default:r(()=>[q(N(a.generator.name),1)]),_:1}),l(R),l(h,{flat:"",icon:"content_copy",dense:"",onClick:t[0]||(t[0]=B(d=>i(o).copyGenerator(a.generator),["stop"]))}),l(h,{flat:"",icon:"edit",onClick:t[1]||(t[1]=B(d=>i(o).editGenerator(a.generator),["stop"]))})]),_:1})]),_:1},8,["class","style"])),[[re]])}}),Le=O({__name:"GeneratorsPage",setup(e){const a=V();return(o,n)=>(m(),G(A,null,[l(Z,{elevated:"",class:"opaque-glass"},{default:r(()=>[l(ee,null,{default:r(()=>{var t;return[l(Q,{class:"text-black"},{default:r(()=>[q("Generators")]),_:1}),l(i(R)),l(Q,{class:"text-overline text-right",style:p({color:i(ve)((t=i(a).activePalette)==null?void 0:t.colors,-1)})},{default:r(()=>{var d;return[q(N((d=i(a).activeGenerator)==null?void 0:d.name),1)]}),_:1},8,["style"])]}),_:1})]),_:1}),l(J,{padding:"",class:"row"},{default:r(()=>[l(C,{class:"raised-light-glass row-grow col-grow q-ma-sm row"},{default:r(()=>[l(C,{class:"q-ma-md overflow-hidden col-grow inset-shadow inset-dark-glass"},{default:r(()=>[l(ae,{class:"fit q-py-md","bar-style":"display: none"},{default:r(()=>[(m(!0),G(A,null,ce(i(a).generators,t=>(m(),z(qe,{key:t.name,generator:t},null,8,["generator"]))),128))]),_:1})]),_:1})]),_:1}),l(ge,{position:"bottom",offset:[18,44]},{default:r(()=>{var t;return[l(pe,{class:"our-fab",style:p(i(me)((t=i(a).activePalette)==null?void 0:t.colors)),icon:"add",direction:"up"},{default:r(()=>[l(L,{icon:"gradient",label:"Gradient",onClick:i(a).newGradient},null,8,["onClick"]),l(L,{icon:"filter_drama",label:"Particle",onClick:i(a).newParticle},null,8,["onClick"])]),_:1},8,["style"])]}),_:1})]),_:1})],64))}});export{Le as default};
