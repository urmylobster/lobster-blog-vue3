import{a as h,_ as f}from"./api.7f933a05.js";import{k as x,f as d,c as p,b as t,d as g,o as y,a as l,g as v,t as w,u as o,F as H,h as P,S as B}from"./index.5988d936.js";import"./index.a10be5f0.js";const M=()=>{const e=x({});return{post:e,getPostDetail:async a=>{const c=await h(a);e.value=c}}};function b(e,n){return d(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z","clip-rule":"evenodd"}),t("path",{d:"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"})])}const k={class:"max-w-2xl mx-auto mt-2"},D={class:"text-3xl font-medium text-left"},V={class:"text-orange-600 py-1 flex font-bold justify-center"},z=t("br",null,null,-1),A=t("p",{class:"my-2 flex items-center justify-center"},[t("span",{class:"text-sm text-gray-400"},"2023-02-24")],-1),C={class:"px-4 py-2 text-left mb-4"},I=["innerHTML"],E=g({__name:"detail",setup(e){const n=P(),a=B(),c=s=>{n.push({path:"/edit",query:{id:s}})},{post:r,getPostDetail:u}=M(),_=async()=>{const s=a.query.id;await u({id:s})};return y(()=>{_()}),(s,i)=>{const m=f;return d(),p(H,null,[l(m),t("div",k,[t("h2",D,[t("p",V,[v(w(o(r).postTitle),1),z,l(o(b),{class:"inline-block w-6 h-6 align-middle",onClick:i[0]||(i[0]=T=>c(o(r).postId))})]),A]),t("p",C,[t("div",{class:"whitespace-pre-wrap",innerHTML:o(r).postContent},null,8,I)])])],64)}}});export{E as default};
