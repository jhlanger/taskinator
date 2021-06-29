

var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");
    

var createTaskHandler = function () {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";
    taskToDoEl.appendChild(taskItemEl);
};

buttonEl.addEventListener ("click", createTaskHandler);