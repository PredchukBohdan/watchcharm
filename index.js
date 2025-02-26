(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("header");window.scrollY>100?e==null||e.classList.add("sticky"):e==null||e.classList.remove("sticky"),window.addEventListener("scroll",()=>{window.scrollY>100?e==null||e.classList.add("sticky"):e==null||e.classList.remove("sticky")})});window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("mobile-menu");window.innerWidth<1280&&c();function c(){window.addEventListener("click",t=>{(t.target.closest("#btn-close")||!t.target.closest(".menu-mobile"))&&e.classList.contains("is-open")&&o(),t.target.closest("#burger-btn")&&s()})}function s(){e==null||e.classList.add("is-open"),document.body.classList.add("hidden")}function o(){e==null||e.classList.remove("is-open"),document.body.classList.remove("hidden")}});(()=>{const e=document.querySelectorAll("section"),c=document.querySelectorAll(".observe"),s=document.querySelector(".parallax"),o={root:null,rootMargin:"0px",threshold:.7},t={root:null,threshold:0};function i(n){n.forEach(r=>{if(r.isIntersecting){const f=r.target.getAttribute("id"),u=document.getElementById("header"),a=u.querySelectorAll(".nav-link"),d=u.querySelector(`[href="#${f}"]`);a==null||a.forEach(h=>h.classList.remove("active")),d==null||d.classList.add("active")}})}const l=new IntersectionObserver(i,o),m=new IntersectionObserver(n=>{n.forEach(r=>{r.target.classList.toggle("show",r.isIntersecting)})},t),p=new IntersectionObserver(n=>{n.forEach(r=>{r.target.classList.toggle("show",r.isIntersecting)})});e==null||e.forEach(n=>{l.observe(n)}),c==null||c.forEach(n=>{m.observe(n)}),p.observe(s)})();(()=>{const e=document.getElementById("back-to-top");window.scrollY>500?e==null||e.classList.add("active"):e==null||e.classList.remove("active"),window.addEventListener("scroll",()=>{window.scrollY>500?e==null||e.classList.add("active"):e==null||e.classList.remove("active")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})})();(()=>{if(!customElements.get("media-popup")){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.setHtmlElements(),this.togglePopup()}setHtmlElements(){this.imagesList=document.querySelector(".catalog-list")}togglePopup(){var s;(s=this.imagesList)==null||s.addEventListener("click",o=>{if(o.target.closest(".catalog-item")){const t=o.target.closest(".catalog-item"),i=t==null?void 0:t.querySelector("img");this.openPopup(i)}}),window.addEventListener("click",o=>{(o.target.closest(".media-close")||o.target.closest(".media-over"))&&this.closePopup()})}openPopup(s){if(s){const o=this.querySelector("img");o.src=s.dataset.popup,o.alt=s.alt,this.classList.add("is-open"),document.body.classList.add("hidden")}}closePopup(){this.classList.remove("is-open"),document.body.classList.remove("hidden")}}customElements.define("media-popup",e)}})();(()=>{if(!customElements.get("reviews-slider")){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.initSlider()}disconnectedCallback(){this.swiper.destroy()}initSlider(){this.swiper=new Swiper(this,{slidesPerView:1,spaceBetween:20,speed:800,effect:"coverflow",grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:20,effect:"slide"},1280:{slidesPerView:3,spaceBetween:20,effect:"slide"}}})}}customElements.define("reviews-slider",e)}})();(()=>{if(!customElements.get("tabs-component")){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.setHtmlElements(),this.initTabs()}setHtmlElements(){var s;this.tabsWrapper=this.querySelector(".tabs-wrapper"),this.tabs=this.querySelectorAll(".tabs-button"),this.content=this.querySelector(".tabs-content"),this.images=(s=this.content)==null?void 0:s.querySelectorAll("img")}initTabs(){var s;(s=this.tabsWrapper)==null||s.addEventListener("click",o=>{o.target.closest(".tabs-element")&&this.showContent(o.target.closest(".tabs-element"))})}showContent(s){var t;if(!s)return;const o=s.dataset.type;this.hideContent(),s.querySelector(".tabs-button").classList.add("active"),(t=this.images)==null||t.forEach(i=>{i.id===o?i.classList.add("active"):i.classList.remove("active")})}hideContent(){var s;(s=this.tabs)==null||s.forEach(o=>o.classList.remove("active"))}}customElements.define("tabs-component",e)}})();
//# sourceMappingURL=index.js.map
