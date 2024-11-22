var btn = document.querySelector(".landing-page   button");
var appContainer = document.querySelector(".app-container");
var img = document.querySelector(".weather-image img");
var landingPage = document.querySelector(".landing-page");
var search = document.querySelector(".search button");
var input = document.querySelector(".search input");
var temperature = document.querySelector(".temperature .temp");
var city = document.querySelector(".city #city");
var country = document.querySelector(".city #Country");
var humidity = document.querySelector(".humidity-wind .humidity p");
var wind = document.querySelector(".humidity-wind .wind p");
var back = document.querySelector("#back");
btn.addEventListener("click", () => {
  appContainer.style.display = "flex";
  landingPage.style.display = "none";
  back.style.display = "block";
  input.value = "";
});

async function getWeather(cityname) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=84a0c61faa904564b25125208242111&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}

search.addEventListener("click", async () => {
  var value = input.value;
  const result = await getWeather(value);
  console.log(result);
  temperature.innerHTML = result.current.temp_c + "°C";
  city.innerHTML = result.location.name;
  country.innerHTML = result.location.country;
  humidity.innerHTML = result.current.humidity + "%";
  wind.innerHTML = result.current.wind_kph + "km/h";
  if (result.current.temp_c > 35) {
    img.src = "sun-3d-illustration-download-in.png";
  } else if (25 < result.current.temp_c && result.current.temp_c < 35) {
    img.src = "cloudy.png";
  } else if (result.current.temp_c < 25 && result.current.temp_c > 15) {
    img.src = "cloud.png";
  } else {
    img.src = "cold.png";
  }
});

back.addEventListener("click", () => {
  appContainer.style.display = "none";
  landingPage.style.display = "flex";
  back.style.display = "none";
});
