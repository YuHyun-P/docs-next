import{d as a,n as s,P as r}from"./PartnerCard.310de301.js";import{_ as e,g as n,o as t,c as i,d as l,j as c,u as o,a0 as p,t as d,F as h,n as u,l as f,e as g}from"../app.105cc03f.js";const m={class:"partner-page"},b={class:"back"},v={href:"/partners/all.html"},k=g("Back to all partners"),j={class:"description"},_=["innerHTML"],P={class:"actions"},L=["href"],C=["href"],H={key:0,class:"hiring"},M=["href"];var T=e(n({props:{partner:null},setup(e){const n=a.find((a=>s(a.name)===e.partner));return(a,s)=>{return t(),i("div",m,[l("div",b,[l("a",v,[c(o(p),{class:"icon"}),k])]),c(r,{hero:"",page:"",data:o(n)},null,8,["data"]),l("div",j,[l("h2",null,"About "+d(o(n).name),1),(t(!0),i(h,null,u(o(n).description,(a=>(t(),i("p",{innerHTML:a},null,8,_)))),256))]),l("div",P,[l("a",{href:o(n).website.url,target:"_blank"},"Visit Website",8,L),l("a",{class:"contact",href:(e=o(n).contact,`mailto:${e}?subject=Looking for a Vue.js Partner`),target:"_blank"},"Contact",8,C)]),o(n).hiring?(t(),i("div",H,[l("a",{href:o(n).hiring},d(o(n).name)+" is hiring!",9,M)])):f("",!0)]);var e}}}),[["__scopeId","data-v-13025b7a"]]);export{T as P};
