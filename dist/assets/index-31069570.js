import{d as f,e as v,f as g,_ as h,r as w,w as b,g as _,o as x,c as B,a as s,h as d,u,n as L}from"./index-0d29c91c.js";import{_ as k}from"./IconTraveller-2cd735d3.js";const y={class:"fixed right-[-23px] top-[263px] -rotate-90 md:top-[115px] z-10"},E=s("div",{class:"bg-[url('@/assets/icons/img-flourish.png')] bg-cover bg-no-repeat bg-top absolute h-full sm:h-28 top-0 left-0 w-16 md:hidden"},null,-1),H={class:"h-fit"},S={class:"absolute bottom-16 right-16 md:hidden"},R={__name:"index",setup(T){const c=f(),r=v(),m=g(()=>h(()=>import("./BookNowSlide-0121c255.js"),["assets/BookNowSlide-0121c255.js","assets/index-0d29c91c.js","assets/index-4a00ec69.css","assets/BookingComponent-7c030388.js","assets/ico-location-38e782ff.js","assets/booking-84804f94.js","assets/axiosConfig-15342d77.js","assets/ico-search-65e72bb8.js","assets/index.css_vue_type_style_index_0_src_true_lang-6697b8bd.js","assets/dateHelper-f75861f0.js","assets/AppLoader.vue_vue_type_style_index_0_lang-2e650906.js","assets/AppLoader-9e61aa51.css","assets/AppLoader-c0c74b58.js","assets/ico-chevron-b681e2fe.css","assets/main-044273c3.js","assets/main-9595434e.css","assets/index-95466f8a.css","assets/bookingTransactionID-1d897d48.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BookingComponent-831d1248.css","assets/BookNowSlide-4d88c385.css"])),n=w(!1),i=document.getElementById("app"),l=()=>{n.value=!n.value,window.scrollTo(0,0);const o=document.getElementById("slide-over-container");o&&(o.classList.toggle("invisible"),o.classList.toggle("translate-x-full"))};b(()=>{r.isBookRoomTriggered&&(l(),r.isBookRoomTriggered=!1),n.value?i.classList.add("overflow-hidden"):i.classList.remove("overflow-hidden")}),_(()=>c.name,o=>{const e=document.getElementById("slide-over-container");e&&(e.classList.remove("invisible"),e.classList.remove("translate-x-full"),e.classList.add("invisible"),e.classList.add("translate-x-full"),i.classList.remove("overflow-hidden"))});const a=o=>{window.innerHeight<=550||o.preventDefault()},p=()=>window.innerHeight<=550;return(o,e)=>(x(),B("div",null,[s("div",y,[s("button",{type:"button",class:"btn btn-primary rounded-none rounded-tr-md rounded-tl-md px-3 py-3 font-medium",onClick:e[0]||(e[0]=t=>l())}," Book Now ")]),s("div",{id:"slide-over-container",class:L(["absolute inset-0 invisible right-0 w-full h-full bg-white transition-all translate-x-full duration-500 ease-out z-50",[{"h-[900px]":p()}]]),onWheel:e[2]||(e[2]=t=>a(t)),onScroll:e[3]||(e[3]=t=>a(t)),onTouchmove:e[4]||(e[4]=t=>a(t))},[E,s("div",H,[d(u(m),{"onUpdate:show":e[1]||(e[1]=t=>l())}),s("div",S,[d(u(k),{class:"w-[200px] h-[131.77px]"})])])],34)]))}};export{R as default};