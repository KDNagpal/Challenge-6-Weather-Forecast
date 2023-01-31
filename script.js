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
  
    let url2 = forcastApi + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';
    
      fetch(url2)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)
          })
          .catch(function (err) {
            console.error(err);
          });
    
  }

searchBtn.addEventListener('click', submitSearch);