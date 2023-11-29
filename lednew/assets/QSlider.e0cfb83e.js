import{i as Ze,w as P,H as ye,o as G,av as Je,g as O,r as x,b as o,am as We,_ as Xe,as as Ge,K as xe,U as Ye,P as et,S as tt,d as lt,f as i,ai as j,N as pe,aw as at,j as J,a4 as ot,a2 as rt,ak as nt,ax as ut,ay as re,an as it,c as st}from"./index.274b16d3.js";import{u as Se,b as qe}from"./use-dark.4183787d.js";import{u as ct}from"./uid.42677368.js";import{d as dt,e as ft}from"./focus-manager.1422f443.js";import{c as D,T as vt}from"./QPage.5f6ffc42.js";function mt({validate:e,resetValidation:l,requiresQForm:u}){const r=Ze(Je,!1);if(r!==!1){const{props:t,proxy:m}=O();Object.assign(m,{validate:e,resetValidation:l}),P(()=>t.disable,c=>{c===!0?(typeof l=="function"&&l(),r.unbindComponent(m)):r.bindComponent(m)}),ye(()=>{t.disable!==!0&&r.bindComponent(m)}),G(()=>{t.disable!==!0&&r.unbindComponent(m)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,he=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,W=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,X=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>he.test(e),rgbColor:e=>W.test(e),rgbaColor:e=>X.test(e),rgbOrRgbaColor:e=>W.test(e)||X.test(e),hexOrRgbColor:e=>be.test(e)||W.test(e),hexaOrRgbaColor:e=>ge.test(e)||X.test(e),anyColor:e=>he.test(e)||W.test(e)||X.test(e)},pt=[!0,!1,"ondemand"],bt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>pt.includes(e)}};function gt(e,l){const{props:u,proxy:r}=O(),t=x(!1),m=x(null),c=x(null);mt({validate:h,resetValidation:A});let d=0,B;const V=o(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),g=o(()=>u.disable!==!0&&V.value===!0),M=o(()=>u.error===!0||t.value===!0),F=o(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:m.value);P(()=>u.modelValue,()=>{L()}),P(()=>u.reactiveRules,C=>{C===!0?B===void 0&&(B=P(()=>u.rules,()=>{L(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),P(e,C=>{C===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,g.value===!0&&u.lazyRules!=="ondemand"&&l.value===!1&&$())});function A(){d++,l.value=!1,c.value=null,t.value=!1,m.value=null,$.cancel()}function h(C=u.modelValue){if(g.value!==!0)return!0;const w=++d,b=l.value!==!0?()=>{c.value=!0}:()=>{},S=(y,k)=>{y===!0&&b(),t.value=y,m.value=k||null,l.value=!1},R=[];for(let y=0;y<u.rules.length;y++){const k=u.rules[y];let q;if(typeof k=="function"?q=k(C,ne):typeof k=="string"&&ne[k]!==void 0&&(q=ne[k](C)),q===!1||typeof q=="string")return S(!0,q),!1;q!==!0&&q!==void 0&&R.push(q)}return R.length===0?(S(!1),!0):(l.value=!0,Promise.all(R).then(y=>{if(y===void 0||Array.isArray(y)===!1||y.length===0)return w===d&&S(!1),!0;const k=y.find(q=>q===!1||typeof q=="string");return w===d&&S(k!==void 0,k),k===void 0},y=>(w===d&&(console.error(y),S(!0)),!1)))}function L(C){g.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&C!==!0)&&$()}const $=We(h,0);return G(()=>{B!==void 0&&B(),$.cancel()}),Object.assign(r,{resetValidation:A,validate:h}),Xe(r,"hasError",()=>M.value),{isDirtyModel:c,hasRules:V,hasError:M,errorMessage:F,validate:h,resetValidation:A}}const Ce=/^on[A-Z]/;function ht(e,l){const u={listeners:x({}),attributes:x({})};function r(){const t={},m={};for(const c in e)c!=="class"&&c!=="style"&&Ce.test(c)===!1&&(t[c]=e[c]);for(const c in l.props)Ce.test(c)===!0&&(m[c]=l.props[c]);u.attributes.value=t,u.listeners.value=m}return Ge(r),r(),u}function ue(e){return e===void 0?`f_${ct()}`:e}function Ct(e){return e!=null&&(""+e).length!==0}const Pt={...Se,...bt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},zt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Nt(){const{props:e,attrs:l,proxy:u,vnode:r}=O();return{isDark:qe(e,u.$q),editable:o(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:x(!1),focused:x(!1),hasPopupOpen:!1,splitAttrs:ht(l,r),targetUid:x(ue(e.for)),rootRef:x(null),targetRef:x(null),controlRef:x(null)}}function Dt(e){const{props:l,emit:u,slots:r,attrs:t,proxy:m}=O(),{$q:c}=m;let d=null;e.hasValue===void 0&&(e.hasValue=o(()=>Ct(l.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:I,onFocusout:z}),Object.assign(e,{clearValue:E,onControlFocusin:I,onControlFocusout:z,focus:k}),e.computedCounter===void 0&&(e.computedCounter=o(()=>{if(l.counter!==!1){const n=typeof l.modelValue=="string"||typeof l.modelValue=="number"?(""+l.modelValue).length:Array.isArray(l.modelValue)===!0?l.modelValue.length:0,f=l.maxlength!==void 0?l.maxlength:l.maxValues;return n+(f!==void 0?" / "+f:"")}}));const{isDirtyModel:B,hasRules:V,hasError:g,errorMessage:M,resetValidation:F}=gt(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?o(()=>l.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):o(()=>l.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),h=o(()=>l.bottomSlots===!0||l.hint!==void 0||V.value===!0||l.counter===!0||l.error!==null),L=o(()=>l.filled===!0?"filled":l.outlined===!0?"outlined":l.borderless===!0?"borderless":l.standout?"standout":"standard"),$=o(()=>`q-field row no-wrap items-start q-field--${L.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(l.rounded===!0?" q-field--rounded":"")+(l.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(w.value===!0?" q-field--labeled":"")+(l.dense===!0?" q-field--dense":"")+(l.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(l.hideBottomSpace!==!0&&h.value===!0?" q-field--with-bottom":"")+(l.disable===!0?" q-field--disabled":l.readonly===!0?" q-field--readonly":"")),C=o(()=>"q-field__control relative-position row no-wrap"+(l.bgColor!==void 0?` bg-${l.bgColor}`:"")+(g.value===!0?" text-negative":typeof l.standout=="string"&&l.standout.length!==0&&e.focused.value===!0?` ${l.standout}`:l.color!==void 0?` text-${l.color}`:"")),w=o(()=>l.labelSlot===!0||l.label!==void 0),b=o(()=>"q-field__label no-pointer-events absolute ellipsis"+(l.labelColor!==void 0&&g.value!==!0?` text-${l.labelColor}`:"")),S=o(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:l.modelValue,emitValue:e.emitValue})),R=o(()=>{const n={for:e.targetUid.value};return l.disable===!0?n["aria-disabled"]="true":l.readonly===!0&&(n["aria-readonly"]="true"),n});P(()=>l.for,n=>{e.targetUid.value=ue(n)});function y(){const n=document.activeElement;let f=e.targetRef!==void 0&&e.targetRef.value;f&&(n===null||n.id!==e.targetUid.value)&&(f.hasAttribute("tabindex")===!0||(f=f.querySelector("[tabindex]")),f&&f!==n&&f.focus({preventScroll:!0}))}function k(){dt(y)}function q(){ft(y);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function I(n){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function z(n,f){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),f!==void 0&&f())})}function E(n){xe(n),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),l.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",l.modelValue),Ye(()=>{F(),c.platform.is.mobile!==!0&&(B.value=!1)})}function U(){const n=[];return r.prepend!==void 0&&n.push(i("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:j},r.prepend())),n.push(i("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},Y())),g.value===!0&&l.noErrorIcon===!1&&n.push(N("error",[i(pe,{name:c.iconSet.field.error,color:"negative"})])),l.loading===!0||e.innerLoading.value===!0?n.push(N("inner-loading-append",r.loading!==void 0?r.loading():[i(at,{color:l.color})])):l.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(N("inner-clearable-append",[i(pe,{class:"q-field__focusable-action",tag:"button",name:l.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:E})])),r.append!==void 0&&n.push(i("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:j},r.append())),e.getInnerAppend!==void 0&&n.push(N("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function Y(){const n=[];return l.prefix!==void 0&&l.prefix!==null&&n.push(i("div",{class:"q-field__prefix no-pointer-events row items-center"},l.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):r.rawControl!==void 0?n.push(r.rawControl()):r.control!==void 0&&n.push(i("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":l.autofocus===!0||void 0},r.control(S.value))),w.value===!0&&n.push(i("div",{class:b.value},J(r.label,l.label))),l.suffix!==void 0&&l.suffix!==null&&n.push(i("div",{class:"q-field__suffix no-pointer-events row items-center"},l.suffix)),n.concat(J(r.default))}function H(){let n,f;g.value===!0?M.value!==null?(n=[i("div",{role:"alert"},M.value)],f=`q--slot-error-${M.value}`):(n=J(r.error),f="q--slot-error"):(l.hideHint!==!0||e.focused.value===!0)&&(l.hint!==void 0?(n=[i("div",l.hint)],f=`q--slot-hint-${l.hint}`):(n=J(r.hint),f="q--slot-hint"));const Q=l.counter===!0||r.counter!==void 0;if(l.hideBottomSpace===!0&&Q===!1&&n===void 0)return;const Z=i("div",{key:f,class:"q-field__messages col"},n);return i("div",{class:"q-field__bottom row items-start q-field__bottom--"+(l.hideBottomSpace!==!0?"animated":"stale"),onClick:j},[l.hideBottomSpace===!0?Z:i(ot,{name:"q-transition--field-message"},()=>Z),Q===!0?i("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function N(n,f){return f===null?null:i("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},f)}let K=!1;return et(()=>{K=!0}),tt(()=>{K===!0&&l.autofocus===!0&&m.focus()}),ye(()=>{lt.value===!0&&l.for===void 0&&(e.targetUid.value=ue()),l.autofocus===!0&&m.focus()}),G(()=>{d!==null&&clearTimeout(d)}),Object.assign(m,{focus:k,blur:q}),function(){const f=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":l.autofocus===!0||void 0,...R.value}:R.value;return i("label",{ref:e.rootRef,class:[$.value,t.class],style:t.style,...f},[r.before!==void 0?i("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:j},r.before()):null,i("div",{class:"q-field__inner relative-position col self-stretch"},[i("div",{ref:e.controlRef,class:C.value,tabindex:-1,...e.controlEvents},U()),h.value===!0?H():null]),r.after!==void 0?i("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:j},r.after()):null])}}const kt={name:String};function yt(e){return o(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function xt(e={}){return(l,u,r)=>{l[u](i("input",{class:"hidden"+(r||""),...e.value}))}}function Ot(e){return o(()=>e.name||e.for)}const St=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,qt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,_t=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,$t=/[a-z0-9_ -]$/i;function jt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(rt.is.firefox===!0?$t.test(u.data)===!1:St.test(u.data)===!0||qt.test(u.data)===!0||_t.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const ke="q-slider__marker-labels",wt=e=>({value:e}),Bt=({marker:e})=>i("div",{key:e.value,style:e.style,class:e.classes},e.label),_e=[34,37,40,33,39,38],Rt={...Se,...kt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Mt=["pan","update:modelValue","change"];function Ft({updateValue:e,updatePosition:l,getDragging:u,formAttrs:r}){const{props:t,emit:m,slots:c,proxy:{$q:d}}=O(),B=qe(t,d),V=xt(r),g=x(!1),M=x(!1),F=x(!1),A=x(!1),h=o(()=>t.vertical===!0?"--v":"--h"),L=o(()=>"-"+(t.switchLabelSide===!0?"switched":"standard")),$=o(()=>t.vertical===!0?t.reverse===!0:t.reverse!==(d.lang.rtl===!0)),C=o(()=>isNaN(t.innerMin)===!0||t.innerMin<t.min?t.min:t.innerMin),w=o(()=>isNaN(t.innerMax)===!0||t.innerMax>t.max?t.max:t.innerMax),b=o(()=>t.disable!==!0&&t.readonly!==!0&&C.value<w.value),S=o(()=>(String(t.step).trim().split(".")[1]||"").length),R=o(()=>t.step===0?1:t.step),y=o(()=>b.value===!0?t.tabindex||0:-1),k=o(()=>t.max-t.min),q=o(()=>w.value-C.value),I=o(()=>ee(C.value)),z=o(()=>ee(w.value)),E=o(()=>t.vertical===!0?$.value===!0?"bottom":"top":$.value===!0?"right":"left"),U=o(()=>t.vertical===!0?"height":"width"),Y=o(()=>t.vertical===!0?"width":"height"),H=o(()=>t.vertical===!0?"vertical":"horizontal"),N=o(()=>{const a={role:"slider","aria-valuemin":C.value,"aria-valuemax":w.value,"aria-orientation":H.value,"data-step":t.step};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a}),K=o(()=>`q-slider q-slider${h.value} q-slider--${g.value===!0?"":"in"}active inline no-wrap `+(t.vertical===!0?"row":"column")+(t.disable===!0?" disabled":" q-slider--enabled"+(b.value===!0?" q-slider--editable":""))+(F.value==="both"?" q-slider--focus":"")+(t.label||t.labelAlways===!0?" q-slider--label":"")+(t.labelAlways===!0?" q-slider--label-always":"")+(B.value===!0?" q-slider--dark":"")+(t.dense===!0?" q-slider--dense q-slider--dense"+h.value:""));function n(a){const s="q-slider__"+a;return`${s} ${s}${h.value} ${s}${h.value}${L.value}`}function f(a){const s="q-slider__"+a;return`${s} ${s}${h.value}`}const Q=o(()=>{const a=t.selectionColor||t.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),Z=o(()=>f("markers")+" absolute overflow-hidden"),$e=o(()=>f("track-container")),we=o(()=>n("pin")),Be=o(()=>n("label")),Re=o(()=>n("text-container")),Me=o(()=>n("marker-labels-container")+(t.markerLabelsClass!==void 0?` ${t.markerLabelsClass}`:"")),Fe=o(()=>"q-slider__track relative-position no-outline"+(t.trackColor!==void 0?` bg-${t.trackColor}`:"")),Ae=o(()=>{const a={[Y.value]:t.trackSize};return t.trackImg!==void 0&&(a.backgroundImage=`url(${t.trackImg}) !important`),a}),Ve=o(()=>"q-slider__inner absolute"+(t.innerTrackColor!==void 0?` bg-${t.innerTrackColor}`:"")),ie=o(()=>{const a={[E.value]:`${100*I.value}%`,[U.value]:`${100*(z.value-I.value)}%`};return t.innerTrackImg!==void 0&&(a.backgroundImage=`url(${t.innerTrackImg}) !important`),a});function Le(a){const{min:s,max:v,step:p}=t;let _=s+a*(v-s);if(p>0){const T=(_-s)%p;_+=(Math.abs(T)>=p/2?(T<0?-1:1)*p:0)-T}return S.value>0&&(_=parseFloat(_.toFixed(S.value))),D(_,C.value,w.value)}function ee(a){return k.value===0?0:(a-t.min)/k.value}function Te(a,s){const v=nt(a),p=t.vertical===!0?D((v.top-s.top)/s.height,0,1):D((v.left-s.left)/s.width,0,1);return D($.value===!0?1-p:p,I.value,z.value)}const se=o(()=>ut(t.markers)===!0?t.markers:R.value),ce=o(()=>{const a=[],s=se.value,v=t.max;let p=t.min;do a.push(p),p+=s;while(p<v);return a.push(v),a}),de=o(()=>{const a=` ${ke}${h.value}-`;return ke+`${a}${t.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${$.value===!0?"rtl":"ltr"}`}),te=o(()=>t.markerLabels===!1?null:Ee(t.markerLabels).map((a,s)=>({index:s,value:a.value,label:a.label||a.value,classes:de.value+(a.classes!==void 0?" "+a.classes:""),style:{...ve(a.value),...a.style||{}}}))),fe=o(()=>({markerList:te.value,markerMap:Pe.value,classes:de.value,getStyle:ve})),Ie=o(()=>{if(q.value!==0){const a=100*se.value/q.value;return{...ie.value,backgroundSize:t.vertical===!0?`2px ${a}%`:`${a}% 2px`}}return null});function Ee(a){if(a===!1)return null;if(a===!0)return ce.value.map(wt);if(typeof a=="function")return ce.value.map(v=>{const p=a(v);return re(p)===!0?{...p,value:v}:{value:v,label:p}});const s=({value:v})=>v>=t.min&&v<=t.max;return Array.isArray(a)===!0?a.map(v=>re(v)===!0?v:{value:v}).filter(s):Object.keys(a).map(v=>{const p=a[v],_=Number(v);return re(p)===!0?{...p,value:_}:{value:_,label:p}}).filter(s)}function ve(a){return{[E.value]:`${100*(a-t.min)/k.value}%`}}const Pe=o(()=>{if(t.markerLabels===!1)return null;const a={};return te.value.forEach(s=>{a[s.value]=s}),a});function ze(){if(c["marker-label-group"]!==void 0)return c["marker-label-group"](fe.value);const a=c["marker-label"]||Bt;return te.value.map(s=>a({marker:s,...fe.value}))}const Ne=o(()=>[[vt,De,void 0,{[H.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function De(a){a.isFinal===!0?(A.value!==void 0&&(l(a.evt),a.touch===!0&&e(!0),A.value=void 0,m("pan","end")),g.value=!1,F.value=!1):a.isFirst===!0?(A.value=u(a.evt),l(a.evt),e(),g.value=!0,m("pan","start")):(l(a.evt),e())}function me(){F.value=!1}function Oe(a){l(a,u(a)),e(),M.value=!0,g.value=!0,document.addEventListener("mouseup",le,!0)}function le(){M.value=!1,g.value=!1,e(!0),me(),document.removeEventListener("mouseup",le,!0)}function je(a){l(a,u(a)),e(!0)}function Ue(a){_e.includes(a.keyCode)&&e(!0)}function He(a){if(t.vertical===!0)return null;const s=d.lang.rtl!==t.reverse?1-a:a;return{transform:`translateX(calc(${2*s-1} * ${t.thumbSize} / 2 + ${50-100*s}%))`}}function Ke(a){const s=o(()=>M.value===!1&&(F.value===a.focusValue||F.value==="both")?" q-slider--focus":""),v=o(()=>`q-slider__thumb q-slider__thumb${h.value} q-slider__thumb${h.value}-${$.value===!0?"rtl":"ltr"} absolute non-selectable`+s.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),p=o(()=>({width:t.thumbSize,height:t.thumbSize,[E.value]:`${100*a.ratio.value}%`,zIndex:F.value===a.focusValue?2:void 0})),_=o(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),T=o(()=>He(a.ratio.value)),ae=o(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const oe=[i("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[i("path",{d:t.thumbPath})]),i("div",{class:"q-slider__focus-ring fit"})];return(t.label===!0||t.labelAlways===!0)&&(oe.push(i("div",{class:we.value+" absolute fit no-pointer-events"+_.value},[i("div",{class:Be.value,style:{minWidth:t.thumbSize}},[i("div",{class:Re.value,style:T.value},[i("span",{class:ae.value},a.label.value)])])])),t.name!==void 0&&t.disable!==!0&&V(oe,"push")),i("div",{class:v.value,style:p.value,...a.getNodeData()},oe)}}function Qe(a,s,v,p){const _=[];t.innerTrackColor!=="transparent"&&_.push(i("div",{key:"inner",class:Ve.value,style:ie.value})),t.selectionColor!=="transparent"&&_.push(i("div",{key:"selection",class:Q.value,style:a.value})),t.markers!==!1&&_.push(i("div",{key:"marker",class:Z.value,style:Ie.value})),p(_);const T=[it("div",{key:"trackC",class:$e.value,tabindex:s.value,...v.value},[i("div",{class:Fe.value,style:Ae.value},_)],"slide",b.value,()=>Ne.value)];if(t.markerLabels!==!1){const ae=t.switchMarkerLabelsSide===!0?"unshift":"push";T[ae](i("div",{key:"markerL",class:Me.value},ze()))}return T}return G(()=>{document.removeEventListener("mouseup",le,!0)}),{state:{active:g,focus:F,preventFocus:M,dragging:A,editable:b,classes:K,tabindex:y,attributes:N,step:R,decimals:S,trackLen:k,innerMin:C,innerMinRatio:I,innerMax:w,innerMaxRatio:z,positionProp:E,sizeProp:U,isReversed:$},methods:{onActivate:Oe,onMobileClick:je,onBlur:me,onKeyup:Ue,getContent:Qe,getThumbRenderFn:Ke,convertRatioToModel:Le,convertModelToRatio:ee,getDraggingRatio:Te}}}const At=()=>({});var Ut=st({name:"QSlider",props:{...Rt,modelValue:{required:!0,default:null,validator:e=>typeof e=="number"||e===null},labelValue:[String,Number]},emits:Mt,setup(e,{emit:l}){const{proxy:{$q:u}}=O(),{state:r,methods:t}=Ft({updateValue:h,updatePosition:$,getDragging:L,formAttrs:yt(e)}),m=x(null),c=x(0),d=x(0);function B(){d.value=e.modelValue===null?r.innerMin.value:D(e.modelValue,r.innerMin.value,r.innerMax.value)}P(()=>`${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`,B),B();const V=o(()=>t.convertModelToRatio(d.value)),g=o(()=>r.active.value===!0?c.value:V.value),M=o(()=>{const b={[r.positionProp.value]:`${100*r.innerMinRatio.value}%`,[r.sizeProp.value]:`${100*(g.value-r.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(b.backgroundImage=`url(${e.selectionImg}) !important`),b}),F=t.getThumbRenderFn({focusValue:!0,getNodeData:At,ratio:g,label:o(()=>e.labelValue!==void 0?e.labelValue:d.value),thumbColor:o(()=>e.thumbColor||e.color),labelColor:o(()=>e.labelColor),labelTextColor:o(()=>e.labelTextColor)}),A=o(()=>r.editable.value!==!0?{}:u.platform.is.mobile===!0?{onClick:t.onMobileClick}:{onMousedown:t.onActivate,onFocus:C,onBlur:t.onBlur,onKeydown:w,onKeyup:t.onKeyup});function h(b){d.value!==e.modelValue&&l("update:modelValue",d.value),b===!0&&l("change",d.value)}function L(){return m.value.getBoundingClientRect()}function $(b,S=r.dragging.value){const R=t.getDraggingRatio(b,S);d.value=t.convertRatioToModel(R),c.value=e.snap!==!0||e.step===0?R:t.convertModelToRatio(d.value)}function C(){r.focus.value=!0}function w(b){if(!_e.includes(b.keyCode))return;xe(b);const S=([34,33].includes(b.keyCode)?10:1)*r.step.value,R=([34,37,40].includes(b.keyCode)?-1:1)*(r.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*S;d.value=D(parseFloat((d.value+R).toFixed(r.decimals.value)),r.innerMin.value,r.innerMax.value),h()}return()=>{const b=t.getContent(M,r.tabindex,A,S=>{S.push(F())});return i("div",{ref:m,class:r.classes.value+(e.modelValue===null?" q-slider--no-value":""),...r.attributes.value,"aria-valuenow":e.modelValue},b)}}});export{Ut as Q,kt as a,zt as b,Ot as c,Nt as d,Dt as e,Ct as f,jt as g,Rt as h,Mt as i,Ft as j,_e as k,xt as l,ne as t,Pt as u};
