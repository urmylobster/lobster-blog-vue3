import{d as m,u as _,r as h,i as f,c as a,b as t,m as y,a4 as g,f as i,P as v,F as u,e as k,g as r,h as w,t as l}from"./index.0e43bb31.js";import{s as C}from"./api.6432e32b.js";import"./index.ed2cba66.js";const D={class:"mx-auto mt-2 pt-4"},b={class:"max-w-2xl mx-auto mt-12 px-4"},B={class:"text-3xl font-medium text-left"},F=["onClick"],T=t("br",null,null,-1),P={class:"my-2 flex items-center"},V={class:"text-sm text-gray-400"},E={class:"mt-2 text-sm text-gray-600 text-left"},L=m({__name:"search",setup(I){const d=_();let n=h({list:[]}),s=f("");const p=async()=>{const o=await C({title:s.value});n.list=o},x=o=>{d.push({path:"/detail",query:{id:o}})};return(o,c)=>(r(),a(u,null,[t("div",D,[y(t("input",{class:"w-3/4 rounded-lg w-2xl border-2 mx-24 px-12 py-4 border-orange-400",type:"search",name:"keywords",id:"",placeholder:"\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u6587\u7AE0\u6807\u9898","onUpdate:modelValue":c[0]||(c[0]=e=>v(s)?s.value=e:s=e),onChange:p},null,544),[[g,i(s)]])]),t("div",b,[(r(!0),a(u,null,k(i(n).list,e=>(r(),a("article",{class:"mb-12 px-4",key:e.postId},[t("h2",B,[t("a",{class:"hover:underline hover:text-red-600 underline-offset-4 text-orange-600",onClick:N=>x(e.postId)},[w(l(e.postTitle),1),T],8,F),t("p",P,[t("span",V,l(e.postDate),1)])]),t("p",E,l(e.postContent.slice(0,40)+"..."),1)]))),128))])],64))}});export{L as default};