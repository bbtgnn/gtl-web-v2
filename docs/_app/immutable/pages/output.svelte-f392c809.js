import{S as W,i as X,s as Y,U as G,V as K,e as x,w as H,k as V,c as E,a as D,x as S,m as C,d as h,b as B,g as y,L as v,y as U,P as M,o as $,p as O,q as b,B as j,K as L,t as q,h as N,n as R,_ as Z,E as T,j as ee,l as z,M as te}from"../chunks/index-17fa9bae.js";import{m as ne,g as le,p as A,s as oe}from"../chunks/index-e27e342f.js";import{a as se,g as re,F as ae}from"../chunks/createFont-2d013aa9.js";import{I as ie}from"../chunks/inputText-acec54c9.js";import{L as fe}from"../chunks/label-fe7b1647.js";import{B as ce}from"../chunks/button-9fd88305.js";import"../chunks/index-c0ca21b6.js";import"../chunks/_commonjsHelpers-bc7114ed.js";import"../chunks/shapes-08d68f77.js";import"../chunks/index.browser-85ea5a5b.js";function J(r,t,e){const n=r.slice();return n[14]=t[e],n[15]=t,n[16]=e,n}function ue(r){let t;return{c(){t=q("Preview text")},l(e){t=N(e,"Preview text")},m(e,n){y(e,t,n)},d(e){e&&h(t)}}}function pe(r){let t,e,n,o;const p=[de,he],a=[];function i(l,c){return l[1].length?0:1}return e=i(r),n=a[e]=p[e](r),{c(){t=x("div"),n.c(),this.h()},l(l){t=E(l,"DIV",{class:!0});var c=D(t);n.l(c),c.forEach(h),this.h()},h(){B(t,"class","p-8 space-y-8")},m(l,c){y(l,t,c),a[e].m(t,null),o=!0},p(l,c){let m=e;e=i(l),e===m?a[e].p(l,c):(R(),$(a[m],1,1,()=>{a[m]=null}),O(),n=a[e],n?n.p(l,c):(n=a[e]=p[e](l),n.c()),b(n,1),n.m(t,null))},i(l){o||(b(n),o=!0)},o(l){$(n),o=!1},d(l){l&&h(t),a[e].d()}}}function _e(r){let t,e;return{c(){t=x("p"),e=q("loading")},l(n){t=E(n,"P",{});var o=D(t);e=N(o,"loading"),o.forEach(h)},m(n,o){y(n,t,o),v(t,e)},p:T,i:T,o:T,d(n){n&&h(t)}}}function he(r){let t,e;return{c(){t=x("p"),e=q("Crea glifi e sintassi per vedere qui i risultati!"),this.h()},l(n){t=E(n,"P",{class:!0});var o=D(t);e=N(o,"Crea glifi e sintassi per vedere qui i risultati!"),o.forEach(h),this.h()},h(){B(t,"class","font-mono w-full border-2 border-slate-200 text-slate-300 p-12")},m(n,o){y(n,t,o),v(t,e)},p:T,i:T,o:T,d(n){n&&h(t)}}}function de(r){let t,e,n=r[1],o=[];for(let a=0;a<n.length;a+=1)o[a]=Q(J(r,n,a));const p=a=>$(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=z()},l(a){for(let i=0;i<o.length;i+=1)o[i].l(a);t=z()},m(a,i){for(let l=0;l<o.length;l+=1)o[l].m(a,i);y(a,t,i),e=!0},p(a,i){if(i&3){n=a[1];let l;for(l=0;l<n.length;l+=1){const c=J(a,n,l);o[l]?(o[l].p(c,i),b(o[l],1)):(o[l]=Q(c),o[l].c(),b(o[l],1),o[l].m(t.parentNode,t))}for(R(),l=n.length;l<o.length;l+=1)p(l);O()}},i(a){if(!e){for(let i=0;i<n.length;i+=1)b(o[i]);e=!0}},o(a){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)$(o[i]);e=!1},d(a){te(o,a),a&&h(t)}}}function me(r){let t;return{c(){t=q("\u2193 Download")},l(e){t=N(e,"\u2193 Download")},m(e,n){y(e,t,n)},d(e){e&&h(t)}}}function Q(r){let t,e,n,o=r[14].names.fullName.en+"",p,a,i,l,c,m,I,w,k,d;i=new ce({props:{$$slots:{default:[me]},$$scope:{ctx:r}}}),i.$on("click",r[4]);function F(f){r[5](f,r[14],r[15],r[16])}function s(f){r[6](f)}let u={};return r[14]!==void 0&&(u.font=r[14]),r[0]!==void 0&&(u.text=r[0]),c=new ae({props:u}),G.push(()=>K(c,"font",F)),G.push(()=>K(c,"text",s)),{c(){t=x("div"),e=x("div"),n=x("h2"),p=q(o),a=V(),H(i.$$.fragment),l=V(),H(c.$$.fragment),w=V(),k=x("hr"),this.h()},l(f){t=E(f,"DIV",{class:!0});var _=D(t);e=E(_,"DIV",{class:!0});var g=D(e);n=E(g,"H2",{class:!0});var P=D(n);p=N(P,o),P.forEach(h),a=C(g),S(i.$$.fragment,g),g.forEach(h),l=C(_),S(c.$$.fragment,_),_.forEach(h),w=C(f),k=E(f,"HR",{}),this.h()},h(){B(n,"class","text-lg font-mono"),B(e,"class","flex flex-row flex-nowrap items-center space-x-8"),B(t,"class","space-y-4")},m(f,_){y(f,t,_),v(t,e),v(e,n),v(n,p),v(e,a),U(i,e,null),v(t,l),U(c,t,null),y(f,w,_),y(f,k,_),d=!0},p(f,_){r=f,(!d||_&2)&&o!==(o=r[14].names.fullName.en+"")&&ee(p,o);const g={};_&131072&&(g.$$scope={dirty:_,ctx:r}),i.$set(g);const P={};!m&&_&2&&(m=!0,P.font=r[14],M(()=>m=!1)),!I&&_&1&&(I=!0,P.text=r[0],M(()=>I=!1)),c.$set(P)},i(f){d||(b(i.$$.fragment,f),b(c.$$.fragment,f),d=!0)},o(f){$(i.$$.fragment,f),$(c.$$.fragment,f),d=!1},d(f){f&&h(t),j(i),j(c),f&&h(w),f&&h(k)}}}function ge(r){let t,e,n,o,p,a,i,l,c,m;n=new fe({props:{target:"previewText",$$slots:{default:[ue]},$$scope:{ctx:r}}});function I(s){r[3](s)}let w={name:"previewText",grow:!0};r[0]!==void 0&&(w.value=r[0]),p=new ie({props:w}),G.push(()=>K(p,"value",I));const k=[_e,pe],d=[];function F(s,u){return s[2]?0:1}return l=F(r),c=d[l]=k[l](r),{c(){t=x("div"),e=x("div"),H(n.$$.fragment),o=V(),H(p.$$.fragment),i=V(),c.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var u=D(t);e=E(u,"DIV",{class:!0});var f=D(e);S(n.$$.fragment,f),o=C(f),S(p.$$.fragment,f),f.forEach(h),i=C(u),c.l(u),u.forEach(h),this.h()},h(){B(e,"class","p-8 space-y-2 overflow-x-hidden shrink-0 sticky top-0 border-b border-b-gray-200 bg-white"),B(t,"class","grow flex flex-col items-stretch overflow-x-hidden overflow-y-auto")},m(s,u){y(s,t,u),v(t,e),U(n,e,null),v(e,o),U(p,e,null),v(t,i),d[l].m(t,null),m=!0},p(s,[u]){const f={};u&131072&&(f.$$scope={dirty:u,ctx:s}),n.$set(f);const _={};!a&&u&1&&(a=!0,_.value=s[0],M(()=>a=!1)),p.$set(_);let g=l;l=F(s),l===g?d[l].p(s,u):(R(),$(d[g],1,1,()=>{d[g]=null}),O(),c=d[l],c?c.p(s,u):(c=d[l]=k[l](s),c.c()),b(c,1),c.m(t,null))},i(s){m||(b(n.$$.fragment,s),b(p.$$.fragment,s),b(c),m=!0)},o(s){$(n.$$.fragment,s),$(p.$$.fragment,s),$(c),m=!1},d(s){s&&h(t),j(n),j(p),d[l].d()}}}function be(r,t,e){let n,o,p,a;L(r,ne,s=>e(7,n=s)),L(r,le,s=>e(8,o=s)),L(r,A,s=>e(0,p=s)),L(r,oe,s=>e(9,a=s));let i=[],l=!1;function c(s){if(s.length>1)throw new Error("char must be a single character");for(let u of o)try{if(re(u.name)===s.charCodeAt(0))return u}catch(f){console.log(f,u.name)}}function m(s){let u=[];for(let f of s){const _=c(f);_&&u.push(_)}return u}async function I(s){if(!!s.length){e(2,l=!0),e(1,i=[]);try{for(let u of a)if(u&&u.rules.length){const f=await se(u,s,n);e(1,i=[...i,f])}}catch(u){console.log(u)}e(2,l=!1)}}function w(s){p=s,A.set(p)}function k(s){Z.call(this,r,s)}function d(s,u,f,_){f[_]=s,e(1,i)}function F(s){p=s,A.set(p)}return r.$$.update=()=>{r.$$.dirty&1&&I(m(p))},[p,i,l,w,k,d,F]}class Fe extends W{constructor(t){super(),X(this,t,be,ge,Y,{})}}export{Fe as default};
