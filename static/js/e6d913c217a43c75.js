(()=>{"use strict";var e,t={318:(e,t,r)=>{r(666);var o=r(133);class i extends o.oi{createRenderRoot(){return this}}const n=e=>class extends e{renderCard(e){return o.dy`<div class="card m-3 p-2 mx-lg-auto shadow bg-default text-default width-default"> ${e} </div>`}};class a extends i{constructor(){super(...arguments),this.ticking=!1,this.currScrollPosition=0,this.lastScrollPosition=0,this._onScrollHandler=()=>{this.currScrollPosition=window.scrollY,window.setTimeout((()=>{this.lastScrollPosition=window.scrollY}),50),this.ticking||(window.requestAnimationFrame((()=>{this.onScrollHandler(),this.ticking=!1})),this.ticking=!0)}}getScrollPositionDx(){return this.currScrollPosition-this.lastScrollPosition}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._onScrollHandler,!1)}disconnectedCallback(){window.removeEventListener("scroll",this._onScrollHandler,!1),super.disconnectedCallback()}}class s{}s.LCS_THEME="indramahkota-theme-mode",s.LCS_DRAWER="indramahkota-drawer-mode";const c=s,l=r.p+"static/images/03a6d802d9f69652.svg",d=r.p+"static/images/a55fd1df9910686b.svg",p=r.p+"static/images/6651ae7161d01b2d.svg",h=r.p+"static/images/e3515e49b881eb7b.svg",u=r.p+"static/images/5ea4f86f3746ed97.svg",f=r.p+"static/images/e783612739c2c1ae.svg",v=r.p+"static/images/d83b1b168ae394ec.svg";class g{}g.GITHUB=d,g.LINKEDIN=u,g.GOOGLE=h,g.GITLAB=p,g.FACEBOOK=l,g.MOON=f,g.SUN=v;const m=g;class b{}b.LOCAL_STORAGE_NOT_SUPPORTED="User browser doesn't supports localStorage",b.LOCAL_STORAGE_KEY_CAN_NOT_BE_EMPTY="Local Storage Key Can Not Be Empty";const y=b;function w(){if(!window.localStorage)throw new Error(y.LOCAL_STORAGE_NOT_SUPPORTED);return window.localStorage}class O{static setLCS(e,t){if(""===e)throw new Error(y.LOCAL_STORAGE_KEY_CAN_NOT_BE_EMPTY);w().setItem(e,t)}static getLCS(e){if(""===e)throw new Error(y.LOCAL_STORAGE_KEY_CAN_NOT_BE_EMPTY);return w().getItem(e)}static capitalizeWords(e){return e.replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()))}}var k=r(95),C=r(455),E=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let S=class extends i{constructor(){super(...arguments),this.isDrawerOpen=!1,this.onHamburgerClick=e=>{}}onHamburgerClickHandler(){this.isDrawerOpen=!this.isDrawerOpen,this.onHamburgerClick(this.isDrawerOpen)}render(){const e={open:this.isDrawerOpen};return o.dy` <div class="in-button-hamburger"> <button class="pe-auto ms-auto border-none background-none user-select-none text-decoration-none ${(0,C.$)(e)}" aria-label="Toggle Menu Button" @click="${this.onHamburgerClickHandler}"> <span class="humburger"></span> </button> </div> `}};E([(0,k.Cb)({type:Boolean})],S.prototype,"isDrawerOpen",void 0),E([(0,k.Cb)({type:Object})],S.prototype,"onHamburgerClick",void 0),S=E([(0,k.Mo)("in-button-hamburger")],S);var x=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let P=class extends i{constructor(){super(...arguments),this.text=""}render(){return o.dy` <div class="in-footer p-3 mt-5 text-center text-default divider-top"> <footer class="w-100"> <p tabindex="0">${this.text}</p> </footer> </div> `}};x([(0,k.Cb)({type:String})],P.prototype,"text",void 0),P=x([(0,k.Mo)("in-footer")],P);var R=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let j=class extends(n(i)){constructor(){super(...arguments),this.greeting="",this.description=""}render(){return this.renderCard(o.dy` <div class="card-body text-center text-md-start"> <h2 class="card-title"> ${this.greeting} <span class="wave-emoji">👋</span> </h2> <p class="card-text">${this.description}</p> </div> `)}};R([(0,k.Cb)({type:String})],j.prototype,"greeting",void 0),R([(0,k.Cb)({type:String})],j.prototype,"description",void 0),j=R([(0,k.Mo)("in-greeting")],j);var D=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends i{constructor(){super(...arguments),this.title=""}render(){return o.dy` <div> <a class="fs-5 f-pacifico text-decoration-none text-default" href="/"> ${this.title} </a> </div> `}};D([(0,k.Cb)({type:String})],I.prototype,"title",void 0),I=D([(0,k.Mo)("in-header-logo")],I);var $=r(796),A=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let M=class extends i{constructor(){super(...arguments),this.onNavItemClicked=()=>{},this.onHashChange=()=>{this.navItem&&(window.location.hash==this.navItem.url?this.navItem.isActive=!0:this.navItem.isActive=!1,this.requestUpdate())}}connectedCallback(){super.connectedCallback(),this.navItem&&(window.location.hash==this.navItem.url||""==window.location.hash&&"#/profile"==this.navItem.url)&&(this.navItem.isActive=!0),window.addEventListener("hashchange",this.onHashChange,!1)}disconnectedCallback(){window.removeEventListener("hashchange",this.onHashChange,!1),super.disconnectedCallback()}render(){var e;if(!this.navItem)return o.dy`${o.Ld}`;const t={active:this.navItem.isActive};return o.dy` <div class="in-header-nav-item"> <a href="${this.navItem.url}" class="d-flex justify-content-between-fixed align-items-center position-relative ${(0,C.$)(t)}" @click="${this.onNavItemClicked}"> ${this.navItem.imageUrl?o.dy`<img src="${this.navItem.imageUrl}" alt="${(0,$.o)(this.navItem.imageAlt)}">`:o.Ld} <p>${null===(e=this.navItem)||void 0===e?void 0:e.name}</p> <span class="chevron"></span> </a> </div> `}};A([(0,k.Cb)({type:Object})],M.prototype,"navItem",void 0),A([(0,k.Cb)({type:Object})],M.prototype,"onNavItemClicked",void 0),M=A([(0,k.Mo)("in-header-nav-item")],M);var T=r(386),_=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends i{constructor(){super(...arguments),this.navData=[],this.isDrawerOpen=!1,this.onNavItemClicked=()=>{}}render(){const e={open:this.isDrawerOpen};return o.dy` <div class="in-header-nav"> <nav class="${(0,C.$)(e)}"> <ul class="p-0"> ${(0,T.r)(this.navData,(e=>o.dy`<li> <in-header-nav-item .navItem="${e}" .onNavItemClicked="${this.onNavItemClicked}"></in-header-nav-item> </li>`))} </ul> </nav> </div> `}};_([(0,k.Cb)({type:Array})],L.prototype,"navData",void 0),_([(0,k.Cb)({type:Boolean})],L.prototype,"isDrawerOpen",void 0),_([(0,k.Cb)({type:Object})],L.prototype,"onNavItemClicked",void 0),L=_([(0,k.Mo)("in-header-nav")],L);var N=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let H=class extends a{constructor(){super(...arguments),this.title="My Portfolio",this.navData=[],this.isShow=!0,this.isDrawerOpen=!1,this.darkMode=!1,this.supportDarkMode=!0,this.onResizeHandler=()=>{this.onScrollHandler(),this.onDrawerChange(!1)},this.onDrawerChange=e=>{this.isDrawerOpen=e,e?O.setLCS(c.LCS_DRAWER,"open"):O.setLCS(c.LCS_DRAWER,"close")},this.onNavItemClicked=()=>{this.isDrawerOpen=!1}}onScrollHandler(){if(this.currScrollPosition<120)return void(this.isShow=!0);const e=this.getScrollPositionDx();e>0?(this.isShow=!1,this.onDrawerChange(!1)):e<-10&&(this.isShow=!0)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResizeHandler,!1)}disconnectedCallback(){window.removeEventListener("resize",this.onResizeHandler,!1),super.disconnectedCallback()}render(){const e={open:this.isDrawerOpen};return o.dy` <div class="in-header container-fluid position-fixed d-flex align-items-center p-2 ${(0,C.$)(e)}"> <header class="header d-flex align-items-center w-100 my-auto mx-auto ps-3 pe-2"> <in-header-logo title="${this.title}"></in-header-logo> ${this.supportDarkMode?o.dy`<in-toggle-dark ?darkMode="${this.darkMode}" class="ms-auto"></in-toggle-dark>`:o.Ld} <in-button-hamburger class="ms-auto" ?isDrawerOpen="${this.isDrawerOpen}" .onHamburgerClick="${this.onDrawerChange}"></in-button-hamburger> <in-header-nav ?isDrawerOpen="${this.isDrawerOpen}" .navData="${this.navData}" .onNavItemClicked="${this.onNavItemClicked}"></in-header-nav> </header> </div> `}};N([(0,k.Cb)({type:String})],H.prototype,"title",void 0),N([(0,k.Cb)({type:Array})],H.prototype,"navData",void 0),N([(0,k.Cb)({type:Boolean})],H.prototype,"isShow",void 0),N([(0,k.Cb)({type:Boolean})],H.prototype,"isDrawerOpen",void 0),N([(0,k.Cb)({type:Boolean})],H.prototype,"darkMode",void 0),N([(0,k.Cb)({type:Boolean})],H.prototype,"supportDarkMode",void 0),H=N([(0,k.Mo)("in-header")],H);var G=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let B=class extends(n(i)){constructor(){super(...arguments),this.socialMedia=[]}render(){return this.user?this.renderCard(o.dy`<div class="row g-0"> <div class="col-md-4 order-md-last p-3 d-flex"> <img src="${this.user.image}" class="rounded-circle border-profile mx-auto me-md-0" alt="${this.user.name}" width="200px" height="200px"> </div> <div class="col-md-8 order-md-first d-flex"> <div class="card-body text-center text-md-start"> <h2 tabindex="0">${this.user.name}</h2> <div class="mt-2"> <span tabindex="0">${this.user.location}</span> </div> <p tabindex="0" class="mt-2">${this.user.status}</p> <in-social-media .socialMedia="${this.socialMedia}"></in-social-media> </div> </div> </div>`):o.dy`${o.Ld}`}};G([(0,k.Cb)({type:Object})],B.prototype,"user",void 0),G([(0,k.Cb)({type:Array})],B.prototype,"socialMedia",void 0),B=G([(0,k.Mo)("in-profile")],B);var U=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let K=class extends i{constructor(){super(...arguments),this.title="",this.description=""}render(){return o.dy`<div class="card shadow card-height-default"> <div class="card-header">Featured</div> <div class="card-body"> <p class="card-text"> With supporting text below as a natural lead-in to additional content. </p> </div> </div>`}};U([(0,k.Cb)({type:String})],K.prototype,"title",void 0),U([(0,k.Cb)({type:String})],K.prototype,"description",void 0),K=U([(0,k.Mo)("in-project-card")],K);var Y=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let F=class extends i{constructor(){super(...arguments),this.socialMedia=[]}renderSocialMedia(e){return o.dy` <li class="line-style-none m-1"> <a style="background-color:${e.color};width:2em;height:2em" aria-label="This is the ${e.isEmail?"Email":"Social media page"} who created this website." href="${e.url}" target="_blank" rel="noopener noreferrer" class="d-flex rounded-circle fs-4 text-decoration-none"> <i class="m-auto rounded-circle hover-black d-flex align-items-center justify-content-center" style="color:#fff;width:2em;height:2em"> <img class="m-auto" src="${e.icon}" width="20" height="20" alt="${e.name}"> </i> </a> </li> `}render(){return o.dy` <div class="d-flex fs-3 mt-2"> <ul class="d-flex flex-row mx-auto ms-md-0"> ${this.socialMedia.map((e=>this.renderSocialMedia(e)))} </ul> </div> `}};Y([(0,k.Cb)({type:Array})],F.prototype,"socialMedia",void 0),F=Y([(0,k.Mo)("in-social-media")],F);var z=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let W=class extends a{onScrollHandler(){var e,t,r;if(this.currScrollPosition<3/4*window.screen.height)return void(null===(e=document.getElementById("top-button"))||void 0===e||e.classList.remove("show"));const o=this.currScrollPosition-this.lastScrollPosition;o>0?null===(t=document.getElementById("top-button"))||void 0===t||t.classList.remove("show"):o<-10&&(null===(r=document.getElementById("top-button"))||void 0===r||r.classList.add("show"))}onButtonClickHandler(){document.body.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTo({top:0,behavior:"smooth"})}render(){return o.dy` <button id="top-button" class="in-to-top" aria-label="Go to top Button" title="Go to top" @click="${this.onButtonClickHandler}"> <i class="fas fa-hand-point-up"></i> </button> `}};W=z([(0,k.Mo)("in-to-top")],W);var X=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let J=class extends i{constructor(){super(...arguments),this.darkMode=!1}connectedCallback(){super.connectedCallback(),"dark"===O.getLCS(c.LCS_THEME)?(window.document.body.classList.add("dark"),this.darkMode=!0):(window.document.body.classList.remove("dark"),this.darkMode=!1)}onSwitchChangeHandler(e){e.composedPath()[0].checked?(window.document.body.classList.remove("dark"),O.setLCS(c.LCS_THEME,"light"),this.darkMode=!0):(window.document.body.classList.add("dark"),O.setLCS(c.LCS_THEME,"dark"),this.darkMode=!1)}render(){return o.dy` <div class="in-toggle-dark"> <label class="in-toggle-label position-relative d-flex align-items-center justify-content-between"> <input aria-label="This input for Toggle Dark or Light Mode" @change="${this.onSwitchChangeHandler}" type="checkbox" ?checked="${!this.darkMode}"> <span class="slider round"></span> <div class="in-toggle-icon d-flex justify-content-between position-absolute"> <img class="my-auto ms-1" src="${m.SUN}" width="18" height="18" alt="Light mode"> <img class="my-auto ms-1" src="${m.MOON}" width="18" height="18" alt="Dark mode"> </div> </label> </div> `}};X([(0,k.Cb)({type:Boolean})],J.prototype,"darkMode",void 0),J=X([(0,k.Mo)("in-toggle-dark")],J);const q=r.p+"static/images/eba8c1fd2118f6d8.webp",V=r.p+"static/images/eca03322e1a18761.webp";class Q{}Q.APP_NAME="My Portfolio",Q.TEXT_GREETING="Hi there, I'm Indra",Q.TEXT_GREETING_DESC="A passionate Software Developer, having an Experience of building Web and Android Applications using TypeScript, JavaScript, Kotlin, Java, and some other cool libraries and frameworks.",Q.TEXT_FOOTER="Made with ❤️ by Indra Mahkota",Q.STATIC_USER={name:"Indra Mahkota",status:"Open for opportunities: Yes",location:"Pontianak, Indonesia",image:q,roundImage:V},Q.APP_NAVIGATION=[{name:"Skills",url:"#/skills",isActive:!1,imageUrl:void 0,imageAlt:void 0},{name:"Work Experiences",url:"#/work-experiences",isActive:!1,imageUrl:void 0,imageAlt:void 0},{name:"Projects",url:"#/projects",isActive:!1,imageUrl:void 0,imageAlt:void 0},{name:"Indra Mahkota",url:"#/profile",isActive:!1,imageUrl:V,imageAlt:"Indra Mahkota"}],Q.APP_SOCIAL_MEDIA=[{name:"github",url:"https://github.com/indramahkota",isEmail:!1,color:"#333",icon:m.GITHUB},{name:"linkedin",url:"https://www.linkedin.com/in/indramahkota",isEmail:!1,color:"#0e76a8",icon:m.LINKEDIN},{name:"google",url:"mailto:indramahkota1@gmail.com",isEmail:!0,color:"#ea4335",icon:m.GOOGLE},{name:"gitlab",url:"https://gitlab.com/indramahkota",isEmail:!1,color:"#fca326",icon:m.GITLAB},{name:"facebook",url:"https://www.facebook.com/indramahkota.id",isEmail:!1,color:"#3b5998",icon:m.FACEBOOK}],Q.APP_PROJECTS=[{title:"Skills",description:"#/skills"},{title:"Skills",description:"#/skills"},{title:"Skills",description:"#/skills"},{title:"Skills",description:"#/skills"},{title:"Skills",description:"#/skills"},{title:"Skills",description:"#/skills"}],Q.SUPPORT_DARK_MODE=!0;const Z=Q;class ee{constructor(e,t,r){this.path=e,this.render=t,this.exact=r}match(){return function(e,t){const{exact:r=!1,path:o}=t;""===e&&(e="/");const i=new RegExp(`^/${function(e){const t=e.split("/");let r=t.length;for(let e=0;e<t.length;e++)if(t[e].indexOf(":")>-1){r=e;break}return t.slice(1,r).join("/")}(o)}`).exec(e);if(!i)return null;const n=i[0],a=n===e;if(r&&!a)return null;const s=function(e,t){const r=[],o=e.split("/"),i=t.split("/");return o.forEach(((e,t)=>{e.toString().indexOf(":")>-1&&r.push({key:o[t].toString().substr(1),value:String(i[t])})})),r}(o,e);return{path:o,url:n,isExact:a,params:s}}(window.location.hash.slice(1),{path:this.path,exact:this.exact})}mount(){const e=this.match();if(e)return this.render(e)}}var te=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let re=class extends i{render(){return o.dy` <in-greeting greeting="${Z.TEXT_GREETING}" description="${Z.TEXT_GREETING_DESC}"></in-greeting> <in-profile .user="${Z.STATIC_USER}" .socialMedia="${Z.APP_SOCIAL_MEDIA}"></in-profile> <in-footer text="${Z.TEXT_FOOTER}"></in-footer> `}};re=te([(0,k.Mo)("page-landing")],re);var oe=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ie=class extends i{renderProjectCard(e){return o.dy` <div class="col-sm-6 col-lg-4 px-2"> <in-project-card title="${e.title}" description="${e.description}"></in-project-card> </div> `}render(){return o.dy` <div class="container-fluid mx-lg-auto width-default"> <div class="row g-3"> ${Z.APP_PROJECTS.map((e=>this.renderProjectCard(e)))} </div> </div> <in-footer text="${Z.TEXT_FOOTER}"></in-footer> `}};ie=oe([(0,k.Mo)("page-project")],ie);var ne=function(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a},ae=function(e,t,r,o){return new(r||(r=Promise))((function(i,n){function a(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};let se=class extends i{constructor(){super(...arguments),this._forceUpdateHandler=()=>ae(this,void 0,void 0,(function*(){"#content"!==window.location.hash&&this.requestUpdate()}))}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",this._forceUpdateHandler,!1)}disconnectedCallback(){window.removeEventListener("hashchange",this._forceUpdateHandler,!1),super.disconnectedCallback()}render(){return o.dy` <in-header title="${Z.APP_NAME}" .navData="${Z.APP_NAVIGATION}"></in-header> <main id="content"> ${new ee("/",(()=>o.dy`<page-landing>`),!0).mount()} ${new ee("/profile",(()=>o.dy`<page-landing>`),!0).mount()} ${new ee("/projects",(()=>o.dy`<page-landing>`),!0).mount()} ${new ee("/work-experiences",(()=>o.dy`<page-landing>`),!0).mount()} ${new ee("/skills",(()=>o.dy`<page-landing>`),!0).mount()} </main> `}};se=ne([(0,k.Mo)("indramahkota-personal-website")],se),window.addEventListener("DOMContentLoaded",(()=>{(0,o.sY)(o.dy`<indramahkota-personal-website>`,document.body)}));var ce=r(897);const le=(0,r(977).ZF)({apiKey:"AIzaSyDLfRD1Saj7dA2v2Owg85OyPoOornrJpmQ",authDomain:"personal-web-indramahkota-info.firebaseapp.com",projectId:"personal-web-indramahkota-info",storageBucket:"personal-web-indramahkota-info.appspot.com",messagingSenderId:"916473936708",appId:"1:916473936708:web:b2101c16be1dd2a847b511",measurementId:"G-L22HYVFN2S"});(0,ce.IH)(le)}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,i,n]=e[d],s=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,n<a&&(a=n));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,i,n]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.p="/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[a,s,c]=r,l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(c)var d=c(o)}for(t&&t(r);l<a.length;l++)n=a[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},r=self.webpackChunkindra_portfolio=self.webpackChunkindra_portfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=o.O(void 0,[750],(()=>o(318)));i=o.O(i)})();