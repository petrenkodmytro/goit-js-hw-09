function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i);var o=i("7Y9D8");const a=document.querySelector(".js-seach-form"),l=document.querySelector(".js-news-container");a.addEventListener("submit",(function(n){n.preventDefault();(t=a.elements.news.value.trim(),fetch(`https://newsapi.org/v2/everything?q=${t}&apiKey=ea323ce12d5643248c09e504b34a1936`).then((e=>e.json()))).then((({articles:e})=>{if(0===e.length)throw new Error("No data");!function(e){const n=e.reduce(((e,n)=>function({author:e,title:n,description:t,url:r,urlToImage:i}){return`<div class="article-card">\n  <img class="article-img" src="${i}" alt="" />\n      <h3 class="article-title">${n}</h3>\n      <h4 class="article-author">${e||"Anonymus"}</h4>\n      <p class="article-text">${t}</p>\n      <a class="article-link" href="${r}">Read more</a>\n  </div>`}(n)+e),"");l.innerHTML=n}(e)})).catch((n=>{l.innerHTML="",e(o).Report.failure("Attention!!!","Not found anything","Ok"),console.error(n)})).finally((()=>{a.reset()}));var t}));
//# sourceMappingURL=09-seach-news.761b4557.js.map
