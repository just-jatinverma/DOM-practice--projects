function changeColor(color) {
  const headingEl = document.getElementById("mainHeading");

  headingEl.style.color = color;
}

document
  .getElementById("redButton")
  .addEventListener("click", () => changeColor("#e74c3c"));

document
  .getElementById("greenButton")
  .addEventListener("click", () => changeColor("#2ecc71"));

document
  .getElementById("blueButton")
  .addEventListener("click", () => changeColor("#3498db"));

document
  .getElementById("purpleButton")
  .addEventListener("click", () => changeColor("#9b59b6"));

document
  .getElementById("resetButton")
  .addEventListener("click", () => changeColor("#34495e"));
