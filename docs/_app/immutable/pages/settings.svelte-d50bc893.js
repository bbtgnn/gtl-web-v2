import{S as tt,i as et,s as st,e as g,c as $,a as v,d,b as k,g as T,M as p,Q as ot,E as U,W as nt,X as rt,t as V,k as x,w as q,h as A,m as D,x as J,y as O,R as lt,q as G,o as K,B as L,K as M,T as S}from"../chunks/index-839bebe8.js";import{m as Q,g as W,a as X}from"../chunks/index-13834de1.js";import{B as Z}from"../chunks/button-b42f8ff2.js";import"../chunks/index-b01a2e19.js";function it(a){let e,t,s,c;return{c(){e=g("div"),t=g("input"),this.h()},l(r){e=$(r,"DIV",{});var i=v(e);t=$(i,"INPUT",{type:!0,accept:!0}),i.forEach(d),this.h()},h(){k(t,"type","file"),k(t,"accept",".json")},m(r,i){T(r,e,i),p(e,t),a[4](t),s||(c=ot(t,"change",a[3]),s=!0)},p:U,i:U,o:U,d(r){r&&d(e),a[4](null),s=!1,c()}}}function ct(a,e,t){let{json:s=""}=e,c;const r=n=>{let f=n.target.files[0],o=new FileReader;o.readAsText(f),o.onload=m=>{t(2,s=m.target.result)}},i=n=>r(n);function b(n){nt[n?"unshift":"push"](()=>{c=n,t(0,c)})}return a.$$set=n=>{"json"in n&&t(2,s=n.json)},[c,r,s,i,b]}class pt extends tt{constructor(e){super(),et(this,e,ct,it,st,{json:2})}}function ut(a){let e;return{c(){e=V("Clear")},l(t){e=A(t,"Clear")},m(t,s){T(t,e,s)},d(t){t&&d(e)}}}function dt(a){let e;return{c(){e=V("Esporta")},l(t){e=A(t,"Esporta")},m(t,s){T(t,e,s)},d(t){t&&d(e)}}}function ft(a){let e,t,s,c,r,i,b,n,f,o,m,_,B,E,I,F,N,h,R,C;i=new Z({props:{$$slots:{default:[ut]},$$scope:{ctx:a}}}),i.$on("click",a[1]),_=new Z({props:{$$slots:{default:[dt]},$$scope:{ctx:a}}}),_.$on("click",a[2]);function at(l){a[3](l)}let z={};return a[0]!==void 0&&(z.json=a[0]),h=new pt({props:z}),nt.push(()=>rt(h,"json",at)),{c(){e=g("div"),t=g("div"),s=g("p"),c=V("Elimina progetto"),r=x(),q(i.$$.fragment),b=x(),n=g("div"),f=g("p"),o=V("Esporta progetto"),m=x(),q(_.$$.fragment),B=x(),E=g("div"),I=g("p"),F=V("Importa progetto"),N=x(),q(h.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0});var u=v(e);t=$(u,"DIV",{});var j=v(t);s=$(j,"P",{class:!0});var w=v(s);c=A(w,"Elimina progetto"),w.forEach(d),r=D(j),J(i.$$.fragment,j),j.forEach(d),b=D(u),n=$(u,"DIV",{});var y=v(n);f=$(y,"P",{class:!0});var H=v(f);o=A(H,"Esporta progetto"),H.forEach(d),m=D(y),J(_.$$.fragment,y),y.forEach(d),B=D(u),E=$(u,"DIV",{});var P=v(E);I=$(P,"P",{class:!0});var Y=v(I);F=A(Y,"Importa progetto"),Y.forEach(d),N=D(P),J(h.$$.fragment,P),P.forEach(d),u.forEach(d),this.h()},h(){k(s,"class","mb-2"),k(f,"class","mb-2"),k(I,"class","mb-2"),k(e,"class","p-8 space-y-8")},m(l,u){T(l,e,u),p(e,t),p(t,s),p(s,c),p(t,r),O(i,t,null),p(e,b),p(e,n),p(n,f),p(f,o),p(n,m),O(_,n,null),p(e,B),p(e,E),p(E,I),p(I,F),p(E,N),O(h,E,null),C=!0},p(l,[u]){const j={};u&128&&(j.$$scope={dirty:u,ctx:l}),i.$set(j);const w={};u&128&&(w.$$scope={dirty:u,ctx:l}),_.$set(w);const y={};!R&&u&1&&(R=!0,y.json=l[0],lt(()=>R=!1)),h.$set(y)},i(l){C||(G(i.$$.fragment,l),G(_.$$.fragment,l),G(h.$$.fragment,l),C=!0)},o(l){K(i.$$.fragment,l),K(_.$$.fragment,l),K(h.$$.fragment,l),C=!1},d(l){l&&d(e),L(i),L(_),L(h)}}}function mt(a,e,t){let s,c,r;M(a,Q,o=>t(4,s=o)),M(a,W,o=>t(5,c=o)),M(a,X,o=>t(6,r=o));function i(){b(),S(X,r=[],r),S(W,c=[],c),S(Q,s={height:7,baseline:1},s)}function b(){let o="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({glyphs:c,syntaxes:r,metrics:s})),m=document.createElement("a");m.setAttribute("href",o),m.setAttribute("download","GTL.json"),m.click()}let n="";function f(o){n=o,t(0,n)}return a.$$.update=()=>{if(a.$$.dirty&1&&n){const o=JSON.parse(n);S(X,r=o.syntaxes,r),S(W,c=o.glyphs,c),S(Q,s=o.metrics,s),t(0,n="")}},[n,i,b,f]}class bt extends tt{constructor(e){super(),et(this,e,mt,ft,st,{})}}export{bt as default};
