function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("7Y9D8");const a=document.querySelector(".js-seach-form"),l=document.querySelector(".js-news-container");a.addEventListener("submit",(function(n){n.preventDefault();(t=a.elements.news.value.trim(),fetch(`https://newsapi.org/v2/everything?q=${t}`,c).then((e=>e.json()))).then((({articles:e})=>{if(0===e.length)throw new Error("No data");!function(e){const n=e.reduce(((e,n)=>function({author:e,title:n,description:t,url:r,urlToImage:o}){return`<div class="article-card">\n  <img class="article-img" src="${o}" alt="" />\n      <h3 class="article-title">${n}</h3>\n      <h4 class="article-author">${e||"Anonymus"}</h4>\n      <p class="article-text">${t}</p>\n      <a class="article-link" href="${r}">Read more</a>\n  </div>`}(n)+e),"");l.innerHTML=n}(e)})).catch((n=>{l.innerHTML="",e(i).Report.failure("Attention!!!","Not found anything","Ok"),console.error(n)})).finally((()=>{a.reset()}));var t}));const c={headers:{"X-Api-Key":"ea323ce12d5643248c09e504b34a1936"}};
//# sourceMappingURL=09-seach-news.365c7d0d.js.map
