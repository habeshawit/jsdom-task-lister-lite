// form and input fields
const newTaskForm = document.getElementById("create-task-form");

// ul for new task description
const newList = document.getElementById('tasks');

newTaskForm.addEventListener("submit", function(e) {
  // stop form from submit
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  newList.appendChild(newTask);
  
  const newButton = document.createElement("button");
  newButton.class = "delete-btn";
  newButton.innerText = "X";
  newTask.appendChild(newButton);
  
  // reset form
  e.target.reset();
})

newList.addEventListener("click", function(event) {
  if (event.target.class === "delete-btn") {
    event.target.parentElement.remove();
  }
})