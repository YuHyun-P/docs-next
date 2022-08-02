import{_ as s,g as n,r as l,o as a,c as o,d as p,F as e,n as t,X as r,t as c,f as y,j as F,w as i,a as D,e as A}from"./app.07b32141.js";const C={class:"tabs"},d=["onClick"],h={class:"code-example"};var u=s(n({__name:"TestingApiSwitcher",setup(s){const n=l("vtu-api"),F=[{label:"Vue Test Utils",className:"vtu-api"},{label:"Cypress",className:"cypress-api"},{label:"Testing Library",className:"testing-library-api"}];return(s,l)=>(a(),o("div",{class:r(["testing-code-examples",`prefers-${n.value}`])},[p("div",C,[(a(),o(e,null,t(F,(s=>p("div",{key:s.className,class:r(["tab",{active:s.className===n.value}]),onClick:l=>n.value=s.className},c(s.label),11,d))),64))]),p("div",h,[y(s.$slots,"default")])],2))}}),[["__scopeId","data-v-7f91de60"]]);const g=D("",43),v=p("div",{class:"testing-library-api"},[p("div",{class:"language-js"},[p("pre",null,[p("code",null,[p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"render"),p("span",{style:{color:"#A6ACCD"}},"(Stepper"),p("span",{style:{color:"#89DDFF"}},","),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#F07178"}},"props"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"    "),p("span",{style:{color:"#F07178"}},"max"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#F78C6C"}},"1")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#89DDFF"}},"}")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF"}},"}"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{"),p("span",{style:{color:"#A6ACCD"}}," getByText "),p("span",{style:{color:"#89DDFF"}},"}"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#82AAFF"}},"render"),p("span",{style:{color:"#A6ACCD"}},"(Component)")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"getByText"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"0"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},") "),p("span",{style:{color:"#676E95","font-style":"italic"}},'// "0"이 컴포넌트 내에 있어야 함')]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," button "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#82AAFF"}},"getByText"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"increment"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#676E95","font-style":"italic"}},"// 클릭 이벤트 발송")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),p("span",{style:{color:"#A6ACCD"}}," fireEvent"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"click"),p("span",{style:{color:"#A6ACCD"}},"(button)")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"getByText"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"1"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),p("span",{style:{color:"#A6ACCD"}}," fireEvent"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"click"),p("span",{style:{color:"#A6ACCD"}},"(button)")]),A("\n"),p("span",{class:"line"})])])])],-1),f=p("div",{class:"vtu-api"},[p("div",{class:"language-js"},[p("pre",null,[p("code",null,[p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," valueSelector "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"[data-testid=stepper-value]"),p("span",{style:{color:"#89DDFF"}},"'")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," buttonSelector "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"[data-testid=increment]"),p("span",{style:{color:"#89DDFF"}},"'")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," wrapper "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#82AAFF"}},"mount"),p("span",{style:{color:"#A6ACCD"}},"(Stepper"),p("span",{style:{color:"#89DDFF"}},","),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#F07178"}},"props"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"    "),p("span",{style:{color:"#F07178"}},"max"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#F78C6C"}},"1")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#89DDFF"}},"}")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF"}},"}"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"expect"),p("span",{style:{color:"#A6ACCD"}},"(wrapper"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"find"),p("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"text"),p("span",{style:{color:"#A6ACCD"}},"())"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"toContain"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"0"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),p("span",{style:{color:"#A6ACCD"}}," wrapper"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"find"),p("span",{style:{color:"#A6ACCD"}},"(buttonSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"trigger"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"click"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"expect"),p("span",{style:{color:"#A6ACCD"}},"(wrapper"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"find"),p("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"text"),p("span",{style:{color:"#A6ACCD"}},"())"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"toContain"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"1"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"})])])])],-1),m=p("div",{class:"cypress-api"},[p("div",{class:"language-js"},[p("pre",null,[p("code",null,[p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," valueSelector "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"[data-testid=stepper-value]"),p("span",{style:{color:"#89DDFF"}},"'")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#C792EA"}},"const"),p("span",{style:{color:"#A6ACCD"}}," buttonSelector "),p("span",{style:{color:"#89DDFF"}},"="),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"[data-testid=increment]"),p("span",{style:{color:"#89DDFF"}},"'")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#82AAFF"}},"mount"),p("span",{style:{color:"#A6ACCD"}},"(Stepper"),p("span",{style:{color:"#89DDFF"}},","),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#F07178"}},"props"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"{")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"    "),p("span",{style:{color:"#F07178"}},"max"),p("span",{style:{color:"#89DDFF"}},":"),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#F78C6C"}},"1")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#89DDFF"}},"}")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#89DDFF"}},"}"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"}),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"cy"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"get"),p("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"should"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"be.visible"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"and"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"contain.text"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#89DDFF"}},","),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"0"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"get"),p("span",{style:{color:"#A6ACCD"}},"(buttonSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"click"),p("span",{style:{color:"#A6ACCD"}},"()")]),A("\n"),p("span",{class:"line"},[p("span",{style:{color:"#A6ACCD"}},"  "),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"get"),p("span",{style:{color:"#A6ACCD"}},"(valueSelector)"),p("span",{style:{color:"#89DDFF"}},"."),p("span",{style:{color:"#82AAFF"}},"should"),p("span",{style:{color:"#A6ACCD"}},"("),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"contain.text"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#89DDFF"}},","),p("span",{style:{color:"#A6ACCD"}}," "),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#C3E88D"}},"1"),p("span",{style:{color:"#89DDFF"}},"'"),p("span",{style:{color:"#A6ACCD"}},")")]),A("\n"),p("span",{class:"line"})])])])],-1),b=D("",56),E='{"title":"테스트","description":"","frontmatter":{},"headers":[{"level":2,"title":"왜 테스트 해야 할까요?","slug":"why-test"},{"level":2,"title":"테스트 시기","slug":"when-to-test"},{"level":2,"title":"테스트 유형","slug":"testing-types"},{"level":2,"title":"개요","slug":"overview"},{"level":2,"title":"단위 테스트","slug":"unit-testing"},{"level":3,"title":"컴포저블","slug":"composables"},{"level":3,"title":"컴포넌트 단위 테스트","slug":"unit-testing-components"},{"level":3,"title":"추천","slug":"recommendation"},{"level":3,"title":"다른 선택지","slug":"other-options"},{"level":2,"title":"컴포넌트 테스트","slug":"component-testing"},{"level":3,"title":"추천","slug":"recommendation-1"},{"level":3,"title":"마운팅 라이브러리","slug":"mounting-libraries"},{"level":3,"title":"다른 선택지","slug":"other-options-1"},{"level":2,"title":"E2E 테스트","slug":"e2e-testing"},{"level":3,"title":"E2E 테스트 솔루션 선택","slug":"choosing-an-e2e-testing-solution"},{"level":3,"title":"추천","slug":"recommendation-2"},{"level":3,"title":"다른 선택지","slug":"other-options-2"},{"level":2,"title":"레시피","slug":"recipes"},{"level":3,"title":"프로젝트에 Vitest 추가","slug":"adding-vitest-to-a-project"},{"level":3,"title":"컴포저블 테스트","slug":"testing-composables"}],"relativePath":"guide/scaling-up/testing.md"}',x=Object.assign({},{__name:"testing",setup:s=>(s,n)=>(a(),o("div",null,[g,F(u,null,{default:i((()=>[v,f,m])),_:1}),b]))});export{E as __pageData,x as default};
