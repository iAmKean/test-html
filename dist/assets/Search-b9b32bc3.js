import{B as E,s as I,r as u,g as M,c as N,a as e,p as w,H as B,n as _,t as k,h as d,j as b,u as p,z as j,m as A,o as G,b as a,I as U,J as T,av as z}from"./index-0d29c91c.js";import{g as K}from"./manageBookingGuest-a3976bc7.js";import F from"./AppModal-b27e53ae.js";import"./AppLoader.vue_vue_type_style_index_0_lang-2e650906.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                               */import{_ as S}from"./icn-intruction-cc70d524.js";import{u as O}from"./manageBooking-4336b2a2.js";import"./axiosConfig-15342d77.js";const n=m=>(U("data-v-bde57597"),m=m(),T(),m),P={class:_(["py-[121px] w-[309px] mx-auto h-auto md:w-full md:px-[33px] md:bg-[#F6F6F6] md:py-[163px] md:h-screen","min-h-[600px]"])},H=n(()=>e("div",{class:"text-xl leading-6 font-medium"},"View Booking",-1)),J=n(()=>e("div",{class:"mt-1 text-14-20"}," Type in your details to view your booking. ",-1)),Y={class:"mt-4 flex-1 flex flex-col"},q={class:"flex flex-col"},Q=n(()=>e("label",{for:"email"},[a("Confirmation Number "),e("span",{class:"text-danger"},"*")],-1)),W={class:"text-sm text-red-600"},X={class:"mt-4 flex flex-col"},Z=n(()=>e("label",{for:"email"},[a("Email Address"),e("span",{class:"text-danger"},"*")],-1)),ee={class:"text-sm text-red-600"},oe=["disabled"],te=n(()=>e("div",{class:"divider my-4"},"OR",-1)),se={class:"flex justify-center"},ae=n(()=>e("div",{class:"text-14-20 mt-3 text-center"},[e("span",{class:"font-bold"},"View Booking"),e("br"),e("div",{class:"mt-5"},[a(" Your confirmation number or email "),e("br"),a(" address is incorrect. "),e("br"),a(" Please try again. ")])],-1)),ne={class:"flex justify-center"},le={class:"text-14-20 mt-3 text-center"},ie=n(()=>e("span",{class:"font-bold"},"View Booking",-1)),re=n(()=>e("br",null,null,-1)),ue={class:"mt-5"},de=n(()=>e("br",null,null,-1)),me=n(()=>e("br",null,null,-1)),ce={__name:"Search",setup(m){const V=E(),C=I();O();const v=u(!1),f=u(!1),x=j(),l=u({confirmation_no:"",email:""}),r=u(!1),i=u({confirmation_no:null,email:null}),g=()=>{i.value={confirmation_no:null,email:null}},D=t=>{for(const o in t)i.value[o]=t[o][0]},h=()=>z({confirmation_no:l.value.confirmation_no,email:l.value.email}),y=t=>{const o=h();o[t]?i.value[t]=o[t][0]:i.value[t]=null},R=()=>{var o;var t=h();(o=Object.keys(t))!=null&&o.length?(g(),D(t)):(g(),$())},$=async()=>{var t,o;r.value=!0;try{const c=await K(l.value);r.value=!1,V.guestEmail=(t=l.value)==null?void 0:t.email,x.push({name:"BaseRoute::ViewBooking",params:{confirmationNo:l.value.confirmation_no}})}catch(c){((o=c.response)==null?void 0:o.status)===404?v.value=!0:f.value=!0}r.value=!1};return M(()=>C.isGuest,t=>{x.push({name:"BaseRoute::ManageBooking"})}),(t,o)=>{const c=A("router-link");return G(),N("div",null,[e("div",P,[H,J,e("div",Y,[e("div",q,[Q,w(e("input",{type:"text",name:"email",placeholder:"B77-218689899",class:_(["mt-1 border border-[#D2D2D2] focus-visible:outline-[#046A38] py-[10px] px-[15px] rounded-md text-base md:bg-[#F6F6F6]",{"border-red-500":i.value.confirmation_no}]),"onUpdate:modelValue":o[0]||(o[0]=s=>l.value.confirmation_no=s),onKeyup:o[1]||(o[1]=s=>y("confirmation_no"))},null,34),[[B,l.value.confirmation_no]]),e("p",W,k(i.value.confirmation_no),1)]),e("div",X,[Z,w(e("input",{type:"email",name:"email",placeholder:"firstname@gmail.com",class:_(["mt-1 border border-[#D2D2D2] focus-visible:outline-[#046A38] py-[10px] px-[15px] rounded-md text-base md:bg-[#F6F6F6]",{"border-red-500":i.value.email}]),"onUpdate:modelValue":o[2]||(o[2]=s=>l.value.email=s),onKeyup:o[3]||(o[3]=s=>y("email"))},null,34),[[B,l.value.email]]),e("p",ee,k(i.value.email),1)]),e("button",{type:"button",class:_(["mt-4 btn btn-primary w-full",{"btn-primary-disable loading":r.value}]),onClick:R,disabled:r.value}," View Booking ",10,oe),te,e("button",{type:"button",class:"btn btn-primary-outline w-full md:bg-[#F6F6F6]",onClick:o[4]||(o[4]=s=>t.$router.push({name:"BaseRoute::login"}))}," Login to manage all my bookings ")])]),d(p(F),{show:v.value,"onUpdate:show":o[5]||(o[5]=s=>v.value=s),containerClass:"w-[300px] h-auto"},{default:b(()=>[e("div",se,[d(p(S))]),ae]),_:1},8,["show"]),d(p(F),{show:f.value,"onUpdate:show":o[6]||(o[6]=s=>f.value=s),containerClass:"w-[300px] h-auto"},{default:b(()=>[e("div",ne,[d(p(S))]),e("div",le,[ie,re,e("div",ue,[a(" Please "),d(c,{class:"text-primary",to:{name:"BaseRoute::login"}},{default:b(()=>[a(" log in ")]),_:1}),a(" with your "),de,a(" registered email to view your "),me,a(" booking. ")])])]),_:1},8,["show"])])}}},we=L(ce,[["__scopeId","data-v-bde57597"]]);export{we as default};
