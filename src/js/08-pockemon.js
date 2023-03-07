const seachFormRef = document.querySelector('.js-seach-form');
const cardRef = document.querySelector('.js-card-container');

seachFormRef.addEventListener('submit', onSeachPokemonSubmit);

function onSeachPokemonSubmit(e) {
  e.preventDefault();
  cardRef.innerHTML = '';
  const seachValue = seachFormRef.elements.query.value.trim();
  fetchPokemon(seachValue)
    .then(renderPokemonCard)
    .catch(error => {
      console.log(error);
      alert('Упс, трапилась біда!');
    })
    .finally(() => {
      seachFormRef.reset();
    });
}

// функция принесла и распарсила промис с данными
function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    }
  );
}

// функция создания разметки
function renderPokemonCard(pokemon) {
  const markup = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
  <p>Name: <b>${pokemon.name}</b></p>
  <p>Height: <b>${pokemon.weight}</b> cm</p>
  <p>Weight: <b>${pokemon.height}</b> kg</p>`;

  cardRef.insertAdjacentHTML('beforeend', markup);
}

// fetch(`http://pokeapi.co/api/v2/pokemon/101`)
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     renderPokemonCard(pokemon);
//   })
//   .catch(error => {
//     console.log(error);
//   });
