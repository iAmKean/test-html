import{e as m,o as t,c as s,a as r,q as c,u as p,t as a,F as _,k as d}from"./index-0d29c91c.js";const h={class:"text-sm breadcrumbs space-x-2 text-[12px] overflow-auto"},f={class:"cursor-pointer"},k={key:0,class:"flex items-center"},x={class:"text-[#046A38]"},v=["onClick"],g={__name:"AppBreadcrumbs",props:{items:{type:Array}},setup(i){const o=m();return(n,l)=>(t(),s("div",h,[r("ul",null,[r("li",f,[r("a",{onClick:l[0]||(l[0]=c(e=>n.$router.push({path:p(o).fromHomePage.path}),["prevent"])),class:"text[#000000DE] hover:text-gray-500"},a(p(o).fromHomePage.name),1)]),(t(!0),s(_,null,d(i.items,(e,u)=>(t(),s("li",{key:u},[e.active?(t(),s("a",k,[r("span",x,a(e.label),1)])):(t(),s("a",{key:1,class:"flex items-center cursor-pointer",onClick:c(y=>n.$router.push({path:e.to}),["prevent"])},[r("span",null,a(e.label),1)],8,v))]))),128))])]))}};export{g as _};
