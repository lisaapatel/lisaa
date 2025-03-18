(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,s){"use strict";var n,a;e.exports=(null==(n=s.g.process)?void 0:n.env)&&"object"==typeof(null==(a=s.g.process)?void 0:a.env)?s.g.process:s(7663)},8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4186)}])},1943:function(e,t,s){"use strict";s.d(t,{A:function(){return c}});var n=s(5893);s(7294);var a=s(2142),r=s(8142),i=s(9008),l=s.n(i);let o=[{text:"About",link:""},{text:"Experience",link:"experience"},{text:"Travel",link:"travel"},{text:"Projects + Explorations",link:"projects"},{text:"Contact",link:"contact"}],c=e=>{let{children:t,title:s="Lisa Patel"}=e,{theme:i}=(0,r.F)();return(0,n.jsxs)("div",{className:"min-h-screen ".concat("dark"===i?"bg-dark-bg":"bg-light-bg"," transition-colors duration-300"),children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(a.W,{links:o,title:"Lisa Patel"}),(0,n.jsx)("div",{className:"".concat("dark"===i?"text-gray-50":"text-gray-900"),children:t})]})}},2142:function(e,t,s){"use strict";s.d(t,{W:function(){return d}});var n=s(5893),a=s(1664),r=s.n(a),i=s(1163),l=s(6893),o=s(8142),c=s(7294);function d(e){let{links:t,title:s}=e,{asPath:a}=(0,i.useRouter)(),{theme:d,toggleTheme:m}=(0,o.F)(),[u,x]=(0,c.useState)(!1),h=(0,c.useRef)(null),f=e=>a==="/".concat(e)?"font-medium text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";return(0,c.useEffect)(()=>{function e(e){h.current&&!h.current.contains(e.target)&&x(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[h]),(0,c.useEffect)(()=>{x(!1)},[a]),(0,c.useEffect)(()=>(u?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[u]),(0,c.useEffect)(()=>(console.log("Navigation component mounted"),()=>{console.log("Navigation component unmounted")}),[]),(0,n.jsxs)("nav",{className:"sticky top-0 z-50 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300",children:[(0,n.jsx)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,n.jsx)(r(),{href:"/",children:(0,n.jsx)("a",{className:"text-xl font-semibold tracking-tight",children:s||"Lisa Patel"})}),(0,n.jsxs)("div",{className:"hidden md:flex space-x-8 items-center",children:[null==t?void 0:t.map(e=>{let{text:t,link:s}=e;return(0,n.jsx)(r(),{href:"/".concat(s),children:(0,n.jsx)("a",{className:"text-sm transition-colors duration-200 ".concat(f(s)),children:t})},t)}),(0,n.jsx)("button",{onClick:m,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":"Switch to ".concat("dark"===d?"light":"dark"," mode"),children:"dark"===d?(0,n.jsx)(l.kXG,{size:20,className:"text-gray-300"}):(0,n.jsx)(l.wOW,{size:20,className:"text-gray-700"})})]}),(0,n.jsxs)("div",{className:"md:hidden flex items-center space-x-2",children:[(0,n.jsx)("button",{onClick:m,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":"Switch to ".concat("dark"===d?"light":"dark"," mode"),children:"dark"===d?(0,n.jsx)(l.kXG,{size:20,className:"text-gray-300"}):(0,n.jsx)(l.wOW,{size:20,className:"text-gray-700"})}),(0,n.jsx)("button",{onClick:()=>x(!u),className:"p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors","aria-label":u?"Close menu":"Open menu","aria-expanded":u,children:u?(0,n.jsx)(l.q5L,{size:24,className:"text-gray-700 dark:text-gray-300"}):(0,n.jsx)(l.cur,{size:24,className:"text-gray-700 dark:text-gray-300"})})]})]})}),(0,n.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ".concat(u?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),"aria-hidden":"true"}),(0,n.jsx)("div",{ref:h,className:"fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-dark-bg z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ".concat(u?"translate-x-0":"translate-x-full"),"aria-hidden":!u,children:(0,n.jsxs)("div",{className:"flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto",children:[(0,n.jsx)("ul",{className:"space-y-6",children:null==t?void 0:t.map(e=>{let{text:t,link:s}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/".concat(s),children:(0,n.jsx)("a",{className:"block text-lg py-2 ".concat(f(s)),children:t})})},t)})}),(0,n.jsx)("div",{className:"mt-auto pt-8",children:(0,n.jsx)("div",{className:"pb-4 border-t border-gray-200 dark:border-gray-700",children:(0,n.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-4",children:["\xa9 ",new Date().getFullYear()," Lisa Patel"]})})})]})})]})}},4186:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(1943),r=s(8142),i=s(9008),l=s.n(i),o=s(3454);let c=()=>{let{theme:e}=(0,r.F)(),t="dark"===e?"text-gray-400":"text-gray-600";return console.log("Base path:",o.env.NEXT_PUBLIC_BASE_PATH||""),(0,n.jsxs)(a.A,{title:"Lisa Patel",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Lisa Patel"}),(0,n.jsx)("meta",{name:"description",content:"Lisa Patel's Portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(o.env.NEXT_PUBLIC_BASE_PATH||"","/favicon.ico")})]}),(0,n.jsxs)("main",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-16",children:[(0,n.jsx)("h1",{className:"text-4xl sm:text-5xl font-bold tracking-tight mb-12",children:"Welcome to my corner on the internet."}),(0,n.jsx)("h2",{className:"text-2xl font-light tracking-wide mb-16 text-gray-500 dark:text-gray-300",children:"Nice to e-meet you!"}),(0,n.jsxs)("div",{className:"space-y-6 sm:space-y-10",children:[(0,n.jsxs)("p",{className:"text-lg leading-relaxed ".concat(t),children:["I am an SCU alumnus with a Master's in Information Systems, currently based out of the Bay Area. I am passionate about using the data to help and build better products for users. Currently working at a fintech unicorn start-up"," ",(0,n.jsx)("a",{href:"https://www.upgrade.com",className:"font-medium hover:underline decoration-2 underline-offset-4 ".concat("dark"===e?"text-blue-400":"text-blue-600"),children:"Upgrade"}),", I help different teams in making impactful data-driven decisions."]}),(0,n.jsx)("p",{className:"text-lg leading-relaxed ".concat(t),children:"My passion revolves around three core tenets: strategy, analytics, and innovation. I am an avid learner who enjoys exciting challenges. I presume it is to accept what life throws at me and mould it in the best possible way while enjoying small wins on the way."}),(0,n.jsxs)("p",{className:"text-lg leading-relaxed ".concat(t),children:["You can also catch me binge-watching on Netflix, daydreaming, baking, trying out new recipes or blogging about my travels and experiences. You can find my blog"," ",(0,n.jsx)("a",{href:"https://www.instagram.com/thehattales/",className:"font-medium hover:underline decoration-2 underline-offset-4 ".concat("dark"===e?"text-blue-400":"text-blue-600"),children:"here"}),"."]}),(0,n.jsx)("p",{className:"text-lg leading-relaxed ".concat(t),children:"Besides this, I am also interested in smart mobility, and sustainability!"})]}),(0,n.jsx)("div",{className:"my-10 sm:my-16 flex justify-center",children:(0,n.jsx)("img",{src:"/lisa.jpg",alt:"Lisa Patel",className:"rounded-lg shadow-md w-full max-w-[300px] sm:max-w-[400px]"})}),(0,n.jsxs)("div",{className:"mt-32 mb-8",children:[(0,n.jsx)("h3",{className:"text-3xl font-semibold mb-8 tracking-tight",children:"A peek into my life right now"}),(0,n.jsxs)("ul",{className:"space-y-4 sm:space-y-6 text-base sm:text-lg ".concat(t),children:[(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Life goal:"}),(0,n.jsx)("span",{children:"Enjoy all of nature's beautiful experiences"})]}),(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Learning:"}),(0,n.jsx)("span",{children:"Yoga"})]}),(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Reading:"}),(0,n.jsx)("span",{children:"The Light we Carry by Michelle Obama"})]}),(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Listening:"}),(0,n.jsx)("span",{children:"Morning Brew, All-In Podcast, No Stupid Questionsa"})]}),(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Watching:"}),(0,n.jsx)("span",{children:"Sevrance"})]}),(0,n.jsxs)("li",{className:"flex flex-col sm:flex-row sm:items-start",children:[(0,n.jsx)("span",{className:"font-semibold sm:min-w-[120px] sm:mr-4 mb-1 sm:mb-0",children:"Celebrating:"}),(0,n.jsx)("span",{children:"Highschool Friend's wedding & all the little joys in Life!"})]})]}),(0,n.jsx)("p",{className:"mt-12 text-lg italic ".concat(t),children:"Thanks for stopping by!"})]})]})]})};t.default=c},7663:function(e){!function(){var t={229:function(e){var t,s,n,a=e.exports={};function r(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{s="function"==typeof clearTimeout?clearTimeout:i}catch(n){s=i}}();var o=[],c=!1,d=-1;function m(){c&&n&&(c=!1,n.length?o=n.concat(o):d=-1,o.length&&u())}function u(){if(!c){var e=l(m);c=!0;for(var t=o.length;t;){for(n=o,o=[];++d<t;)n&&n[d].run();d=-1,t=o.length}n=null,c=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===i||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(n){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function x(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];o.push(new x(e,t)),1!==o.length||c||l(u)},x.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},s={};function n(e){var a=s[e];if(void 0!==a)return a.exports;var r=s[e]={exports:{}},i=!0;try{t[e](r,r.exports,n),i=!1}finally{i&&delete s[e]}return r.exports}n.ab="//";var a=n(229);e.exports=a}()}},function(e){e.O(0,[199,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);