const API_KEY = "7a766d66fcb4086b79c4f524342ef2d3"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const city = document.querySelector("#weather h2:first-child");
    const weather = document.querySelector("#weather h2:last-child");
    city.innerText = `${data.sys.country}, ${data.name}의 날씨`
    weather.innerText = `${data.weather[0].main}(${data.weather[0].description}), 기온은 ${data.main.temp}도`;
  });

}

function onGeoError(){
  alert("위치를 찾을 수 없어요 ㅜㅅㅜ");
}

document.querySelector("#weather h2:first-child").innerText = "날씨 조회를 위해"
document.querySelector("#weather h2:last-child").innerText = "위치 허용을 눌러주세요!"

function findgeo(){
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

if (savedUsername === null) {
  loginForm.addEventListener('submit', findgeo);
}
else {
  findgeo();
}