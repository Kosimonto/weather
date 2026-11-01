// catching the dom 
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('city');

const API_KEY = "83eeab348b7ed29bd1fb370a4067a0bd";
URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q={city name}&appid={API key}"

async function checkWeather(city = 'tunisia'){
     const res = await fetch(URL.replace("{city name}", city).replace("{API key}", API_KEY));
     let data = await res.json();
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
searchBtn.addEventListener("click", () => {
     checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", (e) => {
     if(e.key == "Enter"){
          checkWeather(searchBox.value);
     }
});
checkWeather();