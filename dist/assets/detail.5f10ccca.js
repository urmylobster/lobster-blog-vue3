import{_ as x}from"./BlogHeader.vue_vue_type_script_setup_true_lang.8d0a3832.js";import{g as d,c as p,b as t,i as f,d as h,u as g,S as y,o as v,a as l,h as w,t as H,f as o,F as P}from"./index.a0fc1234.js";import{a as B}from"./api.77db785c.js";import"./index.3b8fb4db.js";function M(e,a){return d(),p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z","clip-rule":"evenodd"}),t("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"})])}const b=()=>{const e=f({});return{post:e,getPostDetail:async n=>{const c=await B(n);e.value=c}}},D={class:"max-w-2xl mx-auto mt-2 px-4"},V={class:"font-medium text-left px-4"},k={class:"text-3xl text-orange-600 py-1 flex font-bold justify-center px-4"},A=t("br",null,null,-1),C=t("p",{class:"my-2 flex items-center justify-center"},[t("span",{class:"text-sm text-gray-400"},"2023-02-24")],-1),I={class:"px-4 py-2 text-left mb-4"},T=["innerHTML"],F=h({__name:"detail",setup(e){const a=g(),n=y(),c=s=>{a.push({path:"/edit",query:{id:s}})},{post:i,getPostDetail:u}=b(),_=async()=>{const s=n.query.id;await u({id:s})};return v(()=>{_()}),(s,r)=>{const m=x;return d(),p(P,null,[l(m),t("div",D,[t("h2",V,[t("p",k,[w(H(o(i).postTitle),1),A,l(o(M),{class:"inline-block w-6 h-6 align-middle",onClick:r[0]||(r[0]=Z=>c(o(i).postId))})]),C]),t("p",I,[t("div",{class:"whitespace-pre-wrap",innerHTML:o(i).postContent},null,8,T)])])],64)}}});export{F as default};
