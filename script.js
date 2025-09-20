function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="this.parentElement.classList.toggle('completed')">${taskValue}</span>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
