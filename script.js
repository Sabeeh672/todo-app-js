const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function(){
    const taskText = document.createElement("li");
    taskText.innerText = taskInput.value;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.classList.add("delete-btn");

    taskText.appendChild(delBtn);
    taskList.appendChild(taskText);
    taskInput.value = "";
});
taskList.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        const listItem = event.target.parentElement;
        listItem.classList.add("done");
        listItem.remove();
    }
});