import{E as m}from"./el-button.19db9664.js";import{d as i,g as p,c as _,e as t,t as s,i as n,j as a,u as d,F as f,b as y,M as c,a0 as g,a1 as h}from"./index.6c7fcc0e.js";import"./index.22d42077.js";const k=c("Primary"),x=c("Success"),S=i({__name:"HelloWorld",props:{msg:null},setup(r){const e=g(h),u=p(()=>e.state.count),l=()=>{e.commit("increment")};return(B,b)=>{const o=m;return y(),_(f,null,[t("h1",null,s(r.msg),1),t("button",{onClick:l},"count ++"),n(o,{type:"primary"},{default:a(()=>[k]),_:1}),n(o,{type:"success"},{default:a(()=>[x]),_:1}),t("p",null,"count is "+s(d(u)),1)],64)}}});export{S as default};
