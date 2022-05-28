import{S as Y,i as Z,s as x,e as P,t as j,c as R,a as K,h as U,d as $,g as y,M as E,j as me,b as D,L as Me,a3 as we,Q as Ee,U as fe,a4 as je,E as se,a5 as Ue,a6 as He,a7 as Xe,W as A,X as F,w as I,x as q,y as V,R as L,q as v,o as k,B as N,k as T,m as z,n as H,p as X,l as M,V as ge,K as pe,T as Se}from"../chunks/index-839bebe8.js";import{V as ae,S as G,v as Ge,r as Je,f as Ye,q as Ze,_ as xe,h as et,i as tt}from"../chunks/lodash-26b3c147.js";import{a as oe,b as ce,g as nt}from"../chunks/index-13834de1.js";import{n as _e}from"../chunks/index.browser-85ea5a5b.js";import{I as Qe,S as lt,a as at}from"../chunks/sidebarTile-32faeedb.js";import{I as de,L as J}from"../chunks/label-66ef440d.js";import{B as rt}from"../chunks/button-b42f8ff2.js";import"../chunks/index-b01a2e19.js";function Ie(r,e,n){const t=r.slice();return t[6]=e[n],t}function qe(r,e){let n,t=e[6].label+"",s,a;return{key:r,first:null,c(){n=P("option"),s=j(t),this.h()},l(l){n=R(l,"OPTION",{});var i=K(n);s=U(i,t),i.forEach($),this.h()},h(){n.__value=a=e[6].value,n.value=n.__value,this.first=n},m(l,i){y(l,n,i),E(n,s)},p(l,i){e=l,i&2&&t!==(t=e[6].label+"")&&me(s,t),i&2&&a!==(a=e[6].value)&&(n.__value=a,n.value=n.__value)},d(l){l&&$(n)}}}function it(r){let e,n=[],t=new Map,s,a,l=r[1];const i=o=>o[6].label;for(let o=0;o<l.length;o+=1){let f=Ie(r,l,o),_=i(f);t.set(_,n[o]=qe(_,f))}return{c(){e=P("select");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=R(o,"SELECT",{class:!0,name:!0,id:!0});var f=K(e);for(let _=0;_<n.length;_+=1)n[_].l(f);f.forEach($),this.h()},h(){D(e,"class","block h-10 bg-slate-200 font-mono rounded-none"),D(e,"name",r[2]),D(e,"id",r[2]),r[0]===void 0&&Me(()=>r[4].call(e))},m(o,f){y(o,e,f);for(let _=0;_<n.length;_+=1)n[_].m(e,null);we(e,r[0]),s||(a=[Ee(e,"change",r[4]),Ee(e,"change",r[3])],s=!0)},p(o,[f]){f&2&&(l=o[1],n=fe(n,f,i,1,o,l,t,e,je,qe,null,Ie)),f&4&&D(e,"name",o[2]),f&4&&D(e,"id",o[2]),f&3&&we(e,o[0])},i:se,o:se,d(o){o&&$(e);for(let f=0;f<n.length;f+=1)n[f].d();s=!1,Ue(a)}}}function st(r,e,n){let{options:t}=e,{value:s}=e,{name:a=_e(5)}=e;const l=He();function i(){l("changed",s)}function o(){s=Xe(this),n(0,s),n(1,t)}return r.$$set=f=>{"options"in f&&n(1,t=f.options),"value"in f&&n(0,s=f.value),"name"in f&&n(2,a=f.name)},[s,t,a,i,o]}class re extends Y{constructor(e){super(),Z(this,e,st,it,x,{options:1,value:0,name:2})}}function ot(r){let e,n,t;function s(l){r[5](l)}let a={};return r[0]!==void 0&&(a.value=r[0]),e=new Qe({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,[i]){const o={};!n&&i&1&&(n=!0,o.value=l[0],L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function ut(r,e,n){let{value:t=[]}=e,{parseNumbers:s=!1}=e,{parseBooleans:a=!1}=e,{separator:l=";"}=e,i="";f();function o(){const u=i.split(l).map(c=>c.trim()).filter(c=>c);!s&&!a?n(1,t=[...u]):s?n(1,t=[...u.map(c=>parseFloat(c)).filter(c=>!isNaN(c))]):a&&n(1,t=[...u.map(c=>c=="true"?!0:c=="false"?!1:null).filter(c=>c!==null)])}function f(){t.length&&n(0,i=t.join(`${l} `))}function _(u){i=u,n(0,i)}return r.$$set=u=>{"value"in u&&n(1,t=u.value),"parseNumbers"in u&&n(2,s=u.parseNumbers),"parseBooleans"in u&&n(3,a=u.parseBooleans),"separator"in u&&n(4,l=u.separator)},r.$$.update=()=>{r.$$.dirty&1&&o()},[i,t,s,a,l,_]}class he extends Y{constructor(e){super(),Z(this,e,ut,ot,x,{value:1,parseNumbers:2,parseBooleans:3,separator:4})}}function Ve(r){let e,n,t,s,a,l,i,o;function f(p){r[6](p)}let _={options:r[3]};r[1]!==void 0&&(_.value=r[1]),n=new re({props:_}),A.push(()=>F(n,"value",f)),n.$on("changed",r[2]);const u=[pt,ft],c=[];function m(p,b){return p[0].value.kind=="fixed"?0:p[0].value.kind=="choice"?1:-1}return~(l=m(r))&&(i=c[l]=u[l](r)),{c(){e=P("div"),I(n.$$.fragment),s=T(),a=P("div"),i&&i.c(),this.h()},l(p){e=R(p,"DIV",{class:!0});var b=K(e);q(n.$$.fragment,b),s=z(b),a=R(b,"DIV",{class:!0});var g=K(a);i&&i.l(g),g.forEach($),b.forEach($),this.h()},h(){D(a,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(p,b){y(p,e,b),V(n,e,null),E(e,s),E(e,a),~l&&c[l].m(a,null),o=!0},p(p,b){const g={};!t&&b&2&&(t=!0,g.value=p[1],L(()=>t=!1)),n.$set(g);let d=l;l=m(p),l===d?~l&&c[l].p(p,b):(i&&(H(),k(c[d],1,1,()=>{c[d]=null}),X()),~l?(i=c[l],i?i.p(p,b):(i=c[l]=u[l](p),i.c()),v(i,1),i.m(a,null)):i=null)},i(p){o||(v(n.$$.fragment,p),v(i),o=!0)},o(p){k(n.$$.fragment,p),k(i),o=!1},d(p){p&&$(e),N(n),~l&&c[l].d()}}}function ft(r){let e,n,t;function s(l){r[8](l)}let a={parseBooleans:!0};return r[0].value.data.options!==void 0&&(a.value=r[0].value.data.options),e=new he({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data.options,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function pt(r){let e,n,t;function s(l){r[7](l)}let a={options:r[4]};return r[0].value.data!==void 0&&(a.value=r[0].value.data),e=new re({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function ct(r){let e,n,t=r[0]&&Ve(r);return{c(){t&&t.c(),e=M()},l(s){t&&t.l(s),e=M()},m(s,a){t&&t.m(s,a),y(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&v(t,1)):(t=Ve(s),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(H(),k(t,1,1,()=>{t=null}),X())},i(s){n||(v(t),n=!0)},o(s){k(t),n=!1},d(s){t&&t.d(s),s&&$(e)}}}function _t(r,e,n){let{prop:t}=e,{defaults:s={fixed:!1,choice:{options:[!1,!0]}}}=e,a;t&&(a=t.value.kind,a!=t.value.kind&&l(a));function l(m){n(0,t.value.kind=m,t),n(0,t.value.data=s[m],t)}function i(m){const p=m.detail;l(p)}const o=[{label:"fixed",value:ae.Fixed},{label:"choice",value:ae.Choice}],f=[{label:"true",value:!0},{label:"false",value:!1}];function _(m){a=m,n(1,a)}function u(m){r.$$.not_equal(t.value.data,m)&&(t.value.data=m,n(0,t))}function c(m){r.$$.not_equal(t.value.data.options,m)&&(t.value.data.options=m,n(0,t))}return r.$$set=m=>{"prop"in m&&n(0,t=m.prop),"defaults"in m&&n(5,s=m.defaults)},[t,a,i,o,f,s,_,u,c]}class dt extends Y{constructor(e){super(),Z(this,e,_t,ct,x,{prop:0,defaults:5})}}function Ne(r){let e,n,t,s,a,l,i,o;function f(p){r[5](p)}let _={options:r[3]};r[1]!==void 0&&(_.value=r[1]),n=new re({props:_}),A.push(()=>F(n,"value",f)),n.$on("changed",r[2]);const u=[ht,gt,mt],c=[];function m(p,b){return p[0].value.kind=="fixed"?0:p[0].value.kind=="range"?1:p[0].value.kind=="choice"?2:-1}return~(l=m(r))&&(i=c[l]=u[l](r)),{c(){e=P("div"),I(n.$$.fragment),s=T(),a=P("div"),i&&i.c(),this.h()},l(p){e=R(p,"DIV",{class:!0});var b=K(e);q(n.$$.fragment,b),s=z(b),a=R(b,"DIV",{class:!0});var g=K(a);i&&i.l(g),g.forEach($),b.forEach($),this.h()},h(){D(a,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(p,b){y(p,e,b),V(n,e,null),E(e,s),E(e,a),~l&&c[l].m(a,null),o=!0},p(p,b){const g={};!t&&b&2&&(t=!0,g.value=p[1],L(()=>t=!1)),n.$set(g);let d=l;l=m(p),l===d?~l&&c[l].p(p,b):(i&&(H(),k(c[d],1,1,()=>{c[d]=null}),X()),~l?(i=c[l],i?i.p(p,b):(i=c[l]=u[l](p),i.c()),v(i,1),i.m(a,null)):i=null)},i(p){o||(v(n.$$.fragment,p),v(i),o=!0)},o(p){k(n.$$.fragment,p),k(i),o=!1},d(p){p&&$(e),N(n),~l&&c[l].d()}}}function mt(r){let e,n,t;function s(l){r[9](l)}let a={parseNumbers:!0};return r[0].value.data.options!==void 0&&(a.value=r[0].value.data.options),e=new he({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data.options,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function gt(r){let e,n,t,s,a,l,i,o,f,_,u,c,m;function p(h){r[7](h)}let b={name:"min"};r[0].value.data.min!==void 0&&(b.value=r[0].value.data.min),t=new de({props:b}),A.push(()=>F(t,"value",p)),l=new J({props:{target:"min",$$slots:{default:[$t]},$$scope:{ctx:r}}});function g(h){r[8](h)}let d={name:"max"};return r[0].value.data.max!==void 0&&(d.value=r[0].value.data.max),f=new de({props:d}),A.push(()=>F(f,"value",g)),c=new J({props:{target:"max",$$slots:{default:[vt]},$$scope:{ctx:r}}}),{c(){e=P("div"),n=P("div"),I(t.$$.fragment),a=T(),I(l.$$.fragment),i=T(),o=P("div"),I(f.$$.fragment),u=T(),I(c.$$.fragment),this.h()},l(h){e=R(h,"DIV",{class:!0});var S=K(e);n=R(S,"DIV",{class:!0});var O=K(n);q(t.$$.fragment,O),a=z(O),q(l.$$.fragment,O),O.forEach($),i=z(S),o=R(S,"DIV",{class:!0});var Q=K(o);q(f.$$.fragment,Q),u=z(Q),q(c.$$.fragment,Q),Q.forEach($),S.forEach($),this.h()},h(){D(n,"class","flex flex-row flex-nowrap items-center space-x-2"),D(o,"class","flex flex-row flex-nowrap items-center space-x-2"),D(e,"class","space-y-2")},m(h,S){y(h,e,S),E(e,n),V(t,n,null),E(n,a),V(l,n,null),E(e,i),E(e,o),V(f,o,null),E(o,u),V(c,o,null),m=!0},p(h,S){const O={};!s&&S&1&&(s=!0,O.value=h[0].value.data.min,L(()=>s=!1)),t.$set(O);const Q={};S&2048&&(Q.$$scope={dirty:S,ctx:h}),l.$set(Q);const ee={};!_&&S&1&&(_=!0,ee.value=h[0].value.data.max,L(()=>_=!1)),f.$set(ee);const ie={};S&2048&&(ie.$$scope={dirty:S,ctx:h}),c.$set(ie)},i(h){m||(v(t.$$.fragment,h),v(l.$$.fragment,h),v(f.$$.fragment,h),v(c.$$.fragment,h),m=!0)},o(h){k(t.$$.fragment,h),k(l.$$.fragment,h),k(f.$$.fragment,h),k(c.$$.fragment,h),m=!1},d(h){h&&$(e),N(t),N(l),N(f),N(c)}}}function ht(r){let e,n,t;function s(l){r[6](l)}let a={};return r[0].value.data!==void 0&&(a.value=r[0].value.data),e=new de({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function $t(r){let e;return{c(){e=j("min")},l(n){e=U(n,"min")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function vt(r){let e;return{c(){e=j("max")},l(n){e=U(n,"max")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function bt(r){let e,n,t=r[0]&&Ne(r);return{c(){t&&t.c(),e=M()},l(s){t&&t.l(s),e=M()},m(s,a){t&&t.m(s,a),y(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&v(t,1)):(t=Ne(s),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(H(),k(t,1,1,()=>{t=null}),X())},i(s){n||(v(t),n=!0)},o(s){k(t),n=!1},d(s){t&&t.d(s),s&&$(e)}}}function kt(r,e,n){let{prop:t}=e,{defaults:s={fixed:1,choice:{options:[1,2]},range:{min:1,max:2}}}=e,a;t&&(a=t.value.kind,a!=t.value.kind&&l(a));function l(p){n(0,t.value.kind=p,t),n(0,t.value.data=s[p],t)}function i(p){const b=p.detail;l(b)}const o=[{label:"fixed",value:ae.Fixed},{label:"choice",value:ae.Choice},{label:"range",value:ae.Range}];function f(p){a=p,n(1,a)}function _(p){r.$$.not_equal(t.value.data,p)&&(t.value.data=p,n(0,t))}function u(p){r.$$.not_equal(t.value.data.min,p)&&(t.value.data.min=p,n(0,t))}function c(p){r.$$.not_equal(t.value.data.max,p)&&(t.value.data.max=p,n(0,t))}function m(p){r.$$.not_equal(t.value.data.options,p)&&(t.value.data.options=p,n(0,t))}return r.$$set=p=>{"prop"in p&&n(0,t=p.prop),"defaults"in p&&n(4,s=p.defaults)},[t,a,i,o,s,f,_,u,c,m]}class ue extends Y{constructor(e){super(),Z(this,e,kt,bt,x,{prop:0,defaults:4})}}function De(r){let e,n,t,s,a,l,i,o;function f(p){r[6](p)}let _={options:r[3]};r[1]!==void 0&&(_.value=r[1]),n=new re({props:_}),A.push(()=>F(n,"value",f)),n.$on("changed",r[2]);const u=[wt,yt],c=[];function m(p,b){return p[0].value.kind=="fixed"?0:p[0].value.kind=="choice"?1:-1}return~(l=m(r))&&(i=c[l]=u[l](r)),{c(){e=P("div"),I(n.$$.fragment),s=T(),a=P("div"),i&&i.c(),this.h()},l(p){e=R(p,"DIV",{class:!0});var b=K(e);q(n.$$.fragment,b),s=z(b),a=R(b,"DIV",{class:!0});var g=K(a);i&&i.l(g),g.forEach($),b.forEach($),this.h()},h(){D(a,"class","flex flex-row space-x-2"),D(e,"class","flex flex-row space-x-4")},m(p,b){y(p,e,b),V(n,e,null),E(e,s),E(e,a),~l&&c[l].m(a,null),o=!0},p(p,b){const g={};!t&&b&2&&(t=!0,g.value=p[1],L(()=>t=!1)),n.$set(g);let d=l;l=m(p),l===d?~l&&c[l].p(p,b):(i&&(H(),k(c[d],1,1,()=>{c[d]=null}),X()),~l?(i=c[l],i?i.p(p,b):(i=c[l]=u[l](p),i.c()),v(i,1),i.m(a,null)):i=null)},i(p){o||(v(n.$$.fragment,p),v(i),o=!0)},o(p){k(n.$$.fragment,p),k(i),o=!1},d(p){p&&$(e),N(n),~l&&c[l].d()}}}function yt(r){let e,n,t;function s(l){r[8](l)}let a={};return r[0].value.data.options!==void 0&&(a.value=r[0].value.data.options),e=new he({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data.options,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function wt(r){let e,n,t;function s(l){r[7](l)}let a={options:r[4]};return r[0].value.data!==void 0&&(a.value=r[0].value.data),e=new re({props:a}),A.push(()=>F(e,"value",s)),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,i){V(e,l,i),t=!0},p(l,i){const o={};!n&&i&1&&(n=!0,o.value=l[0].value.data,L(()=>n=!1)),e.$set(o)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){N(e,l)}}}function Et(r){let e,n,t=r[0]&&De(r);return{c(){t&&t.c(),e=M()},l(s){t&&t.l(s),e=M()},m(s,a){t&&t.m(s,a),y(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&v(t,1)):(t=De(s),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(H(),k(t,1,1,()=>{t=null}),X())},i(s){n||(v(t),n=!0)},o(s){k(t),n=!1},d(s){t&&t.d(s),s&&$(e)}}}function St(r,e,n){let{prop:t}=e,{defaults:s={fixed:"NE",choice:{options:["NE","NW"]}}}=e,a;t&&(a=t.value.kind,a!=t.value.kind&&l(a));function l(m){n(0,t.value.kind=m,t),n(0,t.value.data=s[m],t)}function i(m){const p=m.detail;l(p)}const o=[{label:"fixed",value:ae.Fixed},{label:"choice",value:ae.Choice}],f=[{label:"NW",value:"NW"},{label:"NE",value:"NE"},{label:"SW",value:"SW"},{label:"SE",value:"SE"}];function _(m){a=m,n(1,a)}function u(m){r.$$.not_equal(t.value.data,m)&&(t.value.data=m,n(0,t))}function c(m){r.$$.not_equal(t.value.data.options,m)&&(t.value.data.options=m,n(0,t))}return r.$$set=m=>{"prop"in m&&n(0,t=m.prop),"defaults"in m&&n(5,s=m.defaults)},[t,a,i,o,f,s,_,u,c]}class It extends Y{constructor(e){super(),Z(this,e,St,Et,x,{prop:0,defaults:5})}}function qt(r){let e;return{c(){e=j("Forma")},l(n){e=U(n,"Forma")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Pe(r){let e,n,t,s,a,l,i,o,f,_,u,c,m,p,b,g,d,h,S,O,Q;t=new J({props:{target:"scale_x",$$slots:{default:[Vt]},$$scope:{ctx:r}}});function ee(w){r[7](w)}let ie={};r[0].shape.props.scale_x!==void 0&&(ie.prop=r[0].shape.props.scale_x),a=new ue({props:ie}),A.push(()=>F(a,"prop",ee)),f=new J({props:{target:"scale_y",$$slots:{default:[Nt]},$$scope:{ctx:r}}});function We(w){r[8](w)}let $e={};r[0].shape.props.scale_y!==void 0&&($e.prop=r[0].shape.props.scale_y),u=new ue({props:$e}),A.push(()=>F(u,"prop",We)),b=new J({props:{target:"rotation",$$slots:{default:[Dt]},$$scope:{ctx:r}}});function Ce(w){r[9](w)}let ve={defaults:r[4]};r[0].shape.props.rotation!==void 0&&(ve.prop=r[0].shape.props.rotation),d=new ue({props:ve}),A.push(()=>F(d,"prop",Ce));let W=(r[0].shape.kind==G.Quarter||r[0].shape.kind==G.Ellipse)&&Re(r),C=r[0].shape.kind==G.Quarter&&Ke(r);return{c(){e=P("div"),n=P("div"),I(t.$$.fragment),s=T(),I(a.$$.fragment),i=T(),o=P("div"),I(f.$$.fragment),_=T(),I(u.$$.fragment),m=T(),p=P("div"),I(b.$$.fragment),g=T(),I(d.$$.fragment),S=T(),W&&W.c(),O=T(),C&&C.c(),this.h()},l(w){e=R(w,"DIV",{class:!0});var B=K(e);n=R(B,"DIV",{class:!0});var te=K(n);q(t.$$.fragment,te),s=z(te),q(a.$$.fragment,te),te.forEach($),i=z(B),o=R(B,"DIV",{class:!0});var ne=K(o);q(f.$$.fragment,ne),_=z(ne),q(u.$$.fragment,ne),ne.forEach($),m=z(B),p=R(B,"DIV",{class:!0});var le=K(p);q(b.$$.fragment,le),g=z(le),q(d.$$.fragment,le),le.forEach($),S=z(B),W&&W.l(B),O=z(B),C&&C.l(B),B.forEach($),this.h()},h(){D(n,"class","block"),D(o,"class","block"),D(p,"class","block"),D(e,"class","space-y-4 pl-8")},m(w,B){y(w,e,B),E(e,n),V(t,n,null),E(n,s),V(a,n,null),E(e,i),E(e,o),V(f,o,null),E(o,_),V(u,o,null),E(e,m),E(e,p),V(b,p,null),E(p,g),V(d,p,null),E(e,S),W&&W.m(e,null),E(e,O),C&&C.m(e,null),Q=!0},p(w,B){const te={};B&8192&&(te.$$scope={dirty:B,ctx:w}),t.$set(te);const ne={};!l&&B&1&&(l=!0,ne.prop=w[0].shape.props.scale_x,L(()=>l=!1)),a.$set(ne);const le={};B&8192&&(le.$$scope={dirty:B,ctx:w}),f.$set(le);const be={};!c&&B&1&&(c=!0,be.prop=w[0].shape.props.scale_y,L(()=>c=!1)),u.$set(be);const ke={};B&8192&&(ke.$$scope={dirty:B,ctx:w}),b.$set(ke);const ye={};!h&&B&1&&(h=!0,ye.prop=w[0].shape.props.rotation,L(()=>h=!1)),d.$set(ye),w[0].shape.kind==G.Quarter||w[0].shape.kind==G.Ellipse?W?(W.p(w,B),B&1&&v(W,1)):(W=Re(w),W.c(),v(W,1),W.m(e,O)):W&&(H(),k(W,1,1,()=>{W=null}),X()),w[0].shape.kind==G.Quarter?C?(C.p(w,B),B&1&&v(C,1)):(C=Ke(w),C.c(),v(C,1),C.m(e,null)):C&&(H(),k(C,1,1,()=>{C=null}),X())},i(w){Q||(v(t.$$.fragment,w),v(a.$$.fragment,w),v(f.$$.fragment,w),v(u.$$.fragment,w),v(b.$$.fragment,w),v(d.$$.fragment,w),v(W),v(C),Q=!0)},o(w){k(t.$$.fragment,w),k(a.$$.fragment,w),k(f.$$.fragment,w),k(u.$$.fragment,w),k(b.$$.fragment,w),k(d.$$.fragment,w),k(W),k(C),Q=!1},d(w){w&&$(e),N(t),N(a),N(f),N(u),N(b),N(d),W&&W.d(),C&&C.d()}}}function Vt(r){let e;return{c(){e=j("Scala orizzontale")},l(n){e=U(n,"Scala orizzontale")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Nt(r){let e;return{c(){e=j("Scala verticale")},l(n){e=U(n,"Scala verticale")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Dt(r){let e;return{c(){e=j("Rotazione")},l(n){e=U(n,"Rotazione")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Re(r){let e,n,t,s,a,l,i,o,f,_,u,c;n=new J({props:{target:"squaring",$$slots:{default:[Pt]},$$scope:{ctx:r}}});function m(d){r[10](d)}let p={defaults:r[5]};r[0].shape.props.squaring!==void 0&&(p.prop=r[0].shape.props.squaring),s=new ue({props:p}),A.push(()=>F(s,"prop",m)),o=new J({props:{target:"negative",$$slots:{default:[Rt]},$$scope:{ctx:r}}});function b(d){r[11](d)}let g={};return r[0].shape.props.negative!==void 0&&(g.prop=r[0].shape.props.negative),_=new dt({props:g}),A.push(()=>F(_,"prop",b)),{c(){e=P("div"),I(n.$$.fragment),t=T(),I(s.$$.fragment),l=T(),i=P("div"),I(o.$$.fragment),f=T(),I(_.$$.fragment),this.h()},l(d){e=R(d,"DIV",{class:!0});var h=K(e);q(n.$$.fragment,h),t=z(h),q(s.$$.fragment,h),h.forEach($),l=z(d),i=R(d,"DIV",{class:!0});var S=K(i);q(o.$$.fragment,S),f=z(S),q(_.$$.fragment,S),S.forEach($),this.h()},h(){D(e,"class","block"),D(i,"class","block")},m(d,h){y(d,e,h),V(n,e,null),E(e,t),V(s,e,null),y(d,l,h),y(d,i,h),V(o,i,null),E(i,f),V(_,i,null),c=!0},p(d,h){const S={};h&8192&&(S.$$scope={dirty:h,ctx:d}),n.$set(S);const O={};!a&&h&1&&(a=!0,O.prop=d[0].shape.props.squaring,L(()=>a=!1)),s.$set(O);const Q={};h&8192&&(Q.$$scope={dirty:h,ctx:d}),o.$set(Q);const ee={};!u&&h&1&&(u=!0,ee.prop=d[0].shape.props.negative,L(()=>u=!1)),_.$set(ee)},i(d){c||(v(n.$$.fragment,d),v(s.$$.fragment,d),v(o.$$.fragment,d),v(_.$$.fragment,d),c=!0)},o(d){k(n.$$.fragment,d),k(s.$$.fragment,d),k(o.$$.fragment,d),k(_.$$.fragment,d),c=!1},d(d){d&&$(e),N(n),N(s),d&&$(l),d&&$(i),N(o),N(_)}}}function Pt(r){let e;return{c(){e=j("Squadratura")},l(n){e=U(n,"Squadratura")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Rt(r){let e;return{c(){e=j("Negativo")},l(n){e=U(n,"Negativo")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Ke(r){let e,n,t,s,a,l;n=new J({props:{target:"orientamento",$$slots:{default:[Kt]},$$scope:{ctx:r}}});function i(f){r[12](f)}let o={};return r[0].shape.props.orientation!==void 0&&(o.prop=r[0].shape.props.orientation),s=new It({props:o}),A.push(()=>F(s,"prop",i)),{c(){e=P("div"),I(n.$$.fragment),t=T(),I(s.$$.fragment),this.h()},l(f){e=R(f,"DIV",{class:!0});var _=K(e);q(n.$$.fragment,_),t=z(_),q(s.$$.fragment,_),_.forEach($),this.h()},h(){D(e,"class","block")},m(f,_){y(f,e,_),V(n,e,null),E(e,t),V(s,e,null),l=!0},p(f,_){const u={};_&8192&&(u.$$scope={dirty:_,ctx:f}),n.$set(u);const c={};!a&&_&1&&(a=!0,c.prop=f[0].shape.props.orientation,L(()=>a=!1)),s.$set(c)},i(f){l||(v(n.$$.fragment,f),v(s.$$.fragment,f),l=!0)},o(f){k(n.$$.fragment,f),k(s.$$.fragment,f),l=!1},d(f){f&&$(e),N(n),N(s)}}}function Kt(r){let e;return{c(){e=j("Orientamento")},l(n){e=U(n,"Orientamento")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Ot(r){let e,n,t=r[0].symbol+"",s,a,l,i,o,f,_,u,c,m;o=new J({props:{target:"shape",$$slots:{default:[qt]},$$scope:{ctx:r}}});function p(d){r[6](d)}let b={options:r[3]};r[1]!==void 0&&(b.value=r[1]),_=new re({props:b}),A.push(()=>F(_,"value",p)),_.$on("changed",r[2]);let g=r[0].shape.kind!=G.Void&&Pe(r);return{c(){e=P("div"),n=P("div"),s=j(t),a=T(),l=P("div"),i=P("div"),I(o.$$.fragment),f=T(),I(_.$$.fragment),c=T(),g&&g.c(),this.h()},l(d){e=R(d,"DIV",{class:!0});var h=K(e);n=R(h,"DIV",{class:!0});var S=K(n);s=U(S,t),S.forEach($),a=z(h),l=R(h,"DIV",{class:!0});var O=K(l);i=R(O,"DIV",{class:!0});var Q=K(i);q(o.$$.fragment,Q),f=z(Q),q(_.$$.fragment,Q),Q.forEach($),c=z(O),g&&g.l(O),O.forEach($),h.forEach($),this.h()},h(){D(n,"class","text-xl p-4 bg-slate-800 text-white font-mono"),D(i,"class","space-y-1"),D(l,"class","space-y-8 px-0 pt-4"),D(e,"class","flex flex-col flex-nowrap")},m(d,h){y(d,e,h),E(e,n),E(n,s),E(e,a),E(e,l),E(l,i),V(o,i,null),E(i,f),V(_,i,null),E(l,c),g&&g.m(l,null),m=!0},p(d,[h]){(!m||h&1)&&t!==(t=d[0].symbol+"")&&me(s,t);const S={};h&8192&&(S.$$scope={dirty:h,ctx:d}),o.$set(S);const O={};!u&&h&2&&(u=!0,O.value=d[1],L(()=>u=!1)),_.$set(O),d[0].shape.kind!=G.Void?g?(g.p(d,h),h&1&&v(g,1)):(g=Pe(d),g.c(),v(g,1),g.m(l,null)):g&&(H(),k(g,1,1,()=>{g=null}),X())},i(d){m||(v(o.$$.fragment,d),v(_.$$.fragment,d),v(g),m=!0)},o(d){k(o.$$.fragment,d),k(_.$$.fragment,d),k(g),m=!1},d(d){d&&$(e),N(o),N(_),g&&g.d()}}}function Bt(r,e,n){let{rule:t}=e,s=t.shape.kind;s!=t.shape.kind&&a();function a(){const g={void:Ge,rectangle:Je,ellipse:Ye,quarter:Ze};n(0,t.shape.props=g[s],t),n(0,t.shape.kind=s,t)}const l=[{label:"rectangle",value:G.Rectangle},{label:"ellipse",value:G.Ellipse},{label:"quarter",value:G.Quarter},{label:"void",value:G.Void}],i={fixed:0,choice:{options:[0,45]},range:{min:0,max:90}},o={fixed:.56,choice:{options:[0,.56,1]},range:{min:0,max:1}};function f(g){s=g,n(1,s)}function _(g){r.$$.not_equal(t.shape.props.scale_x,g)&&(t.shape.props.scale_x=g,n(0,t))}function u(g){r.$$.not_equal(t.shape.props.scale_y,g)&&(t.shape.props.scale_y=g,n(0,t))}function c(g){r.$$.not_equal(t.shape.props.rotation,g)&&(t.shape.props.rotation=g,n(0,t))}function m(g){r.$$.not_equal(t.shape.props.squaring,g)&&(t.shape.props.squaring=g,n(0,t))}function p(g){r.$$.not_equal(t.shape.props.negative,g)&&(t.shape.props.negative=g,n(0,t))}function b(g){r.$$.not_equal(t.shape.props.orientation,g)&&(t.shape.props.orientation=g,n(0,t))}return r.$$set=g=>{"rule"in g&&n(0,t=g.rule)},[t,s,a,l,i,o,f,_,u,c,m,p,b]}class Tt extends Y{constructor(e){super(),Z(this,e,Bt,Ot,x,{rule:0})}}function Oe(r,e,n){const t=r.slice();return t[2]=e[n],t[3]=e,t[4]=n,t}function zt(r){let e,n;return{c(){e=P("p"),n=j("Inizia a disegnare un glifo per modificare la sintassi!"),this.h()},l(t){e=R(t,"P",{class:!0});var s=K(e);n=U(s,"Inizia a disegnare un glifo per modificare la sintassi!"),s.forEach($),this.h()},h(){D(e,"class","font-mono w-full border-2 border-slate-200 text-slate-300 p-12")},m(t,s){y(t,e,s),E(e,n)},p:se,i:se,o:se,d(t){t&&$(e)}}}function At(r){let e=[],n=new Map,t,s,a=r[0].rules;const l=i=>i[2].symbol;for(let i=0;i<a.length;i+=1){let o=Oe(r,a,i),f=l(o);n.set(f,e[i]=Be(f,o))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=M()},l(i){for(let o=0;o<e.length;o+=1)e[o].l(i);t=M()},m(i,o){for(let f=0;f<e.length;f+=1)e[f].m(i,o);y(i,t,o),s=!0},p(i,o){o&1&&(a=i[0].rules,H(),e=fe(e,o,l,1,i,a,n,t.parentNode,ge,Be,t,Oe),X())},i(i){if(!s){for(let o=0;o<a.length;o+=1)v(e[o]);s=!0}},o(i){for(let o=0;o<e.length;o+=1)k(e[o]);s=!1},d(i){for(let o=0;o<e.length;o+=1)e[o].d(i);i&&$(t)}}}function Be(r,e){let n,t,s,a;function l(o){e[1](o,e[2],e[3],e[4])}let i={};return e[2]!==void 0&&(i.rule=e[2]),t=new Tt({props:i}),A.push(()=>F(t,"rule",l)),{key:r,first:null,c(){n=M(),I(t.$$.fragment),this.h()},l(o){n=M(),q(t.$$.fragment,o),this.h()},h(){this.first=n},m(o,f){y(o,n,f),V(t,o,f),a=!0},p(o,f){e=o;const _={};!s&&f&1&&(s=!0,_.rule=e[2],L(()=>s=!1)),t.$set(_)},i(o){a||(v(t.$$.fragment,o),a=!0)},o(o){k(t.$$.fragment,o),a=!1},d(o){o&&$(n),N(t,o)}}}function Ft(r){let e,n,t,s,a,l,i;const o=[At,zt],f=[];function _(u,c){return u[0].rules.length?0:1}return a=_(r),l=f[a]=o[a](r),{c(){e=P("p"),n=j("Regole sintassi"),t=T(),s=P("div"),l.c(),this.h()},l(u){e=R(u,"P",{class:!0});var c=K(e);n=U(c,"Regole sintassi"),c.forEach($),t=z(u),s=R(u,"DIV",{class:!0});var m=K(s);l.l(m),m.forEach($),this.h()},h(){D(e,"class","text-small font-mono text-slate-900 mb-2 text-sm"),D(s,"class","block space-y-12")},m(u,c){y(u,e,c),E(e,n),y(u,t,c),y(u,s,c),f[a].m(s,null),i=!0},p(u,[c]){let m=a;a=_(u),a===m?f[a].p(u,c):(H(),k(f[m],1,1,()=>{f[m]=null}),X(),l=f[a],l?l.p(u,c):(l=f[a]=o[a](u),l.c()),v(l,1),l.m(s,null))},i(u){i||(v(l),i=!0)},o(u){k(l),i=!1},d(u){u&&$(e),u&&$(t),u&&$(s),f[a].d()}}}function Lt(r,e,n){let{syntax:t}=e;function s(a,l,i,o){i[o]=a,n(0,t)}return r.$$set=a=>{"syntax"in a&&n(0,t=a.syntax)},[t,s]}class Qt extends Y{constructor(e){super(),Z(this,e,Lt,Ft,x,{syntax:0})}}function Te(r,e,n){const t=r.slice();return t[8]=e[n],t[9]=e,t[10]=n,t}function ze(r,e,n){const t=r.slice();return t[8]=e[n],t}function Wt(r){let e;return{c(){e=j("+ Aggiungi stile")},l(n){e=U(n,"+ Aggiungi stile")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function Ct(r){let e,n;return e=new rt({props:{$$slots:{default:[Wt]},$$scope:{ctx:r}}}),e.$on("click",r[2]),{c(){I(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,s){const a={};s&8192&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Mt(r){let e;return{c(){e=j("Lista stili")},l(n){e=U(n,"Lista stili")},m(n,t){y(n,e,t)},d(n){n&&$(e)}}}function jt(r){let e=r[8].name+"",n,t;return{c(){n=j(e),t=T()},l(s){n=U(s,e),t=z(s)},m(s,a){y(s,n,a),y(s,t,a)},p(s,a){a&1&&e!==(e=s[8].name+"")&&me(n,e)},d(s){s&&$(n),s&&$(t)}}}function Ae(r,e){let n,t,s;return t=new at({props:{selection:ce,id:e[8].id,$$slots:{default:[jt]},$$scope:{ctx:e}}}),{key:r,first:null,c(){n=M(),I(t.$$.fragment),this.h()},l(a){n=M(),q(t.$$.fragment,a),this.h()},h(){this.first=n},m(a,l){y(a,n,l),V(t,a,l),s=!0},p(a,l){e=a;const i={};l&1&&(i.id=e[8].id),l&8193&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(a){s||(v(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){a&&$(n),N(t,a)}}}function Ut(r){let e=[],n=new Map,t,s,a=r[0];const l=i=>i[8].id;for(let i=0;i<a.length;i+=1){let o=ze(r,a,i),f=l(o);n.set(f,e[i]=Ae(f,o))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=M()},l(i){for(let o=0;o<e.length;o+=1)e[o].l(i);t=M()},m(i,o){for(let f=0;f<e.length;f+=1)e[f].m(i,o);y(i,t,o),s=!0},p(i,o){o&1&&(a=i[0],H(),e=fe(e,o,l,1,i,a,n,t.parentNode,ge,Ae,t,ze),X())},i(i){if(!s){for(let o=0;o<a.length;o+=1)v(e[o]);s=!0}},o(i){for(let o=0;o<e.length;o+=1)k(e[o]);s=!1},d(i){for(let o=0;o<e.length;o+=1)e[o].d(i);i&&$(t)}}}function Fe(r){let e,n,t,s,a,l,i,o,f,_,u,c;function m(d){r[3](d,r[8])}let p={name:"styleName"};r[8].name!==void 0&&(p.value=r[8].name),a=new Qe({props:p}),A.push(()=>F(a,"value",m));function b(d){r[4](d,r[8],r[9],r[10])}let g={};return r[8]!==void 0&&(g.syntax=r[8]),_=new Qt({props:g}),A.push(()=>F(_,"syntax",b)),{c(){e=P("div"),n=P("p"),t=j("Nome stile"),s=T(),I(a.$$.fragment),i=T(),o=P("hr"),f=T(),I(_.$$.fragment),this.h()},l(d){e=R(d,"DIV",{class:!0});var h=K(e);n=R(h,"P",{class:!0});var S=K(n);t=U(S,"Nome stile"),S.forEach($),s=z(h),q(a.$$.fragment,h),h.forEach($),i=z(d),o=R(d,"HR",{}),f=z(d),q(_.$$.fragment,d),this.h()},h(){D(n,"class","text-small font-mono text-slate-900 mb-2 text-sm"),D(e,"class","flex flex-col mb-8")},m(d,h){y(d,e,h),E(e,n),E(n,t),E(e,s),V(a,e,null),y(d,i,h),y(d,o,h),y(d,f,h),V(_,d,h),c=!0},p(d,h){r=d;const S={};!l&&h&1&&(l=!0,S.value=r[8].name,L(()=>l=!1)),a.$set(S);const O={};!u&&h&1&&(u=!0,O.syntax=r[8],L(()=>u=!1)),_.$set(O)},i(d){c||(v(a.$$.fragment,d),v(_.$$.fragment,d),c=!0)},o(d){k(a.$$.fragment,d),k(_.$$.fragment,d),c=!1},d(d){d&&$(e),N(a),d&&$(i),d&&$(o),d&&$(f),N(_,d)}}}function Le(r,e){let n,t,s,a=e[8].id==e[1]&&Fe(e);return{key:r,first:null,c(){n=M(),a&&a.c(),t=M(),this.h()},l(l){n=M(),a&&a.l(l),t=M(),this.h()},h(){this.first=n},m(l,i){y(l,n,i),a&&a.m(l,i),y(l,t,i),s=!0},p(l,i){e=l,e[8].id==e[1]?a?(a.p(e,i),i&3&&v(a,1)):(a=Fe(e),a.c(),v(a,1),a.m(t.parentNode,t)):a&&(H(),k(a,1,1,()=>{a=null}),X())},i(l){s||(v(a),s=!0)},o(l){k(a),s=!1},d(l){l&&$(n),a&&a.d(l),l&&$(t)}}}function Ht(r){let e,n,t,s,a=[],l=new Map,i;n=new lt({props:{$$slots:{items:[Ut],listTitle:[Mt],topArea:[Ct]},$$scope:{ctx:r}}});let o=r[0];const f=_=>_[8].id;for(let _=0;_<o.length;_+=1){let u=Te(r,o,_),c=f(u);l.set(c,a[_]=Le(c,u))}return{c(){e=P("div"),I(n.$$.fragment),t=T(),s=P("div");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=R(_,"DIV",{class:!0});var u=K(e);q(n.$$.fragment,u),t=z(u),s=R(u,"DIV",{class:!0});var c=K(s);for(let m=0;m<a.length;m+=1)a[m].l(c);c.forEach($),u.forEach($),this.h()},h(){D(s,"class","p-8 space-y-8 overflow-y-auto"),D(e,"class","h-full flex flex-row flex-nowrap items-stretch")},m(_,u){y(_,e,u),V(n,e,null),E(e,t),E(e,s);for(let c=0;c<a.length;c+=1)a[c].m(s,null);i=!0},p(_,[u]){const c={};u&8193&&(c.$$scope={dirty:u,ctx:_}),n.$set(c),u&3&&(o=_[0],H(),a=fe(a,u,f,1,_,o,l,s,ge,Le,null,Te),X())},i(_){if(!i){v(n.$$.fragment,_);for(let u=0;u<o.length;u+=1)v(a[u]);i=!0}},o(_){k(n.$$.fragment,_);for(let u=0;u<a.length;u+=1)k(a[u]);i=!1},d(_){_&&$(e),N(n);for(let u=0;u<a.length;u+=1)a[u].d()}}}function Xt(r,e){for(let n of r.rules)if(n.symbol==e)return n;throw new Error("missingSymbol")}function Gt(r,e,n){let t,s,a;pe(r,oe,u=>n(0,t=u)),pe(r,ce,u=>n(1,s=u)),pe(r,nt,u=>n(5,a=u));function l(){const u=[];for(const c of a){const m=c.structure.replace(/(\r\n|\n|\r)/gm,"");m&&u.push(...m.split(""))}return xe.uniq(u)}for(let u of t){const c=u.rules.map(m=>m.symbol);for(let m of l())c.includes(m)||u.rules.push(et(m));for(let m of c)if(!l().includes(m)){const p=Xt(u,m),b=u.rules.indexOf(p);u.rules.splice(b,1)}}function i(u=null){const c=tt(u||_e(5),_e(5),l());Se(oe,t=[...t,c],t),Se(ce,s=c.id,s)}function o(){i()}t.length||i("Regular");function f(u,c){r.$$.not_equal(c.name,u)&&(c.name=u,oe.set(t))}function _(u,c,m,p){m[p]=u,oe.set(t)}return[t,s,o,f,_]}class an extends Y{constructor(e){super(),Z(this,e,Gt,Ht,x,{})}}export{an as default};
