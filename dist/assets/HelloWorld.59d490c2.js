import{E as m}from"./el-button.64f07647.js";import{d as i,j as p,c as _,a as t,t as s,f as n,l as a,u as d,F as f,o as y,Q as c,a3 as h,a4 as g}from"./index.95f7d324.js";import"./index.899eedb3.js";const k=c("Primary"),x=c("Success"),V=i({__name:"HelloWorld",props:{msg:null},setup(r){const e=h(g),u=p(()=>e.state.count),l=()=>{e.commit("increment")};return(B,C)=>{const o=m;return y(),_(f,null,[t("h1",null,s(r.msg),1),t("button",{onClick:l},"count ++"),n(o,{type:"primary"},{default:a(()=>[k]),_:1}),n(o,{type:"success"},{default:a(()=>[x]),_:1}),t("p",null,"count is "+s(d(u)),1)],64)}}});export{V as default};
