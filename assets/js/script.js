
//grabs entire form, both inputs and button
var formEl = document.querySelector("#task-form");
//grabs unordered list from html for tasks
var taskToDoEl = document.querySelector("#tasks-to-do");
    

var createTaskHandler = function () {
    event.preventDefault();
    //grabs text input in form
    var taskNameInput = document.querySelector("input[name='task-name']").value;
   //grabs drop down type 
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;
    //creates a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.classname = "task-info";
    
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener ("submit", createTaskHandler);