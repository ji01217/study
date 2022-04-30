const calender = document.querySelector("#clock h2:first-child")
const clock = document.querySelector("#clock h2:last-child")

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const datee = date.getDate()
const day = date.getDay()
const week = ['일', '월', '화', '수', '목', '금', '토'];

calender.innerText = `오늘은 ${year}년 ${month}월 ${datee}일 ${week[day]}요일`

function getTime(){
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재 시각은 ${hours}:${minutes}:${seconds} 입니다.`
}

getTime()
setInterval(getTime, 1000)