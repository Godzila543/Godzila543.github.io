import{Q as h,a as q,b as f}from"./QPage.225ccb29.js";import{a as B}from"./QToolbar.b0fdc5e3.js";import{Q as d,a as y,b as S}from"./QCardSection.db8401ff.js";import{q as x,s as v,G as z,v as i,x as P,y as l,X as $,Y as e,z as r,A as a,Z as p,_ as Q,V as m,$ as _,R as T,B as g,F as w,C as V,ad as A}from"./index.283135ea.js";import{Q as D}from"./QPageSticky.f84c0522.js";import{Q as b}from"./QSpace.df4d4aed.js";import{t as c,b as k}from"./palette.0dcd8c20.js";import"./QScrollObserver.34f95098.js";const N=x({__name:"PaletteCard",props:{palette:{}},setup(u){const t=u,o=v();return(C,s)=>z((i(),P(d,{class:$(["relative-position",t.palette===e(o).activePalette?"q-my-lg shadow-10":"q-my-sm shadow-2"]),style:r([[e(k)(t.palette.colors),{borderRadius:t.palette===e(o).activePalette?"40px":"6px"}],{cursor:"pointer",transition:"0.25s ease-out"}]),onClick:s[2]||(s[2]=n=>e(o).setActivePalette(t.palette))},{default:l(()=>[a(y,{horizontal:""},{default:l(()=>[a(y,{class:"text-h6 q-py-sm text-no-wrap",style:r({color:e(c)(t.palette.colors,0)})},{default:l(()=>[p(Q(t.palette.name),1)]),_:1},8,["style"]),a(b),a(m,{flat:"",icon:"content_copy",dense:"",style:r({color:e(c)(t.palette.colors,-1)}),onClick:s[0]||(s[0]=_(n=>e(o).copyPalette(t.palette),["stop"]))},null,8,["style"]),a(m,{flat:"",icon:"edit",style:r({color:e(c)(t.palette.colors,-1)}),onClick:s[1]||(s[1]=_(n=>e(o).editPalette(t.palette),["stop"]))},null,8,["style"])]),_:1})]),_:1},8,["class","style"])),[[T]])}}),R=A("div",{style:{width:"100%",height:"80px"}},null,-1),Z=x({__name:"PalettesPage",setup(u){const t=v();return(o,C)=>(i(),g(w,null,[a(h,{elevated:"",class:"opaque-glass"},{default:l(()=>[a(B,null,{default:l(()=>{var s;return[a(f,{class:"text-black"},{default:l(()=>[p("Palettes")]),_:1}),a(e(b)),a(f,{class:"text-overline text-right",style:r({color:e(c)((s=e(t).activePalette)==null?void 0:s.colors,-1)})},{default:l(()=>{var n;return[p(Q((n=e(t).activePalette)==null?void 0:n.name),1)]}),_:1},8,["style"])]}),_:1})]),_:1}),a(q,{padding:"",class:"row"},{default:l(()=>[a(d,{class:"raised-light-glass row-grow col-grow q-ma-sm row"},{default:l(()=>[a(d,{class:"q-ma-md overflow-hidden col-grow inset-shadow inset-dark-glass"},{default:l(()=>[a(S,{class:"fit q-py-md","bar-style":"display: none"},{default:l(()=>[(i(!0),g(w,null,V(e(t).palettes,s=>(i(),P(N,{key:s.name,palette:s,class:"q-mx-md"},null,8,["palette"]))),128)),R]),_:1})]),_:1})]),_:1}),a(D,{position:"bottom",offset:[18,40]},{default:l(()=>{var s;return[a(m,{style:r(e(k)((s=e(t).activePalette)==null?void 0:s.colors)),size:"25px",round:"",class:"shadow-10",icon:"add",onClick:e(t).newPalette},null,8,["style","onClick"])]}),_:1})]),_:1})],64))}});export{Z as default};
