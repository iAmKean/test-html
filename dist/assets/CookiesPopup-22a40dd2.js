import{e as i,r,l as c,m as d,p as u,v as p,o as f,c as m,a as t,b as a,h as v,j as x,u as _,q as h}from"./index-0d29c91c.js";const b={class:"fixed bottom-0 w-full flex items-end justify-center z-50"},w={class:"flex justify-center items-center gap-7 relative md:flex-col md:gap-3"},y=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12"},[t("path",{id:"icn-exit",d:"M4.293,4.293a1,1,0,0,1,1.414,0L10,8.586l4.293-4.293a1,1,0,1,1,1.414,1.414L11.414,10l4.293,4.293a1,1,0,1,1-1.414,1.414L10,11.414,5.707,15.707a1,1,0,1,1-1.414-1.414L8.586,10,4.293,5.707a1,1,0,0,1,0-1.414Z",transform:"translate(-4 -4)",fill:"#707070","fill-rule":"evenodd"})],-1),g=[y],k={class:"text-base text-center md:text-sm md:px-10"},B=t("span",null," Accept ",-1),C=[B],j={__name:"CookiesPopup",setup(L){const s=i(),o=r(!1);return c(()=>{s.cookiesState||(o.value=!0)}),(S,e)=>{const l=d("routerLink");return u((f(),m("div",b,[t("div",{ref:"modalElement",class:"bg-white shadow-lg py-4 flex flex-col w-full border-2",onClick:e[2]||(e[2]=h(()=>{},["stop"]))},[t("div",w,[t("button",{type:"button",onClick:e[0]||(e[0]=n=>o.value=!1),class:"absolute top-1 right-4 text-gray-400 hover:text-gray-500"},g),t("div",k,[t("div",null,[a(" By continuing to use the website, you will be agreeing to our "),v(l,{to:{name:"BaseRoute::PrivacyPolicy"},class:"text-primary font-bold"},{default:x(()=>[a("Privacy Policy ")]),_:1})])]),t("button",{type:"button",class:"btn btn-sm btn-primary py-2 px-20 h-10 rounded-full text-sm font-bold md:px-10",onClick:e[1]||(e[1]=n=>{_(s).cookiesState="accepted",o.value=!1})},C)])],512)],512)),[[p,o.value]])}}};export{j as default};
