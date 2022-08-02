import{_ as e,o as t,c as a,a as o}from"./app.07b32141.js";const r='{"title":"Frequently Asked Questions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Who maintains Vue?","slug":"who-maintains-vue"},{"level":2,"title":"What license does Vue use?","slug":"what-license-does-vue-use"},{"level":2,"title":"What browsers does Vue support?","slug":"what-browsers-does-vue-support"},{"level":2,"title":"Is Vue reliable?","slug":"is-vue-reliable"},{"level":2,"title":"Is Vue fast?","slug":"is-vue-fast"},{"level":2,"title":"Is Vue lightweight?","slug":"is-vue-lightweight"},{"level":2,"title":"Does Vue scale?","slug":"does-vue-scale"},{"level":2,"title":"How do I contribute to Vue?","slug":"how-do-i-contribute-to-vue"},{"level":2,"title":"What\'s the difference between Vue 2 and Vue 3?","slug":"what-s-the-difference-between-vue-2-and-vue-3"},{"level":2,"title":"Should I use Options API or Composition API?","slug":"should-i-use-options-api-or-composition-api"},{"level":2,"title":"Should I use JavaScript or TypeScript with Vue?","slug":"should-i-use-javascript-or-typescript-with-vue"},{"level":2,"title":"How does Vue compare to Web Components?","slug":"how-does-vue-compare-to-web-components"}],"relativePath":"about/faq.md"}',i={},n=[o('<div class="warning custom-block"><p class="custom-block-title">현재 이 문서는 번역 작업이 진행중입니다</p></div><h1 id="frequently-asked-questions" tabindex="-1">Frequently Asked Questions <a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a></h1><h2 id="who-maintains-vue" tabindex="-1">Who maintains Vue? <a class="header-anchor" href="#who-maintains-vue" aria-hidden="true">#</a></h2><p>Vue is an independent, community-driven project. It was created by <a href="https://twitter.com/youyuxi" target="_blank" rel="noopener noreferrer">Evan You</a> in 2014 as a personal side project. Today, Vue is actively maintained by <a href="/about/team.html">a team of both full-time and volunteer members from all around the world</a>, where Evan serves as the project lead. You can learn more about the story of Vue in this <a href="https://www.youtube.com/watch?v=OrxmtDw4pVI" target="_blank" rel="noopener noreferrer">documentary</a>.</p><p>Vue&#39;s development is primarily funded through sponsorships and we have been financially sustainable since 2016. If you or your business benefit from Vue, consider <a href="/sponsor/">sponsoring us</a> to support Vue&#39;s development!</p><h2 id="what-license-does-vue-use" tabindex="-1">What license does Vue use? <a class="header-anchor" href="#what-license-does-vue-use" aria-hidden="true">#</a></h2><p>Vue is a free and open source project released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.</p><h2 id="what-browsers-does-vue-support" tabindex="-1">What browsers does Vue support? <a class="header-anchor" href="#what-browsers-does-vue-support" aria-hidden="true">#</a></h2><p>The latest version of Vue (3.x) only supports <a href="https://caniuse.com/es6" target="_blank" rel="noopener noreferrer">browsers with native ES2015 support</a>. This excludes IE11. Vue 3.x uses ES2015 features that cannot be polyfilled in legacy browsers, so if you need to support legacy browsers, you will need to use Vue 2.x instead.</p><h2 id="is-vue-reliable" tabindex="-1">Is Vue reliable? <a class="header-anchor" href="#is-vue-reliable" aria-hidden="true">#</a></h2><p>Vue is a mature and battle-tested framework. It is one of the most widely used JavaScript frameworks in production today, with over 1.5 million users worldwide, and is downloaded close to 10 million times a month on npm.</p><p>Vue is used in production by renowned organizations in varying capacities all around the world, including Wikimedia Foundation, NASA, Apple, Google, Microsoft, GitLab, Zoom, Tencent, Weibo, Bilibili, Kuaishou, and many more.</p><h2 id="is-vue-fast" tabindex="-1">Is Vue fast? <a class="header-anchor" href="#is-vue-fast" aria-hidden="true">#</a></h2><p>Vue 3 is one of the most performant mainstream frontend frameworks, and handles most web application use cases with ease, without the need for manual optimizations.</p><p>In stress-testing scenarios, Vue out-performs React and Angular by a decent margin in the <a href="https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html" target="_blank" rel="noopener noreferrer">js-framework-benchmark</a>. It also goes neck-and-neck against some of the fastest production-level non-Virtual-DOM frameworks in the benchmark.</p><p>Do note that synthetic benchmarks like the above focus on raw rendering performance with dedicated optimizations and may not be fully representative of real-world performance results. If you care more about page load performance, you are welcome to audit this very website using <a href="https://www.webpagetest.org/lighthouse" target="_blank" rel="noopener noreferrer">WebPageTest</a> or <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>. This website is powered by Vue itself, with SSG pre-rendering, full page hydration and SPA client-side navigation. It scores 100 in performance on an emulated Moto G4 with 4x CPU throttling over slow 4G networks.</p><p>You can learn more about how Vue automatically optimizes runtime performance in the <a href="/guide/extras/rendering-mechanism.html">Rendering Mechanism</a> section, and how to optimize a Vue app in particularly demanding cases in the <a href="/guide/best-practices/performance.html">Performance Optimization Guide</a>.</p><h2 id="is-vue-lightweight" tabindex="-1">Is Vue lightweight? <a class="header-anchor" href="#is-vue-lightweight" aria-hidden="true">#</a></h2><p>When you use a build tool, many of Vue&#39;s APIs are <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking" target="_blank" rel="noopener noreferrer">&quot;tree-shakable&quot;</a>. For example, if you don&#39;t use the built-in <code>&lt;Transition&gt;</code> component, it won&#39;t be included in the final production bundle.</p><p>A hello world Vue app that only uses the absolutely minimal APIs has a baseline size of only around <strong>16kb</strong>, with minification and brotli compression. The actual size of the application will depend on how many optional features you use from the framework. In the unlikely case where an app uses every single feature that Vue provides, the total runtime size is around <strong>27kb</strong>.</p><p>When using Vue without a build tool, we not only lose tree-shaking, but also have to ship the template compiler to the browser. This bloats up the size to around <strong>41kb</strong>. Therefore, if you are using Vue primarily for progressive enhancement without a build step, consider using <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noopener noreferrer">petite-vue</a> (only <strong>6kb</strong>) instead.</p><p>Some frameworks, such as Svelte, use a compilation strategy that produces extremely lightweight output in single-component scenarios. However, <a href="https://github.com/yyx990803/vue-svelte-size-analysis" target="_blank" rel="noopener noreferrer">our research</a> shows that the size difference heavily depends on the number of components in the application. While Vue has a heavier baseline size, it generates less code per component. In real-world scenarios, a Vue app may very well end up being lighter.</p><h2 id="does-vue-scale" tabindex="-1">Does Vue scale? <a class="header-anchor" href="#does-vue-scale" aria-hidden="true">#</a></h2><p>Yes. Despite a common misconception that Vue is only suitable for simple use cases, Vue is perfectly capable of handling large scale applications:</p><ul><li><p><a href="/guide/scaling-up/sfc.html">Single-File Components</a> provide a modularized development model that allows different parts of an application to be developed in isolation.</p></li><li><p><a href="/guide/reusability/composables.html">Composition API</a> provides first-class TypeScript integration and enables clean patterns for organizing, extracting and reusing complex logic.</p></li><li><p><a href="/guide/scaling-up/tooling.html">Comprehensive tooling support</a> ensures a smooth development experience as the application grows.</p></li><li><p>Lower barrier to entry and excellent documentation translate to lower onboarding and training costs for new developers.</p></li></ul><h2 id="how-do-i-contribute-to-vue" tabindex="-1">How do I contribute to Vue? <a class="header-anchor" href="#how-do-i-contribute-to-vue" aria-hidden="true">#</a></h2><p>We appreciate your interest! Please check out our <a href="/about/community-guide.html">Community Guide</a>.</p><h2 id="what-s-the-difference-between-vue-2-and-vue-3" tabindex="-1">What&#39;s the difference between Vue 2 and Vue 3? <a class="header-anchor" href="#what-s-the-difference-between-vue-2-and-vue-3" aria-hidden="true">#</a></h2><p>Vue 3 is the current, latest major version of Vue. It contains new features that are not present in Vue 2 (most notably Composition API), and also contains breaking changes that makes it incompatible with Vue 2. Despite the differences, the majority of Vue APIs are shared between the two major versions, so most of your Vue 2 knowledge will continue to work in Vue 3.</p><p>In general, Vue 3 provides smaller bundle sizes, better performance, better scalability, and better TypeScript / IDE support. If you are starting a new project today, Vue 3 is the recommended choice. There are only a few reasons for you to consider Vue 2 as of now:</p><ul><li><p>You need to support IE11. Vue 3 leverages modern JavaScript features and does not support IE11.</p></li><li><p>You are still waiting for major ecosystem projects like Nuxt or Vuetify to release stable versions for Vue 3. This is reasonable if you do not wish to use beta-stage software. However, do note there are other already stable Vue 3 component libraries such as <a href="https://quasar.dev/" target="_blank" rel="noopener noreferrer">Quasar</a>, <a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">Naive UI</a> and <a href="https://element-plus.org/" target="_blank" rel="noopener noreferrer">Element Plus</a>.</p></li></ul><p>If you intend to migrate an existing Vue 2 app to Vue 3, consult the dedicated <a href="https://v3-migration.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3 Migration Guide</a>.</p><p>Vue 2 has shipped a final minor release (2.7) in July 2022, which backports a selected subset of new features from Vue 3. Vue 2 has now entered maintenance mode: it will no longer ship new features, but will continue to receive critical bug fixes and security updates until the end of 2023.</p><h2 id="should-i-use-options-api-or-composition-api" tabindex="-1">Should I use Options API or Composition API? <a class="header-anchor" href="#should-i-use-options-api-or-composition-api" aria-hidden="true">#</a></h2><p>If you are new to Vue, we provide a high-level comparison between the two styles <a href="/guide/introduction.html#which-to-choose">here</a>.</p><p>If you have previously used Options API and are currently evaluating Composition API, check out <a href="/guide/extras/composition-api-faq.html">this FAQ</a>.</p><h2 id="should-i-use-javascript-or-typescript-with-vue" tabindex="-1">Should I use JavaScript or TypeScript with Vue? <a class="header-anchor" href="#should-i-use-javascript-or-typescript-with-vue" aria-hidden="true">#</a></h2><p>While Vue itself is implemented in TypeScript and provides first-class TypeScript support, it does not enforce an opinion on whether you should use TypeScript as a user.</p><p>TypeScript support is an important consideration when new features are added to Vue. APIs that are designed with TypeScript in mind are typically easier for IDEs and linters to understand, even if you aren&#39;t using TypeScript yourself. Everybody wins. Vue APIs are also designed to work the same way in both JavaScript and TypeScript as much as possible.</p><p>Adopting TypeScript involves a trade-off between onboarding complexity and long-term maintainability gains. Whether such a trade-off can be justified can vary depending on your team&#39;s background and project scale, but Vue isn&#39;t really an influencing factor in making that decision.</p><h2 id="how-does-vue-compare-to-web-components" tabindex="-1">How does Vue compare to Web Components? <a class="header-anchor" href="#how-does-vue-compare-to-web-components" aria-hidden="true">#</a></h2><p>Vue was created before Web Components were natively available, and some aspects of Vue&#39;s design (e.g. slots) were inspired by the Web Components model.</p><p>The Web Components specs are relatively low-level, as they are centered around defining custom elements. As a framework, Vue addresses additional higher-level concerns such as efficient DOM rendering, reactive state management, tooling, client-side routing, and server-side rendering.</p><p>Vue also fully supports consuming or exporting to native custom elements - check out the <a href="/guide/extras/web-components.html">Vue and Web Components Guide</a> for more details.</p>',44)];var s=e(i,[["render",function(e,o,r,i,s,l){return t(),a("div",null,n)}]]);export{r as __pageData,s as default};
