const togglebtn = document.getElementById("toggleButton");
const bodyEl = document.getElementById("body");
const bulbEl = document.getElementById("bulb");
const statusEl = document.getElementById("status");

function togglebulb() {
  bodyEl.classList.toggle("dark-mode");
  bulbEl.classList.toggle("off");

  if (
    togglebtn.innerText === "Turn On" &&
    statusEl.innerText === "Status: Off"
  ) {
    togglebtn.innerText = "Turn Off";
    statusEl.innerText = "Status: On";
  } else {
    togglebtn.innerText = "Turn On";
    statusEl.innerText = "Status: Off";
  }
}
