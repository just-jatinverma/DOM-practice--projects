function updateClock() {
  const timeEL = document.getElementById("time");
  const dateEl = document.getElementById("date");

  const now = new Date();

  const timeString = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const dateString = now.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  dateEl.textContent = dateString;
  timeEL.textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();
