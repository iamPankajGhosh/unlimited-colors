/**
 * generate random color
 */

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
