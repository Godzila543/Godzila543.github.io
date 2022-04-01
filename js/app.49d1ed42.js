(function(){"use strict";var e={6869:function(e,t,a){var n=a(9242),o=a(3396),l=a(7718),r=a(2882),i=a(2572),d=a(6572),s=a(1334),c=a(3601),u=a(9234),m=a(9271);const g=(0,o.Uk)("Connect to Bluetooth LED Controller"),p=(0,o.Uk)(" Ignore "),h=(0,o.Uk)("Connect Bluetooth");function f(e,t,a,f,b,v){const w=(0,o.up)("GeneratorList"),y=(0,o.up)("PaletteList"),V=(0,o.up)("NavBar");return(0,o.wg)(),(0,o.j4)(l.q,{style:{height:"110vh"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c.B,{modelValue:e.disconnected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.disconnected=t),"max-width":"500px",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.E,null,{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(s.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{variant:"text",color:"error",onClick:v.ignoreBluetooth},{default:(0,o.w5)((()=>[p])),_:1},8,["onClick"]),(0,o.Wm)(u.C),(0,o.Wm)(r.T,{variant:"contained-text",color:"primary",onClick:v.connectBluetooth},{default:(0,o.w5)((()=>[h])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.wy)((0,o.Wm)(w,{BLE:e.BLEDevice},null,8,["BLE"]),[[n.F8,"Generators"==e.activeTab]]),(0,o.wy)((0,o.Wm)(y,{BLE:e.BLEDevice},null,8,["BLE"]),[[n.F8,"Palettes"==e.activeTab]])])),_:1}),(0,o.Wm)(V,{onChange:t[1]||(t[1]=t=>e.activeTab=t)})])),_:1})}var b=a(3369),v=a(6824),w=a(8521);const y=(0,o.Uk)("Create Generator");function V(e,t,a,n,l,i){const d=(0,o.up)("GeneratorCard"),s=(0,o.up)("GeneratorDialog");return(0,o.wg)(),(0,o.j4)(b.K,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v.o,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.generators,(t=>((0,o.wg)(),(0,o.j4)(w.D,{cols:"6",lg:"3",key:t.name},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{onEdit:e=>i.editGenDialog(t),onSelect:e=>i.selectGenerator(t),active:t.name==e.activeGenerator,name:t.name},null,8,["onEdit","onSelect","active","name"])])),_:2},1024)))),128)),(0,o.Wm)(w.D,{cols:"6",lg:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{size:"x-large",color:"primary",onClick:t[0]||(t[0]=t=>{e.dialogEdit=!1,e.dialogOpen=!0})},{default:(0,o.w5)((()=>[y])),_:1})])),_:1})])),_:1}),e.dialogOpen?((0,o.wg)(),(0,o.j4)(s,{key:0,editing:e.dialogEdit,propGen:e.dialogGen,onCancel:t[1]||(t[1]=t=>e.dialogOpen=!1),onSubmit:i.createGenerator,onDelete:i.deleteGenerator},null,8,["editing","propGen","onSubmit","onDelete"])):(0,o.kq)("",!0)])),_:1})}var k=a(7139);const C=(0,o.Uk)("Edit Preset");function _(e,t,a,n,l,c){return(0,o.wg)(),(0,o.j4)(i._,{color:a.active?"secondary":"accent",onClick:t[1]||(t[1]=t=>e.$emit("select",a.name))},{default:(0,o.w5)((()=>[(0,o.Wm)(d.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.name),1)])),_:1}),(0,o.Wm)(s.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{onClick:t[0]||(t[0]=t=>e.$emit("edit",a.name)),variant:"contained-text"},{default:(0,o.w5)((()=>[C])),_:1}),(0,o.Wm)(u.C)])),_:1})])),_:1},8,["color"])}var R={props:{name:String,active:Boolean}},P=a(89);const W=(0,P.Z)(R,[["render",_]]);var M=W,O=a(4075),E=a(3293),j=a(2272),T=a(6538),U=a(4162);const S=(0,o._)("div",{class:"text-caption"},"Speed",-1),x=(0,o._)("div",{class:"text-caption"},"Density",-1),G={class:"text-caption"},L=(0,o.Uk)(" Number of Particles "),D={class:"text-caption"},B=(0,o.Uk)(" Particle Lifetime "),A={class:"text-caption"},F=(0,o.Uk)(" Size "),N={class:"text-caption"},I=(0,o.Uk)(" Distance Falloff "),q={class:"text-caption"},J=(0,o.Uk)(" Persistence "),$={key:0,class:"text-caption"},z=(0,o.Uk)(" Number of Pulses "),K=(0,o._)("div",{class:"text-caption"},"Position",-1),Z=(0,o._)("div",{class:"text-caption"},"Velocity",-1),Y=(0,o.Uk)("Cancel"),H=(0,o.Uk)("Delete");function Q(e,t,a,l,m,g){return(0,o.wg)(),(0,o.j4)(c.B,{"max-width":"800px",fullscreen:"",modelValue:e.active,"onUpdate:modelValue":t[26]||(t[26]=t=>e.active=t),color:"secondary",persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.E,{class:"headline grey"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.editing?"Edit an Existing Generator":"Create a New Generator"),1)])),_:1}),(0,o.Wm)(s.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U.h,{label:"Name",modelValue:e.generator.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.generator.name=t),disabled:a.editing},null,8,["modelValue","disabled"]),(0,o.Wm)(j.rL,{label:"Function",items:e.generatorTypes,modelValue:e.generator.generator,"onUpdate:modelValue":t[1]||(t[1]=t=>e.generator.generator=t)},null,8,["items","modelValue"]),(0,o.wy)((0,o.Wm)(b.K,null,{default:(0,o.w5)((()=>[S,(0,o.Wm)(T.R,{modelValue:e.generator.rate,"onUpdate:modelValue":t[2]||(t[2]=t=>e.generator.rate=t),min:"0",max:"5",step:"0.1",label:"Speed","thumb-label":"always"},null,8,["modelValue"]),x,(0,o.Wm)(T.R,{modelValue:e.generator.density,"onUpdate:modelValue":t[3]||(t[3]=t=>e.generator.density=t),min:"0",max:"5",step:"0.1",label:"Density","thumb-label":"always"},null,8,["modelValue"])])),_:1},512),[[n.F8,"Gradient"==e.generator.generator]]),"Particle"==e.generator.generator?((0,o.wg)(),(0,o.j4)(b.K,{key:0},{default:(0,o.w5)((()=>[(0,o._)("div",G,[L,(0,o.Wm)(T.R,{label:" Number of Particles","thumb-label":"always",modelValue:e.generator.particleCount,"onUpdate:modelValue":t[4]||(t[4]=t=>e.generator.particleCount=t),min:"1",max:"300",step:"1"},null,8,["modelValue"])]),(0,o._)("div",D,[B,(0,o.Wm)(T.R,{label:"Particle Lifetime","thumb-label":"always",modelValue:e.generator.particleLife,"onUpdate:modelValue":t[5]||(t[5]=t=>e.generator.particleLife=t),min:"0.1",max:"10",step:"0.1"},null,8,["modelValue"])]),(0,o._)("div",A,[F,(0,o.Wm)(T.R,{label:"Range of Influence","thumb-label":"always",modelValue:e.generator.particleRange,"onUpdate:modelValue":t[6]||(t[6]=t=>e.generator.particleRange=t),min:"1",max:"300",step:"1"},null,8,["modelValue"])]),(0,o._)("div",N,[I,(0,o.Wm)(T.R,{label:"Curve Factor","thumb-label":"always",modelValue:e.generator.curveFactor,"onUpdate:modelValue":t[7]||(t[7]=t=>e.generator.curveFactor=t),min:"0.1",max:"10",step:"0.1"},null,8,["modelValue"])]),(0,o._)("div",q,[J,(0,o.Wm)(T.R,{label:"Persistence","thumb-label":"always",modelValue:e.generator.persistence,"onUpdate:modelValue":t[8]||(t[8]=t=>e.generator.persistence=t),min:"0",max:"1",step:"0.01"},null,8,["modelValue"])]),(0,o.Wm)(j.rL,{label:"Intensity Method",items:e.intensityMethods,modelValue:e.generator.intensityMethod,"onUpdate:modelValue":t[9]||(t[9]=t=>e.generator.intensityMethod=t)},null,8,["items","modelValue"]),"Pulse"==e.generator.intensityMethod?((0,o.wg)(),(0,o.iD)("div",$,[z,"Pulse"==e.generator.intensityMethod?((0,o.wg)(),(0,o.j4)(T.R,{key:0,label:"Number of Pulses","thumb-label":"always",modelValue:e.generator.intensityValue,"onUpdate:modelValue":t[10]||(t[10]=t=>e.generator.intensityValue=t),min:"1",max:"30",step:"0.1"},null,8,["modelValue"])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),(0,o.Wm)(j.rL,{label:"Color Method",items:e.colorMethods,modelValue:e.generator.colorMethod,"onUpdate:modelValue":t[11]||(t[11]=t=>e.generator.colorMethod=t)},null,8,["items","modelValue"]),(0,o.Wm)(j.rL,{label:"Initial Position Method",items:e.attributeInitMethods,modelValue:e.generator.posMethod,"onUpdate:modelValue":t[12]||(t[12]=t=>e.generator.posMethod=t)},null,8,["items","modelValue"]),K,"Set"==e.generator.posMethod?((0,o.wg)(),(0,o.j4)(T.R,{key:1,label:"Position","thumb-label":"always",modelValue:e.generator.posRange[0],"onUpdate:modelValue":t[13]||(t[13]=t=>e.generator.posRange[0]=t),min:"0",max:"900",step:"1"},null,8,["modelValue"])):(0,o.kq)("",!0),"Random in Range"==e.generator.posMethod?((0,o.wg)(),(0,o.j4)(E.m,{key:2,label:"Position Range","thumb-label":"always",modelValue:e.generator.posRange,"onUpdate:modelValue":t[14]||(t[14]=t=>e.generator.posRange=t),min:"0",max:"900",step:"1"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(j.rL,{label:"Initial Velocity Method",items:e.attributeInitMethods,modelValue:e.generator.velMethod,"onUpdate:modelValue":t[15]||(t[15]=t=>e.generator.velMethod=t)},null,8,["items","modelValue"]),Z,"Set"==e.generator.velMethod?((0,o.wg)(),(0,o.j4)(T.R,{key:3,label:"Velocity","thumb-label":"always",modelValue:e.generator.velRange[0],"onUpdate:modelValue":t[16]||(t[16]=t=>e.generator.velRange[0]=t),min:"-2",max:"2",step:"0.1"},null,8,["modelValue"])):(0,o.kq)("",!0),"Random in Range"==e.generator.velMethod?((0,o.wg)(),(0,o.j4)(E.m,{key:4,label:"Velocity Range","thumb-label":"always",modelValue:e.generator.velRange,"onUpdate:modelValue":t[17]||(t[17]=t=>e.generator.velRange=t),min:"-5",max:"5",step:"0.1"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(j.rL,{label:"Calculated Attribute",items:e.AttributesToCalculate,modelValue:e.generator.calculatedAttribute,"onUpdate:modelValue":t[18]||(t[18]=t=>e.generator.calculatedAttribute=t)},null,8,["items","modelValue"]),(0,o.Wm)(j.rL,{label:"Calculation Method",items:e.AttributeCalcMethods,modelValue:e.generator.attributeMethod,"onUpdate:modelValue":t[19]||(t[19]=t=>e.generator.attributeMethod=t)},null,8,["items","modelValue"]),"Constant"==e.generator.attributeMethod||"Attractor"==e.generator.attributeMethod?((0,o.wg)(),(0,o.j4)(T.R,{key:5,label:"Attribute Value","thumb-label":"always",modelValue:e.generator.aRange[0],"onUpdate:modelValue":t[20]||(t[20]=t=>e.generator.aRange[0]=t),min:"Position"==e.generator.calculatedAttribute?0:-1,max:"Position"==e.generator.calculatedAttribute?900:1,step:"0.01"},null,8,["modelValue","min","max"])):(0,o.kq)("",!0),"Scaled over Life"==e.generator.attributeMethod?((0,o.wg)(),(0,o.j4)(E.m,{key:6,label:"Attribute Range","thumb-label":"always",modelValue:e.generator.aRange,"onUpdate:modelValue":t[21]||(t[21]=t=>e.generator.aRange=t),min:"Position"==e.generator.calculatedAttribute?0:-5,max:"Position"==e.generator.calculatedAttribute?900:5,step:"0.01"},null,8,["modelValue","min","max"])):(0,o.kq)("",!0),"Attractor"==e.generator.attributeMethod?((0,o.wg)(),(0,o.j4)(T.R,{key:7,label:"Attraction Amount","thumb-label":"always",modelValue:e.generator.aRange[1],"onUpdate:modelValue":t[22]||(t[22]=t=>e.generator.aRange[1]=t),min:-.1,max:.1,step:"0.001"},null,8,["modelValue","min","max"])):(0,o.kq)("",!0)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(O.J),(0,o.Wm)(v.o,{class:"pt-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{variant:"outlined",color:"accent",onClick:t[23]||(t[23]=t=>e.$emit("cancel"))},{default:(0,o.w5)((()=>[Y])),_:1}),a.editing?((0,o.wg)(),(0,o.j4)(r.T,{key:0,color:"error",onClick:t[24]||(t[24]=t=>e.$emit("delete",e.generator.name))},{default:(0,o.w5)((()=>[H])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(u.C),(0,o.Wm)(r.T,{color:"primary",variant:"contained-text",onClick:t[25]||(t[25]=t=>g.createGenerator(e.generator)),disabled:0==e.generator.name?.length},{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.editing?"Modify Generator":"Create Generator"),1)])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var X={props:{editing:Boolean,propGen:Object},created(){this.editing?this.generator=JSON.parse(JSON.stringify(this.propGen)):this.initDefaultGenerator()},data:()=>({generator:{},active:!0,generatorTypes:["Gradient","Particle"],intensityMethods:["Fade In","Fade Out","Fade In and Out","Pulse"],colorMethods:["Age","Intensity","Influence","Random"],attributeInitMethods:["Set","Random in Range"],AttributesToCalculate:["Position","Velocity","Acceleration"],AttributeCalcMethods:["Constant","Scaled over Life","Attractor"]}),methods:{initDefaultGenerator(){this.generator={rate:50,density:50,name:"",generator:"",particleCount:0,particleLife:0,particleRange:0,curveFactor:5,persistence:0,intensityMethod:"Fade In and Out",intensityValue:1,colorMethod:"Influence",posMethod:"Random in Range",posRange:[0,900],velMethod:"Random in Range",velRange:[0,1],calculatedAttribute:"Acceleration",attributeMethod:"Constant",aValue3:0,aRange:[0,1]}},createGenerator(e){console.log(e);var t=JSON.stringify(e);this.$emit("submit",t)}}};const ee=(0,P.Z)(X,[["render",Q]]);var te=ee;const ae={fetch(e){console.log("Requesting Generators"),fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/preset/fetch/").then((function(e){return e.json()})).then((function(t){const a=t.map((e=>{for(const t in e){const a=parseFloat(e[t]);e[t]=isNaN(a)?e[t]:a}return e.posRange=[e.posValue1,e.posValue2],e.velRange=[e.velValue1,e.velValue2],e.aRange=[e.aValue1,e.aValue2],[e.name,e]}));e.generators=Object.fromEntries(a),console.log("Generators recieved"),console.log(e.generators)})).catch((function(e){console.log(e)}))},insert(e){e.posValue1=e.posRange[0],e.posValue2=e.posRange[1],e.velValue1=e.velRange[0],e.velValue2=e.velRange[1],e.aValue1=e.aRange[0],e.aValue2=e.aRange[1],fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/preset/insert/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},update(e){e.posValue1=e.posRange[0],e.posValue2=e.posRange[1],e.velValue1=e.velRange[0],e.velValue2=e.velRange[1],e.aValue1=e.aRange[0],e.aValue2=e.aRange[1],fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/preset/update/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},delete(e){fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/preset/delete/",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"name" : "'+e+'"}'})}};var ne={props:{BLE:Object},components:{GeneratorCard:M,GeneratorDialog:te},created(){ae.fetch(this)},methods:{selectGenerator(e){this.activeGenerator=e.name,this.sendGenerator(e)},sliderToSpeed(e){return Math.pow(e/15,3)},sliderToDensity(e){return Math.pow(e/3,3)},sendGenerator(e){var t={};if("Gradient"==e.generator)t.generator=0,t.rate=this.sliderToSpeed(e.rate),t.density=this.sliderToDensity(e.density);else if("Particle"==e.generator){switch(t.generator=1,t.timerDecay=e.particleCount/e.particleLife/100,t.particleDecay=1/e.particleLife/100,t.range=e.particleRange,t.curveFactor=e.curveFactor,t.referenceDecay=Math.pow(e.persistence,.01),e.intensityMethod){case"Fade Out":t.intensityMethod=0;break;case"Fade In":t.intensityMethod=1;break;case"Fade In and Out":t.intensityMethod=2;break;case"Pulse":t.intensityMethod=3;break}switch(t.intensityValue=e.intensityValue,e.colorMethod){case"Age":t.colorMethod=0;break;case"Intensity":t.colorMethod=1;break;case"Influence":t.colorMethod=2;break;case"Random":t.colorMethod=3;break}switch(e.posMethod){case"Set":t.posMethod=0;break;case"Random in Range":t.posMethod=1;break}switch(t.posValue1=e.posRange[0],t.posValue2=e.posRange[1],e.velMethod){case"Set":t.velMethod=0;break;case"Random in Range":t.velMethod=1;break}switch(t.velValue1=e.velRange[0],t.velValue2=e.velRange[1],e.calculatedAttribute){case"Position":t.calculatedAttribute=0;break;case"Velocity":t.calculatedAttribute=1;break;case"Acceleration":t.calculatedAttribute=2;break}switch(e.attributeMethod){case"Constant":t.attributeMethod=0;break;case"Scaled over Life":t.attributeMethod=1;break;case"Attractor":t.attributeMethod=2}t.aValue1=e.aRange[0],t.aValue2=e.aRange[1],t.aValue3=e.aValue3}console.log(JSON.stringify(t)),this.BLE.sendGenerator(JSON.stringify(t))},editGenDialog(e){this.dialogGen=e,this.dialogEdit=!0,this.dialogOpen=!0},createGenerator(e){const t=JSON.parse(e);this.generators[t.name]=t,this.dialogOpen=!1,this.dialogEdit?ae.update(t):ae.insert(t)},deleteGenerator(e){confirm("Delete Generator?")&&(ae.delete(e),delete this.generators[e],this.dialogOpen=!1)}},data:()=>({activeGenerator:"",generators:[{name:"Loading..."}],dialogOpen:!1,dialogEdit:!1,dialogGen:{}})};const oe=(0,P.Z)(ne,[["render",V]]);var le=oe;const re=(0,o.Uk)("Create Palette");function ie(e,t,a,n,l,i){const d=(0,o.up)("PaletteCard"),s=(0,o.up)("PaletteDialog");return(0,o.wg)(),(0,o.j4)(b.K,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v.o,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.palettes,((t,a)=>((0,o.wg)(),(0,o.j4)(w.D,{cols:"6",lg:"3",key:a},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{onEdit:i.editPalette,onSelect:i.selectPalette,active:a==e.activePalette,name:a,colors:t},null,8,["onEdit","onSelect","active","name","colors"])])),_:2},1024)))),128)),(0,o.Wm)(w.D,{cols:"6",lg:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{size:"x-large",color:"primary",onClick:t[0]||(t[0]=t=>{e.dialogEdit=!1,e.dialogOpen=!0})},{default:(0,o.w5)((()=>[re])),_:1})])),_:1})])),_:1}),e.dialogOpen?((0,o.wg)(),(0,o.j4)(s,{key:0,propColors:e.dialogColors,propName:e.dialogName,editing:e.dialogEdit,onCancel:t[1]||(t[1]=t=>e.dialogOpen=!1),onSubmit:i.createPalette,onDelete:i.deletePalette},null,8,["propColors","propName","editing","onSubmit","onDelete"])):(0,o.kq)("",!0)])),_:1})}const de=(0,o.Uk)("Edit Preset");function se(e,t,a,n,l,c){return(0,o.wg)(),(0,o.j4)(i._,{variant:a.active?"outlined":"text",style:(0,k.j5)({backgroundImage:c.gradientString()}),onClick:t[1]||(t[1]=t=>e.$emit("select",a.name))},{default:(0,o.w5)((()=>[(0,o.Wm)(d.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.name),1)])),_:1}),(0,o.Wm)(s.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{onClick:t[0]||(t[0]=t=>e.$emit("edit",a.name)),variant:a.active?"outlined":"text",rounded:a.active,style:{backgroundColor:"#16161d40"}},{default:(0,o.w5)((()=>[de])),_:1},8,["variant","rounded"]),(0,o.Wm)(u.C)])),_:1})])),_:1},8,["variant","style"])}var ce={props:{name:String,colors:Array,active:Boolean},methods:{gradientString(){return"linear-gradient(30deg,"+this.colors.toString()+")"}}};const ue=(0,P.Z)(ce,[["render",se]]);var me=ue,ge=a(5124),pe=a(3289);const he=(0,o.Uk)("mdi-delete-outline"),fe=(0,o.Uk)("Add Color "),be=(0,o.Uk)("Cancel"),ve=(0,o.Uk)("Delete");function we(e,t,a,n,l,m){return(0,o.wg)(),(0,o.j4)(c.B,{"max-width":"500px",fullscreen:"",modelValue:e.active,"onUpdate:modelValue":t[5]||(t[5]=t=>e.active=t),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(i._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.E,{style:(0,k.j5)({backgroundImage:m.gradientString()})},{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.editing?"Edit an Existing Palette":"Create a New Palette"),1)])),_:1},8,["style"]),(0,o.Wm)(s.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U.h,{label:"Name",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),disabled:a.editing},null,8,["modelValue","disabled"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.colors,((t,a)=>((0,o.wg)(),(0,o.j4)(v.o,{key:a,justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(ge.J,{"canvas-height":"100",modelValue:e.colors[a],"onUpdate:modelValue":t=>e.colors[a]=t,"hide-inputs":""},null,8,["modelValue","onUpdate:modelValue"]),(0,o.Wm)(r.T,{icon:"",color:"error",onClick:t=>e.colors.splice(a,1)},{default:(0,o.w5)((()=>[(0,o.Wm)(pe.t,null,{default:(0,o.w5)((()=>[he])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)))),128)),(0,o.Wm)(v.o,{class:"pt-10"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{color:"secondary",variant:"text",onClick:t[1]||(t[1]=t=>e.colors.push("#FF00FF")),disabled:e.colors.length>7},{default:(0,o.w5)((()=>[fe])),_:1},8,["disabled"])])),_:1}),(0,o.Wm)(v.o,{class:"pt-10"},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{variant:"outlined",color:"accent",onClick:t[2]||(t[2]=t=>e.$emit("cancel"))},{default:(0,o.w5)((()=>[be])),_:1}),a.editing?((0,o.wg)(),(0,o.j4)(r.T,{key:0,color:"error",onClick:t[3]||(t[3]=t=>e.$emit("delete",e.name))},{default:(0,o.w5)((()=>[ve])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(u.C),(0,o.Wm)(r.T,{color:"primary",onClick:t[4]||(t[4]=t=>e.$emit("submit",e.name,e.colors)),disabled:e.colors.length<2||e.colors.length>8||0==e.name.length},{default:(0,o.w5)((()=>[(0,o.Uk)((0,k.zw)(a.editing?"Modify Palette":"Create Palette"),1)])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var ye={props:{editing:Boolean,propColors:Object,propName:String},created(){this.editing&&(this.name=this.propName,this.colors=[...this.propColors])},methods:{gradientString(){return"linear-gradient(30deg,"+this.colors.toString()+")"}},data:()=>({colors:["#000000","#FFFFFF"],name:"",active:!0})};const Ve=(0,P.Z)(ye,[["render",we]]);var ke=Ve;const Ce=function(e){if(7!=e.length)throw"Only six-digit hex colors are allowed.";e=e.substring(1);var t=e.match(/.{1,2}/g),a=[parseInt(t[0],16),parseInt(t[1],16),parseInt(t[2],16)];return a},_e={insert(e,t){const a={title:e,data:t};fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/palette/insert/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},fetch(e){console.log("Requesting Palettes"),fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/palette/fetch/").then((function(e){return e.json()})).then((function(t){const a=t.map((e=>[e.title,e.data]));e.palettes=Object.fromEntries(a),console.log("Palettes Recieved")})).catch((function(e){console.log(e)}))},update(e,t){const a={title:e,data:t};fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/palette/update/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},delete(e){fetch("https://colinbrown.api.stdlib.com/sheets-led@1.0.0/palette/delete/",{method:"POST",headers:{"Content-Type":"application/json"},body:'{"title" : "'+e+'"}'})}};var Re={props:{BLE:Object},components:{PaletteCard:me,PaletteDialog:ke},created(){_e.fetch(this)},methods:{selectPalette(e){this.activePalette=e,this.sendPalette(this.palettes[e])},editPalette(e){this.dialogEdit=!0,this.dialogName=e,this.dialogColors=this.palettes[e],this.dialogOpen=!0},createPalette(e,t){this.palettes[e]=t,this.dialogOpen=!1,this.dialogEdit?_e.update(e,t):_e.insert(e,t)},deletePalette(e){confirm("Delete Palette?")&&(_e.delete(e),delete this.palettes[e],this.dialogOpen=!1)},sendPalette(e){var t={};t.colors=e.map(Ce),t.length=t.colors.length,this.BLE.sendPalette(JSON.stringify(t))}},data:()=>({activePalette:"",palettes:{Loading:["#000000","#FFFFFF"]},dialogOpen:!1,dialogEdit:!1,dialogColors:[],dialogName:""})};const Pe=(0,P.Z)(Re,[["render",ie]]);var We=Pe,Me=a(6728);const Oe=(0,o.Uk)("mdi-wrench"),Ee=(0,o._)("span",null,"Generators",-1),je=(0,o.Uk)("mdi-palette"),Te=(0,o._)("span",null,"Palettes",-1),Ue=(0,o.Uk)("mdi-cog"),Se=(0,o._)("span",null,"Settings",-1);function xe(e,t,a,n,l,i){return(0,o.wg)(),(0,o.j4)(Me.N,{mandatory:"",fixed:"",app:"",modelValue:e.activeTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeTab=t),color:"primary",onClick:t[1]||(t[1]=t=>e.$emit("change",e.activeTab))},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{value:"Generators"},{default:(0,o.w5)((()=>[(0,o.Wm)(pe.t,null,{default:(0,o.w5)((()=>[Oe])),_:1}),Ee])),_:1}),(0,o.Wm)(r.T,{value:"Palettes"},{default:(0,o.w5)((()=>[(0,o.Wm)(pe.t,null,{default:(0,o.w5)((()=>[je])),_:1}),Te])),_:1}),(0,o.Wm)(r.T,{value:"Settings"},{default:(0,o.w5)((()=>[(0,o.Wm)(pe.t,null,{default:(0,o.w5)((()=>[Ue])),_:1}),Se])),_:1})])),_:1},8,["modelValue"])}var Ge={data:()=>({activeTab:"Generators"})};const Le=(0,P.Z)(Ge,[["render",xe]]);var De=Le,Be=new TextEncoder,Ae={name:"App",components:{GeneratorList:le,PaletteList:We,NavBar:De},created(){},data:()=>({activeTab:"Generators",disconnected:!0,BLEDevice:{device:{},server:{},service:{},genChar:{},palChar:{},async sendGenerator(e){console.log(Be.encode(e).byteLength),this.genChar.writeValueWithResponse(Be.encode(e))},sendPalette(e){this.palChar.writeValueWithResponse(Be.encode(e))}}}),methods:{async connectBluetooth(){console.log("Requesting BLE Device"),this.BLEDevice.device=await navigator.bluetooth.requestDevice({filters:[{name:"NimBLE-Arduino",services:["c17378c5-b652-4e4b-9b53-45222f86e4d6"]}]}),this.BLEDevice.device.addEventListener("gattserverdisconnected",(()=>{this.disconnected=!0})),console.log("Connecting to GATT server"),this.BLEDevice.server=await this.BLEDevice.device.gatt.connect(),console.log("Getting service"),this.BLEDevice.service=await this.BLEDevice.server.getPrimaryService("c17378c5-b652-4e4b-9b53-45222f86e4d6"),console.log("Getting Generator characteristic"),this.BLEDevice.genChar=await this.BLEDevice.service.getCharacteristic(28398),console.log("Getting Palette characteristic"),this.BLEDevice.palChar=await this.BLEDevice.service.getCharacteristic(39441),this.disconnected=!1},ignoreBluetooth(){confirm("You will not be able to control the lights, are you sure?")&&(this.disconnected=!1)}}};const Fe=(0,P.Z)(Ae,[["render",f]]);var Ne=Fe,Ie=(a(9773),a(3398)),qe=(0,Ie.Rd)({theme:{defaultTheme:"myTheme",themes:{myTheme:{dark:!0}}}});async function Je(){const e=await a.e(461).then(a.t.bind(a,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Je();const $e=(0,n.ri)(Ne);$e.use(qe).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var i=!0,d=0;d<n.length;d++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(i=!1,l<r&&(r=l));if(i){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var l=Object.create(null);a.r(l);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return n[e]}}));return r["default"]=function(){return n},a.d(l,r),l}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.60c6498f.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="led2:";a.l=function(n,o,l,r){if(e[n])e[n].push(o);else{var i,d;if(void 0!==l)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+l){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+l),i.src=n),e[n]=[o];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(g);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),d&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=l);var r=a.p+a.u(t),i=new Error,d=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",i.name="ChunkLoadError",i.type=l,i.request=r,o[1](i)}};a.l(r,d,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,r=n[0],i=n[1],d=n[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(d)var c=d(a)}for(t&&t(n);s<r.length;s++)l=r[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkled2"]=self["webpackChunkled2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6869)}));n=a.O(n)})();
//# sourceMappingURL=app.49d1ed42.js.map