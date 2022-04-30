const API_KEY = "7a766d66fcb4086b79c4f524342ef2d3"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `날씨: ${data.weather[0].main}, ${data.main.temp}도`;
  });

}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

var request = require('request');

const client_id = 'bc3edbeb2dae4ce4b505d9a191e5dfff'
const client_secret = '28fe062514604c0482f46ebe4c716482'

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});