import{S as _,i as c,s as h,e as d,c as p,b as u,g as b,R as f,T as v,a0 as g,E as m,d as r,G as I,a as L,H as E,I as q,J as N,q as S,o as T}from"./index-95fb9bf0.js";import{n as k}from"./index.browser-85ea5a5b.js";function w(a){let e,n,i;return{c(){e=d("input"),this.h()},l(t){e=p(t,"INPUT",{type:!0,class:!0,id:!0,name:!0,step:!0}),this.h()},h(){u(e,"type","number"),u(e,"class","w-20 p-2 bg-slate-200 font-mono"),u(e,"id",a[1]),u(e,"name",a[1]),u(e,"step",a[2])},m(t,s){b(t,e,s),f(e,a[0]),n||(i=v(e,"input",a[3]),n=!0)},p(t,[s]){s&2&&u(e,"id",t[1]),s&2&&u(e,"name",t[1]),s&4&&u(e,"step",t[2]),s&1&&g(e.value)!==t[0]&&f(e,t[0])},i:m,o:m,d(t){t&&r(e),n=!1,i()}}}function A(a,e,n){let{value:i}=e,{name:t=k(5)}=e,{step:s=1}=e;function l(){i=g(this.value),n(0,i)}return a.$$set=o=>{"value"in o&&n(0,i=o.value),"name"in o&&n(1,t=o.name),"step"in o&&n(2,s=o.step)},[i,t,s,l]}class J extends _{constructor(e){super(),c(this,e,A,w,h,{value:0,name:1,step:2})}}function B(a){let e,n;const i=a[2].default,t=I(i,a,a[1],null);return{c(){e=d("label"),t&&t.c(),this.h()},l(s){e=p(s,"LABEL",{class:!0,for:!0});var l=L(e);t&&t.l(l),l.forEach(r),this.h()},h(){u(e,"class","block font-mono text-slate-700 text-sm"),u(e,"for",a[0])},m(s,l){b(s,e,l),t&&t.m(e,null),n=!0},p(s,[l]){t&&t.p&&(!n||l&2)&&E(t,i,s,s[1],n?N(i,s[1],l,null):q(s[1]),null),(!n||l&1)&&u(e,"for",s[0])},i(s){n||(S(t,s),n=!0)},o(s){T(t,s),n=!1},d(s){s&&r(e),t&&t.d(s)}}}function C(a,e,n){let{$$slots:i={},$$scope:t}=e,{target:s}=e;return a.$$set=l=>{"target"in l&&n(0,s=l.target),"$$scope"in l&&n(1,t=l.$$scope)},[s,t,i]}class P extends _{constructor(e){super(),c(this,e,C,B,h,{target:0})}}export{J as I,P as L};
