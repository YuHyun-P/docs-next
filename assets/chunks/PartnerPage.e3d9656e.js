import{d as a,n as s,P as r}from"./PartnerCard.4e8937b1.js";import{_ as e,g as n,o as t,c as i,d as l,j as o,u as c,$ as p,t as d,F as h,n as u,l as f,e as b}from"../app.553e6b97.js";const g={class:"partner-page"},m={class:"back"},v={href:"/partners/all.html"},k=b("Back to all partners"),j={class:"description"},_=["innerHTML"],P={class:"actions"},L=["href"],C=["href"],H={key:0,class:"hiring"},M=["href"];var T=e(n({props:{partner:null},setup(e){const n=a.find((a=>s(a.name)===e.partner));return(a,s)=>{return t(),i("div",g,[l("div",m,[l("a",v,[o(c(p),{class:"icon"}),k])]),o(r,{hero:"",page:"",data:c(n)},null,8,["data"]),l("div",j,[l("h2",null,"About "+d(c(n).name),1),(t(!0),i(h,null,u(c(n).description,(a=>(t(),i("p",{innerHTML:a},null,8,_)))),256))]),l("div",P,[l("a",{href:c(n).website.url,target:"_blank"},"Visit Website",8,L),l("a",{class:"contact",href:(e=c(n).contact,`mailto:${e}?subject=Looking for a Vue.js Partner`),target:"_blank"},"Contact",8,C)]),c(n).hiring?(t(),i("div",H,[l("a",{href:c(n).hiring},d(c(n).name)+" is hiring!",9,M)])):f("",!0)]);var e}}}),[["__scopeId","data-v-13025b7a"]]);export{T as P};
