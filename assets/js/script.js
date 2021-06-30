
//grabs entire form, both inputs and button
var formEl = document.querySelector("#task-form");
//grabs unordered list from html for tasks
var taskToDoEl = document.querySelector("#tasks-to-do");
    

var taskFormHandler = function () {
    event.preventDefault();
    //grabs text input in form
    var taskNameInput = document.querySelector("input[name='task-name']").value;
   //grabs drop down type 
    var taskTypeInput = document.querySelector("select[name = 'task-type']").value;
    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
  }
  formEl.reset();
    //packages the two variables above into an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //sned it as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    //creates a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.classname = "task-info";
    
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    taskToDoEl.appendChild(listItemEl);
}

formEl.addEventListener ("submit", taskFormHandler);

