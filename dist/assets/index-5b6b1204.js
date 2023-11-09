import{o as n,c as m,a as e,z as T,r,E as H,k as V,n as k,t as v,b as R,C as _,q as N,h as q,u as B,F as U,B as O,s as Y,ae as J,g as K,l as Q,R as W,i as M}from"./index-0d29c91c.js";/* empty css                                                               */import{u as X}from"./manageBooking-4336b2a2.js";import{u as Z}from"./bookingTransactionID-1d897d48.js";import{u as ee}from"./testData-146d1d9c.js";import{g as z}from"./manageBooking-5b991d8c.js";import"./AppLoader.vue_vue_type_style_index_0_lang-2e650906.js";import{_ as I}from"./AppLoader-c0c74b58.js";import"./axiosConfig-15342d77.js";const te={xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"16px",viewBox:"0 0 3 16"},oe=["fill"],ae={__name:"icn_kebab",props:{size:{type:[String,Number],default:"26px"},active:{type:Boolean,default:!1},color:{type:String,default:"#000000DE"}},setup(f){return(a,t)=>(n(),m("svg",te,[e("path",{fillRule:"evenodd",d:"M0 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z",fill:f.color},null,8,oe)]))}};const se=["onClick"],ne=["src"],le={class:"flex-1 py-4 pr-4 text-base flex justify-between md:px-5"},ie={class:"text-xl leading-6 font-medium"},re={class:"my-2"},ce={key:0,class:"text-danger mt-3 text-12-16"},de={key:0},ue={class:"dropdown-content menu p-2 bg-base-100 shadow-md rounded-md w-[149px] mt-[-5px] px-0 text-14-16 font-medium"},me=["onClick"],pe={__name:"Bookings",props:{bookings:{type:Array,default:[]}},setup(f){const a=f,t=Z(),b=T(),c=X(),x=r(H(()=>a.bookings)),p=l=>{t.selectedBookID&&t.selectedBookID!=l.confirmation_no&&(t.bookingTransactionID=""),t.selectedBookID=l.confirmation_no,c.bookingDetails={confirmation_no:l.confirmation_no},b.push({name:"BaseRoute::ViewBooking",params:{confirmationNo:l.confirmation_no}})};return(l,d)=>(n(!0),m(U,null,V(x.value,(o,g)=>(n(),m("div",{key:g,class:k(["card-bordered card-side bg-base-100 border border-[#E6E7E2] flex gap-8 rounded-lg cursor-pointer",{"mt-[18px]":g>0},"md:flex-col md:gap-0"]),onClick:w=>p(o)},[e("img",{class:"aspect-video object-cover h-40 md:rounded-tl-md md:rounded-tr-md md:h-auto",src:o.thumbnail},null,8,ne),e("div",le,[e("div",null,[e("div",ie,v(o.name),1),e("div",re,v(o.date),1),e("div",null,v(o.total),1),o.date_cancelled?(n(),m("div",ce,[R(" Cancelled "),o.no_show?(n(),m("span",de,"- No Show ")):_("",!0),R(" on "+v(o.date_cancelled),1)])):_("",!0)]),e("div",{class:"dropdown dropdown-bottom dropdown-end cursor-pointer",onClick:d[0]||(d[0]=N(()=>{},["stop"]))},[q(B(ae),{tabindex:"0",class:"md:w-6 md:h-6"}),e("ul",ue,[e("li",null,[e("span",{class:"px-4 active:bg-[#046a38]",onClick:N(w=>p(o),["stop"])},"View Booking",8,me)])])])])],10,se))),128))}},ve=e("div",{class:"pt-8 text-[34px] leading-9 font-bold md:pl-[14px] md:pt-[31px]"}," My Booking ",-1),ge={class:"tabs mt-[34px] ml-[-15px] md:cols md:col-span-3 md:mx-0 md:w-full md:flex md:flex-nowrap md:overflow-auto md:gap-4"},_e=["onClick"],fe={class:"text-xs text-[14px] text-[#000000DE] mt-5"},xe={key:1,class:"text-center text-sm"},Ee={__name:"index",setup(f){const a=r(1),t=r(!1),b=O(),c=r([]),x=[{tab:1,value:4},{tab:2,value:3},{tab:3,value:1},{tab:4,value:2}],p=r(1),l=r(!1),d=r(!1),o=r(0),g=async()=>{var u,s;t.value=!0;try{const i=await z({status:(u=x.find(h=>h.tab===a.value))==null?void 0:u.value,page:p.value});c.value=i.data.data,l.value=i.data.links.next,o.value=(s=i.data.meta)==null?void 0:s.total}catch{}t.value=!1},w=async()=>{var u;d.value=!0;try{const s=await z({status:(u=x.find(i=>i.tab===a.value))==null?void 0:u.value,page:p.value});c.value.push(...s.data.data),l.value=s.data.links.next}catch{}d.value=!1},A=T(),C=ee(),F=Y(),S=[{name:"Upcoming",value:1},{name:"Ongoing",value:2},{name:"Completed",value:3},{name:"Cancelled",value:4}],$=r(null),D=async u=>{let s=$.value;s&&s.getBoundingClientRect().bottom<window.innerHeight&&l.value&&!d.value&&(p.value+=1,await w())},j=J(),P=()=>{j.cancelPendingRequest()};return K(()=>a.value,u=>{p.value=1,P(),g()}),Q(async()=>{F.isGuest&&A.push({name:"BaseRoute::SearchBooking"}),await g(),C.isCanceled&&(a.value=4),C.isCanceled=!1,window.addEventListener("scroll",D),b.isFromMyBookings=!0}),W(()=>{window.removeEventListener("scroll",D)}),(u,s)=>{var i,h,E,L;return n(),m("div",{class:"px-36 pb-16 bg-white md:px-4",ref_key:"scrollComponent",ref:$},[ve,e("div",ge,[(n(),m(U,null,V(S,(y,G)=>e("a",{key:G,class:k(["tab","tab-bordered","text-[#707070]","font-semibold","border-white",{"tab-active text-primary":a.value==y.value},"md:text-[13px] md:px-0 md:flex-1"]),onClick:he=>a.value=y.value},v(y.name),11,_e)),64))]),e("div",fe,v(`Showing results ${(i=c.value)==null?void 0:i.length} of ${o.value}`),1),e("div",{class:k(["mt-4 relative ",{"pointer-events-none":t.value},{"md:h-screen":!((h=c.value)!=null&&h.length)}])},[t.value?(n(),M(B(I),{key:0})):_("",!0),q(pe,{bookings:c.value},null,8,["bookings"]),e("div",{class:k(["relative",{" my-10":!t.value&&d.value}])},[!t.value&&d.value?(n(),M(B(I),{key:0})):_("",!0)],2),(E=c.value)!=null&&E.length?_("",!0):(n(),m("div",xe,v(`You have no ${((L=S[a.value-1])==null?void 0:L.name).toLowerCase()} booking right now.`),1))],2)],512)}}};export{Ee as default};