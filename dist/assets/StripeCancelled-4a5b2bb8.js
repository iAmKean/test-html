import{_ as n}from"./logo-Hotel101-c40e9d3c.js";import{c as a,a as e,o as r}from"./index-0d29c91c.js";const i={class:"flex-1 pt-[186.94px] flex flex-col"},l={class:"flex justify-center"},c={class:"w-[318px] flex flex-col justify-center mx-auto text-center"},m=e("div",{class:"mt-8 font-medium text-xl leading-6"}," Cancelled ",-1),p=e("div",{class:"mt-10 text-16-24"}," Your payment transaction was cancelled. ",-1),x={__name:"StripeCancelled",setup(u){return(o,t)=>(r(),a("div",i,[e("div",l,[e("img",{class:"cursor-pointer h-[60px]",src:n,alt:"hotel101-logo",onClick:t[0]||(t[0]=s=>o.$router.push({name:"BaseRoute::home"}))})]),e("div",c,[m,p,e("button",{class:"mt-8 normal-case btn btn-primary p-3 text-14-16 font-medium",onClick:t[1]||(t[1]=s=>o.$router.push({name:"BaseRoute::ViewBooking",params:{confirmationNo:o.$route.params.confirmationNo}}))}," View Booking ")])]))}};export{x as default};