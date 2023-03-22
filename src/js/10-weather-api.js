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

import { Notify, Loading } from 'notiflix';
import moment from 'moment';

const seachFormRef = document.querySelector('.js-seach-form');
const containerRef = document.querySelector('.weather');
console.log(moment().format('LLLL'));
seachFormRef.addEventListener('submit', onSearchCitySubmit);

function onSearchCitySubmit(e) {
  e.preventDefault();
  Loading.dots();
  const city = e.currentTarget.elements.city.value.trim().toLowerCase();
  console.log(city);

  containerRef.innerHTML = '';

  // якщо input пустий пошук не виконуємо
  if (city === '') {
    Notify.info('Please enter name of the city.');
    return;
  }

  fetchCountries(city)
    .then(data => {
      // console.log(data);
      renderMarkup(data);
    })
    .catch(error => {
      Notify.failure('Oops, there is no city with that name');
      renderError();
      console.log(error);
    })
    .finally(() => {
      seachFormRef.reset();
      Loading.remove();
    });
}

// https://openweathermap.org/img/wn/02d@2x.png
function renderMarkup(data) {
  const markup = ` <div class="container">
  <div class="weather-side">
    <p class="date-day">${moment().format('LLLL')}</p>
    <p class="city">${data.name}</p>
    <p class="country">Country: ${data.sys.country}</p>
    <h2 class="weather-temp">${data.main.temp.toFixed(
      1
    )} C<sup>&#176;</sup></h2>
    <h3 class="weather-desc">${data.weather[0].main}</h3>
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" alt="${data.weather[0].description}" class="weather-icon"></img>
    <div class="temp-container">
      <div>
        <h4 class="title">min</h4>
        <h4 class="temp">${data.main.temp_min.toFixed(
          1
        )} C<sup>&#176;</sup></h4>
      </div>
      <div>
        <h4 class="title">max</h4>
        <h4 class="temp">${data.main.temp_max.toFixed(
          1
        )} С<sup>&#176;</sup></h4>
      </div>
    </div>
  </div>
  <div class="info-side">
    <div class="today-info-container">
      <div class="today-info precipitation">
        <span class="title">cloudiness</span>
        <span class="value">${data.clouds.all} %</span>
      </div>
      <div class="today-info precipitation">
        <span class="title">pressure</span>
        <span class="value">${data.main.pressure} hPa</span>
      </div>
      <div class="today-info humidity">
        <span class="title">humidity</span>
        <span class="value">${data.main.humidity} %</span>
      </div>
      <div class="today-info wind">
        <span class="title">wind</span>
        <span class="value">${data.wind.speed} km/h</span>
      </div>
    </div>
  </div>
</div>`;
  containerRef.insertAdjacentHTML('beforeend', markup);
}

function renderError() {
  const markup = `<h3 class="msg">City not found</h3>`;
  containerRef.insertAdjacentHTML('beforeend', markup);
}
