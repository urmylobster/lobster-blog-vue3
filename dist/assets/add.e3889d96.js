import{E as i}from"./el-button.64f07647.js";import{E as c,a as f,b as V}from"./el-input.a7e5f32e.js";import{d as E,r as b,q as x,l,o as B,f as t,Q as r,h as y}from"./index.95f7d324.js";import{a as C,E as F}from"./api.fc292dd8.js";import"./index.899eedb3.js";const D=r("\u63D0\u4EA4"),g=r("\u53D6\u6D88"),T=E({__name:"add",setup(k){const e=b({title:"",name:"",content:""}),d=y(),p=async()=>{let s={postTitle:e.title,postAuthor:e.name,postContent:e.content};await C(s)&&(F({message:"\u6DFB\u52A0\u6210\u529F",type:"success"}),d.replace("/blog"))};return(s,o)=>{const u=c,n=f,m=i,_=V;return B(),x(_,{model:e,"label-width":"120px"},{default:l(()=>[t(n,{label:"\u6807\u9898"},{default:l(()=>[t(u,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=a=>e.title=a)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u4F5C\u8005"},{default:l(()=>[t(u,{modelValue:e.name,"onUpdate:modelValue":o[1]||(o[1]=a=>e.name=a)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u5185\u5BB9"},{default:l(()=>[t(u,{modelValue:e.content,"onUpdate:modelValue":o[2]||(o[2]=a=>e.content=a),type:"textarea"},null,8,["modelValue"])]),_:1}),t(n,null,{default:l(()=>[t(m,{type:"primary",onClick:p},{default:l(()=>[D]),_:1}),t(m,null,{default:l(()=>[g]),_:1})]),_:1})]),_:1},8,["model"])}}});export{T as default};
