import{w as M,ac as T,D as U,g as x,O as g}from"./index.283135ea.js";const A={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},P=["beforeShow","show","beforeHide","hide"];function j({showing:o,canShow:s,hideOnRouteChange:i,handleShow:d,handleHide:f,processOnMount:y}){const n=x(),{props:l,emit:u,proxy:c}=n;let a;function H(e){o.value===!0?r(e):p(e)}function p(e){if(l.disable===!0||e!==void 0&&e.qAnchorHandled===!0||s!==void 0&&s(e)!==!0)return;const t=l["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!0),a=e,g(()=>{a===e&&(a=void 0)})),(l.modelValue===null||t===!1)&&m(e)}function m(e){o.value!==!0&&(o.value=!0,u("beforeShow",e),d!==void 0?d(e):u("show",e))}function r(e){if(l.disable===!0)return;const t=l["onUpdate:modelValue"]!==void 0;t===!0&&(u("update:modelValue",!1),a=e,g(()=>{a===e&&(a=void 0)})),(l.modelValue===null||t===!1)&&V(e)}function V(e){o.value!==!1&&(o.value=!1,u("beforeHide",e),f!==void 0?f(e):u("hide",e))}function b(e){l.disable===!0&&e===!0?l["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):e===!0!==o.value&&(e===!0?m:V)(a)}M(()=>l.modelValue,b),i!==void 0&&T(n)===!0&&M(()=>c.$route.fullPath,()=>{i.value===!0&&o.value===!0&&r()}),y===!0&&U(()=>{b(l.modelValue)});const v={show:p,hide:r,toggle:H};return Object.assign(c,v),v}export{P as a,j as b,A as u};
