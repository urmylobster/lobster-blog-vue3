import{E as V}from"./el-button.4b98fa21.js";import{E as g,a as y,b as x}from"./el-input.b3e29849.js";import{_ as B}from"./BlogHeader.vue_vue_type_script_setup_true_lang.63c50203.js";import{d as C,r as F,u as I,S as v,o as w,c as D,a as o,b as r,l as s,f as a,F as R,g as k,h as i,_ as A}from"./index.d1dd0b8d.js";import{a as N,d as P,E as T}from"./api.03dac548.js";import"./index.8cd7cd72.js";const U={class:"content py-2 mx-auto"},h={class:""},z=C({__name:"edit",setup(M){let t=F({id:"",title:"",name:"",content:""});const c=I(),p=v(),_=async()=>{let l={postId:t.id,postTitle:t.title,postAuthor:t.name,postContent:t.content};await P(l)&&(T({message:"\u4FEE\u6539\u6210\u529F",type:"success",customClass:"lobster-msg"}),c.replace("/blog"))},f=async()=>{const l=p.query.id,e=await N({id:l});t.id=e.postId,t.content=e.postContent,t.title=e.postTitle,t.name=e.postAuthor};return w(()=>{f()}),(l,e)=>{const b=B,d=g,u=y,m=V,E=x;return k(),D(R,null,[o(b),r("div",U,[r("div",h,[o(E,{model:a(t),size:"large","label-width":"20","label-position":"top"},{default:s(()=>[o(u,{label:"\u6807\u9898"},{default:s(()=>[o(d,{modelValue:a(t).title,"onUpdate:modelValue":e[0]||(e[0]=n=>a(t).title=n)},null,8,["modelValue"])]),_:1}),o(u,{label:"\u4F5C\u8005"},{default:s(()=>[o(d,{modelValue:a(t).name,"onUpdate:modelValue":e[1]||(e[1]=n=>a(t).name=n)},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5185\u5BB9"},{default:s(()=>[o(d,{type:"textarea",modelValue:a(t).content,"onUpdate:modelValue":e[2]||(e[2]=n=>a(t).content=n),autosize:{minRows:20,maxRows:50}},null,8,["modelValue"])]),_:1}),o(u,null,{default:s(()=>[o(m,{class:"action-button",type:"primary",onClick:_},{default:s(()=>[i("\u63D0\u4EA4")]),_:1}),o(m,{class:"action-button"},{default:s(()=>[i("\u53D6\u6D88")]),_:1})]),_:1})]),_:1},8,["model"])])])],64)}}});const J=A(z,[["__scopeId","data-v-a7a395cd"]]);export{J as default};