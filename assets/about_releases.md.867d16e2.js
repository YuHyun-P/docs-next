import{r as e,b as a,o as r,c as s,d as t,t as i,e as n,a as o}from"./app.67c43c2b.js";const l=t("h1",{id:"releases",tabindex:"-1"},[n("Releases "),t("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),p={key:0},d=n(" The current latest stable version of Vue is "),c=n(". "),h={key:1},u=o('<p>A full changelog of past releases is available on <a href="https://github.com/vuejs/core/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">GitHub</a>.</p><h2 id="release-cycle" tabindex="-1">Release Cycle <a class="header-anchor" href="#release-cycle" aria-hidden="true">#</a></h2><p>Vue does not have a fixed release cycle.</p><ul><li><p>Patch releases are released as needed.</p></li><li><p>Minor releases always contain new features, with a typical time frame of 3~6 months in between. Minor releases always go through a beta pre-release phase.</p></li><li><p>Major releases will be announced ahead of time, and will go through an early discussion phase and alpha / beta pre-release phases.</p></li></ul><h2 id="semantic-versioning-edge-cases" tabindex="-1">Semantic Versioning Edge Cases <a class="header-anchor" href="#semantic-versioning-edge-cases" aria-hidden="true">#</a></h2><p>Vue releases follow <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">Semantic Versioning</a> with a few edge cases.</p><h3 id="typescript-definitions" tabindex="-1">TypeScript Definitions <a class="header-anchor" href="#typescript-definitions" aria-hidden="true">#</a></h3><p>We may ship incompatible changes to TypeScript definitions between <strong>minor</strong> versions. This is because:</p><ol><li><p>Sometimes TypeScript itself ships incompatible changes between minor versions, and we may have to adjust types to support newer versions of TypeScript.</p></li><li><p>Occasionally we may need to adopt features that are only available in a newer version of TypeScript, raising the minimum required version of TypeScript.</p></li></ol><p>If you are using TypeScript, you can use a semver range that locks the current minor and manually upgrade when a new minor version of Vue is released.</p><h3 id="compiled-code-compatibility-with-older-runtime" tabindex="-1">Compiled Code Compatibility with Older Runtime <a class="header-anchor" href="#compiled-code-compatibility-with-older-runtime" aria-hidden="true">#</a></h3><p>A newer <strong>minor</strong> version of Vue compiler may generate code that isn&#39;t compatible with the Vue runtime from an older minor version. For example, code generated by Vue 3.2 compiler may not be fully compatible if consumed by the runtime from Vue 3.1.</p><p>This is only a concern for library authors, because in applications, the compiler version and the runtime version is always the same. A version mismatch can only happen if you ship pre-compiled Vue component code as a package, and a consumer uses it in a project using an older version of Vue. As a result, your package may need to explicit declare a minimum required minor version of Vue.</p><h2 id="pre-releases" tabindex="-1">Pre Releases <a class="header-anchor" href="#pre-releases" aria-hidden="true">#</a></h2><p>Minor releases typically go through a non-fixed number of beta releases. Major releases will go through an alpha phase and a beta phase.</p><p>Pre-releases are meant for integration / stability testing, and for early adopters to provide feedback for unstable features. Do not use pre-releases in production. All pre-releases are considered unstable and may ship breaking changes in between, so always pin to exact versions when using pre-releases.</p><h2 id="deprecations" tabindex="-1">Deprecations <a class="header-anchor" href="#deprecations" aria-hidden="true">#</a></h2><p>We may periodically deprecate features that have new, better replacements in minor releases. Deprecated features will continue to work, and will be removed in the next major release after it entered deprecated status.</p><h2 id="rfcs" tabindex="-1">RFCs <a class="header-anchor" href="#rfcs" aria-hidden="true">#</a></h2><p>New features with substantial API surface and major changes to Vue will go through the <strong>Request for Comments</strong> (RFC) process. The RFC process is intended to provide a consistent and controlled path for new features to enter the framework, and give the users an opportunity to participate and offer feedback in the design process.</p><p>The RFC process is conducted in the <a href="https://github.com/vuejs/rfcs" target="_blank" rel="noopener noreferrer">vuejs/rfcs</a> repo on GitHub.</p><h2 id="experimental-features" tabindex="-1">Experimental Features <a class="header-anchor" href="#experimental-features" aria-hidden="true">#</a></h2><p>Some features are shipped and documented in a stable version of Vue, but marked as experimental. Experimental features are typically features that have an associated RFC discussion with most of the design problems resolved on paper, but still lacking feedback from real world usage.</p><p>The goal of experimental features is to allow users to provide feedback for them by testing them in a production setting, without having to use an unstable version of Vue. Experimental features themselves are considered unstable, and should only be used in a controlled manner, with the expectation that the feature may change between any release types.</p>',24),m='{"title":"Releases","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Release Cycle","slug":"release-cycle"},{"level":2,"title":"Semantic Versioning Edge Cases","slug":"semantic-versioning-edge-cases"},{"level":3,"title":"TypeScript Definitions","slug":"typescript-definitions"},{"level":3,"title":"Compiled Code Compatibility with Older Runtime","slug":"compiled-code-compatibility-with-older-runtime"},{"level":2,"title":"Pre Releases","slug":"pre-releases"},{"level":2,"title":"Deprecations","slug":"deprecations"},{"level":2,"title":"RFCs","slug":"rfcs"},{"level":2,"title":"Experimental Features","slug":"experimental-features"}],"relativePath":"about/releases.md"}',f=Object.assign({},{name:"releases",setup(n){let o=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");o.value=(await e.json())[0].name})),(e,a)=>(r(),s("div",null,[l,o.value?(r(),s("p",p,[d,t("strong",null,i(o.value),1),c])):(r(),s("p",h," Checking latest version... ")),u]))}});export{m as __pageData,f as default};
