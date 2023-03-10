const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const fetchCountries = city => {
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

import Notiflix from 'notiflix';

const seachFormRef = document.querySelector('.js-seach-form');

seachFormRef.addEventListener('submit', onSearchCitySubmit);

function onSearchCitySubmit(e) {
  e.preventDefault();
  const city = e.currentTarget.elements.city.value.trim();
  console.log(city);

  // listCountryRef.innerHTML = '';
  // cardCountryRef.innerHTML = '';

  // якщо input пустий пошук не виконуємо
  if (city === '') {
    Notiflix.Notify.info('Please enter name of the city.');
    return;
  }

  fetchCountries(city)
    .then(data => {
      // renderPage(countries);
      console.log(data);
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no city with that name');
      console.log(error);
    });
}
// https://openweathermap.org/img/wn/02d@2x.png
