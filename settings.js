const workTimeInput = document.getElementById("workTimeInput");
const breakTimeInput = document.getElementById("breakTimeInput");
const workTimeGIFinput = document.getElementById("workTimeGIFinput");
const breakTimeGIFinput = document.getElementById("breakTimeGIFinput");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetSettings");

workTimeInput.value = parseInt(localStorage.getItem("studyCountdown"));
breakTimeInput.value = parseInt(localStorage.getItem("breakCountdown"));

saveBtn.onclick = () => {
  localStorage.setItem("studyCountdown", parseInt(workTimeInput.value));
  localStorage.setItem("breakCountdown", parseInt(breakTimeInput.value));

  if (!workTimeGIFinput.value == null || !workTimeGIFinput.value == "")
    localStorage.setItem("Study GIF Source", workTimeGIFinput.value);
  if (!breakTimeGIFinput.value == null || !breakTimeGIFinput.value == "")
    localStorage.setItem("Break GIF Source", breakTimeGIFinput.value);

  workTimeInput.value = parseInt(localStorage.getItem("studyCountdown"));
  breakTimeInput.value = parseInt(localStorage.getItem("breakCountdown"));
  workTimeGIFinput.value = localStorage.getItem("Study GIF Source");
  breakTimeGIFinput.value = localStorage.getItem("Break GIF Source");
};

resetBtn.onclick = () => {
  localStorage.setItem("studyCountdown", 40);
  localStorage.setItem("breakCountdown", 20);
  localStorage.setItem("Study GIF Source", "./images/Deku Studying.gif");
  localStorage.setItem("Break GIF Source", "./images/Anime gif.gif");

  workTimeInput.value = parseInt(localStorage.getItem("studyCountdown"));
  breakTimeInput.value = parseInt(localStorage.getItem("breakCountdown"));
};
