(function(){"use strict";var e={9482:function(e,t,r){var s=r(9242),n=r(3396);const o={id:"app"},a=(0,n._)("br",null,null,-1),i=(0,n._)("br",null,null,-1),c={class:"container"};function l(e,t,r,s,l,u){const d=(0,n.up)("NavBar"),p=(0,n.up)("Errors"),g=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[(0,n.Wm)(d),a,i]),(0,n._)("div",c,[e.error?((0,n.wg)(),(0,n.j4)(p,{key:0,msg:e.error},null,8,["msg"])):(0,n.kq)("",!0),(0,n.Wm)(g)])],64)}var u=r(65);const d={class:"navbar navbar-expand-lg navbar-dark bg-dark"},p=(0,n.Uk)("Productive"),g=(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav ml-auto"},v={class:"nav-item active"},h=(0,n.Uk)("Home "),b=(0,n._)("span",{class:"sr-only"},"(current)",-1),w={class:"nav-item"},k=(0,n.Uk)("About"),y={key:0,class:"nav-item"},_=(0,n.Uk)("Login"),j={key:1,class:"nav-item"},x=(0,n.Uk)("Register"),q={key:2,class:"nav-item"},S=(0,n.Uk)("Profile"),I={key:3,class:"nav-item"};function E(e,t,r,o,a,i){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",d,[(0,n.Wm)(c,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[p])),_:1}),g,(0,n._)("div",f,[(0,n._)("ul",m,[(0,n._)("li",v,[(0,n.Wm)(c,{to:"/",class:"nav-link"},{default:(0,n.w5)((()=>[h,b])),_:1})]),(0,n._)("li",w,[(0,n.Wm)(c,{to:"/about",class:"nav-link"},{default:(0,n.w5)((()=>[k])),_:1})]),e.isLoggedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("li",y,[(0,n.Wm)(c,{to:"/login",class:"nav-link"},{default:(0,n.w5)((()=>[_])),_:1})])),e.isLoggedIn?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("li",j,[(0,n.Wm)(c,{to:"/register",class:"nav-link"},{default:(0,n.w5)((()=>[x])),_:1})])),e.isLoggedIn?((0,n.wg)(),(0,n.iD)("li",q,[(0,n.Wm)(c,{to:"/profile",class:"nav-link"},{default:(0,n.w5)((()=>[S])),_:1})])):(0,n.kq)("",!0),e.isLoggedIn?((0,n.wg)(),(0,n.iD)("li",I,[(0,n._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(0,s.iM)(((...e)=>i.logoutUser&&i.logoutUser(...e)),["prevent"]))},"Logout")])):(0,n.kq)("",!0)])])])}var M={computed:{...(0,u.Se)(["isLoggedIn"])},methods:{...(0,u.nv)(["logout"]),logoutUser(){this.logout()}}},A=r(89);const C=(0,A.Z)(M,[["render",E]]);var D=C,L=r(7139);const N={class:"alert alert-danger"};function O(e,t,r,s,o,a){return(0,n.wg)(),(0,n.iD)("div",N,(0,L.zw)(r.msg),1)}var P={props:["msg"]};const T=(0,A.Z)(P,[["render",O],["__scopeId","data-v-0f03fdc0"]]);var B=T,U={components:{NavBar:D,Errors:B},computed:{...(0,u.Se)(["error"])}};const W=(0,A.Z)(U,[["render",l]]);var V=W,z=r(6265),F=r.n(z);const H={token:localStorage.getItem("token")||"",user:{},status:"",error:null},Z={isLoggedIn:e=>!!e.token,authState:e=>e.status,user:e=>e.user,error:e=>e.error},G={async login({commit:e},t){e("auth_request");try{let r=await F().post("/api/users/login",t);if(r.data.success){const t=r.data.token,s=r.data.user;localStorage.setItem("token",t),F().defaults.headers.common.Authorization=t,e("auth_success",t,s)}return r}catch(r){e("auth_error",r)}},async register({commit:e},t){try{e("register_request");let r=await F().post("/api/users/register",t);return void 0!==r.data.success&&e("register_success"),r}catch(r){e("register_error",r)}},async getProfile({commit:e}){e("profile_request");let t=await F().get("/api/users/profile");return e("user_profile",t.data.user),t},async sendResetMail({commit:e},t){try{e("pwresetmail_request");let r=await F().post("/api/users/forgot",t);return void 0!==r.data.success&&e("pwresetmail_success"),r}catch(r){e("pwresetmail_error",r)}},async resetPassword({commit:e},t){try{e("passwordreset_request");let r=await F().post("/api/users/reset",t);return void 0!==r.data.success&&e("passwordreset_success"),r}catch(r){e("passwordreset_error",r)}},async logout({commit:e}){await localStorage.removeItem("token"),e("logout"),delete F().defaults.headers.common.Authorization,ae.push("/login")}},J={auth_request(e){e.error=null,e.status="loading"},auth_success(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error(e,t){e.error=t.response.data.msg},register_request(e){e.error=null,e.status="loading"},register_success(e){e.error=null,e.status="success"},register_error(e,t){e.error=t.response.data.msg},logout(e){e.error=null,e.status="",e.token="",e.user=""},profile_request(e){e.status="loading"},user_profile(e,t){e.user=t},pwresetmail_request(e){e.error=null,e.status="loading"},pwresetmail_success(e){e.error=null,e.status="success"},pwresetmail_error(e,t){e.error=t.response.data.msg},passwordreset_request(e){e.error=null,e.status="loading"},passwordreset_success(e){e.error=null,e.status="success"},passwordreset_error(e,t){e.error=t.response.data.msg}};var R={state:H,actions:G,mutations:J,getters:Z},$=(0,u.MT)({modules:{Auth:R},state:{},getters:{},mutations:{},actions:{}}),K=r(2483);const Q={class:"home"},Y=(0,n.uE)('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">MEVN Stack</h1><p class="lead"> Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Denis McMahon. </p></div></div><div class="row"><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-dark text-white"><div class="card-body"><h5 class="card-title">MongoDB</h5><p class="card-text"> MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc. </p><a href="https://www.mongodb.com/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-info text-white"><div class="card-body"><h5 class="card-title">Express.js</h5><p class="card-text"> Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. </p><a href="https://expressjs.com/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-danger text-white"><div class="card-body"><h5 class="card-title">Vue.js</h5><p class="card-text"> Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing... </p><a href="https://vuejs.org/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-success text-white"><div class="card-body"><h5 class="card-title">Node.js</h5><p class="card-text"> As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following &quot;hello world&quot; example, many connections can be handled concurrently. </p><a href="https://nodejs.org/" target="_blank" class="btn bg-white">More Info.</a></div></div></div></div>',2),X=[Y];function ee(e,t,r,s,o,a){return(0,n.wg)(),(0,n.iD)("div",Q,X)}var te={name:"HomeView",components:{}};const re=(0,A.Z)(te,[["render",ee]]);var se=re;const ne=[{path:"/",name:"home",component:se},{path:"/about",name:"about",component:()=>r.e(828).then(r.bind(r,3828))},{path:"/login",name:"login",component:()=>r.e(592).then(r.bind(r,6592)),meta:{requiresGuest:!0}},{path:"/register",name:"register",component:()=>r.e(32).then(r.bind(r,6032)),meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:()=>r.e(398).then(r.bind(r,8398)),meta:{requiresAuth:!0}},{path:"/forgot",name:"forgot",component:()=>r.e(87).then(r.bind(r,2087))},{path:"/reset/:token",name:"reset",component:()=>r.e(166).then(r.bind(r,7166))}],oe=(0,K.p7)({history:(0,K.PO)("/"),routes:ne});oe.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))?$.getters.isLoggedIn?r():r("/login"):e.matched.some((e=>e.meta.requiresGuest))&&$.getters.isLoggedIn?r("/profile"):r()}));var ae=oe;const ie=(0,s.ri)(V).use($).use(ae);ie.config.globalProperties.$http=F(),ie.mount("#app");const ce=localStorage.getItem("token");ce&&(ie.config.globalProperties.$http.defaults.headers.common["Authorization"]=ce)}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,o){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[c])}))?s.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,s){return r.f[s](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{32:"a85d8e2f",87:"04c82f56",166:"5cfcc8de",398:"953281a8",592:"6ff7b720",828:"37c4a1c2"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{32:"1a4da5b3",87:"1a4da5b3",166:"1a4da5b3",592:"1a4da5b3"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";r.l=function(s,n,o,a){if(e[s])e[s].push(n);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=s),e[s]=[n];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(g);var n=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,n.parentNode.removeChild(n),s(c)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var n=r[s],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){n=a[s],o=n.getAttribute("data-href");if(o===e||o===t)return n}},s=function(s){return new Promise((function(n,o){var a=r.miniCssF(s),i=r.p+a;if(t(a,i))return n();e(s,i,n,o)}))},n={143:0};r.f.miniCss=function(e,t){var r={32:1,87:1,166:1,592:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=s(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,s){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise((function(r,s){n=e[t]=[r,s]}));s.push(n[2]=o);var a=r.p+r.u(t),i=new Error,c=function(s){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,a=s[0],i=s[1],c=s[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(s);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},s=self["webpackChunkclient"]=self["webpackChunkclient"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(9482)}));s=r.O(s)})();
//# sourceMappingURL=app.bfa6c8fe.js.map