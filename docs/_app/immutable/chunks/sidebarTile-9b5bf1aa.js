import{S as Y,i as Z,s as j,G as I,e as E,c as T,b as g,g as G,d as v,k as H,a as k,m as C,L as A,H as S,I as $,J as D,q as V,o as y,X as z,Y as b,O as B,Z as F,Q as O,E as K}from"./index-41208546.js";const M=s=>({}),P=s=>({}),N=s=>({}),Q=s=>({}),U=s=>({}),R=s=>({});function X(s){let e;return{c(){e=E("hr"),this.h()},l(l){e=T(l,"HR",{class:!0}),this.h()},h(){g(e,"class","border-b-1 border-slate-300")},m(l,o){G(l,e,o)},d(l){l&&v(e)}}}function W(s){let e,l,o,_,c,h,a,t;const n=s[2].topArea,r=I(n,s,s[1],R);let f=s[0].topArea&&X();const p=s[2].listTitle,u=I(p,s,s[1],Q),q=s[2].items,d=I(q,s,s[1],P);return{c(){e=E("div"),l=E("div"),r&&r.c(),o=H(),f&&f.c(),_=H(),c=E("p"),u&&u.c(),h=H(),a=E("div"),d&&d.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var m=k(e);l=T(m,"DIV",{class:!0});var w=k(l);r&&r.l(w),o=C(w),f&&f.l(w),_=C(w),c=T(w,"P",{class:!0});var J=k(c);u&&u.l(J),J.forEach(v),w.forEach(v),h=C(m),a=T(m,"DIV",{class:!0});var L=k(a);d&&d.l(L),L.forEach(v),m.forEach(v),this.h()},h(){g(c,"class","text-small font-mono text-slate-900 mb-4 text-sm"),g(l,"class","space-y-4 pb-4"),g(a,"class","h-0 grow overflow-y-auto space-y-1"),g(e,"class","w-60 flex flex-col flex-nowrap p-6 bg-slate-100 flex-shrink-0 overflow-hidden")},m(i,m){G(i,e,m),A(e,l),r&&r.m(l,null),A(l,o),f&&f.m(l,null),A(l,_),A(l,c),u&&u.m(c,null),A(e,h),A(e,a),d&&d.m(a,null),t=!0},p(i,[m]){r&&r.p&&(!t||m&2)&&S(r,n,i,i[1],t?D(n,i[1],m,U):$(i[1]),R),i[0].topArea?f||(f=X(),f.c(),f.m(l,_)):f&&(f.d(1),f=null),u&&u.p&&(!t||m&2)&&S(u,p,i,i[1],t?D(p,i[1],m,N):$(i[1]),Q),d&&d.p&&(!t||m&2)&&S(d,q,i,i[1],t?D(q,i[1],m,M):$(i[1]),P)},i(i){t||(V(r,i),V(u,i),V(d,i),t=!0)},o(i){y(r,i),y(u,i),y(d,i),t=!1},d(i){i&&v(e),r&&r.d(i),f&&f.d(),u&&u.d(i),d&&d.d(i)}}}function x(s,e,l){let{$$slots:o={},$$scope:_}=e;const c=z(o);return s.$$set=h=>{"$$scope"in h&&l(1,_=h.$$scope)},[c,_,o]}class le extends Y{constructor(e){super(),Z(this,e,x,W,j,{})}}function ee(s){let e,l,o,_,c;const h=s[6].default,a=I(h,s,s[5],null);return{c(){e=E("div"),a&&a.c(),this.h()},l(t){e=T(t,"DIV",{class:!0});var n=k(e);a&&a.l(n),n.forEach(v),this.h()},h(){g(e,"class",l="font-mono px-3 py-1 "+(s[1]?"":"hover:bg-slate-400")),b(e,"text-white",s[1]),b(e,"bg-slate-800",s[1]),b(e,"text-slate-900",!s[1]),b(e,"bg-slate-300",!s[1])},m(t,n){G(t,e,n),a&&a.m(e,null),o=!0,_||(c=B(e,"click",s[2]),_=!0)},p(t,[n]){a&&a.p&&(!o||n&32)&&S(a,h,t,t[5],o?D(h,t[5],n,null):$(t[5]),null),(!o||n&2&&l!==(l="font-mono px-3 py-1 "+(t[1]?"":"hover:bg-slate-400")))&&g(e,"class",l),n&2&&b(e,"text-white",t[1]),n&2&&b(e,"bg-slate-800",t[1]),n&2&&b(e,"text-slate-900",!t[1]),n&2&&b(e,"bg-slate-300",!t[1])},i(t){o||(V(a,t),o=!0)},o(t){y(a,t),o=!1},d(t){t&&v(e),a&&a.d(t),_=!1,c()}}}function se(s,e,l){let o,_=K,c=()=>(_(),_=F(n,p=>l(4,o=p)),n);s.$$.on_destroy.push(()=>_());let{$$slots:h={},$$scope:a}=e,{id:t}=e,{selection:n}=e;c();let r=!1;function f(){O(n,o=t,o)}return s.$$set=p=>{"id"in p&&l(3,t=p.id),"selection"in p&&c(l(0,n=p.selection)),"$$scope"in p&&l(5,a=p.$$scope)},s.$$.update=()=>{s.$$.dirty&24&&(o||O(n,o=t,o)),s.$$.dirty&24&&l(1,r=o==t)},[n,r,f,t,o,a,h]}class ie extends Y{constructor(e){super(),Z(this,e,se,ee,j,{id:3,selection:0})}}export{le as S,ie as a};
