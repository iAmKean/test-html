import{f as i,_,r,o as e,c as s,a as t,F as u,k as d,n as l,h as m,u as p}from"./index-0d29c91c.js";const f="/assets/slide1-8c6fec29.png",h="/assets/slide2-e7f5111a.png",g="/assets/slide3-b5a7f428.png";const v={class:l(["flex"])},b={class:"flex-1 md:hidden"},k={class:"carousel w-full h-full"},w={class:"carousel-inner carousel-item w-full"},y={key:0,src:f,class:"w-full item active"},x={key:1,src:h,class:"w-full item"},C={key:2,src:g,class:"w-full item"},P={class:"flex justify-center w-full py-2 gap-2 mt-[-25px]"},A=["onClick"],N={__name:"Popup",setup(B){const c=i(()=>_(()=>import("./Auth-b9b8b410.js"),["assets/Auth-b9b8b410.js","assets/index-0d29c91c.js","assets/index-4a00ec69.css","assets/ico-eye-db670207.js","assets/bookingTransactionID-1d897d48.js","assets/Auth-0b7fac00.css","assets/ico-chevron-b681e2fe.css"])),n=[1,2,3],o=r(1);return(E,L)=>(e(),s("div",v,[t("div",b,[t("div",k,[t("div",w,[o.value===1?(e(),s("img",y)):o.value===2?(e(),s("img",x)):(e(),s("img",C))])]),t("div",P,[(e(),s(u,null,d(n,(V,a)=>t("button",{key:a,type:"button",class:l(["btn","btn-circle","min-h-0","h-3","w-3","shadow-2xl","border-none",o.value===a+1?"bg-black hover:bg-black":"bg-white hover:bg-white"]),onClick:F=>o.value=a+1},null,10,A)),64))])]),m(p(c))]))}};export{N as default};