function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var f=new Error("Cannot find module '"+e+"'");throw f.code="MODULE_NOT_FOUND",f}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var f=o("7Y9D8"),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,d=s||p||Function("return this")(),b=Object.prototype.toString,y=Math.max,h=Math.min,m=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==b.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}f=o("7Y9D8");const w=new Date(1678459219);console.log(w);document.querySelector(".js-seach-form").addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements.city.value.trim();if(console.log(n),""===n)return;(r=n,fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=e009aff8be670269fac51bd3506bf199&units=metric`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{console.log(e)})).catch((t=>{e(f).Notify.failure("Oops, there is no country with that name")}));var r}));
//# sourceMappingURL=10-weather-api.37294fcd.js.map
