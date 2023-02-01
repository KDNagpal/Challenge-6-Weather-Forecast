let apiKey = "bf55ceef668a886be7e962a4c553fd1f"
let forcastApi = "http://api.openweathermap.org/data/2.5/forecast?lat="
let lon = ""
let lat = ""
let geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q='
let app ='&appid='
let lim = '&limit=1'
const searchBtn = document.getElementById('searchBtn');

function submitSearch(event) {
    let city = searchInput = document.getElementById("searchInput").value;
    let url = geoApi + city + lim + app + apiKey
    fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (!data[0]) {
        alert('Location was not found!');
      } else {
        // addHistory(search)
        getCity(data[0]);
        return;
      }
  });
 
    console.log(searchInput);
    
    
}

function getCity(city) {

    var lat = city.lat;
    var lon = city.lon;
    var cityname = city.name;
  
    let url2 = forcastApi + lat + '&lon=' + lon + app + apiKey + '&units=imperial';
    
      fetch(url2)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            var iconCode = data.list[0].weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            //current day
            var iconCode = data.list[0].weather[0].icon;
            document.querySelector("#date").innerHTML = data.list[0].dt_txt;
            document.getElementById("weather-icon").innerHTML = `<img src="${iconUrl}" alt="Weather icon">`;
            document.querySelector("#feels-like").innerHTML = data.list[0].main.feels_like;
            document.querySelector("#humidity").innerHTML = data.list[0].main.humidity;
            document.querySelector("#temp").innerHTML = data.list[0].main.temp;
            document.querySelector("#temp-max").innerHTML = data.list[0].main.temp_max;
            document.querySelector("#temp-min").innerHTML = data.list[0].main.temp_min;
            //day 2
            var iconCode = data.list[9].weather[0].icon;
            const iconUrl2 = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.querySelector("#date2").innerHTML = data.list[9].dt_txt;
            document.getElementById("weather-icon2").innerHTML = `<img src="${iconUrl2}" alt="Weather icon">`;
            document.querySelector("#feels-like2").innerHTML = data.list[9].main.feels_like;
            document.querySelector("#humidity2").innerHTML = data.list[9].main.humidity;
            document.querySelector("#temp2").innerHTML = data.list[9].main.temp;
            document.querySelector("#temp-max2").innerHTML = data.list[9].main.temp_max;
            document.querySelector("#temp-min2").innerHTML = data.list[9].main.temp_min;
            //day 3
            var iconCode = data.list[18].weather[0].icon;
            const iconUrl3 = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.querySelector("#date3").innerHTML = data.list[18].dt_txt;
            document.getElementById("weather-icon3").innerHTML = `<img src="${iconUrl3}" alt="Weather icon">`;
            document.querySelector("#feels-like3").innerHTML = data.list[18].main.feels_like;
            document.querySelector("#humidity3").innerHTML = data.list[18].main.humidity;
            document.querySelector("#temp3").innerHTML = data.list[18].main.temp;
            document.querySelector("#temp-max3").innerHTML = data.list[18].main.temp_max;
            document.querySelector("#temp-min3").innerHTML = data.list[18].main.temp_min;
            //day 4
            var iconCode = data.list[27].weather[0].icon;
            const iconUrl4 = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.querySelector("#date4").innerHTML = data.list[27].dt_txt;
            document.getElementById("weather-icon4").innerHTML = `<img src="${iconUrl4}" alt="Weather icon">`;
            document.querySelector("#feels-like4").innerHTML = data.list[27].main.feels_like;
            document.querySelector("#humidity4").innerHTML = data.list[27].main.humidity;
            document.querySelector("#temp4").innerHTML = data.list[27].main.temp;
            document.querySelector("#temp-max4").innerHTML = data.list[27].main.temp_max;
            document.querySelector("#temp-min4").innerHTML = data.list[27].main.temp_min;
            //day 5
            var iconCode = data.list[36].weather[0].icon;
            const iconUrl5 = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.querySelector("#date5").innerHTML = data.list[36].dt_txt;
            document.getElementById("weather-icon5").innerHTML = `<img src="${iconUrl5}" alt="Weather icon">`;
            document.querySelector("#feels-like5").innerHTML = data.list[36].main.feels_like;
            document.querySelector("#humidity5").innerHTML = data.list[36].main.humidity;
            document.querySelector("#temp5").innerHTML = data.list[36].main.temp;
            document.querySelector("#temp-max5").innerHTML = data.list[36].main.temp_max;
            document.querySelector("#temp-min5").innerHTML = data.list[36].main.temp_min;
          })
          .catch(function (err) {
            console.error(err);
          });
    
  }
  //<p>Date: <span id="'date"></span></p>
  //<p>Feels Like: <span id="feels-like"></span>F</p>
  //<p>Humidity: <span id="humidity"></span></p>
  //<p>Temperature: <span id="temp"></span></p>
  //<p>Temperature Max: <span id="temp-max"></span></p>
  //<p>Temperature Min: <span id="temp-min"></span></p>

  



searchBtn.addEventListener('click', submitSearch);