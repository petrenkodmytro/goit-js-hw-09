!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var c=r("6JpON"),a=document.querySelector(".js-seach-form"),i=document.querySelector(".seach-more"),l=document.querySelector(".js-news-container"),s=document.querySelector(".up"),u="",d=1;s.style.display="none",a.addEventListener("submit",(function(n){n.preventDefault(),l.innerHTML="",p(u=n.currentTarget.elements.news.value.trim(),d=1).then((function(e){e.totalCount;var n=e.value;if(0===n.length)throw new Error("No data");h(n),d+=1,console.log(d),i.classList.remove("visually-hidden")})).catch((function(n){l.innerHTML="",e(c).Report.failure("Attention!!!","Not found anything","Ok"),console.error(n)}))})),i.addEventListener("click",(function(n){p(u,d).then((function(e){e.totalCount;var n=e.value;if(0===n.length)throw new Error("No data");h(n),d+=1,console.log(d)})).catch((function(n){l.innerHTML="",e(c).Report.failure("Attention!!!","Something wrong","Ok"),console.error(n)}))})),window.addEventListener("scroll",(function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?s.style.display="block":s.style.display="none"})),s.addEventListener("click",(function(){console.log("ooooo"),document.documentElement.scrollTo({top:0,behavior:"smooth"})}));var f={method:"GET",headers:{"X-RapidAPI-Key":"504d5aef12msh28872f0ea14deb5p1f3bbcjsnd108e0bdaaa0","X-RapidAPI-Host":"contextualwebsearch-websearch-v1.p.rapidapi.com"}};function p(e,n){return fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=".concat(e,"&pageNumber=").concat(n,"&pageSize=6&autoCorrect=true"),f).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function h(e){var n=e.reduce((function(e,n){return o=(t=n).title,r=t.provider,c=t.description,a=t.url,i=t.image,'<div class="article-card">\n  <img class="article-img" src="'.concat(i.url,'" alt="" />\n      <h3 class="article-title">').concat(o,'</h3>\n      <h5 class="article-author">').concat(r.name||"Anonymus",'</h5>\n      <p class="article-text">').concat(c,'</p>\n      <a class="article-link" href="').concat(a,'">Read more</a>\n  </div>')+e;var t,o,r,c,a,i}),"");l.insertAdjacentHTML("beforeend",n)}}();
//# sourceMappingURL=09-seach-news.33b4c63c.js.map
