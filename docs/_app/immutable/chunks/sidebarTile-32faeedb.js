import{S as G,i as J,s as M,e as g,c as v,b as p,g as V,P as R,Q as F,E as C,d as b,G as I,k as H,a as k,m as y,M as A,H as w,I as E,J as S,q as D,o as P,Z as K,_ as d,$ as L,T as U}from"./index-839bebe8.js";import{n as O}from"./index.browser-85ea5a5b.js";function W(t){let e,n,s;return{c(){e=g("input"),this.h()},l(i){e=v(i,"INPUT",{type:!0,class:!0,id:!0,name:!0}),this.h()},h(){p(e,"type","text"),p(e,"class","p-2 bg-slate-200 font-mono hover:bg-slate-300 focus:ring-4"),p(e,"id",t[1]),p(e,"name",t[1])},m(i,_){V(i,e,_),R(e,t[0]),n||(s=F(e,"input",t[2]),n=!0)},p(i,[_]){_&2&&p(e,"id",i[1]),_&2&&p(e,"name",i[1]),_&1&&e.value!==i[0]&&R(e,i[0])},i:C,o:C,d(i){i&&b(e),n=!1,s()}}}function X(t,e,n){let{value:s}=e,{name:i=O(5)}=e;function _(){s=this.value,n(0,s)}return t.$$set=u=>{"value"in u&&n(0,s=u.value),"name"in u&&n(1,i=u.name)},[s,i,_]}class ae extends G{constructor(e){super(),J(this,e,X,W,M,{value:0,name:1})}}const Y=t=>({}),Z=t=>({}),$=t=>({}),j=t=>({}),x=t=>({}),z=t=>({});function B(t){let e;return{c(){e=g("hr"),this.h()},l(n){e=v(n,"HR",{class:!0}),this.h()},h(){p(e,"class","border-b-1 border-slate-300")},m(n,s){V(n,e,s)},d(n){n&&b(e)}}}function ee(t){let e,n,s,i,_,u,f;const a=t[2].topArea,l=I(a,t,t[1],z);let c=t[0].topArea&&B();const T=t[2].listTitle,r=I(T,t,t[1],j),q=t[2].items,h=I(q,t,t[1],Z);return{c(){e=g("div"),l&&l.c(),n=H(),c&&c.c(),s=H(),i=g("p"),r&&r.c(),_=H(),u=g("div"),h&&h.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var m=k(e);l&&l.l(m),n=y(m),c&&c.l(m),s=y(m),i=v(m,"P",{class:!0});var N=k(i);r&&r.l(N),N.forEach(b),_=y(m),u=v(m,"DIV",{class:!0});var Q=k(u);h&&h.l(Q),Q.forEach(b),m.forEach(b),this.h()},h(){p(i,"class","text-small font-mono text-slate-900 mb-4 text-sm"),p(u,"class","flex-grow scroll-auto space-y-1"),p(e,"class","space-y-6 flex w-60 flex-col flex-nowrap p-6 bg-slate-100 flex-shrink-0")},m(o,m){V(o,e,m),l&&l.m(e,null),A(e,n),c&&c.m(e,null),A(e,s),A(e,i),r&&r.m(i,null),A(e,_),A(e,u),h&&h.m(u,null),f=!0},p(o,[m]){l&&l.p&&(!f||m&2)&&w(l,a,o,o[1],f?S(a,o[1],m,x):E(o[1]),z),o[0].topArea?c||(c=B(),c.c(),c.m(e,s)):c&&(c.d(1),c=null),r&&r.p&&(!f||m&2)&&w(r,T,o,o[1],f?S(T,o[1],m,$):E(o[1]),j),h&&h.p&&(!f||m&2)&&w(h,q,o,o[1],f?S(q,o[1],m,Y):E(o[1]),Z)},i(o){f||(D(l,o),D(r,o),D(h,o),f=!0)},o(o){P(l,o),P(r,o),P(h,o),f=!1},d(o){o&&b(e),l&&l.d(o),c&&c.d(),r&&r.d(o),h&&h.d(o)}}}function te(t,e,n){let{$$slots:s={},$$scope:i}=e;const _=K(s);return t.$$set=u=>{"$$scope"in u&&n(1,i=u.$$scope)},[_,i,s]}class oe extends G{constructor(e){super(),J(this,e,te,ee,M,{})}}function se(t){let e,n,s,i,_;const u=t[6].default,f=I(u,t,t[5],null);return{c(){e=g("div"),f&&f.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var l=k(e);f&&f.l(l),l.forEach(b),this.h()},h(){p(e,"class",n="font-mono px-3 py-1 "+(t[1]?"":"hover:bg-slate-400")),d(e,"text-white",t[1]),d(e,"bg-slate-800",t[1]),d(e,"text-slate-900",!t[1]),d(e,"bg-slate-300",!t[1])},m(a,l){V(a,e,l),f&&f.m(e,null),s=!0,i||(_=F(e,"click",t[2]),i=!0)},p(a,[l]){f&&f.p&&(!s||l&32)&&w(f,u,a,a[5],s?S(u,a[5],l,null):E(a[5]),null),(!s||l&2&&n!==(n="font-mono px-3 py-1 "+(a[1]?"":"hover:bg-slate-400")))&&p(e,"class",n),l&2&&d(e,"text-white",a[1]),l&2&&d(e,"bg-slate-800",a[1]),l&2&&d(e,"text-slate-900",!a[1]),l&2&&d(e,"bg-slate-300",!a[1])},i(a){s||(D(f,a),s=!0)},o(a){P(f,a),s=!1},d(a){a&&b(e),f&&f.d(a),i=!1,_()}}}function le(t,e,n){let s,i=C,_=()=>(i(),i=L(l,r=>n(4,s=r)),l);t.$$.on_destroy.push(()=>i());let{$$slots:u={},$$scope:f}=e,{id:a}=e,{selection:l}=e;_();let c=!1;function T(){U(l,s=a,s)}return s||U(l,s=a,s),t.$$set=r=>{"id"in r&&n(3,a=r.id),"selection"in r&&_(n(0,l=r.selection)),"$$scope"in r&&n(5,f=r.$$scope)},t.$$.update=()=>{t.$$.dirty&24&&n(1,c=s==a)},[l,c,T,a,s,f,u]}class fe extends G{constructor(e){super(),J(this,e,le,se,M,{id:3,selection:0})}}export{ae as I,oe as S,fe as a};
