import{S as p,i as h,s as _,U as y,V as x,w as b,x as d,y as w,P as v,q as G,o as S,B,K as C}from"./index-80687ddf.js";import{g as T}from"./index.browser-29f140db.js";import{I as k,g as q}from"./fontGenerator-c1ce1bcd.js";function I(a){let e,r,s;function o(t){a[3](t)}let i={name:a[1],grow:!0};return a[0]!==void 0&&(i.value=a[0]),e=new k({props:i}),y.push(()=>x(e,"value",o)),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,u){w(e,t,u),s=!0},p(t,[u]){const c={};u&2&&(c.name=t[1]),!r&&u&1&&(r=!0,c.value=t[0],v(()=>r=!1)),e.$set(c)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function U(a,e,r){let s;C(a,T,n=>r(4,s=n));let{text:o=""}=e,{glyphs:i=[]}=e,{name:t="previewText"}=e;function u(n){if(n.length>1)throw new Error("char must be a single character");for(let l of s)try{if(q(l.name)===n.charCodeAt(0))return l}catch(f){console.log(f,l.name)}}function c(n){let l=[];for(let f of n){const m=u(f);m&&l.push(m)}return[...new Set(l)]}function g(n){o=n,r(0,o)}return a.$$set=n=>{"text"in n&&r(0,o=n.text),"glyphs"in n&&r(2,i=n.glyphs),"name"in n&&r(1,t=n.name)},a.$$.update=()=>{a.$$.dirty&1&&r(2,i=c(o))},[o,t,i,g]}class K extends p{constructor(e){super(),h(this,e,U,I,_,{text:0,glyphs:2,name:1})}}export{K as G};
