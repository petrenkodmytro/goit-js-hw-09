!function(){var e=document.querySelector(".js-seach-form"),n=document.querySelector(".js-card-container");function t(e){var t='<img src="'.concat(e.sprites.front_default,'" alt="').concat(e.name,'">\n  <p>Name: <b>').concat(e.name,"</b></p>\n  <p>Weight: <b>").concat(e.weight,"</b> cm</p>\n  <p>Height: <b>").concat(e.height,"</b> kg</p>");n.insertAdjacentHTML("beforeend",t)}e.addEventListener("submit",(function(c){c.preventDefault(),n.innerHTML="",(o=e.elements.query.value,fetch("http://pokeapi.co/api/v2/pokemon/".concat(o)).then((function(e){return e.json()}))).then(t).catch((function(e){console.log(e),alert("Упс, трапилась біда!")})).finally((function(){e.reset()}));var o}))}();
//# sourceMappingURL=08-pockemon.1ec141fb.js.map
