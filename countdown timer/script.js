const startBtn = document.getElementById("start");
const inputEL = document.getElementById("countDownInput");
const resultEL = document.getElementById("result");

function countDown() {
  let inputSec = parseInt(inputEL.value);

  if (isNaN(inputSec)) {
    resultEL.innerText = `Please enter a valid number`;
    return;
  }

  if (inputSec <= 0) {
    resultEL.innerText = `Please enter a number greater than 0`;
    return;
  }

  const timer = setInterval(function () {
    inputSec--;
    resultEL.innerText = `${inputSec} Seconds remaining`;

    if (inputSec <= 0) {
      clearInterval(timer);
      resultEL.innerText = `Time's up!`;
    }
  }, 1000);
}

startBtn.addEventListener("click", countDown);
