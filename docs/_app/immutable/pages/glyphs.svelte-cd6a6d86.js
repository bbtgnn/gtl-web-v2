import{S as se,i as ne,s as ae,l as T,g as $,q as b,e as k,t as D,k as I,w as q,c as w,a as y,h as G,d as _,m as S,x as L,b as E,L as v,y as P,N as X,O as re,P as ie,o as x,B as R,p as H,M as oe,K as z,Q as F,n as K,R as fe,T as ue,U as ce,V as _e,j as me}from"../chunks/index-41208546.js";import{g as B,s as C}from"../chunks/index-b1f922bc.js";import{n as pe}from"../chunks/index.browser-85ea5a5b.js";import{I as he}from"../chunks/inputText-075f530e.js";import{S as de,a as ge}from"../chunks/sidebarTile-9b5bf1aa.js";import{B as $e}from"../chunks/button-908b51bc.js";import"../chunks/index-23ef72ca.js";function J(i,t,s){const e=i.slice();return e[5]=t[s],e[6]=t,e[7]=s,e}function W(i,t,s){const e=i.slice();return e[5]=t[s],e}function ve(i){let t;return{c(){t=D("+ Aggiungi glifo")},l(s){t=G(s,"+ Aggiungi glifo")},m(s,e){$(s,t,e)},d(s){s&&_(t)}}}function be(i){let t,s;return t=new $e({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}}),t.$on("click",i[2]),{c(){q(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,n){P(t,e,n),s=!0},p(e,n){const a={};n&1024&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){x(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function ke(i){let t;return{c(){t=D("Lista glifi")},l(s){t=G(s,"Lista glifi")},m(s,e){$(s,t,e)},d(s){s&&_(t)}}}function we(i){let t=i[5].name+"",s,e;return{c(){s=D(t),e=I()},l(n){s=G(n,t),e=S(n)},m(n,a){$(n,s,a),$(n,e,a)},p(n,a){a&2&&t!==(t=n[5].name+"")&&me(s,t)},d(n){n&&_(s),n&&_(e)}}}function Y(i,t){let s,e,n;return e=new ge({props:{selection:C,id:t[5].id,$$slots:{default:[we]},$$scope:{ctx:t}}}),{key:i,first:null,c(){s=T(),q(e.$$.fragment),this.h()},l(a){s=T(),L(e.$$.fragment,a),this.h()},h(){this.first=s},m(a,m){$(a,s,m),P(e,a,m),n=!0},p(a,m){t=a;const r={};m&2&&(r.id=t[5].id),m&1026&&(r.$$scope={dirty:m,ctx:t}),e.$set(r)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){x(e.$$.fragment,a),n=!1},d(a){a&&_(s),R(e,a)}}}function xe(i){let t=[],s=new Map,e,n,a=i[1];const m=r=>r[5].id;for(let r=0;r<a.length;r+=1){let l=W(i,a,r),p=m(l);s.set(p,t[r]=Y(p,l))}return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=T()},l(r){for(let l=0;l<t.length;l+=1)t[l].l(r);e=T()},m(r,l){for(let p=0;p<t.length;p+=1)t[p].m(r,l);$(r,e,l),n=!0},p(r,l){l&2&&(a=r[1],K(),t=fe(t,l,m,1,r,a,s,e.parentNode,ue,Y,e,W),H())},i(r){if(!n){for(let l=0;l<a.length;l+=1)b(t[l]);n=!0}},o(r){for(let l=0;l<t.length;l+=1)x(t[l]);n=!1},d(r){for(let l=0;l<t.length;l+=1)t[l].d(r);r&&_(e)}}}function Z(i){let t,s,e,n,a,m,r,l,p,o,f,d,c,h,M,N,j,O;function te(u){i[3](u,i[5])}let Q={};i[5].name!==void 0&&(Q.value=i[5].name),a=new he({props:Q}),ce.push(()=>_e(a,"value",te));function le(){i[4].call(h,i[6],i[7])}return{c(){t=k("div"),s=k("p"),e=D("Nome glifo"),n=I(),q(a.$$.fragment),r=I(),l=k("hr"),p=I(),o=k("div"),f=k("p"),d=D("Struttura glifo"),c=I(),h=k("textarea"),M=I(),this.h()},l(u){t=w(u,"DIV",{class:!0});var g=y(t);s=w(g,"P",{class:!0});var A=y(s);e=G(A,"Nome glifo"),A.forEach(_),n=S(g),L(a.$$.fragment,g),g.forEach(_),r=S(u),l=w(u,"HR",{}),p=S(u),o=w(u,"DIV",{class:!0});var V=y(o);f=w(V,"P",{class:!0});var U=y(f);d=G(U,"Struttura glifo"),U.forEach(_),c=S(V),h=w(V,"TEXTAREA",{class:!0}),y(h).forEach(_),M=S(V),V.forEach(_),this.h()},h(){E(s,"class","text-small font-mono text-slate-900 mb-2 text-sm"),E(t,"class","shrink-0"),E(f,"class","text-small font-mono text-slate-900 mb-2 text-sm"),E(h,"class","h-0 grow p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"),E(o,"class","grow flex flex-col items-stretch")},m(u,g){$(u,t,g),v(t,s),v(s,e),v(t,n),P(a,t,null),$(u,r,g),$(u,l,g),$(u,p,g),$(u,o,g),v(o,f),v(f,d),v(o,c),v(o,h),X(h,i[5].structure),v(o,M),N=!0,j||(O=re(h,"input",le),j=!0)},p(u,g){i=u;const A={};!m&&g&2&&(m=!0,A.value=i[5].name,ie(()=>m=!1)),a.$set(A),g&2&&X(h,i[5].structure)},i(u){N||(b(a.$$.fragment,u),N=!0)},o(u){x(a.$$.fragment,u),N=!1},d(u){u&&_(t),R(a),u&&_(r),u&&_(l),u&&_(p),u&&_(o),j=!1,O()}}}function ee(i){let t,s,e=i[5].id==i[0]&&Z(i);return{c(){e&&e.c(),t=T()},l(n){e&&e.l(n),t=T()},m(n,a){e&&e.m(n,a),$(n,t,a),s=!0},p(n,a){n[5].id==n[0]?e?(e.p(n,a),a&3&&b(e,1)):(e=Z(n),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(K(),x(e,1,1,()=>{e=null}),H())},i(n){s||(b(e),s=!0)},o(n){x(e),s=!1},d(n){e&&e.d(n),n&&_(t)}}}function ye(i){let t,s,e,n,a,m;e=new de({props:{$$slots:{items:[xe],listTitle:[ke],topArea:[be]},$$scope:{ctx:i}}});let r=i[1],l=[];for(let o=0;o<r.length;o+=1)l[o]=ee(J(i,r,o));const p=o=>x(l[o],1,1,()=>{l[o]=null});return{c(){t=k("div"),s=k("div"),q(e.$$.fragment),n=I(),a=k("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){t=w(o,"DIV",{class:!0});var f=y(t);s=w(f,"DIV",{class:!0});var d=y(s);L(e.$$.fragment,d),d.forEach(_),n=S(f),a=w(f,"DIV",{class:!0});var c=y(a);for(let h=0;h<l.length;h+=1)l[h].l(c);c.forEach(_),f.forEach(_),this.h()},h(){E(s,"class","shrink-0 flex items-stretch"),E(a,"class","p-8 space-y-8 grow flex flex-col items-stretch"),E(t,"class","flex flex-row flex-nowrap items-stretch overflow-hidden grow")},m(o,f){$(o,t,f),v(t,s),P(e,s,null),v(t,n),v(t,a);for(let d=0;d<l.length;d+=1)l[d].m(a,null);m=!0},p(o,[f]){const d={};if(f&1026&&(d.$$scope={dirty:f,ctx:o}),e.$set(d),f&3){r=o[1];let c;for(c=0;c<r.length;c+=1){const h=J(o,r,c);l[c]?(l[c].p(h,f),b(l[c],1)):(l[c]=ee(h),l[c].c(),b(l[c],1),l[c].m(a,null))}for(K(),c=r.length;c<l.length;c+=1)p(c);H()}},i(o){if(!m){b(e.$$.fragment,o);for(let f=0;f<r.length;f+=1)b(l[f]);m=!0}},o(o){x(e.$$.fragment,o),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)x(l[f]);m=!1},d(o){o&&_(t),R(e),oe(l,o)}}}function Ee(i,t,s){let e,n;z(i,C,l=>s(0,e=l)),z(i,B,l=>s(1,n=l)),n.length||a();function a(){const l={id:pe(5),name:"[aggiungi nome]",structure:""};F(B,n=[...n,l],n),F(C,e=l.id,e)}function m(l,p){i.$$.not_equal(p.name,l)&&(p.name=l,B.set(n))}function r(l,p){l[p].structure=this.value,B.set(n)}return[e,n,a,m,r]}class Ne extends se{constructor(t){super(),ne(this,t,Ee,ye,ae,{})}}export{Ne as default};
