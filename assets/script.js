// Date
var currentDate = moment().format("YYYY-MM-DD");
// 5-day forecast
var fiveDays = [
  moment().add(1, 'days').format("YYYY-MM-DD 00:00:00"),
  moment().add(2, 'days').format("YYYY-MM-DD 00:00:00"),
  moment().add(3, 'days').format("YYYY-MM-DD 00:00:00"),
  moment().add(4, 'days').format("YYYY-MM-DD 00:00:00"),
  moment().add(5, 'days').format("YYYY-MM-DD 00:00:00")
];
var forecastContainer = $("#forecastList");
// console.log(forecastConainer.text);
// console.log(fiveDays);

// Current selected info
var currentCity = document.querySelector(".current-city");
var currentCityDate = document.querySelector(".current-city-date");
var currentInfo = document.querySelector(".current-info");
var currentTemp = document.querySelector(".current-temp");
var currentWind = document.querySelector(".current-wind");
var currentHumidity = document.querySelector(".current-humidity");


var cityInput = document.querySelector(".city-input");
// Buttons
var submitBtn = document.querySelector(".save-current");
var recentCityBtn = document.querySelectorAll(".recent-city");

var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // let citySelection = cityInput.value;
    // console.log(cityInput.value);
    const inputCity = cityInput.value
    todaysWeather();
    inputCity = recentCityBtn[0];

  });


// Current city forecast
function todaysWeather () {

  fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${cityInput.value}&appid=25c8bef2657790fdeaf81f2a54759430`
  
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    currentCity.textContent = data.name;
    currentCityDate.textContent = `${currentDate} `;
    currentTemp.textContent = `Temp: ${data.main.temp}F`
    currentWind.textContent = `Wind: ${data.wind.speed} MPH`
    currentHumidity.textContent = `Humidity ${data.main.humidity}%`

    
    
  });
};

function fiveDayForecast () {
  fetch("https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=orlando&appid=25c8bef2657790fdeaf81f2a54759430"
  
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    for (let i = 0; i < data.list.length; i++) {
      // console.log(data.list[i].dt_txt);
      for(let n = 0; n < fiveDays.length; n++) {
        if(data.list[i].dt_txt == fiveDays[n])
        console.log(data.list[i]);
        let forecastData = data.list[i];
        for(let l = 0; n < forecastList.length; l++) {
          forecastList[0].innerHTML = ` <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <ul>
            <li>Temp ${data.list[0].main.temp}F</li>
            <li>Wind ${data.list[0].wind.speed}</li>
            <li>Humidity ${data.list[0].main.humidity}</li>
          </ul>`;
          forecastList[1].innerHTML = ` <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <ul>
            <li>Temp ${data.list[1].main.temp}F</li>
            <li>Wind ${data.list[1].wind.speed}</li>
            <li>Humidity ${data.list[1].main.humidity}</li>
          </ul>`;
          forecastList[2].innerHTML = ` <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <ul>
            <li>Temp ${data.list[2].main.temp}F</li>
            <li>Wind ${data.list[2].wind.speed}</li>
            <li>Humidity ${data.list[2].main.humidity}</li>
          </ul>`;
          forecastList[3].innerHTML = ` <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <ul>
            <li>Temp ${data.list[3].main.temp}F</li>
            <li>Wind ${data.list[3].wind.speed}</li>
            <li>Humidity ${data.list[3].main.humidity}</li>
          </ul>`;
          forecastList[4].innerHTML = ` <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <ul>
            <li>Temp ${data.list[4].main.temp}F</li>
            <li>Wind ${data.list[4].wind.speed}</li>
            <li>Humidity ${data.list[4].main.humidity}</li>
          </ul>`;
        }
        
      }
    }  
  });
}


// function inputCityWeather() {
  
//   var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="


//   if(cityInput.textContent.length == 0) {
//     document.querySelector(".search-city").textContent = "Please Enter a City Name";

//   }
// }

// window.addEventListener("load", todaysWeather());
window.addEventListener("load", fiveDayForecast());