import{S as ne,i as se,s as ie,P as Y,Q as Z,l as V,g as $,q as b,e as E,t as q,k as T,w as P,c as y,a as A,h as G,d,m as I,x as R,b as N,M as v,y as x,R as Q,T as ae,U as ee,o as k,B as M,p as j,O as re,K as oe,V as fe,n as C,W as ue,X as ce,j as _e}from"../chunks/index-95fb9bf0.js";import{g as L}from"../chunks/index-cef5641d.js";import{n as pe}from"../chunks/index.browser-85ea5a5b.js";import{I as me}from"../chunks/inputText-2d31c270.js";import{S as he,a as de}from"../chunks/sidebarTile-895ed734.js";import{B as ge}from"../chunks/button-4eba3675.js";import"../chunks/index-19ccdd16.js";function U(i,t,l){const e=i.slice();return e[6]=t[l],e[7]=t,e[8]=l,e}function W(i,t,l){const e=i.slice();return e[6]=t[l],e}function $e(i){let t;return{c(){t=q("+ Aggiungi glifo")},l(l){t=G(l,"+ Aggiungi glifo")},m(l,e){$(l,t,e)},d(l){l&&d(t)}}}function be(i){let t,l;return t=new ge({props:{$$slots:{default:[$e]},$$scope:{ctx:i}}}),t.$on("click",i[2]),{c(){P(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,s){x(t,e,s),l=!0},p(e,s){const n={};s&2048&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){l||(b(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){M(t,e)}}}function ve(i){let t;return{c(){t=q("Lista glifi")},l(l){t=G(l,"Lista glifi")},m(l,e){$(l,t,e)},d(l){l&&d(t)}}}function ke(i){let t=i[6].name+"",l,e;return{c(){l=q(t),e=T()},l(s){l=G(s,t),e=I(s)},m(s,n){$(s,l,n),$(s,e,n)},p(s,n){n&2&&t!==(t=s[6].name+"")&&_e(l,t)},d(s){s&&d(l),s&&d(e)}}}function z(i,t){let l,e,s;return e=new de({props:{id:t[6].id,$$slots:{default:[ke]},$$scope:{ctx:t}}}),{key:i,first:null,c(){l=V(),P(e.$$.fragment),this.h()},l(n){l=V(),R(e.$$.fragment,n),this.h()},h(){this.first=l},m(n,m){$(n,l,m),x(e,n,m),s=!0},p(n,m){t=n;const r={};m&2&&(r.id=t[6].id),m&2050&&(r.$$scope={dirty:m,ctx:t}),e.$set(r)},i(n){s||(b(e.$$.fragment,n),s=!0)},o(n){k(e.$$.fragment,n),s=!1},d(n){n&&d(l),M(e,n)}}}function we(i){let t=[],l=new Map,e,s,n=i[1];const m=r=>r[6].id;for(let r=0;r<n.length;r+=1){let o=W(i,n,r),u=m(o);l.set(u,t[r]=z(u,o))}return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=V()},l(r){for(let o=0;o<t.length;o+=1)t[o].l(r);e=V()},m(r,o){for(let u=0;u<t.length;u+=1)t[u].m(r,o);$(r,e,o),s=!0},p(r,o){o&2&&(n=r[1],C(),t=ue(t,o,m,1,r,n,l,e.parentNode,ce,z,e,W),j())},i(r){if(!s){for(let o=0;o<n.length;o+=1)b(t[o]);s=!0}},o(r){for(let o=0;o<t.length;o+=1)k(t[o]);s=!1},d(r){for(let o=0;o<t.length;o+=1)t[o].d(r);r&&d(e)}}}function F(i){let t,l,e,s,n,m,r,o,u,a,w,f,_,h,p,S,X,H;function te(c){i[4](c,i[6])}let K={};i[6].name!==void 0&&(K.value=i[6].name),n=new me({props:K}),Y.push(()=>Z(n,"value",te));function le(){i[5].call(h,i[7],i[8])}return{c(){t=E("div"),l=E("p"),e=q("Nome glifo"),s=T(),P(n.$$.fragment),r=T(),o=E("hr"),u=T(),a=E("div"),w=E("p"),f=q("Struttura glifo"),_=T(),h=E("textarea"),p=T(),this.h()},l(c){t=y(c,"DIV",{});var g=A(t);l=y(g,"P",{class:!0});var B=A(l);e=G(B,"Nome glifo"),B.forEach(d),s=I(g),R(n.$$.fragment,g),g.forEach(d),r=I(c),o=y(c,"HR",{}),u=I(c),a=y(c,"DIV",{});var D=A(a);w=y(D,"P",{class:!0});var O=A(w);f=G(O,"Struttura glifo"),O.forEach(d),_=I(D),h=y(D,"TEXTAREA",{class:!0}),A(h).forEach(d),p=I(D),D.forEach(d),this.h()},h(){N(l,"class","text-small font-mono text-slate-900 mb-2 text-sm"),N(w,"class","text-small font-mono text-slate-900 mb-2 text-sm"),N(h,"class","h-80 p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4")},m(c,g){$(c,t,g),v(t,l),v(l,e),v(t,s),x(n,t,null),$(c,r,g),$(c,o,g),$(c,u,g),$(c,a,g),v(a,w),v(w,f),v(a,_),v(a,h),Q(h,i[6].structure),v(a,p),S=!0,X||(H=ae(h,"input",le),X=!0)},p(c,g){i=c;const B={};!m&&g&2&&(m=!0,B.value=i[6].name,ee(()=>m=!1)),n.$set(B),g&2&&Q(h,i[6].structure)},i(c){S||(b(n.$$.fragment,c),S=!0)},o(c){k(n.$$.fragment,c),S=!1},d(c){c&&d(t),M(n),c&&d(r),c&&d(o),c&&d(u),c&&d(a),X=!1,H()}}}function J(i){let t,l,e=i[6].id==i[0]&&F(i);return{c(){e&&e.c(),t=V()},l(s){e&&e.l(s),t=V()},m(s,n){e&&e.m(s,n),$(s,t,n),l=!0},p(s,n){s[6].id==s[0]?e?(e.p(s,n),n&3&&b(e,1)):(e=F(s),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(C(),k(e,1,1,()=>{e=null}),j())},i(s){l||(b(e),l=!0)},o(s){k(e),l=!1},d(s){e&&e.d(s),s&&d(t)}}}function Ee(i){let t,l,e,s,n,m;function r(f){i[3](f)}let o={$$slots:{items:[we],listTitle:[ve],topArea:[be]},$$scope:{ctx:i}};i[0]!==void 0&&(o.selection=i[0]),l=new he({props:o}),Y.push(()=>Z(l,"selection",r));let u=i[1],a=[];for(let f=0;f<u.length;f+=1)a[f]=J(U(i,u,f));const w=f=>k(a[f],1,1,()=>{a[f]=null});return{c(){t=E("div"),P(l.$$.fragment),s=T(),n=E("div");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){t=y(f,"DIV",{class:!0});var _=A(t);R(l.$$.fragment,_),s=I(_),n=y(_,"DIV",{class:!0});var h=A(n);for(let p=0;p<a.length;p+=1)a[p].l(h);h.forEach(d),_.forEach(d),this.h()},h(){N(n,"class","p-8 space-y-8"),N(t,"class","h-full flex flex-row flex-nowrap items-stretch")},m(f,_){$(f,t,_),x(l,t,null),v(t,s),v(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);m=!0},p(f,[_]){const h={};if(_&2050&&(h.$$scope={dirty:_,ctx:f}),!e&&_&1&&(e=!0,h.selection=f[0],ee(()=>e=!1)),l.$set(h),_&3){u=f[1];let p;for(p=0;p<u.length;p+=1){const S=U(f,u,p);a[p]?(a[p].p(S,_),b(a[p],1)):(a[p]=J(S),a[p].c(),b(a[p],1),a[p].m(n,null))}for(C(),p=u.length;p<a.length;p+=1)w(p);j()}},i(f){if(!m){b(l.$$.fragment,f);for(let _=0;_<u.length;_+=1)b(a[_]);m=!0}},o(f){k(l.$$.fragment,f),a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)k(a[_]);m=!1},d(f){f&&d(t),M(l),re(a,f)}}}function ye(i,t,l){let e;oe(i,L,u=>l(1,e=u));let s;e.length||n();function n(){const u={id:pe(5),name:"[aggiungi nome]",structure:""};fe(L,e=[...e,u],e),l(0,s=u.id)}function m(u){s=u,l(0,s)}function r(u,a){i.$$.not_equal(a.name,u)&&(a.name=u,L.set(e))}function o(u,a){u[a].structure=this.value,L.set(e)}return[s,e,n,m,r,o]}class Ne extends ne{constructor(t){super(),se(this,t,ye,Ee,ie,{})}}export{Ne as default};
