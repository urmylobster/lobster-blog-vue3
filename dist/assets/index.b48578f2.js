import{g as u,_ as x}from"./api.7f933a05.js";import{d as m,r as f,o as h,c as a,a as g,b as t,F as r,e as v,u as y,f as n,g as b,t as l,h as I,p as k,i as B,_ as C}from"./index.5988d936.js";import"./index.a10be5f0.js";const _=e=>(k("data-v-b13e1d68"),e=e(),B(),e),S={class:"max-w-2xl mx-auto mt-12"},w={class:"text-3xl font-medium text-left"},D=["onClick"],N=_(()=>t("br",null,null,-1)),V=_(()=>t("p",{class:"my-2 flex items-center"},[t("span",{class:"text-sm text-gray-400"},"2023-02-24")],-1)),F={class:"mt-2 text-sm text-gray-600 text-left"},L=m({__name:"index",setup(e){let c=f({list:[]});const d=I(),i=s=>{d.push({path:"/detail",query:{id:s}})};return h(async()=>{const s=await u();c.list=s}),(s,T)=>{const p=x;return n(),a(r,null,[g(p),t("div",S,[(n(!0),a(r,null,v(y(c).list,o=>(n(),a("article",{class:"mb-12 px-4",key:o.postId},[t("h2",w,[t("a",{class:"hover:underline hover:text-red-600 underline-offset-4 text-orange-600",onClick:$=>i(o.postId)},[b(l(o.postTitle),1),N],8,D),V]),t("p",F,l(o.postContent.slice(0,40)+"..."),1)]))),128))])],64)}}});const M=C(L,[["__scopeId","data-v-b13e1d68"]]);export{M as default};