function nameChange() {
  const nameInputEl = document.getElementById("nameInput");

  const nameEl = document.getElementById("nameDisplay");

  nameEl.innerText = nameInputEl.value;
}

function jobChange() {
  const jobInputEl = document.getElementById("jobInput");

  const jobEl = document.getElementById("jobDisplay");

  jobEl.innerText = jobInputEl.value;
}

function ageChange() {
  const ageInputEl = document.getElementById("ageInput");

  const ageEl = document.getElementById("ageDisplay");

  ageEl.innerText = ageInputEl.value;
}

function bioChange() {
  const bioInputEl = document.getElementById("bioInput");

  const bioEl = document.getElementById("bioDisplay");

  bioEl.innerText = bioInputEl.value;
}
