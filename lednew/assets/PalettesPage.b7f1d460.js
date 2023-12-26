import{Q as b,a as k}from"./QPageSticky.b77ca2af.js";import{Q as C,a as P}from"./QPage.0dbad1d5.js";import{c as p,t as i,b as Q}from"./palette.0b9e847b.js";import{q as x,s as w,J as B,v as d,x as S,y as l,a9 as z,G as t,z as r,A as a,E as D,aa as h,Q as m,ab as y,R as $,C as c,F as _,B as n,D as A}from"./index.4965cb06.js";import{Q as g}from"./QCardSection.be015210.js";import{Q as v}from"./QSpace.322e89e5.js";const N=x({__name:"PaletteCard",props:{palette:{}},setup(u){const e=u,o=w();return(q,s)=>B((d(),S(p,{class:z(["",e.palette===t(o).activePalette?"q-my-md inset-shadow":"q-my-sm shadow-2"]),style:r([[t(Q)(e.palette.colors),{borderRadius:e.palette===t(o).activePalette?"40px":"6px"}],{cursor:"pointer",transition:"0.25s ease-out"}]),onClick:s[2]||(s[2]=f=>t(o).setActivePalette(e.palette))},{default:l(()=>[a(g,{horizontal:""},{default:l(()=>[a(g,{class:"text-h6 q-py-sm text-no-wrap",style:r({color:t(i)(e.palette.colors,0)})},{default:l(()=>[D(h(e.palette.name),1)]),_:1},8,["style"]),a(v),a(m,{flat:"",icon:"content_copy",dense:"",style:r({color:t(i)(e.palette.colors,-1)}),onClick:s[0]||(s[0]=y(f=>t(o).copyPalette(e.palette),["stop"]))},null,8,["style"]),a(m,{flat:"",icon:"edit",style:r({color:t(i)(e.palette.colors,-1)}),onClick:s[1]||(s[1]=y(f=>t(o).editPalette(e.palette),["stop"]))},null,8,["style"])]),_:1})]),_:1},8,["class","style"])),[[$]])}}),R=n("div",null,"Palettes",-1),V={class:"text-h6 text-right"},E={class:"row"},F=n("div",{style:{width:"100%",height:"80px"}},null,-1),j=x({__name:"PalettesPage",setup(u){const e=w();return(o,q)=>(d(),c(_,null,[a(b,{style:{background:"#00000000"}},{default:l(()=>{var s;return[n("div",{class:"text-h5 q-mx-lg q-mt-md q-pa-md q-pl-lg opaque-glass row shadow-4",style:r([{"border-radius":"45px"},{color:t(i)(void 0,-1)}])},[R,a(t(v)),n("span",V,h((s=t(e).activePalette)==null?void 0:s.name),1)],4)]}),_:1}),a(C,{padding:"",class:"row"},{default:l(()=>[a(p,{style:{"border-radius":"45px"},class:"raised-light-glass row-grow col-grow q-ma-sm row"},{default:l(()=>[a(p,{style:{"border-radius":"30px"},class:"q-ma-md overflow-hidden col-grow inset-shadow inset-dark-glass"},{default:l(()=>[a(P,{class:"fit q-py-md","bar-style":"display: none"},{default:l(()=>[n("div",E,[(d(!0),c(_,null,A(t(e).palettes,s=>(d(),c("div",{key:s.name,class:"col-12 col-lg-3 col-sm-6 col-md-4 q-px-md"},[a(N,{palette:s},null,8,["palette"])]))),128)),F])]),_:1})]),_:1})]),_:1}),a(k,{position:"bottom",offset:[18,50]},{default:l(()=>[a(m,{size:"25px",round:"",class:"shadow-10 opaque-glass",icon:"add",onClick:t(e).newPalette},null,8,["onClick"])]),_:1})]),_:1})],64))}});export{j as default};