import{d as a,n as s,P as r}from"./PartnerCard.d72c4aff.js";import{_ as n,g as t,o as e,c as i,d as l,j as c,u as o,$ as p,t as d,F as f,n as h,l as u,e as g}from"../app.32faa8b7.js";const b={class:"partner-page"},m={class:"back"},v={href:"/partners/all.html"},k=g("Back to all partners"),j={class:"description"},_=["innerHTML"],P={class:"actions"},L=["href"],C=["href"],H={key:0,class:"hiring"},M=["href"];var T=n(t({props:{partner:null},setup(n){const t=a.find((a=>s(a.name)===n.partner));return(a,s)=>{return e(),i("div",b,[l("div",m,[l("a",v,[c(o(p),{class:"icon"}),k])]),c(r,{hero:"",page:"",data:o(t)},null,8,["data"]),l("div",j,[l("h2",null,"About "+d(o(t).name),1),(e(!0),i(f,null,h(o(t).description,(a=>(e(),i("p",{innerHTML:a},null,8,_)))),256))]),l("div",P,[l("a",{href:o(t).website.url,target:"_blank"},"Visit Website",8,L),l("a",{class:"contact",href:(n=o(t).contact,`mailto:${n}?subject=Looking for a Vue.js Partner`),target:"_blank"},"Contact",8,C)]),o(t).hiring?(e(),i("div",H,[l("a",{href:o(t).hiring},d(o(t).name)+" is hiring!",9,M)])):u("",!0)]);var n}}}),[["__scopeId","data-v-13025b7a"]]);export{T as P};
