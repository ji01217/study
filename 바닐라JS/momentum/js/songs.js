// songs.js

const songs = [
  {
    song:"WAVE",
    singer:"에이티즈"
  },
  {
    song:"D.D.D",
    singer:"더보이즈"
  },
  {
    song:"We Young",
    singer:"엔시티 드림"
  },
  {
    song:"그해여름(두번째 이야기)",
    singer:"인피니트"
  },
  {
    song:"어느날 머리에서 뿔이 자랐다",
    singer:"투모로우바이투게더"
  },
  {
    song:"My page",
    singer:"엔시티 드림"
  },
  {
    song:"WATER",
    singer:"더보이즈"
  },
  {
    song:"그해여름",
    singer:"인피니트"
  },
  {
    song:"주인공",
    singer:"엔시티 드림"
  },
  {
    song:"Microphone",
    singer:"Young K"
  },
]

const song = document.querySelector("#song span:first-child");
const singer = document.querySelector("#song span:last-child");

const todaysSongs = songs[Math.floor(Math.random()*songs.length)];

song.innerText = todaysSongs.song;
singer.innerText = todaysSongs.singer;