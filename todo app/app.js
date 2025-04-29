const ulEl = document.getElementById("taskList");
const addBtn = document.getElementById("addButton");
const emptyEl = document.querySelector(".empty-list");

function updateCounter() {
  const total = ulEl.children.length;
  const checked = document.querySelectorAll(".complete-checkbox:checked");

  const totalEL = document.getElementById("totalTasks");
  totalEL.innerText = `Total tasks: ${total}`;

  const completeEL = document.getElementById("completedTasks");
  completeEL.innerText = `Completed: ${checked.length}`;

  if (total === 0) {
    ulEl.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`;
  }
}

function addTask() {
  const inputEl = document.getElementById("taskInput");

  if (inputEl.value) {
    emptyEl.remove();

    //create the li
    const liEl = document.createElement("li");
    liEl.classList.add("task-item");

    //create input
    const checkBoxEl = document.createElement("input");
    checkBoxEl.classList.add("complete-checkbox");
    checkBoxEl.setAttribute("type", "checkbox");

    //create span
    const spanEL = document.createElement("span");
    spanEL.classList.add("task-text");
    spanEL.innerText = inputEl.value;

    //create del btn
    const delEl = document.createElement("button");
    delEl.classList.add("delete-button");
    delEl.innerText = "🗑️";

    //append everything to li
    liEl.append(checkBoxEl, spanEL, delEl);

    //append everything to ul

    ulEl.append(liEl);

    inputEl.value = "";

    checkBoxEl.addEventListener("change", () => {
      spanEL.classList.toggle("task-item-completed");
      updateCounter();
    });

    delEl.addEventListener("click", () => {
      liEl.remove();
      updateCounter();
    });
  }
  updateCounter();
}

addBtn.addEventListener("click", addTask);
