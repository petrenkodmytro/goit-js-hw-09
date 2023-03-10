import Notiflix from 'notiflix';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const t = new Date(1678459219);
console.log(t);

export const fetchCountries = city => {
  return fetch(
    `${BASE_URL}/weather?q=${city}&appid=e009aff8be670269fac51bd3506bf199&units=metric`
  ).then(response => {
    if (!response.ok) {
      // явно відхиляємо проміс, щоб можна було зловити і обробити помилку
      throw new Error(response.status);
    }

    return response.json();
  });
};

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const seachFormRef = document.querySelector('.js-seach-form');

seachFormRef.addEventListener('submit', onSearchCountryInput);

function onSearchCountryInput(e) {
  e.preventDefault();
  const nameCountry = e.currentTarget.elements.city.value.trim();
  console.log(nameCountry);

  // listCountryRef.innerHTML = '';
  // cardCountryRef.innerHTML = '';

  // якщо input пустий пошук не виконуємо
  if (nameCountry === '') {
    return;
  }

  fetchCountries(nameCountry)
    .then(data => {
      // if (countries.length > 10) {
      //   Notiflix.Notify.info(
      //     'Too many matches found. Please enter a more specific name.'
      //   );
      //   return;
      // }

      // renderPage(countries);
      console.log(data);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
// https://openweathermap.org/img/wn/02d@2x.png
