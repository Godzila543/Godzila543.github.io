import{t as n,c as l}from"./palette.c9830f63.js";import{Q as r}from"./QPage.7de60435.js";import{_ as c}from"./ConfigPage.fc89bb85.js";import{q as m,s as d,w as s,v as g,x as p,y as o,B as i,A as a,z as u,G as t}from"./index.eea681f7.js";import"./QCardSection.768d8979.js";import"./QMenu.0e407cf3.js";import"./use-model-toggle.a6565f8d.js";import"./QDialog.de58f7ec.js";import"./plugin-vue_export-helper.21dcd24c.js";const b=[{label:"Lights",options:[{label:"Brightness",model:"brightness",conditionalAttribute:!0,element:"slider",config:[0,1,.01]},{label:"Speed",model:"speed",conditionalAttribute:!0,element:"slider",config:[.1,5,.01]}]},{label:"App",options:[{label:"Theme",model:"theme",conditionalAttribute:!0,element:"select",config:["Active Palette","Light","Dark"]},{label:"Connect to Lights",model:"openDialog",conditionalAttribute:!0,element:"button",config:[]}]}],h={class:"column col-grow",style:{"max-width":"900px"}},k=m({__name:"SettingsPage",setup(f){const e=d();return s(()=>e.settings.brightness,()=>{e.bt.sendBrightness(e.settings.brightness)}),s(()=>e.settings.theme,()=>{localStorage.setItem("theme",e.settings.theme)}),(_,x)=>(g(),p(r,{padding:"",class:"row justify-center"},{default:o(()=>[i("div",h,[a(l,{class:"q-ma-sm opaque-glass col-12 q-mx-md",style:{"border-radius":"45px",height:"min-content"}},{default:o(()=>[i("div",{class:"text-h5 q-pa-md q-pl-lg",style:u([{"border-radius":"30px"},{color:t(n)(void 0,-1)}])}," Settings ",4)]),_:1}),a(c,{"config-def":t(b),"model-object":t(e).settings},null,8,["config-def","model-object"])])]),_:1}))}});export{k as default};
