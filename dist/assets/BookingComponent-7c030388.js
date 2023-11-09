import{e as W,B as O,z as j,d as q,r,E as J,l as Y,x as G,g as h,w as K,o as u,c as d,a as t,h as _,u as b,p as H,H as z,F as Q,k as X,t as P,C as k,q as Z,n as U,I as ee,J as oe}from"./index-0d29c91c.js";import{_ as te,a as ae,b as F}from"./ico-location-38e782ff.js";import{f as se}from"./booking-84804f94.js";import{_ as le}from"./ico-search-65e72bb8.js";import{_ as ne,a as re,b as ie}from"./index.css_vue_type_style_index_0_src_true_lang-6697b8bd.js";/* empty css                                                               */import{u as ue}from"./bookingTransactionID-1d897d48.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import"./axiosConfig-15342d77.js";import"./dateHelper-f75861f0.js";import"./AppLoader.vue_vue_type_style_index_0_lang-2e650906.js";import"./AppLoader-c0c74b58.js";import"./main-044273c3.js";const m=g=>(ee("data-v-e5ab1638"),g=g(),oe(),g),pe={class:"h-[74px] mx-48 shadow-lg rounded-box mt-[-35px] bg-white flex md:justify-center md:mx-4 md:mt-[1px] md:h-auto md:w-full md:flex-col"},me={class:"m-4 border flex-1 rounded-md h-12 md:h-auto md:mb-0"},ce={class:"flex md:flex-col"},ve={class:"relative"},xe={key:0,class:"z-10 absolute left-0 mt-5 w-[379px] h-[279px] shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-5 overflow-y-auto md:w-fit"},be=m(()=>t("div",{class:"text-base text-[24px]"},"Where to?",-1)),fe=m(()=>t("div",{class:"my-[10px]"},"Select Property",-1)),_e=["onClick"],ge=m(()=>t("img",{class:"h-[16.9px]",src:F,alt:"icon-location"},null,-1)),ke={class:"text-[14px] leading-5 flex flex-col"},ye={key:0,class:"text-[12px] leading-4"},he=m(()=>t("img",{class:"h-[16.9px]",src:F,alt:"icon-location"},null,-1)),we={class:"text-[14px] leading-5 flex flex-col"},Ce=m(()=>t("span",{class:"text-[12px] leading-4"},"Coming Soon",-1)),Ie={key:0,class:"text-center mt-3"},Be=m(()=>t("li",{class:"text-[14px] leading-5"}," No available properties ",-1)),De=[Be],Pe={class:"relative"},Re={key:0,class:"_calendar xs:p-4 xs:w-[100%] xs:m-auto xs:overflow-hidden z-10 absolute left-0 mt-5 w-[550px] h-auto shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-6 overflow-y-auto md:w-fit"},$e=m(()=>t("div",{class:"text-base text-[24px] xs:text-[18px]"}," When's your trip? ",-1)),Ae={class:"mt-[32px]"},Se={class:"relative"},Ee=["value"],Te={key:0,class:"z-10 absolute left-0 mt-5 w-[322px] h-auto shadow-md bg-base-100 rounded-md text-xs text-[14px] font-medium text-black p-5 md:w-fit"},Ne=m(()=>t("div",{class:"text-base text-[24px]"}," How many do you need? ",-1)),He=m(()=>t("div",{class:"my-[10px]"},"Number of Rooms",-1)),ze={class:"flex items-center"},Ue={class:"mx-3 text-base"},Fe=["disabled"],Ve={class:"hidden mx-4 mb-4 md:block"},Le=["disabled"],Me={__name:"BookingComponent",props:{isFromBookRooSlide:{type:Boolean,default:!1}},setup(g){const R=g,V=ue(),c=W(),a=O(),L=j(),$=q(),v=r(!1),x=r(!1),f=r(!1),l=r(0),y=r(),i=r(),n=r(""),A=r({search:"",status:["active","comingsoon"],limit:50}),p=r({search:"",property:null}),S=r(null),w=r(null),C=r(null),I=r(null),B=r([]),E=async()=>{try{const e=await se(A.value);B.value=e.data,n.value||(c.properties=e.data)}catch{}},T=e=>{w.value&&!w.value.contains(e.target)&&(v.value=!1),C.value&&!C.value.contains(e.target)&&(x.value=!1),I.value&&!I.value.contains(e.target)&&(f.value=!1)},D=J(()=>{var e;return(e=$.params)==null?void 0:e.property}),N=()=>{V.bookingTransactionID="";const e=c.properties.find(o=>o.slug===D.value);D.value?(c.fromHomePage.name=e==null?void 0:e.name,c.fromHomePage.path=`/property/${D.value}`):(c.fromHomePage.name="Home",c.fromHomePage.path="/"),a.setBooking({...a.booking,area:n.value??(e==null?void 0:e.id),startDate:i.value[0],endDate:i.value[1],bookDate:i.value,roomCount:l.value,propertyId:p.value.property??(e==null?void 0:e.id),propName:n.value}),a.booking.propertySpecificName=n.value,R.isFromBookRooSlide&&(c.isBookRoomTriggered=!0),L.push({name:"BaseRoute::searchResult"})};return Y(async()=>{a.booking.bookDate=[],a.selectedRoom.available_room=10,a.selectedRoom.number_of_rooms=null,document.addEventListener("click",T),await E(),setTimeout(()=>{n.value=a.booking.area=a.booking.specificArea,p.value.property=a.booking.propertyId=a.booking.specificPropertyId},100)}),G(()=>{document.removeEventListener("click",T),p.value.property=null,a.booking.specificArea="",a.booking.specificPropertyId=null}),h([()=>i.value,()=>n.value],([e,o])=>{e&&o&&(l.value=1)}),h(()=>a.booking.specificArea,e=>{n.value=a.booking.area=e}),h(()=>a.booking.specificPropertyId,e=>{p.value.property=a.booking.propertyId=e}),h(()=>n.value,e=>{A.value.search=e,a.booking.propertyId&&localStorage.setItem("_PROPERTY_ID",a.booking.propertyId),clearTimeout(S.value),S.value=setTimeout(()=>{E(),y.value="",i.value=null,a.booking.area=e,p.value.search=e},500)}),K(()=>{if($.name){if(!R.isFromBookRooSlide)return;l.value=0,n.value="",setTimeout(()=>{n.value=a.booking.area=a.booking.specificArea,p.value.property=a.booking.propertyId=a.booking.specificPropertyId},100)}}),(e,o)=>(u(),d("div",pe,[t("div",me,[t("div",ce,[t("div",{class:"flex-1 border-r md:border-r-0 md:border-b relative",ref_key:"propertyElement",ref:w},[t("div",ve,[_(b(le),{class:"absolute left-[18px] top-3"}),H(t("input",{class:"py-[10px] w-full px-[15px] pl-[50px] focus-visible:outline-[#046A38]",type:"text",placeholder:"Where are you going?",onClick:o[0]||(o[0]=s=>{v.value=!v.value,x.value=f.value=!1,b(a).booking.propertyId=null,p.value.property=null}),"onUpdate:modelValue":o[1]||(o[1]=s=>n.value=s),maxlength:50},null,512),[[z,n.value]])]),v.value?(u(),d("div",xe,[be,fe,(u(!0),d(Q,null,X(B.value,(s,M)=>(u(),d("ul",{class:"border-b text-sm text-[20px]",key:M},[s.status!=="comingsoon"?(u(),d("li",{key:0,class:"p-4 border-t flex gap-5 cursor-pointer",onClick:We=>{n.value=s.name,p.value.property=s.id,b(a).booking.propertyId=s.id,p.value.search="",v.value=!1}},[ge,t("div",ke,[t("span",null,P(s.name),1),s.status==="comingsoon"?(u(),d("span",ye,"Coming Soon")):k("",!0)])],8,_e)):(u(),d("li",{key:1,class:"p-4 border-t flex gap-5 cursor-pointer opacity-50",onClick:o[2]||(o[2]=Z(()=>{},["stop"]))},[he,t("div",we,[t("span",null,P(s.name),1),Ce])]))]))),128)),B.value.length?k("",!0):(u(),d("ul",Ie,De))])):k("",!0)],512),t("div",{class:"flex-1 border-r md:border-r-0 md:border-b relative",ref_key:"calendarElement",ref:C},[t("div",Pe,[_(b(te),{class:"absolute left-[18px] top-3"}),H(t("input",{class:"py-[10px] w-full px-[15px] pl-[50px] focus-visible:outline-[#046A38]",type:"text",placeholder:"Check-in - Check-out",onClick:o[3]||(o[3]=s=>{x.value=n.value&&!x.value,v.value=f.value=!1}),"onUpdate:modelValue":o[4]||(o[4]=s=>y.value=s),readonly:""},null,512),[[z,y.value]])]),x.value?(u(),d("div",Re,[$e,t("div",Ae,[_(ne,{bookDate:i.value,"onUpdate:displayDate":o[5]||(o[5]=s=>y.value=s),"onUpdate:showCalendars":o[6]||(o[6]=s=>x.value=s),"onUpdate:bookDate":o[7]||(o[7]=s=>i.value=s)},null,8,["bookDate"])])])):k("",!0)],512),t("div",{class:"flex-1 border-r md:border-r-0 relative",ref_key:"roomElement",ref:I},[t("div",Se,[_(b(ae),{class:"absolute left-[18px] top-3"}),t("input",{class:"py-[10px] w-full px-[15px] pl-[50px] focus-visible:outline-[#046A38]",type:"text",placeholder:"How many rooms?",onClick:o[8]||(o[8]=s=>{f.value=!f.value,v.value=x.value=!1,!l.value&&n.value&&i.value&&(l.value=1)}),readonly:"",value:l.value===0?"":l.value+(l.value===1?" Room":" Rooms")},null,8,Ee)]),f.value&&n.value&&i.value?(u(),d("div",Te,[Ne,He,t("div",ze,[_(b(re),{onClick:o[9]||(o[9]=s=>l.value<=1?1:l.value--),active:l.value!=1},null,8,["active"]),t("label",Ue,P(l.value),1),_(b(ie),{onClick:o[10]||(o[10]=s=>l.value===10?l.value:l.value++),active:l.value!==10},null,8,["active"])])])):k("",!0)],512),t("button",{type:"button",class:U(["btn btn-primary text-white w-[168px] bg-[#046A38] h-10 rounded-none rounded-tr-md rounded-br-md hover:bg-[#046A38] hover:text-white text-xs text-[14px] capitalize md:w-full md:rounded-md md:mt-5 md:hidden",{"btn-primary-disable":!(i.value&&n.value&&l.value)}]),disabled:!(i.value&&n.value&&l.value),onClick:o[11]||(o[11]=s=>N())}," Book Now ",10,Fe)])]),t("div",Ve,[t("button",{type:"button",class:U(["btn btn-primary text-white w-[168px] bg-[#046A38] h-10 rounded-none rounded-tr-md rounded-br-md hover:bg-[#046A38] hover:text-white text-xs text-[14px] capitalize md:w-full md:rounded-md md:mt-5",{"btn-primary-disable":!(i.value&&n.value&&l.value)}]),disabled:!(i.value&&n.value&&l.value),onClick:o[12]||(o[12]=s=>N())}," Book Now ",10,Le)])]))}},ao=de(Me,[["__scopeId","data-v-e5ab1638"]]);export{ao as default};