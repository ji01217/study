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
    song:"좋은사람(2022)",
    singer:"해찬"
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
    song:"child",
    singer:"Mark"
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

const singer = document.querySelector("#song h2:nth-child(2)");
const song = document.querySelector("#song h2:last-child");

const todaysSongs = songs[Math.floor(Math.random()*songs.length)];

singer.innerText = `🎤가수: ${todaysSongs.singer}`;
song.innerText = `🎧노래제목: ${todaysSongs.song}`;