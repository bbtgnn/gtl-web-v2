import{S as r,i as f,s as h,e as p,c as _,b as u,g as c,N as m,M as d,E as o,d as v}from"./index-4836a415.js";import{n as g}from"./index.browser-85ea5a5b.js";function I(n){let e,a,s;return{c(){e=p("input"),this.h()},l(t){e=_(t,"INPUT",{type:!0,class:!0,id:!0,name:!0}),this.h()},h(){u(e,"type","text"),u(e,"class","p-2 bg-slate-200 font-mono"),u(e,"id",n[1]),u(e,"name",n[1])},m(t,i){c(t,e,i),m(e,n[0]),a||(s=d(e,"input",n[2]),a=!0)},p(t,[i]){i&2&&u(e,"id",t[1]),i&2&&u(e,"name",t[1]),i&1&&e.value!==t[0]&&m(e,t[0])},i:o,o,d(t){t&&v(e),a=!1,s()}}}function b(n,e,a){let{value:s}=e,{name:t=g(5)}=e;function i(){s=this.value,a(0,s)}return n.$$set=l=>{"value"in l&&a(0,s=l.value),"name"in l&&a(1,t=l.name)},[s,t,i]}class T extends r{constructor(e){super(),f(this,e,b,I,h,{value:0,name:1})}}export{T as I};
