import{_ as s,c as a,o as e,a as n}from"./app.923ab4a8.js";const l='{"title":"성능 (Performance)","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"개요","slug":"overview"},{"level":2,"title":"프로파일링 옵션 (profiling options)","slug":"profiling-options"},{"level":2,"title":"페이지 로드 최적화","slug":"page-load-optimizations"},{"level":3,"title":"번들 크기 및 트리 쉐이킹 (tree-shaking)","slug":"bundle-size-and-tree-shaking"},{"level":3,"title":"코드 분할","slug":"code-splitting"},{"level":3,"title":"SSR / SSG","slug":"ssr-ssg"},{"level":2,"title":"업데이트 최적화","slug":"update-optimizations"},{"level":3,"title":"Props 안정성","slug":"props-stability"},{"level":3,"title":"v-once","slug":"v-once"},{"level":3,"title":"v-memo","slug":"v-memo"},{"level":2,"title":"일반적인 최적화","slug":"general-optimizations"},{"level":3,"title":"대규모 목록 가상화","slug":"virtualize-large-lists"},{"level":3,"title":"큰 불변 구조에 대한 반응성 오버헤드 감소","slug":"reduce-reactivity-overhead-for-large-immutable-structures"},{"level":3,"title":"불필요한 컴포넌트 추상화 방지","slug":"avoid-unnecessary-component-abstractions"}],"relativePath":"guide/best-practices/performance.md"}',o={},p=[n('<h1 id="performance" tabindex="-1">성능 (Performance) <a class="header-anchor" href="#performance" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">개요 <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Vue는 수동 최적화가 크게 필요하지 않은 가장 일반적인 사용 사례에 적합하도록 설계되었습니다. 그러나 추가 미세 조정이 필요한 어려운 시나리오가 항상 있습니다. 이 섹션에서는 Vue 앱 성능과 관련하여 주의해야 할 사항에 대해 설명합니다.</p><p>먼저 웹 성능의 두 가지 주요 측면에 대해 논의해 보겠습니다:</p><ul><li><p><strong>페이지 로드 성능</strong>: 앱이 콘텐츠를 표시하고 초기 방문 시 대화형이 되는 속도. 이는 일반적으로 <a href="https://web.dev/lcp/" target="_blank" rel="noopener noreferrer">최대 콘텐츠 풀 페인트(LCP: Largest Contentful Paint)</a> 및 <a href="https://web.dev/fid/" target="_blank" rel="noopener noreferrer">최초 입력 지연(FID: First Input Delay)</a>와 같은 웹 필수 측정기들을 사용하여 측정됩니다.</p></li><li><p><strong>업데이트 성능</strong>: 사용자 입력에 대한 응답으로 앱이 업데이트되는 속도. 예를 들어 사용자가 검색 상자에 입력할 때 목록이 업데이트되는 속도 또는 사용자가 싱글 페이지 앱(SPA)에서 탐색 링크를 클릭할 때 페이지가 전환되는 속도입니다.</p></li></ul><p>두 가지를 모두 최대화하는 것이 이상적이지만, 서로 다른 프론트엔드 아키텍처는 성능을 얼마나 쉽게 달성할 수 있는지에 영향을 미칩니다. 또한 성능의 우선순위를 어떻게 지정했냐에 따라 구축하는 앱이 크게 영향을 받습니다. 따라서 최적의 성능을 보장하는 첫 번째 단계는 구축 중인 앱에 적합한 아키텍처를 선택하는 것입니다.</p><ul><li><p>Vue를 다양한 방식으로 활용하는 방법을 보려면 <a href="/guide/extras/ways-of-using-vue.html">Vue 사용 방법</a>을 참조하세요.</p></li><li><p>Jason Miller의 블로그 <a href="https://jasonformat.com/application-holotypes/" target="_blank" rel="noopener noreferrer">Application Holotypes</a>(앱 유형)에서 웹 앱의 유형과 이상적인 구현 및 제공에 대해 논의합니다.</p></li></ul><h2 id="profiling-options" tabindex="-1">프로파일링 옵션 (profiling options) <a class="header-anchor" href="#profiling-options" aria-hidden="true">#</a></h2><p>성능을 개선하려면 먼저 측정 방법을 알아야 합니다. 이와 관련하여 도움이 될 수 있는 훌륭한 도구가 많이 있습니다.</p><p>프로덕션 배포의 로드 성능 프로파일링:</p><ul><li><a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li><li><a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">WebPageTest</a></li></ul><p>로컬 개발 중 성능 프로파일링:</p><ul><li><a href="https://developer.chrome.com/docs/devtools/evaluate-performance/" target="_blank" rel="noopener noreferrer">크롬 개발자도구 성능(Performance) 패널</a><ul><li><a href="/api/application.html#app-config-performance"><code>app.config.performance</code></a>는 크롬 개발자도구의 성능 타임라인에서 Vue 관련 성능 마커를 활성화합니다.</li></ul></li><li><a href="/guide/scaling-up/tooling.html#browser-devtools">Vue 개발자도구 확장</a>은 성능 프로파일링 기능도 제공합니다.</li></ul><h2 id="page-load-optimizations" tabindex="-1">페이지 로드 최적화 <a class="header-anchor" href="#page-load-optimizations" aria-hidden="true">#</a></h2><p>페이지 로드 성능을 최적화하는 것은 프레임워크에 구애받지 않는 경우가 많습니다. 포괄적인 정리 내용은 <a href="https://web.dev/fast/" target="_blank" rel="noopener noreferrer">web.dev 가이드</a>를 확인하세요. 여기서는 주로 Vue에 특화된 기술에 초점을 맞출 것입니다.</p><h3 id="bundle-size-and-tree-shaking" tabindex="-1">번들 크기 및 트리 쉐이킹 (tree-shaking) <a class="header-anchor" href="#bundle-size-and-tree-shaking" aria-hidden="true">#</a></h3><p>페이지 로드 성능을 향상시키는 가장 효과적인 방법 중 하나는 더 작은 JavaScript 번들을 제공하는 것입니다. Vue를 사용할 때 번들 크기를 줄이는 몇 가지 방법은 다음과 같습니다:</p><ul><li><p>가능하면 빌드 단계를 사용하십시오.</p><ul><li><p>Vue의 많은 API는 최신 빌드 도구를 통해 번들로 제공되는 경우, <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking" target="_blank" rel="noopener noreferrer">&quot;트리 쉐이킹&quot;</a>합니다. 예를 들어 내장된 <code>&lt;Transition&gt;</code> 컴포넌트를 사용하지 않으면, 최종 프로덕션 번들에 포함되지 않습니다. 트리 쉐이킹은 소스 코드에서 사용하지 않는 다른 모듈도 제거할 수 있습니다.</p></li><li><p>빌드 단계를 사용할 때, 템플릿이 미리 컴파일되므로 Vue 컴파일러를 브라우저에 제공할 필요가 없습니다. 이것은 <strong>14kb</strong> 만큼을 절약 후 min+gzip으로 압축된 JavaScript로 런타임 컴파일 비용을 방지합니다.</p></li></ul></li><li><p>새로운 종속성을 도입할 때 크기에 주의하십시오! 실제 앱에서 비대해진 번들은 대부분 자신도 모르는 사이에 과도한 종속성을 도입한 결과입니다.</p><ul><li><p>빌드 단계를 사용하는 경우, ES 모듈 형식을 제공하고, 트리 쉐이킹 친화적인 종속성을 선호하십시오. 예를 들어 <code>lodash</code>보다 <code>lodash-es</code>를 선호합니다.</p></li><li><p>의존성의 크기를 확인하고 그것이 제공하는 기능의 가치가 있는지 평가하십시오. 종속성이 트리 쉐이킹에 친화적이면 실제 크기 증가는 가져오는 API에 따라 달라집니다. <a href="https://bundlejs.com/" target="_blank" rel="noopener noreferrer">bundlejs.com</a>과 같은 도구를 사용하여 빠르게 확인할 수 있지만, 실제 빌드 설정으로 측정하는 것이 항상 가장 정확합니다.</p></li></ul></li><li><p>주로 빌드 단계 없이 Vue를 사용하고 있다면, <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noopener noreferrer">petite-vue</a>(<strong>6kb</strong>)를 사용하는 것이 좋습니다.</p></li></ul><h3 id="code-splitting" tabindex="-1">코드 분할 <a class="header-anchor" href="#code-splitting" aria-hidden="true">#</a></h3><p>코드 분할은 빌드 도구가 앱 번들을 여러 개의 작은 청크로 분할하는 것으로, 로드 또는 요청 시 병렬로 로드할 수 있는 곳입니다. 적절한 코드 분할을 사용하면 페이지 로드 시, 필요한 기능을 즉시 다운로드할 수 있으며, 추가 청크는 필요할 때만 지연 로드되므로 성능이 향상됩니다.</p><p>Rollup(Vite의 기반) 또는 webpack과 같은 번들러는 ESM 동적 가져오기 문법을 감지하여 자동으로 분할 청크를 생성할 수 있습니다.</p><div class="language-js"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// lazy.js와 그 종속성은 별도의 청크로 분할되며,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// `loadLazy()`가 호출될 때만 로드됩니다.</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loadLazy</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lazy.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>지연 로드는 초기 페이지 로드 후 바로 필요하지 않은 기능에 가장 적합합니다. Vue 앱에서 이는 일반적으로 Vue의 <a href="/guide/components/async.html">비동기 컴포넌트</a> 기능과 함께 사용하여 컴포넌트 트리에 대한 분할 청크를 생성합니다:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineAsyncComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// Foo.vue 및 해당 종속성에 대해 별도의 청크가 생성됩니다.</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 비동기 컴포넌트가 페이지에서 렌더링될 때에만 요청하여 가져옵니다.</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineAsyncComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>\n<span class="line"></span></code></pre></div><p>Vue 라우터를 통해 클라이언트 측 라우팅을 사용하는 경우, 라우트 컴포넌트를 비동기 컴포넌트로 사용하는 것이 좋습니다. 자세한 내용은 <a href="https://router.vuejs.org/guide/advanced/lazy-loading.html" target="_blank" rel="noopener noreferrer">라우트 지연 로드</a>를 참조하십시오.</p><h3 id="ssr-ssg" tabindex="-1">SSR / SSG <a class="header-anchor" href="#ssr-ssg" aria-hidden="true">#</a></h3><p>순수한 클라이언트 측 렌더링은 콘텐츠 생성 시간이 느립니다. 이는 SSR(서버 사이드 렌더링) 또는 SSG(정적 사이트 생성)를 사용하여 완화할 수 있습니다. 자세한 내용은 <a href="/guide/scaling-up/ssr.html">SSR 가이드</a>를 확인하세요.</p><h2 id="update-optimizations" tabindex="-1">업데이트 최적화 <a class="header-anchor" href="#update-optimizations" aria-hidden="true">#</a></h2><h3 id="props-stability" tabindex="-1">Props 안정성 <a class="header-anchor" href="#props-stability" aria-hidden="true">#</a></h3><p>Vue에서 자식 컴포넌트는 수신된 props 중 하나 이상이 변경된 경우에만 업데이트됩니다. 다음 예제를 봅시다:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ListItem</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">active-id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">activeId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre></div><p><code>&lt;ListItem&gt;</code> 컴포넌트 내에서 <code>id</code> 및 <code>activeId</code> prop을 사용하여 현재 활성 아이템인지 여부를 결정합니다. 이것이 작동하는 동안 문제는 <code>activeId</code>가 변경될 때마다 목록의 <strong>모든</strong> <code>&lt;ListItem&gt;</code>이 업데이트되어야 한다는 것입니다!</p><p>이상적으로는 활성 상태가 변경된 아이템만 업데이트되어야 합니다. 활성 상태 계산을 부모로 이동하고, <code>&lt;ListItem&gt;</code>이 <code>active</code> prop을 직접 받도록 하여 이를 달성할 수 있습니다:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ListItem</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">active</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;"> === </span><span style="color:#A6ACCD;">activeId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"></span></code></pre></div><p>이제 대부분의 컴포넌트에서 <code>active</code> prop은 <code>activeId</code>가 변경될 때 동일하게 유지되므로, 더 이상 업데이트할 필요가 없습니다. 이 개념은 일반적으로 자식 컴포넌트에 전달되는 prop을 가능한 한 안정적으로 유지하는 것입니다.</p><h3 id="v-once" tabindex="-1"><code>v-once</code> <a class="header-anchor" href="#v-once" aria-hidden="true">#</a></h3><p><code>v-once</code>는 런타임 데이터에 의존하지만, 업데이트할 필요가 없는 콘텐츠를 렌더링하는 데 사용할 수 있는 내장 디렉티브입니다. 이것을 사용하는 컴포넌트 내 전체 하위 트리는 이후 모든 업데이트를 건너뜁니다. 자세한 내용은 <a href="/api/built-in-directives.html#v-once">API 참조</a>를 참조하세요.</p><h3 id="v-memo" tabindex="-1"><code>v-memo</code> <a class="header-anchor" href="#v-memo" aria-hidden="true">#</a></h3><p><code>v-memo</code>는 큰 하위 트리 또는 <code>v-for</code> 목록의 업데이트를 조건부로 건너뛰는 데 사용할 수 있는 내장 디렉티브입니다. 자세한 내용은 <a href="/api/built-in-directives.html#v-memo">API 참조</a>를 참조하세요.</p><h2 id="general-optimizations" tabindex="-1">일반적인 최적화 <a class="header-anchor" href="#general-optimizations" aria-hidden="true">#</a></h2><blockquote><p>다음 팁은 페이지 로드와 업데이트 성능에 모두 영향을 미칩니다.</p></blockquote><h3 id="virtualize-large-lists" tabindex="-1">대규모 목록 가상화 <a class="header-anchor" href="#virtualize-large-lists" aria-hidden="true">#</a></h3><p>모든 프론트엔드 앱에서 가장 일반적인 성능 문제 중 하나는, 큰 목록을 렌더링하는 것입니다. 프레임워크의 성능이 아무리 뛰어나더라도 수천 개의 아이템이 포함된 목록을 렌더링하는 것은 <strong>브라우저가 처리해야 하는 DOM 노드의 수 때문에 느려질 것</strong>입니다.</p><p>그러나 모든 노드를 미리 렌더링할 필요는 없습니다. 대부분의 경우, 사용자의 화면 크기는 큰 목록의 작은 하위 집합만 표시할 수 있습니다. 큰 목록에서 현재 표시 영역에 있거나 가까운 아이템만 렌더링하는 기술인 <strong>목록 가상화</strong>로 성능을 크게 향상할 수 있습니다.</p><p>목록 가상화를 구현하는 것은 쉽지 않습니다. 다행히 직접 사용할 수 있는 기존 커뮤니티 라이브러리가 있습니다:</p><ul><li><a href="https://github.com/Akryum/vue-virtual-scroller" target="_blank" rel="noopener noreferrer">vue-virtual-scroller</a></li><li><a href="https://github.com/rocwang/vue-virtual-scroll-grid" target="_blank" rel="noopener noreferrer">vue-virtual-scroll-grid</a></li></ul><h3 id="reduce-reactivity-overhead-for-large-immutable-structures" tabindex="-1">큰 불변 구조에 대한 반응성 오버헤드 감소 <a class="header-anchor" href="#reduce-reactivity-overhead-for-large-immutable-structures" aria-hidden="true">#</a></h3><p>Vue의 반응형 시스템은 기본적으로 깊습니다. 이러면 상태 관리가 직관적이지만, 데이터 크기가 클 경우 특정 수준의 오버헤드가 발생하는데, 이것은 모든 속성 접근이 종속성 추적을 수행하는 프록시 트랩을 트리거하기 때문입니다. 이것은 일반적으로 깊이 중첩된 객체의 큰 배열을 처리할 때, 단일 렌더가 100,000개 이상의 속성에 액세스하는 경우 눈에 띄게 나타나므로, 매우 특정한 사용 사례에만 영향을 미칩니다.</p><p>Vue는 <a href="/api/reactivity-advanced.html#shallowref"><code>shallowRef()</code></a> 및 <a href="/api/reactivity-advanced.html#shallowreactive"><code>shallowReactive()</code></a>를 사용하여, 깊은 반응형을 opt-out하는 탈출구를 제공합니다. 얕은 API는 루트 수준에서만 반응하는 상태를 생성하고, 모든 중첩된 객체를 그대로 노출합니다. 이렇게 하면 중첩된 속성에 빠르게 액세스할 수 있으며, 모든 중첩된 객체는 변경할 수 없는 것처럼 처리해야 하고, 루트 상태를 교체해야만 업데이트가 트리거될 수 있습니다:</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> shallowArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shallowRef</span><span style="color:#A6ACCD;">([</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 깊은 객체의 큰 목록 */</span></span>\n<span class="line"><span style="color:#A6ACCD;">])</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 업데이트가 실행되지 않습니다...</span></span>\n<span class="line"><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(newObject)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 이것은 다음을 수행합니다:</span></span>\n<span class="line"><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">shallowArr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newObject]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 업데이트가 실행되지 않습니다...</span></span>\n<span class="line"><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 이것은 다음을 수행합니다:</span></span>\n<span class="line"><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">shallowArray</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span></span>\n<span class="line"></span></code></pre></div><h3 id="avoid-unnecessary-component-abstractions" tabindex="-1">불필요한 컴포넌트 추상화 방지 <a class="header-anchor" href="#avoid-unnecessary-component-abstractions" aria-hidden="true">#</a></h3><p>때때로 우리는 더 나은 추상화 또는 코드 구성을 위해, <a href="/guide/components/slots.html#renderless-components">렌더리스 컴포넌트</a> 또는 고차 컴포넌트(예: 다른 컴포넌트를 추가 props로 렌더링하는 컴포넌트)를 만들 수 있습니다. 여기에는 아무런 문제가 없지만, 컴포넌트 인스턴스는 일반 DOM 노드보다 훨씬 비싸고, 추상화 패턴으로 인해 컴포넌트 인스턴스를 너무 많이 생성하면 성능 비용이 발생한다는 점을 명심하십시오.</p><p>몇 개의 인스턴스만 줄이는 것은 눈에 띄는 효과가 없으므로, 컴포넌트가 앱에서 몇 번만 렌더링되는 경우, 이것을 불필요하게 추상화하지 않아도 됩니다. 이 최적화를 고려하는 가장 좋은 시나리오는 &quot;<strong>큰 목록</strong>&quot;입니다. 100개의 아이템 목록이 있고, 각 아이템 컴포넌트에 많은 하위 컴포넌트가 포함되어 있다고 상상해 보십시오. 여기서 불필요한 컴포넌트 추상화 하나를 제거하면, 수백 개의 컴포넌트 인스턴스가 줄어들 수 있습니다.</p>',53)];var t=s(o,[["render",function(s,n,l,o,t,r){return e(),a("div",null,p)}]]);export{l as __pageData,t as default};
