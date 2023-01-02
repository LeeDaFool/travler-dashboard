var cityInput = document.querySelector(".city-input");
var submitBtn = document.querySelector(".save-current");
var currentCity = document.querySelector(".current-city");
var currentCityDate = document.querySelector(".current-city-date");
var currentInfo = document.querySelector(".current-info");
var currentTemp = document.querySelector(".current-temp");
var currentWind = document.querySelector(".current-wind");
var currentHumidity = document.querySelector(".current-humidity");
var recentCityBtn = document.querySelectorAll(".recent-city");
var currentDate = moment().format("MM/DD/YYYY");






function todaysWeather () {

  var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


  fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=orlando&appid=25c8bef2657790fdeaf81f2a54759430"
  
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    currentCity.textContent = data.name;
    currentCityDate.textContent = `${currentDate} `;
    currentTemp.textContent += ` ${data.main.temp}F`
    currentWind.textContent += ` ${data.wind.speed} MPH`
    currentHumidity.textContent += ` ${data.main.humidity}%`

    
    
  });
}


// function inputCityWeather() {
  
//   var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="


//   if(cityInput.textContent.length == 0) {
//     document.querySelector(".search-city").textContent = "Please Enter a City Name";

//   }
// }

window.addEventListener("load", todaysWeather());
