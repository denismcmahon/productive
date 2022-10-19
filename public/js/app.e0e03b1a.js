(function(){"use strict";var e={9482:function(e,t,r){var o=r(9242),s=r(3396);const n={id:"app"},a=(0,s._)("br",null,null,-1),i=(0,s._)("br",null,null,-1),c={class:"container"};function l(e,t,r,o,l,u){const d=(0,s.up)("NavBar"),p=(0,s.up)("Errors"),g=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[(0,s.Wm)(d),a,i]),(0,s._)("div",c,[e.error?((0,s.wg)(),(0,s.j4)(p,{key:0,msg:e.error},null,8,["msg"])):(0,s.kq)("",!0),(0,s.Wm)(g)])],64)}var u=r(65);const d={class:"navbar navbar-expand-lg navbar-dark bg-dark"},p=(0,s.Uk)("Productive"),g=(0,s._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav ml-auto"},v={class:"nav-item active"},h=(0,s.Uk)("Home "),b=(0,s._)("span",{class:"sr-only"},"(current)",-1),_={class:"nav-item"},w=(0,s.Uk)("About"),k={key:0,class:"nav-item"},y=(0,s.Uk)("Login"),E={key:1,class:"nav-item"},A=(0,s.Uk)("Register"),P={key:2,class:"nav-item"},S=(0,s.Uk)("Profile"),I={key:3,class:"nav-item"};function L(e,t,r,n,a,i){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",d,[(0,s.Wm)(c,{class:"navbar-brand",to:"/"},{default:(0,s.w5)((()=>[p])),_:1}),g,(0,s._)("div",f,[(0,s._)("ul",m,[(0,s._)("li",v,[(0,s.Wm)(c,{to:"/",class:"nav-link"},{default:(0,s.w5)((()=>[h,b])),_:1})]),(0,s._)("li",_,[(0,s.Wm)(c,{to:"/about",class:"nav-link"},{default:(0,s.w5)((()=>[w])),_:1})]),e.isLoggedIn?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",k,[(0,s.Wm)(c,{to:"/login",class:"nav-link"},{default:(0,s.w5)((()=>[y])),_:1})])),e.isLoggedIn?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("li",E,[(0,s.Wm)(c,{to:"/register",class:"nav-link"},{default:(0,s.w5)((()=>[A])),_:1})])),e.isLoggedIn?((0,s.wg)(),(0,s.iD)("li",P,[(0,s.Wm)(c,{to:"/profile",class:"nav-link"},{default:(0,s.w5)((()=>[S])),_:1})])):(0,s.kq)("",!0),e.isLoggedIn?((0,s.wg)(),(0,s.iD)("li",I,[(0,s._)("a",{class:"nav-link",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>i.logoutUser&&i.logoutUser(...e)),["prevent"]))},"Logout")])):(0,s.kq)("",!0)])])])}var U={computed:{...(0,u.Se)(["isLoggedIn"])},methods:{...(0,u.nv)(["logout"]),logoutUser(){this.logout()}}},N=r(89);const x=(0,N.Z)(U,[["render",L]]);var j=x,q=r(7139);const D={class:"alert alert-danger"};function O(e,t,r,o,n,a){return(0,s.wg)(),(0,s.iD)("div",D,(0,q.zw)(r.msg),1)}var M={props:["msg"]};const V=(0,N.Z)(M,[["render",O],["__scopeId","data-v-0f03fdc0"]]);var C=V,B={components:{NavBar:j,Errors:C},computed:{...(0,u.Se)(["error"])}};const R=(0,N.Z)(B,[["render",l]]);var T=R,W=r(6265),z=r.n(W);const F={token:localStorage.getItem("token")||"",user:{},status:"",error:null},H={isLoggedIn:e=>!!e.token,authState:e=>e.status,user:e=>e.user,error:e=>e.error},Z={async login({commit:e},t){e("auth_request");try{let r=await z().post({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL+"/users/login",t);if(r.data.success){const t=r.data.token,o=r.data.user;localStorage.setItem("token",t),z().defaults.headers.common.Authorization=t,e("auth_success",t,o)}return r}catch(r){e("auth_error",r)}},async register({commit:e},t){try{e("register_request");let r=await z().post({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL+"/users/register",t);return void 0!==r.data.success&&e("register_success"),r}catch(r){e("register_error",r)}},async getProfile({commit:e}){e("profile_request"),console.log("DM ==> process.env.VUE_APP_API_URL: "),console.log({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL);let t=await z().get({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL+"/users/profile");return e("user_profile",t.data.user),t},async sendResetMail({commit:e},t){try{e("pwresetmail_request");let r=await z().post({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL+"/users/forgot",t);return void 0!==r.data.success&&e("pwresetmail_success"),r}catch(r){e("pwresetmail_error",r)}},async resetPassword({commit:e},t){try{e("passwordreset_request");let r=await z().post({NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL+"/users/reset",t);return void 0!==r.data.success&&e("passwordreset_success"),r}catch(r){e("passwordreset_error",r)}},async logout({commit:e}){await localStorage.removeItem("token"),e("logout"),delete z().defaults.headers.common.Authorization,ae.push("/login")}},G={auth_request(e){e.error=null,e.status="loading"},auth_success(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error(e,t){e.error=t.response.data.msg},register_request(e){e.error=null,e.status="loading"},register_success(e){e.error=null,e.status="success"},register_error(e,t){e.error=t.response.data.msg},logout(e){e.error=null,e.status="",e.token="",e.user=""},profile_request(e){e.status="loading"},user_profile(e,t){e.user=t},pwresetmail_request(e){e.error=null,e.status="loading"},pwresetmail_success(e){e.error=null,e.status="success"},pwresetmail_error(e,t){e.error=t.response.data.msg},passwordreset_request(e){e.error=null,e.status="loading"},passwordreset_success(e){e.error=null,e.status="success"},passwordreset_error(e,t){e.error=t.response.data.msg}};var J={state:F,actions:Z,mutations:G,getters:H},$=(0,u.MT)({modules:{Auth:J},state:{},getters:{},mutations:{},actions:{}}),K=r(2483);const Q={class:"home"},Y=(0,s.uE)('<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">MEVN Stack</h1><p class="lead"> Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Denis McMahon. </p></div></div><div class="row"><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-dark text-white"><div class="card-body"><h5 class="card-title">MongoDB</h5><p class="card-text"> MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc. </p><a href="https://www.mongodb.com/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-info text-white"><div class="card-body"><h5 class="card-title">Express.js</h5><p class="card-text"> Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. </p><a href="https://expressjs.com/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-danger text-white"><div class="card-body"><h5 class="card-title">Vue.js</h5><p class="card-text"> Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing... </p><a href="https://vuejs.org/" target="_blank" class="btn bg-white">More Info.</a></div></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="card bg-success text-white"><div class="card-body"><h5 class="card-title">Node.js</h5><p class="card-text"> As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. In the following &quot;hello world&quot; example, many connections can be handled concurrently. </p><a href="https://nodejs.org/" target="_blank" class="btn bg-white">More Info.</a></div></div></div></div>',2),X=[Y];function ee(e,t,r,o,n,a){return(0,s.wg)(),(0,s.iD)("div",Q,X)}var te={name:"HomeView",components:{}};const re=(0,N.Z)(te,[["render",ee]]);var oe=re;const se=[{path:"/",name:"home",component:oe},{path:"/about",name:"about",component:()=>r.e(828).then(r.bind(r,3828))},{path:"/login",name:"login",component:()=>r.e(592).then(r.bind(r,6592)),meta:{requiresGuest:!0}},{path:"/register",name:"register",component:()=>r.e(32).then(r.bind(r,6032)),meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:()=>r.e(96).then(r.bind(r,6096)),meta:{requiresAuth:!0}},{path:"/forgot",name:"forgot",component:()=>r.e(87).then(r.bind(r,8881))},{path:"/reset/:token",name:"reset",component:()=>r.e(166).then(r.bind(r,7166))}],ne=(0,K.p7)({history:(0,K.PO)("/"),routes:se});ne.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))?$.getters.isLoggedIn?r():r("/login"):e.matched.some((e=>e.meta.requiresGuest))&&$.getters.isLoggedIn?r("/profile"):r()}));var ae=ne;const ie=(0,o.ri)(T).use($).use(ae);ie.config.globalProperties.$http=z(),ie.mount("#app");const ce=localStorage.getItem("token");ce&&(ie.config.globalProperties.$http.defaults.headers.common["Authorization"]=ce)}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,o,s,n){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{32:"c0624aff",87:"03a9806a",96:"1cbfb8de",166:"c6677158",592:"e4ffd1e7",828:"e18542c3"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{32:"1a4da5b3",87:"1a4da5b3",166:"1a4da5b3",592:"1a4da5b3"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";r.l=function(o,s,n,a){if(e[o])e[o].push(s);else{var i,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[s];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(g);var s=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(r)})),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(n){if(s.onerror=s.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=n,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){s=a[o],n=s.getAttribute("data-href");if(n===e||n===t)return s}},o=function(o){return new Promise((function(s,n){var a=r.miniCssF(o),i=r.p+a;if(t(a,i))return s();e(o,i,s,n)}))},s={143:0};r.f.miniCss=function(e,t){var r={32:1,87:1,166:1,592:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,o){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise((function(r,o){s=e[t]=[r,o]}));o.push(s[2]=n);var a=r.p+r.u(t),i=new Error,c=function(o){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,s[1](i)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(c)var u=c(r)}for(t&&t(o);l<a.length;l++)n=a[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(9482)}));o=r.O(o)})();
//# sourceMappingURL=app.e0e03b1a.js.map