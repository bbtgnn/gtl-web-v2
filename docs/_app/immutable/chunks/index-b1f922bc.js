import{w as r}from"./index-23ef72ca.js";import{W as f}from"./index-41208546.js";var i={};function c(e,d){const n=typeof localStorage!="undefined";function g(o,a){!n||localStorage.setItem(o,JSON.stringify(a))}if(!i[e]){const o=r(d,t=>{const s=n?localStorage.getItem(e):null;if(s&&t(JSON.parse(s)),n){const p=l=>{l.key===e&&t(l.newValue?JSON.parse(l.newValue):null)};return window.addEventListener("storage",p),()=>window.removeEventListener("storage",p)}}),{subscribe:a,set:u}=o;i[e]={set(t){g(e,t),u(t)},update(t){const s=t(f(o));g(e,s),u(s)},subscribe:a}}return i[e]}const S=c("syntaxes",[]),b=c("glyphs",[]),h=c("metrics",{baseline:1,height:5}),v=r(""),x=r(""),y=r("Hello World!");export{S as a,x as b,b as g,h as m,y as p,v as s};
