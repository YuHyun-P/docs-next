import{r as e,b as a,o as r,c as s,d as t,t as i,e as n,a as o}from"./app.67c43c2b.js";const l=t("h1",{id:"releases",tabindex:"-1"},[n("Releases "),t("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),p={key:0},d=n(" The current latest stable version of Vue is "),c=n(". "),h={key:1},u=o("",24),m='{"title":"Releases","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Release Cycle","slug":"release-cycle"},{"level":2,"title":"Semantic Versioning Edge Cases","slug":"semantic-versioning-edge-cases"},{"level":3,"title":"TypeScript Definitions","slug":"typescript-definitions"},{"level":3,"title":"Compiled Code Compatibility with Older Runtime","slug":"compiled-code-compatibility-with-older-runtime"},{"level":2,"title":"Pre Releases","slug":"pre-releases"},{"level":2,"title":"Deprecations","slug":"deprecations"},{"level":2,"title":"RFCs","slug":"rfcs"},{"level":2,"title":"Experimental Features","slug":"experimental-features"}],"relativePath":"about/releases.md"}',f=Object.assign({},{name:"releases",setup(n){let o=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");o.value=(await e.json())[0].name})),(e,a)=>(r(),s("div",null,[l,o.value?(r(),s("p",p,[d,t("strong",null,i(o.value),1),c])):(r(),s("p",h," Checking latest version... ")),u]))}});export{m as __pageData,f as default};
