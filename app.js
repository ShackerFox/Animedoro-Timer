const timerDisplay = document.getElementById("timerDisplay");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");

const alarm = new Audio("Alarm.mp3");
const statusGIF = document.getElementById("statusGIF");

const volumeMute = document.getElementById("volumeMuteBtn");
const volumeUnmute = document.getElementById("volumeUnmuteBtn");

const alarmDismissBtn = document.getElementById("alarmDismissBtn");

if (!localStorage.getItem("studyCountdown"))
  localStorage.setItem("studyCountdown", 40);
if (!localStorage.getItem("breakCountdown"))
  localStorage.setItem("breakCountdown", 20);

if (!localStorage.getItem("Study GIF Source"))
  localStorage.setItem("Study GIF Source", "./images/eminem gif.gif");
if (!localStorage.getItem("Break GIF Source"))
  localStorage.setItem("Break GIF Source", "./images/eminem awesome.gif");

let studyCountdown = localStorage.getItem("studyCountdown") * 60;
let breakCountdown = localStorage.getItem("breakCountdown") * 60;

let i;

let currentStatus = "Study Time";

let interval;

i = studyCountdown;
statusGIF.src = localStorage.getItem("Study GIF Source");

startBtn.onclick = () => {
  startBtn.style.display = "none";
  pauseBtn.style.display = "initial";
  stopBtn.style.display = "initial";

  interval = setInterval(() => {
    if (i > 0) {
      i--;
      let minutes = Math.abs(i / 60 - (i > 29 ? 1 : 0) + (i == 30 ? 0.5 : 0));
      let seconds = i % 60;

      timerDisplay.innerText =
        (minutes.toFixed(0) < 10 ? "0" : "") +
        minutes.toFixed(0) +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;
    } else {
      clearInterval(interval);
      if (currentStatus == "Study Time") {
        currentStatus = "Anime Time";
        i = breakCountdown;
        statusGIF.src = localStorage.getItem("Break GIF Source");
      } else {
        currentStatus = "Study Time";
        i = studyCountdown;
        statusGIF.src = localStorage.getItem("Study GIF Source");
      }
      alarm.play();
      alarm.loop = true;
      alarmDismissBtn.style.display = "initial";
      startBtn.style.display = "initial";
      pauseBtn.style.display = "none";
      stopBtn.style.display = "none";
    }
  }, 1000);
};

stopBtn.onclick = () => {
  window.location.reload();
};

pauseBtn.onclick = () => {
  clearInterval(interval);
  startBtn.style.display = "initial";
  pauseBtn.style.display = "none";
};

// Loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("lofiplayer", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  player.setVolume(0);
  player.playVideo();
}

volumeUnmute.onclick = () => {
  player.setVolume(100);
  volumeMute.style.display = "initial";
  volumeUnmute.style.display = "none";
};

volumeMute.onclick = () => {
  player.setVolume(0);
  volumeMute.style.display = "none";
  volumeUnmute.style.display = "initial";
};

alarmDismissBtn.onclick = () => {
  alarm.pause();
  alarm.currentTime = 0;
  alarmDismissBtn.style.display = "none";
};
