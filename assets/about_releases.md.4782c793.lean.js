import{r as e,b as a,c as r,d as s,t,e as i,a as n,o}from"./app.167560ec.js";const l=s("h1",{id:"releases",tabindex:"-1"},[i("Releases "),s("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),p=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"현재 이 문서는 번역 작업이 진행중입니다")],-1),c={key:0},d=i(" The current latest stable version of Vue is "),h=i(". "),u={key:1},m=n("",24),f='{"title":"Releases","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Release Cycle","slug":"release-cycle"},{"level":2,"title":"Semantic Versioning Edge Cases","slug":"semantic-versioning-edge-cases"},{"level":3,"title":"TypeScript Definitions","slug":"typescript-definitions"},{"level":3,"title":"Compiled Code Compatibility with Older Runtime","slug":"compiled-code-compatibility-with-older-runtime"},{"level":2,"title":"Pre Releases","slug":"pre-releases"},{"level":2,"title":"Deprecations","slug":"deprecations"},{"level":2,"title":"RFCs","slug":"rfcs"},{"level":2,"title":"Experimental Features","slug":"experimental-features"}],"relativePath":"about/releases.md"}',g={},b=Object.assign(g,{setup(i){let n=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");n.value=(await e.json())[0].name})),(e,a)=>(o(),r("div",null,[l,p,n.value?(o(),r("p",c,[d,s("strong",null,t(n.value),1),h])):(o(),r("p",u," Checking latest version... ")),m]))}});export{f as __pageData,b as default};
