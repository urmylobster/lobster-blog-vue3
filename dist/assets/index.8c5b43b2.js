import{_ as d}from"./BlogHeader.vue_vue_type_script_setup_true_lang.63c50203.js";import{d as p,r as u,u as m,o as x,c as o,a as f,b as t,F as c,e as h,f as g,g as a,h as y,t as n}from"./index.d1dd0b8d.js";import{g as k}from"./api.03dac548.js";import"./index.8cd7cd72.js";const v={class:"max-w-2xl mx-auto mt-12 px-4"},B={class:"text-3xl font-medium text-left"},C=["onClick"],D=t("br",null,null,-1),b={class:"my-2 flex items-center"},N={class:"text-sm text-gray-400"},V={class:"mt-2 text-sm text-gray-600 text-left"},E=p({__name:"index",setup(w){let r=u({list:[]});const l=m(),i=s=>{l.push({path:"/detail",query:{id:s}})};return x(async()=>{const s=await k();r.list=s}),(s,F)=>{const _=d;return a(),o(c,null,[f(_),t("div",v,[(a(!0),o(c,null,h(g(r).list,e=>(a(),o("article",{class:"mb-12 px-4",key:e.postId},[t("h2",B,[t("a",{class:"hover:underline hover:text-red-600 underline-offset-4 text-orange-600",onClick:I=>i(e.postId)},[y(n(e.postTitle),1),D],8,C),t("p",b,[t("span",N,n(e.postDate),1)])]),t("p",V,n(e.postContent.slice(0,40)+"..."),1)]))),128))])],64)}}});export{E as default};