import{_ as P}from"./AppBreadcrumbs-734e5808.js";import"./AppLoader.vue_vue_type_style_index_0_lang-2e650906.js";/* empty css                                                               */import{r as v,l as D,m as I,o as a,c as n,a as e,t as s,n as g,b as S,F as A,k as T,h as p,j as E,u as i,z as B,s as N,E as Q,p as z,H as R,aa as b,C as F,L as u,I as J,J as q}from"./index-0d29c91c.js";import{_ as G}from"./ico-chevron-f2223c49.js";import{f as K,a as O}from"./loyalty-181b1cf0.js";import{v as W}from"./vouchers-0dc779af.js";import{_ as X}from"./ico-search-65e72bb8.js";import Y from"./AppModal-b27e53ae.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{I as ee,v as te}from"./voucherUnlocked-13825305.js";import"./axiosConfig-15342d77.js";const se={class:"card rounded-sm text-sm leading-6"},oe={class:"flex flex-col gap-[6px] items-center text-primary font-bold pb-5"},le={class:"text-[34px] leading-9 mt-5"},ae=e("div",{class:""},"Total Available Points",-1),ne=e("div",{class:"border-t border-[#86D295]"},null,-1),ie={class:"flex flex-col gap-2 text-primary p-5 sm:px-2"},ce={class:"font-bold"},re=["value"],de={class:"font-bold"},ue={class:""},_e=e("div",{class:"text-base tracking-[0.14px] font-bold"}," Transaction History ",-1),ve={class:"mt-[22px] flex flex-col gap-5"},pe={class:"flex flex-col w-2/3 xs:mr-1"},me={class:"font-bold truncate"},he={class:"mt-[15px] text-xs"},xe={key:0},fe={key:1},ye={key:1,class:"mt-16 mb-16 text-center text-[#000000DE]"},be={key:0},ge={key:1},ke=e("div",{class:"text-sm leading-6 font-bold tracking-[0.1px]"}," No transaction yet ",-1),Le=e("div",{class:"mt-1 text-xs tracking-[0.1px]"}," After your first transaction, you will be able to view it here. ",-1),we=[ke,Le],$e={class:"flex justify-center my-10"},Ve=e("span",null,"Points History",-1),Ce={__name:"Points",setup(k){const c=v({}),m=v(!1),h=v({}),L=async()=>{try{const d=await K();c.value=d.data}catch{}},C=()=>{const{accumulated_points:d,current_level_threshold:f,next_level_threshold:w}=c.value;return(d-f)/(w-f)*100},o=async()=>{m.value=!0;try{const d=await O({limit:4,offset:0});h.value=d.data}catch{}m.value=!1};return D(()=>{L(),o()}),(d,f)=>{const w=I("router-link");return a(),n("div",se,[e("div",oe,[e("div",le,s(parseInt(c.value.points)||"0"),1),ae]),ne,e("div",ie,[e("div",ce,s(c.value.level||"Level 0"),1),e("progress",{class:"progress progress-primary bg-[#86D295]",value:c.value.next_level?C():100,max:"100"},null,8,re),e("div",{class:g({invisible:!c.value.next_level})},[S(" Earn "),e("span",de,s(parseInt(c.value.next_level_threshold-c.value.accumulated_points)),1),S(" points to unlock "+s(c.value.next_level),1)],2),e("div",ue,[_e,e("div",ve,[h.value.length?(a(!0),n(A,{key:0},T(h.value,(r,$)=>(a(),n("div",{class:"flex justify-between text-[#000000DE] items-center",key:$},[e("div",pe,[e("div",me,s(r.message),1),e("div",he,[e("div",null,s(r.status.charAt(0).toUpperCase()+r.status.slice(1)),1),e("div",null,s(r.created_at),1)])]),e("div",{class:g(["font-bold",{"text-[#FF1F1F]":["redeemed"].includes(r.status)},{"text-primary":["granted"].includes(r.status)},{"text-[#A8A8A8]":["pending","void"].includes(r.status)}])},[["grant"].includes(r.transaction)?(a(),n("span",xe,"+")):(a(),n("span",fe,"-")),S(s(Math.floor(r.points))+" Points ",1)],2)]))),128)):(a(),n("div",ye,[m.value?(a(),n("span",be)):(a(),n("div",ge,we))]))]),e("div",$e,[p(w,{to:{name:"BaseRoute::LoyaltyPoints"},class:"bg-primary py-1 px-4 text-sm text-white flex gap-4 rounded-full items-center"},{default:E(()=>[Ve,p(i(G),{color:"#FFFFFF",class:"h-4"})]),_:1})])])])])}}};const x=k=>(J("data-v-946e4e46"),k=k(),q(),k),Se={class:"card rounded-sm px-5 py-6 h-[90%] sm:px-2"},Fe=x(()=>e("div",{class:"text-[20px] leading-6 font-medium"},"My Vouchers",-1)),De={class:"mt-1 relative search-wrapper"},Ae={class:"list-wrapper overflow-auto flex flex-col gap-[5px]"},Te=["onClick"],Ee={class:"flex flex-col"},Ue={class:"mt-[10px] flex justify-start"},Me={class:"mt-[10px] flex justify-between text-[12px] leading-4 text-[#707070]"},je={key:0,class:"font-bold mr-1",style:{color:"#046A38"}},He={key:1},Pe=["innerHTML"],Ie={key:1,class:"text-xs text-center"},Be={key:0},Ne={key:1},Qe=x(()=>e("div",{class:"font-bold"},"Voucher Details",-1)),ze={class:"overflow-auto"},Re={class:"font-bold"},Je={class:"mt-[10px] flex justify-start"},qe={class:"text-primary font-bold bg-[#1AB55C24] px-4 py-1 border-2 border-[#046A38] border-dashed"},Ge={key:0,class:"font-bold mr-1",style:{color:"#046A38"}},Ke={key:0},Oe=["innerHTML"],We=x(()=>e("div",{class:"text-sm leading-4 text-primary invisible"}," Use Now ",-1)),Xe=x(()=>e("div",{class:"font-bold mt-6"},"Voucher Name",-1)),Ye={class:"mt-1 text-base break-words text-justify mr-3"},Ze=x(()=>e("div",{class:"font-bold mt-6"},"Code",-1)),et={class:"mt-1 text-base break-words text-justify mr-3"},tt=x(()=>e("div",{class:"font-bold mt-6"},"Validity Date",-1)),st={class:"mt-1 text-base break-words text-justify mr-3"},ot=x(()=>e("div",{class:"font-bold mt-6"},"Stay Date",-1)),lt={class:"mt-1 text-base break-words text-justify mr-3"},at=x(()=>e("div",{class:"font-bold mt-6"},"Terms and Conditions",-1)),nt=["innerHTML"],it={class:"mt-8 flex justify-between sm:block"},ct={__name:"Vouchers",setup(k){const c=B();N();const m=v(!1),h=v(1),L=v(!1),C=v([]),o=v({}),d=v(""),f=async _=>{m.value=!0;const l=await W(_,h.value);if(l.status==200){let t=l.data.data;C.value.push(...t),l.data.links.next&&(h.value+=1,f(_))}else console.log(l);m.value=!1},w=Q(()=>C.value.filter(_=>_.code.toLowerCase().includes(d.value.toLowerCase())));D(()=>{f({search:""})});const r=v(!1),$=v(""),U=()=>{$.value="",r.value=!1},M=(_="")=>{$.value=_,r.value=!0,h.value=1,C.value=[],setTimeout(()=>{f({search:""})},250)},j=()=>{$.value=""},H=_=>{c.push({path:"/"})},y=({status:_,uses:l,user_limit:t,left:V})=>{if(_!=3||(V=V+"",t&&V&&V=="0"))return!0};return(_,l)=>(a(),n("div",Se,[Fe,p(i(ee),{class:"mt-4 px-[8px] sm:px-0",onSuccess:l[0]||(l[0]=t=>M(t)),onFail:l[1]||(l[1]=t=>j())}),e("div",De,[p(i(X),{class:"absolute left-[18px] top-[22px]"}),z(e("input",{class:"py-[10px] w-full px-[15px] pl-[50px] rounded-md border border-[#D2D2D2] focus-visible:outline-[#046A38]",type:"text",placeholder:"Search my voucher code",maxlength:50,"onUpdate:modelValue":l[2]||(l[2]=t=>d.value=t)},null,512),[[R,d.value]])]),e("div",Ae,[i(w).length?(a(!0),n(A,{key:0},T(i(w),(t,V)=>(a(),n("div",{key:V,class:g(["bg-[#fff] p-4  rounded-md cursor-pointer"]),style:b({backgroundColor:y(t)?"#ECECE9":""}),onClick:mt=>{(o.value=t)&&(L.value=!0)}},[e("div",Ee,[e("div",{style:b({opacity:y(t)?"0.6":""}),class:"font-bold"},s(t.name),5),e("div",Ue,[e("div",{style:b({opacity:y(t)?"0.6":"",wordBreak:"break-all"}),class:"text-primary font-bold bg-[#1AB55C24] px-4 py-1 border-2 border-[#046A38] border-dashed"},[e("span",null,s(t.code),1)],4)])]),e("div",Me,[e("div",{style:b({opacity:y(t)?"0.6":""})},[t.user_limit?(a(),n("span",je,s(t.left?t.left:"0")+"/"+s(t.user_limit?t.user_limit:"0"),1)):F("",!0),t.validity_end?(a(),n("span",He," Valid until "+s(i(u).fromSQL(t.validity_end).toLocaleString(i(u).DATE_FULL)),1)):(a(),n("div",{key:2,class:"c-html-data",innerHTML:t.description},null,8,Pe))],4)])],12,Te))),128)):(a(),n("div",Ie,[m.value?(a(),n("span",Be)):(a(),n("span",Ne,"Looks like no voucher is available right now."))]))]),p(i(Y),{show:L.value,"onUpdate:show":l[5]||(l[5]=t=>L.value=t),containerClass:"w-[536px] h-[560px] h-auto text-14-24 "},{default:E(()=>[Qe,e("div",ze,[e("div",{class:g(["mt-[10px] bg-[#F6F6F6] p-4 rounded-md cursor-pointer"]),style:b({backgroundColor:y(o.value)?"#ECECE9":""})},[e("div",{class:"flex flex-col",style:b({opacity:y(o.value)?"0.6":""})},[e("div",Re,s(o.value.name),1),e("div",Je,[e("div",qe,[e("span",null,s(o.value.code),1)])])],4),e("div",{class:"mt-[10px] flex text-[12px] leading-4 text-[#707070]",style:b({opacity:y(o.value)?"0.6":""})},[o.value.user_limit?(a(),n("span",Ge,s(o.value.left?o.value.left:"0")+"/"+s(o.value.user_limit?o.value.user_limit:"0"),1)):F("",!0),e("div",null,[o.value.validity_end?(a(),n("span",Ke," Valid until "+s(i(u).fromSQL(o.value.validity_end).toLocaleString(i(u).DATE_FULL)),1)):(a(),n("div",{key:1,class:"c-html-data",innerHTML:o.value.description},null,8,Oe))]),We],4)],4),Xe,e("div",Ye,s(o.value.name),1),Ze,e("div",et,s(o.value.code),1),tt,e("div",st,s(i(u).fromSQL(o.value.validity_start).toLocaleString(i(u).DATE_FULL))+" - "+s(i(u).fromSQL(o.value.validity_end).toLocaleString(i(u).DATE_FULL)),1),ot,e("div",lt,s(i(u).fromSQL(o.value.checkin_start).toLocaleString(i(u).DATE_FULL))+" - "+s(i(u).fromSQL(o.value.checkin_end).toLocaleString(i(u).DATE_FULL)),1),at,e("div",{class:"c-html-data mt-1 text-base break-words text-justify mr-3",innerHTML:o.value.description},null,8,nt)]),e("div",it,[e("button",{class:"btn btn-primary-outline py-1 px-8 sm:block sm:mb-4 sm:w-full",onClick:l[3]||(l[3]=t=>L.value=!1)}," Back "),e("button",{class:g([["btn btn-primary py-1 px-8"],"sm:block sm:w-full"]),onClick:l[4]||(l[4]=t=>_.$router.push({path:"/"}))}," Search Hotel ")])]),_:1},8,["show"]),p(i(te),{showUseNowBtn:!0,privateVoucher:$.value,isShow:r.value,onUsenow:l[6]||(l[6]=t=>H()),onClose:l[7]||(l[7]=t=>U())},null,8,["privateVoucher","isShow"])]))}},rt=Z(ct,[["__scopeId","data-v-946e4e46"]]);const dt={class:g(["bg-white px-36 pt-4 pb-[20vh]"])},ut=e("div",{class:"mt-[9px] text-[34px] leading-9 font-bold"},"My Loyalty",-1),_t={class:"flex mt-5 gap-4 h-auto"},vt={class:"w-[35%]"},pt={class:g(["flex-1 h-screen"])},St={__name:"index",setup(k){const c=[{active:!0,label:"My Loyalty"}];return(m,h)=>(a(),n("div",dt,[p(i(P),{class:"",items:c}),ut,e("div",_t,[e("div",vt,[p(Ce)]),e("div",pt,[p(rt)])])]))}};export{St as default};