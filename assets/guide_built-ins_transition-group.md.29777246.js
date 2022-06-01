import{M as s,o as n,c as a,d as l,j as o,w as p,F as e,n as t,t as c,N as r,r as i,h as F,C as D,D as C,a as y}from"./app.aaf5bfda.js";import{g}from"./chunks/index.31797bf8.js";const d={class:"demo"},A={name:"ListBasic",setup(i){const F=s([1,2,3,4,5]);let D=F.length+1;function C(){F.splice(g(),0,D++)}function y(){F.splice(g(),1)}function g(){return Math.floor(Math.random()*F.length)}return(s,i)=>(n(),a("div",d,[l("button",{onClick:C},"Add at random index"),l("button",{onClick:y},"Remove at random index"),o(r,{name:"list",tag:"ul",style:{"margin-top":"20px"}},{default:p((()=>[(n(!0),a(e,null,t(F,(s=>(n(),a("li",{key:s},c(s),1)))),128))])),_:1})]))}};const u={class:"demo"},b={name:"ListMove",setup(s){let F=i([1,2,3,4,5]),D=F.value.length+1;function C(){F.value.splice(g(),0,D++)}function y(){F.value.splice(g(),1)}function g(){return Math.floor(Math.random()*F.value.length)}return(s,i)=>(n(),a("div",u,[l("button",{onClick:C},"Add"),l("button",{onClick:y},"Remove"),l("button",{onClick:i[0]||(i[0]=s=>function(s){let n,a=s.length;for(;0!=a;)n=Math.floor(Math.random()*a),a--,[s[a],s[n]]=[s[n],s[a]];return s}(F.value))},"Shuffle"),o(r,{name:"list2",tag:"ul",style:{"margin-top":"20px"}},{default:p((()=>[(n(!0),a(e,null,t(F.value,(s=>(n(),a("li",{class:"list-item",key:s},c(s),1)))),128))])),_:1})]))}},I={class:"demo",style:{height:"265px"}},h=["data-index"],m={name:"ListStagger",setup(s){const y=[{msg:"Bruce Lee"},{msg:"Jackie Chan"},{msg:"Chuck Norris"},{msg:"Jet Li"},{msg:"Kung Fury"}];let d=i("");const A=F((()=>y.filter((s=>s.msg.toLowerCase().includes(d.value)))));function u(s){s.style.opacity=0,s.style.height=0}function b(s,n){g.to(s,{opacity:1,height:"1.6em",delay:.15*s.dataset.index,onComplete:n})}function m(s,n){g.to(s,{opacity:0,height:0,delay:.15*s.dataset.index,onComplete:n})}return(s,i)=>(n(),a("div",I,[D(l("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>d.value=s),style:{"margin-bottom":"20px"}},null,512),[[C,d.value]]),o(r,{tag:"ul",css:!1,onBeforeEnter:u,onEnter:b,onLeave:m},{default:p((()=>[(n(!0),a(e,null,t(A.value,((s,l)=>(n(),a("li",{key:s.msg,"data-index":l},c(s.msg),9,h)))),128))])),_:1})]))}},v=y('<h1 id="transitiongroup" tabindex="-1">TransitionGroup <a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a></h1><p><code>&lt;TransitionGroup&gt;</code> is a built-in component designed for animating the insertion, removal, and order change of elements or components that are rendered in a list.</p><p><code>&lt;TransitionGroup&gt;</code>은 목록에서 렌더링되는 엘리먼트 또는 컴포넌트삽입, 제거 및 순서 변경을 애니메이션으로 만들기 위해 설계된 빌트인 컴포넌트입니다.</p><h2 id="differences-from-transition" tabindex="-1">Differences from <code>&lt;Transition&gt;</code> <a class="header-anchor" href="#differences-from-transition" aria-hidden="true">#</a></h2><h2 id="transition-과의-차이점" tabindex="-1"><code>&lt;Transition&gt;</code> 과의 차이점 <a class="header-anchor" href="#transition-과의-차이점" aria-hidden="true">#</a></h2><p><code>&lt;TransitionGroup&gt;</code>은 <code>&lt;Transition&gt;</code>과 동일한 props, CSS 트랜지션 클래스 및 JavaScript 훅 리스너를 지원하지만, 다음과 같은 차이점이 있습니다:</p><ul><li><p>기본적으로 래퍼 앨리먼트를 렌더링하지 않습니다. 그러나 <code>tag</code> props로 렌더링할 앨리먼트를 지정할 수 있습니다.</p></li><li><p><a href="./transition.html#transition-modes">트랜지션 모드</a> 는 지원하지 않습니다. 왜냐하면 우리는 더 이상 상호 배타적인 앨리먼트를 교체 하지않기 때문입니다.</p></li><li><p>내부 앨리먼트는 항상 유일한 <code>key</code> 속성을 <strong>반드시 가져야 합니다</strong></p></li><li><p>CSS 트랜지션 클래스는 리스트 내부 각 개별 앨리먼트에 적용되며, 그룹/컨테이너 자체에는 적용되지 <strong>않습니다</strong></p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="/guide/essentials/component-basics.html#dom-template-parsing-caveats">DOM 템플릿</a>에서 사용할 때 <code>&lt;transition-group&gt;</code>으로 참조해야 합니다.</p></div><h2 id="enter-leave-transitions" tabindex="-1">Enter / Leave Transitions <a class="header-anchor" href="#enter-leave-transitions" aria-hidden="true">#</a></h2><h2 id="진입-진출-트랜지션" tabindex="-1">진입 / 진출 트랜지션 <a class="header-anchor" href="#진입-진출-트랜지션" aria-hidden="true">#</a></h2><p>다음은 <code>&lt;TransitionGroup&gt;</code>을 사용하여 <code>v-for</code> 목록에 진입/진출 트랜지션을 적용하는 예입니다.</p><div class="language-vue-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-css"><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',13),G=y('<h2 id="move-transitions" tabindex="-1">Move Transitions <a class="header-anchor" href="#move-transitions" aria-hidden="true">#</a></h2><h2 id="이동-트랜지션" tabindex="-1">이동 트랜지션 <a class="header-anchor" href="#이동-트랜지션" aria-hidden="true">#</a></h2><p>The above demo has some obvious flaws: when an item is inserted or removed, its surrounding items instantly &quot;jump&quot; into place instead of moving smoothly. We can fix this by adding a few additional CSS rules:</p><p>위의 데모에는 몇 가지 명백한 결함이 있습니다. 항목을 삽입하거나 제거할 때 주변 항목이 부드럽게 움직이는 대신 제자리에 즉시 &quot;점프&quot;합니다. 몇 가지 추가 CSS 규칙을 추가하여 이 문제를 해결할 수 있습니다.</p><div class="language-css"><div class="highlight-lines"><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br></div><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-move</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* apply transition to moving elements */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-active</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> ease</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-enter-from</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateX</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/* ensure leaving items are taken out of layout flow so that moving</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">   animations can be calculated correctly. */</span></span>\n<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">list-leave-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>이제 훨씬 좋아 보입니다. 전체 목록이 섞일 때 부드럽게 애니메이션이 적용됩니다.</p>',6),X=y('<p><a href="/examples/#list-transition">전체 예제</a></p><h2 id="흔들리는-리스트-트랜지션" tabindex="-1">흔들리는 리스트 트랜지션 <a class="header-anchor" href="#흔들리는-리스트-트랜지션" aria-hidden="true">#</a></h2><p>데이터 속성을 통해 자바스크립트 트랜지션을 수행하면, 흔들리는 트랜지션을 수행할수 있습니다. 일단 DOM 앨리먼트에 data 속성을으로 아이템 인덱스를 가지게 렌더링 해봅니다.</p><div class="language-vue-html"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TransitionGroup</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ul</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">css</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">before-enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onBeforeEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">enter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onEnter</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  @</span><span style="color:#C792EA;">leave</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onLeave</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">) in </span><span style="color:#A6ACCD;">computedList</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">    :</span><span style="color:#C792EA;">data-index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msg </span><span style="color:#89DDFF;">}}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TransitionGroup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>자바스크립트 훅에서, 이 데이터 속성을 이용해서 트랜지션 딜레이를 줄수 있습니다.</p><div class="language-js"><div class="highlight-lines"><br><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onEnter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> done</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.6em</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    delay</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dataset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    onComplete</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">done</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',6),Z=y('<div class="composition-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuXG5jb25zdCBsaXN0ID0gW1xuICB7IG1zZzogJ0JydWNlIExlZScgfSxcbiAgeyBtc2c6ICdKYWNraWUgQ2hhbicgfSxcbiAgeyBtc2c6ICdDaHVjayBOb3JyaXMnIH0sXG4gIHsgbXNnOiAnSmV0IExpJyB9LFxuICB7IG1zZzogJ0t1bmcgRnVyeScgfVxuXVxuXG5jb25zdCBxdWVyeSA9IHJlZignJylcblxuY29uc3QgY29tcHV0ZWRMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubXNnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudmFsdWUpKVxufSlcblxuZnVuY3Rpb24gb25CZWZvcmVFbnRlcihlbCkge1xuICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICBlbC5zdHlsZS5oZWlnaHQgPSAwXG59XG5cbmZ1bmN0aW9uIG9uRW50ZXIoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgaGVpZ2h0OiAnMS42ZW0nLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgZ3NhcC50byhlbCwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICBvbkNvbXBsZXRlOiBkb25lXG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">전체 예제를 온라인 연습장에서 확인하세요</a></p></div><div class="options-api"><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdD5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5cbmNvbnN0IGxpc3QgPSBbXG4gIHsgbXNnOiAnQnJ1Y2UgTGVlJyB9LFxuICB7IG1zZzogJ0phY2tpZSBDaGFuJyB9LFxuICB7IG1zZzogJ0NodWNrIE5vcnJpcycgfSxcbiAgeyBtc2c6ICdKZXQgTGknIH0sXG4gIHsgbXNnOiAnS3VuZyBGdXJ5JyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6ICcnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkTGlzdCgpIHtcbiAgICAgIHJldHVybiBsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5tc2cudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnF1ZXJ5KSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkJlZm9yZUVudGVyKGVsKSB7XG4gICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gMFxuICAgIH0sXG4gICAgb25FbnRlcihlbCwgZG9uZSkge1xuICAgICAgZ3NhcC50byhlbCwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBoZWlnaHQ6ICcxLjZlbScsXG4gICAgICAgIGRlbGF5OiBlbC5kYXRhc2V0LmluZGV4ICogMC4xNSxcbiAgICAgICAgb25Db21wbGV0ZTogZG9uZVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uTGVhdmUoZWwsIGRvbmUpIHtcbiAgICAgIGdzYXAudG8oZWwsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBkZWxheTogZWwuZGF0YXNldC5pbmRleCAqIDAuMTUsXG4gICAgICAgIG9uQ29tcGxldGU6IGRvbmVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXQgdi1tb2RlbD1cInF1ZXJ5XCIgLz5cbiAgPFRyYW5zaXRpb25Hcm91cFxuICAgIHRhZz1cInVsXCJcbiAgICA6Y3NzPVwiZmFsc2VcIlxuICAgIEBiZWZvcmUtZW50ZXI9XCJvbkJlZm9yZUVudGVyXCJcbiAgICBAZW50ZXI9XCJvbkVudGVyXCJcbiAgICBAbGVhdmU9XCJvbkxlYXZlXCJcbiAgPlxuICAgIDxsaVxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNvbXB1dGVkTGlzdFwiXG4gICAgICA6a2V5PVwiaXRlbS5tc2dcIlxuICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXG4gICAgPlxuICAgICAge3sgaXRlbS5tc2cgfX1cbiAgICA8L2xpPlxuICA8L1RyYW5zaXRpb25Hcm91cD5cbjwvdGVtcGxhdGU+XG4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJnc2FwXCI6IFwiaHR0cHM6Ly91bnBrZy5jb20vZ3NhcD9tb2R1bGVcIixcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" target="_blank" rel="noopener noreferrer">전체 예제를 온라인 연습장에서 확인하세요</a></p></div><hr><p><strong>Related</strong></p><ul><li><a href="/api/built-in-components.html#transitiongroup"><code>&lt;TransitionGroup&gt;</code> API reference</a></li></ul>',5),B='{"title":"TransitionGroup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Differences from <Transition>","slug":"differences-from-transition"},{"level":2,"title":"<Transition> 과의 차이점","slug":"transition-과의-차이점"},{"level":2,"title":"Enter / Leave Transitions","slug":"enter-leave-transitions"},{"level":2,"title":"진입 / 진출 트랜지션","slug":"진입-진출-트랜지션"},{"level":2,"title":"Move Transitions","slug":"move-transitions"},{"level":2,"title":"이동 트랜지션","slug":"이동-트랜지션"},{"level":2,"title":"흔들리는 리스트 트랜지션","slug":"흔들리는-리스트-트랜지션"}],"relativePath":"guide/built-ins/transition-group.md"}',x=Object.assign({},{name:"transition-group",setup:s=>(s,l)=>(n(),a("div",null,[v,o(A),G,o(b),X,o(m),Z]))});export{B as __pageData,x as default};
