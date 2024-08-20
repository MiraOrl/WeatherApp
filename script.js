const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  getWeather(searchInput.value);
  searchInput.value = "";
});

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f23899e7b3c9b3e810fb93d62896a99b`;

  const response = await fetch(apiUrl);
  const weather = await response.json();

  document.querySelector(".weather-content_city").textContent = weather.name;
  document.querySelector(".weather-content__temperature").innerHTML =
    Math.round(weather.main.temp - 273) + "&deg";
  document.querySelector(".weather-content__text").innerHTML =
    weather.weather[0].description;
  document.querySelector(".weather-content__feel-temp").innerHTML =
    Math.round(weather.main.feels_like - 273) + "&deg";
  document.querySelector(".weather-descr__subtitle").textContent =
    weather.main.humidity + "%";
  document.querySelector(".pressure").textContent = weather.main.pressure;
  document.querySelector(".wind-speed").innerHTML =
    Math.round(weather.wind.speed) + "м/с";
}

getWeather("Moscow");
