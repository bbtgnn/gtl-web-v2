import{S as I,i as R,s as q,e as g,c as y,a as k,d as m,b as w,g as b,F as U,M as N,E as j,T as v,U as D,t as A,k as C,w as M,h as F,m as B,x as P,y as Q,O as V,q as Z,o as z,B as G,Z as H,Q as E,R as _}from"../chunks/index-4836a415.js";import{m as x,g as S,s as T}from"../chunks/index-3ea4535f.js";import"../chunks/index-29b3c992.js";function K(r){let e,s,i,n;return{c(){e=g("div"),s=g("input"),this.h()},l(l){e=y(l,"DIV",{});var u=k(e);s=y(u,"INPUT",{type:!0,accept:!0}),u.forEach(m),this.h()},h(){w(s,"type","file"),w(s,"accept",".json")},m(l,u){b(l,e,u),U(e,s),r[4](s),i||(n=N(s,"change",r[3]),i=!0)},p:j,i:j,o:j,d(l){l&&m(e),r[4](null),i=!1,n()}}}function L(r,e,s){let{json:i=""}=e,n;const l=o=>{let f=o.target.files[0],a=new FileReader;a.readAsText(f),a.onload=d=>{s(2,i=d.target.result)}},u=o=>l(o);function c(o){v[o?"unshift":"push"](()=>{n=o,s(0,n)})}return r.$$set=o=>{"json"in o&&s(2,i=o.json)},[n,l,i,u,c]}class W extends I{constructor(e){super(),R(this,e,L,K,q,{json:2})}}function X(r){let e,s,i,n,l,u,c,o,f,a,d;function J(t){r[3](t)}let O={};return r[0]!==void 0&&(O.json=r[0]),c=new W({props:O}),v.push(()=>D(c,"json",J)),{c(){e=g("button"),s=A("Clear"),i=C(),n=g("button"),l=A("Esporta"),u=C(),M(c.$$.fragment)},l(t){e=y(t,"BUTTON",{});var p=k(e);s=F(p,"Clear"),p.forEach(m),i=B(t),n=y(t,"BUTTON",{});var h=k(n);l=F(h,"Esporta"),h.forEach(m),u=B(t),P(c.$$.fragment,t)},m(t,p){b(t,e,p),U(e,s),b(t,i,p),b(t,n,p),U(n,l),b(t,u,p),Q(c,t,p),f=!0,a||(d=[N(e,"click",r[1]),N(n,"click",r[2])],a=!0)},p(t,[p]){const h={};!o&&p&1&&(o=!0,h.json=t[0],V(()=>o=!1)),c.$set(h)},i(t){f||(Z(c.$$.fragment,t),f=!0)},o(t){z(c.$$.fragment,t),f=!1},d(t){t&&m(e),t&&m(i),t&&m(n),t&&m(u),G(c,t),a=!1,H(d)}}}function Y(r,e,s){let i,n,l;E(r,x,a=>s(4,i=a)),E(r,S,a=>s(5,n=a)),E(r,T,a=>s(6,l=a));function u(){c(),_(T,l=[],l),_(S,n=[],n),_(x,i={height:1,ascender:1,descender:1},i)}function c(){let a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({glyphs:n,syntaxes:l,metrics:i})),d=document.createElement("a");d.setAttribute("href",a),d.setAttribute("download","scene.json"),d.click()}let o="";function f(a){o=a,s(0,o)}return r.$$.update=()=>{if(r.$$.dirty&1&&o){const a=JSON.parse(o);_(T,l=a.syntaxes,l),_(S,n=a.glyphs,n),_(x,i=a.metrics,i),s(0,o="")}},[o,u,c,f]}class st extends I{constructor(e){super(),R(this,e,Y,X,q,{})}}export{st as default};
