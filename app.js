const timerDisplay = document.getElementById("timerDisplay");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");

const alarm = new Audio("Alarm.mp3");
const statusGIF = document.getElementById("statusGIF");

let studyCountdown = 2400;
let breakCountdown = 1200;

let i;

let currentStatus = "Study Time";

let interval;

i = studyCountdown;
statusGIF.src = "./images/Deku Studying.gif";

startBtn.onclick = () => {
  startBtn.style.display = "none";
  pauseBtn.style.display = "initial";
  stopBtn.style.display = "initial";

  interval = setInterval(() => {
    if (i > 0) {
      i--;
      let minutes = i / 60;
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
        statusGIF.src = "./images/Anime gif.gif";
      } else {
        currentStatus = "Study Time";
        i = studyCountdown;
        statusGIF.src = "./images/Deku Studying.gif";
      }
      alarm.play();
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
