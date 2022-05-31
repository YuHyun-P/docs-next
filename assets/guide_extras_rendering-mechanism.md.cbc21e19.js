import{_ as s,o as e,c as n,a}from"./app.67c43c2b.js";const l='{"title":"Rendering Mechanism","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Virtual DOM","slug":"virtual-dom"},{"level":2,"title":"Render Pipeline","slug":"render-pipeline"},{"level":2,"title":"Templates vs. Render Functions","slug":"templates-vs-render-functions"},{"level":2,"title":"Compiler-Informed Virtual DOM","slug":"compiler-informed-virtual-dom"},{"level":3,"title":"Static Hoisting","slug":"static-hoisting"},{"level":3,"title":"Patch Flags","slug":"patch-flags"},{"level":3,"title":"Tree Flattening","slug":"tree-flattening"},{"level":3,"title":"Impact on SSR Hydration","slug":"impact-on-ssr-hydration"}],"relativePath":"guide/extras/rendering-mechanism.md"}',t={},o=[a('<div class="warning custom-block"><p class="custom-block-title">현재 이 문서는 번역 작업이 진행중입니다</p></div><h1 id="rendering-mechanism" tabindex="-1">Rendering Mechanism <a class="header-anchor" href="#rendering-mechanism" aria-hidden="true">#</a></h1><p>How does Vue take a template and turn it into actual DOM nodes? How does Vue update those DOM nodes efficiently? We will attempt to shed some light on these questions here by diving into Vue&#39;s internal rendering mechanism.</p><h2 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-hidden="true">#</a></h2><p>You have probably heard about the term virtual DOM, which Vue&#39;s rendering system is based upon.</p><p>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM. The concept was pioneered by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, and has been adapted in many other frameworks with different implementations, including Vue.</p><p>Virtual DOM is more of a pattern than a specific technology, so there is no one canonical implementation. We can illustrate the idea using a simple example:</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* more vnodes */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Here, <code>vnode</code> is a plain JavaScript object (a &quot;virtual node&quot;) representing a <code>&lt;div&gt;</code> element. It contains all the information that we need to create the actual element. It also contains more children vnodes, which makes it the root of a virtual DOM tree.</p><p>A runtime renderer can walk a virtual DOM tree and construct a real DOM tree from it. This process is called <strong>mount</strong>.</p><p>If we have two copies of virtual DOM trees, the renderer can also walk and compare the two trees, figuring out the differences, and apply those changes to the actual DOM. This process is called <strong>patch</strong>, also known as &quot;diffing&quot; or &quot;reconciliation&quot;.</p><p>The main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer.</p><h2 id="render-pipeline" tabindex="-1">Render Pipeline <a class="header-anchor" href="#render-pipeline" aria-hidden="true">#</a></h2><p>At the high level, this is what happens when a Vue component is mounted:</p><ol><li><p><strong>Compile</strong>: Vue templates are compiled into <strong>render functions</strong>: functions that return virtual DOM trees. This step can be done either ahead-of-time via a build step, or on-the-fly by using the runtime compiler.</p></li><li><p><strong>Mount</strong>: The runtime renderer invokes the render functions, walks the returned virtual DOM tree, and creates actual DOM nodes based on it. This step is performed as a <a href="./reactivity-in-depth.html">reactive effect</a>, so it keeps track of all reactive dependencies that were used.</p></li><li><p><strong>Patch</strong>: When a dependency used during mount changes, the effect re-runs. This time, a new, updated Virtual DOM tree is created. The runtime renderer walks the new tree, compares it with the old one, and applies necessary updates to the actual DOM.</p></li></ol><p><img src="/assets/render-pipeline.03805016.png" alt=""></p><h2 id="templates-vs-render-functions" tabindex="-1">Templates vs. Render Functions <a class="header-anchor" href="#templates-vs-render-functions" aria-hidden="true">#</a></h2><p>Vue templates are compiled into virtual DOM render functions. Vue also provides APIs that allow us to skip the template compilation step and directly author render functions. Render functions are more flexible than templates when dealing with highly dynamic logic, because you can work with vnodes using the full power of JavaScript.</p><p>So why does Vue recommend templates by default? There are a number of reasons:</p><ol><li><p>Templates are closer to actual HTML. This makes it easier to reuse existing HTML snippets, apply a11y best practices, style with CSS, and for designers to understand and modify.</p></li><li><p>Templates are easier to statically analyze due to their more deterministic syntax. This allows Vue&#39;s template compiler to apply many compile-time optimizations to improve the performance of the virtual DOM (which we will discuss below).</p></li></ol><p>In practice, templates are sufficient for most use cases in applications. Render functions are typically only used in reusable components that need to deal with highly dynamic rendering logic. Render function usage is discussed in more detail in <a href="./render-function.html">Render Functions &amp; JSX</a>.</p><h2 id="compiler-informed-virtual-dom" tabindex="-1">Compiler-Informed Virtual DOM <a class="header-anchor" href="#compiler-informed-virtual-dom" aria-hidden="true">#</a></h2><p>The virtual DOM implementation in React and most other virtual-DOM implementations are purely runtime: the reconciliation algorithm cannot make any assumptions about the incoming virtual DOM tree, so it has to fully traverse the tree and diff the props of every vnode in order to ensure correctness. In addition, even if a part of the tree never changes, new vnodes are always created for them on each re-render, resulting in unnecessary memory pressure. This is one of the most criticized aspect of virtual DOM: the somewhat brute-force reconciliation process sacrifices efficiency in return for declarativeness and correctness.</p><p>But it doesn&#39;t have to be that way. In Vue, the framework controls both the compiler and the runtime. This allows us to implement many compile-time optimizations that only a tightly-coupled renderer can take advantage of. The compiler can statically analyze the template and leave hints in the generated code so that the runtime can take shortcuts whenever possible. At the same time, we still preserve the capability for the user to drop down to the render function layer for more direct control in edge cases. We call this hybrid approach <strong>Compiler-Informed Virtual DOM</strong>.</p><p>Below, we will discuss a few major optimizations done by the Vue template compiler to improve the virtual DOM&#39;s runtime performance.</p><h3 id="static-hoisting" tabindex="-1">Static Hoisting <a class="header-anchor" href="#static-hoisting" aria-hidden="true">#</a></h3><p>Quite often there will be parts in a template that do not contain any dynamic bindings:</p><div class="language-vue-html"><div class="highlight-lines"><br><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- hoisted --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">bar</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- hoisted --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> dynamic </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><a href="https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2PmZvbzwvZGl2PlxuICA8ZGl2PmJhcjwvZGl2PlxuICA8ZGl2Pnt7IGR5bmFtaWMgfX08L2Rpdj5cbjwvZGl2PiIsInNzciI6ZmFsc2UsIm9wdGlvbnMiOnsiaG9pc3RTdGF0aWMiOnRydWV9fQ==" target="_blank" rel="noopener noreferrer">Inspect in Template Explorer</a></p><p>The <code>foo</code> and <code>bar</code> divs are static - re-creating vnodes and diffing them on each re-render is unnecessary. The Vue compiler automatically hoists their vnode creation calls out of the render function, and reuses the same vnodes on every render. The renderer is also able to completely skip diffing them when it notices the old vnode and the new vnode are the same one.</p><p>In addition, when there are enough consecutive static elements, they will be condensed into a single &quot;static vnode&quot; that contains the plain HTML string for all these nodes (<a href="https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvb1wiPmZvbzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9vXCI+Zm9vPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb29cIj5mb288L2Rpdj5cbiAgPGRpdj57eyBkeW5hbWljIH19PC9kaXY+XG48L2Rpdj4iLCJzc3IiOmZhbHNlLCJvcHRpb25zIjp7ImhvaXN0U3RhdGljIjp0cnVlfX0=" target="_blank" rel="noopener noreferrer">Example</a>). These static vnodes are mounted by directly setting <code>innerHTML</code>. They also cache their corresponding DOM nodes on initial mount - if the same piece of content is reused elsewhere in the app, new DOM nodes are created using native <code>cloneNode()</code>, which is extremely efficient.</p><h3 id="patch-flags" tabindex="-1">Patch Flags <a class="header-anchor" href="#patch-flags" aria-hidden="true">#</a></h3><p>For a single element with dynamic bindings, we can also infer a lot of information from it at compile time:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- class binding only --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- id and value bindings only --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- text children only --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> dynamic </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p><a href="https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2IDpjbGFzcz1cInsgYWN0aXZlIH1cIj48L2Rpdj5cblxuPGlucHV0IDppZD1cImlkXCIgOnZhbHVlPVwidmFsdWVcIj5cblxuPGRpdj57eyBkeW5hbWljIH19PC9kaXY+Iiwib3B0aW9ucyI6e319" target="_blank" rel="noopener noreferrer">Inspect in Template Explorer</a></p><p>When generating the render function code for these elements, Vue encodes the type of update each of them needs directly in the vnode creation call:</p><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted"> </div><br></div><pre><code><span class="line"><span style="color:#82AAFF;">createElementVNode</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_normalizeClass</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> _ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">active </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* CLASS */</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>The last argument, <code>2</code>, is a <a href="https://github.com/vuejs/core/blob/main/packages/shared/src/patchFlags.ts" target="_blank" rel="noopener noreferrer">patch flag</a>. An element can have multiple patch flags, which will be merged into a single number. The runtime renderer can then check against the flags using <a href="https://en.wikipedia.org/wiki/Bitwise_operation" target="_blank" rel="noopener noreferrer">bitwise operations</a> to determine whether it needs to do certain work:</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (vnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">patchFlag </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> PatchFlags</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CLASS </span><span style="color:#676E95;font-style:italic;">/* 2 */</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// update the element&#39;s class</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Bitwise checks are extremely fast. With the patch flags, Vue is able to do the least amount of work necessary when updating elements with dynamic bindings.</p><p>Vue also encodes the type of children a vnode has. For example, a template that has multiple root nodes is represented as a fragment. In most cases, we know for sure that the order of these root nodes will never change, so this information can also be provided to the runtime as a patch flag:</p><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted"> </div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">_openBlock</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_createElementBlock</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">_Fragment</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> [</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* children */</span></span>\n<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">64</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/* STABLE_FRAGMENT */</span><span style="color:#F07178;">))</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>The runtime can thus completely skip child-order reconciliation for the root fragment.</p><h3 id="tree-flattening" tabindex="-1">Tree Flattening <a class="header-anchor" href="#tree-flattening" aria-hidden="true">#</a></h3><p>Taking another look at the generated code from the previous example, you&#39;ll notice the root of the returned virtual DOM tree is created using a special <code>createElementBlock()</code> call:</p><div class="language-js"><div class="highlight-lines"><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">_openBlock</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_createElementBlock</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">_Fragment</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#F07178;"> [</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/* children */</span></span>\n<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">64</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/* STABLE_FRAGMENT */</span><span style="color:#F07178;">))</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Conceptually, a &quot;block&quot; is a part of the template that has stable inner structure. In this case, the entire template has a single block because it does not contain any structural directives like <code>v-if</code> and <code>v-for</code>.</p><p>Each block tracks any descendent nodes (not just direct children) that have patch flags. For example:</p><div class="language-vue-html"><div class="highlight-lines"><br><br><div class="highlighted"> </div><br><div class="highlighted"> </div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- root block --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">&lt;!-- not tracked --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">&lt;!-- tracked --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;">&lt;!-- not tracked --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- tracked --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>The result is a flattened array that contains only the dynamic descendent nodes:</p><div class="language-"><pre><code>div (block root)\n- div with :id binding\n- div with {{ bar }} binding\n</code></pre></div><p>When this component needs to re-render, it only needs to traverse the flattened tree instead of the full tree. This is called <strong>Tree Flattening</strong>, and it greatly reduces the number of nodes that need to be traversed during virtual DOM reconciliation. Any static parts of the template are effectively skipped.</p><p><code>v-if</code> and <code>v-for</code> directives will create new block nodes:</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- root block --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- if block --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>A child block is tracked inside the parent block&#39;s array of dynamic descendants. This retains a stable structure for the parent block.</p><h3 id="impact-on-ssr-hydration" tabindex="-1">Impact on SSR Hydration <a class="header-anchor" href="#impact-on-ssr-hydration" aria-hidden="true">#</a></h3><p>Both patch flags and tree flattening also greatly improve Vue&#39;s <a href="/guide/scaling-up/ssr.html#client-hydration">SSR Hydration</a> performance:</p><ul><li><p>Single element hydration can take fast paths based on the corresponding vnode&#39;s patch flag.</p></li><li><p>Only block nodes and their dynamic descendants need to be traversed during hydration, effectively achieving partial hydration at the template level.</p></li></ul>',58)];var p=s(t,[["render",function(s,a,l,t,p,r){return e(),n("div",null,o)}]]);export{l as __pageData,p as default};
