import{B as L,r as u,l as z,x as F,g as Z,o as l,c as n,a as e,h as I,u as R,p as J,H as j,F as E,k as B,t as b,C as y,q as Q,n as C,I as W,J as K,z as G,i as ee,b as N,y as te,K as oe}from"./index-0d29c91c.js";import{f as H,a as se}from"./booking-84804f94.js";import{_ as ae}from"./AppBreadcrumbs-734e5808.js";import"./AppLoader.vue_vue_type_style_index_0_lang-2e650906.js";/* empty css                                                               */import{_ as le,a as ne,b as X}from"./ico-location-38e782ff.js";import{f as Y,a as M}from"./dateHelper-f75861f0.js";import{_ as re}from"./ico-search-65e72bb8.js";import{_ as ie,a as ce,b as de}from"./index.css_vue_type_style_index_0_src_true_lang-6697b8bd.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";import{f as T}from"./numberHelper-25d49756.js";import{u as me}from"./bookingTransactionID-1d897d48.js";import{_ as ve}from"./AppLoader-c0c74b58.js";import"./axiosConfig-15342d77.js";import"./main-044273c3.js";const k=_=>(W("data-v-18f23be4"),_=_(),K(),_),pe={class:"shadow-lg h-[367px] rounded-2xl p-4 booking bg-white"},_e={class:"mt-4"},fe=k(()=>e("label",{for:"property",class:"booking-label mb-1"},"Destination or property",-1)),xe={key:0,class:"absolute left-0 mt-5 w-[379px] h-[279px] shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-5 overflow-y-auto z-10 md:w-fit"},ge=k(()=>e("div",{class:"text-base text-[24px]"},"Where to?",-1)),he=k(()=>e("div",{class:"my-[10px]"},"Select Property",-1)),be=["onClick"],ye=k(()=>e("img",{class:"h-[16.9px]",src:X,alt:"icon-location"},null,-1)),ke={class:"text-[14px] leading-5 flex flex-col"},we={key:0,class:"text-[12px] leading-4"},De=k(()=>e("img",{class:"h-[16.9px]",src:X,alt:"icon-location"},null,-1)),Ae={class:"text-[14px] leading-5 flex flex-col"},Se=k(()=>e("span",{class:"text-[12px] leading-4"},"Coming Soon",-1)),Ie={key:0,class:"text-center mt-3"},Re=k(()=>e("li",{class:"text-[14px] leading-5"}," No available properties ",-1)),$e=[Re],Ce={class:"mt-4"},Pe=k(()=>e("label",{for:"calendar",class:"booking-label"},"Dates of stay",-1)),Ee=["value"],Be={key:0,class:"_calendar xs:p-4 xs:w-[100%] xs:m-auto xs:overflow-hidden xs:max-w-[unset] absolute mt-5 w-[550px] h-auto shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-6 overflow-y-auto z-10 md:w-fit"},Oe=k(()=>e("div",{class:"text-base text-[24px] xs:text-[18px]"},"When's your trip?",-1)),Ne={class:"mt-[32px]"},Te={class:"mt-4"},Le=k(()=>e("label",{for:"room-count",class:"booking-label"},"Number of rooms",-1)),Ue=["value"],Ve={key:0,class:"absolute left-0 mt-5 w-[322px] h-auto shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-5 z-10 md:w-fit"},Ye=k(()=>e("div",{class:"text-base text-[24px]"}," How many do you need? ",-1)),Me=k(()=>e("div",{class:"my-[10px]"},"Number of Rooms",-1)),ze={class:"flex items-center"},Fe={class:"mx-3 text-base"},Ze={class:"mt-4"},Ge=["disabled"],He={__name:"BookingInput",emits:["fetch:room"],setup(_,{emit:$}){const a=L(),w=u(!1),i=u(!1),D=u(!1),d=u(1),s=u(),A=u(""),r=u(""),x=u(0),t=u(null),o=u({search:"",status:["active","comingsoon"],limit:50}),g=u({search:"",property:null}),f=u({search:"",number_of_rooms:1,check_in:"",check_out:""}),h=u(null),v=u(null),c=u(null),P=u([]),O=S=>{h.value&&!h.value.contains(S.target)&&(w.value=!1),v.value&&!v.value.contains(S.target)&&(i.value=!1),c.value&&!c.value.contains(S.target)&&(D.value=!1)},U=async()=>{try{const S=await H(o.value);P.value=S.data}catch{}},V=async()=>{f.value={search:r.value,number_of_rooms:d.value,check_in:M(new Date(s.value[0])),check_out:M(new Date(s.value[1])),displayDate:A.value,stay:a.booking.stay,property:g.value.property,bookDate:s.value},a.setBooking({...a.booking,area:r.value,startDate:s.value[0],endDate:s.value[1],bookDate:s.value,roomCount:d.value,propertyId:g.value.property}),a.booking.propertyId||localStorage.getItem("_PROPERTY_ID")&&(a.booking.propertyId=localStorage.getItem("_PROPERTY_ID")),$("fetch:room",f.value)};return z(async()=>{a.selectedRoom.available_room=10,document.addEventListener("click",O),r.value=a.booking.area,d.value=a.booking.roomCount,s.value=a.booking.bookDate,g.value.property=a.booking.propertyId,U(),A.value=`${Y(s.value[0])} - ${Y(s.value[1])}`,i.value=!1,V()}),F(()=>{document.removeEventListener("click",O)}),Z(()=>r.value,S=>{o.value.search=S,clearTimeout(t.value),t.value=setTimeout(()=>{U(),g.value.search=S},500)}),(S,m)=>(l(),n("div",pe,[e("div",_e,[fe,e("div",{class:"relative",ref_key:"propertyElement",ref:h},[I(R(re),{class:"absolute left-[18px] top-[15.21px]"}),J(e("input",{name:"property",type:"text",class:"w-full h-12 rounded-md border border-[#D2D2D2] px-[15px] pl-[50px] focus-visible:outline-[#046A38]",onClick:m[0]||(m[0]=p=>{w.value=!w.value,i.value=D.value=!1,g.value.property=null,R(a).booking.propertyId=null}),"onUpdate:modelValue":m[1]||(m[1]=p=>r.value=p),maxlength:50},null,512),[[j,r.value]]),w.value?(l(),n("div",xe,[ge,he,(l(!0),n(E,null,B(P.value,(p,q)=>(l(),n("ul",{class:"border-b text-sm text-[20px]",key:q},[p.status!=="comingsoon"?(l(),n("li",{key:0,class:"p-4 border-t flex gap-5 cursor-pointer",onClick:kt=>{r.value=p.name,g.value.property=p.id,g.value.search="",w.value=!1}},[ye,e("div",ke,[e("span",null,b(p.name),1),p.status==="comingsoon"?(l(),n("span",we,"Coming Soon")):y("",!0)])],8,be)):(l(),n("li",{key:1,class:"p-4 border-t flex gap-5 cursor-pointer opacity-50",onClick:m[2]||(m[2]=Q(()=>{},["stop"]))},[De,e("div",Ae,[e("span",null,b(p.name),1),Se])]))]))),128)),P.value.length?y("",!0):(l(),n("ul",Ie,$e))])):y("",!0)],512)]),e("div",Ce,[Pe,e("div",{class:"relative",ref_key:"calendarElement",ref:v},[I(R(le),{class:"absolute left-[18px] top-[15.21px]"}),e("input",{name:"calendar",readonly:"",type:"text",class:"w-full h-12 rounded-md border border-[#D2D2D2] px-[15px] pl-[50px] focus-visible:outline-[#046A38]",onClick:m[3]||(m[3]=p=>{i.value=!i.value,w.value=D.value=!1}),value:A.value},null,8,Ee),i.value?(l(),n("div",Be,[Oe,e("div",Ne,[I(ie,{bookDate:s.value,"onUpdate:displayDate":m[4]||(m[4]=p=>A.value=p),"onUpdate:showCalendars":m[5]||(m[5]=p=>i.value=p),"onUpdate:bookDate":m[6]||(m[6]=p=>s.value=p),"onUpdate:stayNigtht":m[7]||(m[7]=p=>x.value=p)},null,8,["bookDate"])])])):y("",!0)],512)]),e("div",Te,[Le,e("div",{class:"relative",ref_key:"roomElement",ref:c},[I(R(ne),{class:"absolute left-[18px] top-[15.21px]"}),e("input",{name:"room-count",readonly:"",type:"text",class:"w-full h-12 rounded-md border border-[#D2D2D2] px-[15px] pl-[50px] focus-visible:outline-[#046A38]",onClick:m[8]||(m[8]=p=>{D.value=!D.value,w.value=i.value=!1,!d.value&&(d.value=1)}),value:d.value===0?"":d.value+(d.value===1?" Room":" Rooms")},null,8,Ue),D.value&&r.value&&s.value?(l(),n("div",Ve,[Ye,Me,e("div",ze,[I(R(ce),{onClick:m[9]||(m[9]=p=>d.value<=1?1:d.value--),active:d.value!=1},null,8,["active"]),e("label",Fe,b(d.value),1),I(R(de),{onClick:m[10]||(m[10]=p=>d.value===10?d.value:d.value++),active:d.value!==10},null,8,["active"])])])):y("",!0)],512)]),e("div",Ze,[e("button",{type:"button",class:C(["btn-primary w-full h-10 rounded-md hover:bg-[#046A38] hover:text-white text-xs text-[14px] font-medium capitalize",{"btn-primary-disable":!(s.value&&r.value&&d.value)}]),onClick:V,disabled:!(s.value&&r.value&&d.value)}," Let's Go! ",10,Ge)])]))}},Xe=ue(He,[["__scopeId","data-v-18f23be4"]]),qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAg1JREFUSEvFlkFL3FAQx2fy3gZB2IOl9iBevLU9Ft1Y2EIRPXhQe1iQfoDiZtmeirUFL/agpVUodJNvoAiC6GX10J4siceW0lIoPXr1JFSbZJxYI7qa5CWs7Tsm/5nfzHsz8x7CP1qYiVMbuCFAPEAK+oDws2e5HwCBVHwogaRZegiAdXb4qNUpEdgScenQcn4mAVNBwjRsFk2lRk047dnOmzhdIkiaxms2nE6FnAp4Dyd9y129Sh8L0mv9dwMSX1UhkY7P7UqfsSDO5h0bP80KIsDHvuWstNolgZSq6XIguOZZTkUJpJvG7QDgW9ZsTvX7vH1dSqBCtWQQopMT9IdBuhIIKnd0ebN4mBO0w6CyGohVsmpscNePZYfRC8/aXVAGiergBCKtZwV5muiB95/2lEGhUJqD2wA0ogxDmvcauy8zNWwoDpuWSDS5zntTYYgfvYYzlGsEnRjVS0Xp46vk5qVnfC6LScHEz7qp+926pFuRceBDl4Y0HAD18yTvBQ2+81Xhaghb5wFHHQe/4O2Xg+QzenKvIEWhztU2x8LO1O2KFdAPIm3Ot53lSHIhI55vLv8o5QdctAzvKt92zfDrGYgrjLOg2XZBIj8MG2fY5jmQkXOIpobW5EkxegLiq5p7Bblnrmd5v0XxL6hmPOcnxqWx0T4slaOMZjij+fY5bvX0n0Dj15SRwdVcPgYveJ5Jxtjv+AAAAABJRU5ErkJggg==",Je={class:"text-xs text-[14px] text-[#000000DE]"},je={key:1,class:"mt-5 text-center text-[15px]"},Qe={class:"w-[230px] md:w-full"},We=["src","onClick"],Ke={class:"grow flex flex-col mx-8 text-[#000000DE] md:mx-[14px]"},et={key:0,class:"text-primary mt-4 text-[10px] leading-4 font-bold"},tt={key:1,class:"text-primary mt-4 text-[10px] leading-4 font-bold"},ot={key:2},st={class:"text-[#000000DE] break-all"},at={class:"flex items-center gap-1 whitespace-nowrap xs:mt-1"},lt={class:"text-[#046A38]"},nt={key:0,class:"flex justify-between"},rt={class:"flex flex-col w-2/3"},it={class:"mt-2 text-[10px] leading-4 text-primary font-bold"},ct={key:0,class:"text-base text-danger font-bold"},dt={class:"mt-1 leading-4 text-[12px]"},ut={class:"mt-1 flex gap-1 items-center leading-4 text-[12px]"},mt=te('<svg id="ico-coins" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10.488 10.488"><g id="Group_13401" data-name="Group 13401"><g id="Path_7457" data-name="Path 7457"><path id="Path_7458" data-name="Path 7458" d="M5.244,10.488a5.244,5.244,0,1,1,5.244-5.244A5.25,5.25,0,0,1,5.244,10.488ZM5.244,1A4.244,4.244,0,1,0,9.488,5.244,4.249,4.249,0,0,0,5.244,1Z" fill="#fa9b1d"></path></g></g><g id="Group_13402" data-name="Group 13402"><path id="Path_7459" data-name="Path 7459" d="M7.141,8.34a.493.493,0,0,1-.233-.058L5.244,7.407l-1.663.875a.494.494,0,0,1-.527-.038.5.5,0,0,1-.2-.489L3.173,5.9,1.826,4.59A.5.5,0,0,1,2.1,3.738l1.86-.271L4.8,1.782a.519.519,0,0,1,.9,0l.832,1.685,1.861.271a.5.5,0,0,1,.276.852L7.315,5.9l.319,1.853a.5.5,0,0,1-.493.585Zm-1.9-2a.5.5,0,0,1,.233.057l1,.526L6.285,5.813A.5.5,0,0,1,6.43,5.37l.808-.788L6.12,4.419a.5.5,0,0,1-.376-.273l-.5-1.013-.5,1.013a.5.5,0,0,1-.376.273L3.25,4.582l.809.788a.5.5,0,0,1,.144.443L4.012,6.926l1-.526A.5.5,0,0,1,5.244,6.343Z" fill="#fa9b1d"></path></g></svg>',1),vt={key:0,class:"text-primary"},pt=e("span",{class:"text-[#000000DE]"},"of ",-1),_t={class:"flex items-end"},ft=["onClick"],xt={__name:"ResultPage",props:{results:{type:Array,default:[]},params:{type:Object,default:{}},loading:{type:Boolean,default:!1}},setup(_){const $=_,a=L(),w=G(),i=me(),D=u("/src/assets/icons/result-image-1.png"),d=u(!1),s=(r,x,t)=>{if(!r.length)return"N/A";let o=0,g=0,f=0,h=r[0].multiplier;return r.forEach(v=>{typeof v.discount_rate=="number"?o+=v.discount_rate:o+=v.rate,h<v.multiplier&&(h=v.multiplier),g+=v.rate,f+=v.points}),x===1?T(t,Math.round(o)):x===2?T(t,Math.round(g)):x===3?T("",Math.round(f)):h},A=(r,x,t)=>{i.selectedRoomName==x.name&&i.selectedRoomPlan.id==t.id?(i.setOldSelectedRoomName(x.name),i.setOldSelectedRoomPlan(t)):i.bookingTransactionID="",i.setSelectedRoomName(x.name),i.setSelectedRoomPlan(t),delete r.rooms,delete x.plans;const g=t.rates.map(v=>v.available_rooms).reduce((v,c)=>(v=v>c?c:v,v));a.setSelectedRoom({...r,room:x,plan:t,discountedRate:s(t.rates,1,r.currency),rate:s(t.rates,2,r.currency),points:s(t.rates,3),multiplier:s(t.rates,4),...$.params,selected_number_of_rooms:$.params.number_of_rooms,stay:a.booking.stay,available_room:g,room_id:x.id,rate_id:t.id});let f=[];for(var h=0;h<t.rates.length;h++)t.rates[h].base_rate=t.rates[h].rate,f.push(t.rates[h]);localStorage.removeItem("_IS_UPDATE"),localStorage.removeItem("_CURRENTVOUCHER_FROM_VIEW"),localStorage.setItem("_ROOMRATES",JSON.stringify(f)),a.setPropertyID(r.id),a.addOns=[],a.vouchers=null,a.setOldSelectedRoom({...r,room:x,plan:t,discountedRate:s(t.rates,1,r.currency),rate:s(t.rates,2,r.currency),points:s(t.rates,3),multiplier:s(t.rates,4),...$.params,selected_number_of_rooms:$.params.number_of_rooms,stay:a.booking.stay,available_room:g,room_id:x.id,rate_id:t.id}),a.booking.propertyId||localStorage.getItem("_PROPERTY_ID")&&(a.booking.propertyId=localStorage.getItem("_PROPERTY_ID")),w.push({name:"BaseRoute::CreateBooking"})};return(r,x)=>{var t;return l(),n("div",{class:C(["relative",{"h-2/3":!_.results.length},{"md:h-screen":!_.results.length},{"pointer-events-none":_.loading},{"md:h-[calc(100vh/3)]":!_.results.length&&!_.loading}])},[_.loading?(l(),ee(R(ve),{key:0})):y("",!0),e("span",Je,b(`Results for "${_.params.search}" ${_.params.displayDate}`),1),(t=_.results)!=null&&t.length?y("",!0):(l(),n("div",je," No available rooms in this property ")),(l(!0),n(E,null,B(_.results,(o,g)=>(l(),n("div",{class:"w-ful",key:g},[e("div",{class:C(["mt-4 flex rounded-md md:flex-col",o.soldout||o.status?"bg-[#E6E7E2]":"bg-white"])},[e("div",Qe,[e("img",{class:C(["aspect-video object-cover w-full md:rounded-lg md:w-fit md:object-fill",{grayscale:o.soldout||o.status}]),src:o.photo||o.thumbnail,alt:"",onClick:f=>{D.value=o.property_image,d.value=!0}},null,10,We)]),e("div",Ke,[o.status?(l(),n("div",et," Coming Soon! ")):o.soldout?(l(),n("div",tt," Sold Out ")):y("",!0),e("div",{class:C(["font-medium text-base text-[20px] ",{"mt-4":!o.soldout&&!o.status}])},b(o.name),3),!o.soldout&&!o.status?(l(),n("div",ot,[(l(!0),n(E,null,B(o.rooms,(f,h)=>{var v;return l(),n("div",{class:"w-full my-4",key:h},[f.plans.length===((v=f.plans.filter(c=>c.soldout))==null?void 0:v.length)&&f.plans.find(c=>c.soldout)?y("",!0):(l(),n("div",{key:0,class:C(["bg-[#E3F3E6] flex items-center p-2 gap-4 text-xs text-[12px] xs:block",{"mt-8":h>0}])},[e("span",st,b(f.name),1),e("div",at,[(l(!0),n(E,null,B(f.max_capacity<4?f.max_capacity:4,c=>(l(),n("img",{class:"cursor-pointer",src:qe,alt:"profile-active",width:"9",key:c}))),128)),e("span",lt,"Good for "+b(f.max_capacity),1)])],2)),(l(!0),n(E,null,B(f.plans,(c,P)=>(l(),n("div",{class:"",key:P},[c.soldout?y("",!0):(l(),n("div",nt,[e("div",rt,[e("div",it,b(c.name),1),s(c.rates,1,o.currency)!==s(c.rates,2,o.currency)?(l(),n("div",ct,b(s(c.rates,1,o.currency)),1)):y("",!0),e("div",dt,[e("span",{class:C([s(c.rates,1,o.currency)!==s(c.rates,2,o.currency)?"line-through":"text-base font-bold "])},b(s(c.rates,2,o.currency)),3),N(" / "+b(`${_.params.stay} night${_.params.stay>1?"s":""}`),1)]),e("div",ut,[mt,e("div",null,[N(" Earn up to "),s(c.rates,4)>1?(l(),n("span",vt,[e("strong",null,b(s(c.rates,4))+"x ",1),pt])):y("",!0),N(" "+b(s(c.rates,3))+" points ",1)])])]),e("div",_t,[e("button",{type:"button",class:"btn btn-primary rounded-md p-3 hover:bg-[#046A38] hover:text-white text-[12px] font-medium leading-[15px",onClick:O=>A(o,f,c)}," Book Now ",8,ft)])]))]))),128))])}),128))])):y("",!0)])],2)]))),128))],2)}}};const gt={class:"min-h-[87vh] px-36 pt-4 pb-16 bg-[#f6f6f6] md:px-4"},ht={class:"flex mt-4 gap-8 lg:flex-col"},bt={class:"flex-shrink-0 w-[300px] lg:w-full"},yt={class:"grow"},Ut={__name:"index",setup(_){const $=G(),a=L(),w=[{active:!0,label:"Search results",to:""}],i=u({}),D=u({search:"",status:["comingsoon"],limit:50,sort:"name"}),d=u([]),s=u([]),A=u(!1),r=async()=>{A.value=!0;try{i.value.property=i.value.property?i.value.property:localStorage.getItem("_PROPERTY_ID");const o=await se(i.value);d.value=o.data}catch{}A.value=!1;const t=document.querySelector(".drawer-content.grow");t&&(t.style.backgroundColor="#f6f6f6")},x=async()=>{try{const t=await H(D.value);s.value=t.data}catch{}};return Z(()=>i.value,t=>{D.value.search=i.value.search,Promise.all([r(),x()])}),F(()=>{const t=document.querySelector(".drawer-content.grow");t&&t.removeAttribute("style")}),z(()=>{var t;if(!a.booking.area||!((t=a.booking.bookDate)!=null&&t.length)){$.go(-1);return}}),oe(()=>{a.booking.area||a.booking.propertySpecificName&&(a.booking.area=a.booking.propertySpecificName)}),(t,o)=>(l(),n("div",gt,[I(R(ae),{class:"",items:w}),e("div",ht,[e("div",bt,[I(Xe,{"onFetch:room":o[0]||(o[0]=g=>i.value={...g,stay:R(a).booking.stay})})]),e("div",yt,[I(xt,{params:i.value,loading:A.value,results:[...d.value,...s.value]},null,8,["params","loading","results"])])])]))}};export{Ut as default};
