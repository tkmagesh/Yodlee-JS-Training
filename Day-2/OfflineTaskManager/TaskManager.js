(function(){
	var ulTaskList,
		taskStorage = new TaskStorage();

	window.addEventListener("DOMContentLoaded",function(){
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompletedTasks").addEventListener("click",onBtnRemoveCompletedTasksClick);
		ulTaskList = document.getElementById("ulTaskList");
		var localTasks = taskStorage.getAllTasks();
		for(var i=0;i<localTasks.length;i++){
			addTaskToUi(localTasks[i]);
		}
		
	});

	

	function onBtnAddTaskClick(){
		var taskName = document.getElementById("txtTaskName").value;
		var newTask = taskStorage.addTask(taskName);
		addTaskToUi(newTask);
		document.getElementById("txtTaskName").value = "";
	}

	function addTaskToUi(task){
		var newTaskItem = document.createElement("li");
		newTaskItem.innerHTML = task.taskName;
		newTaskItem.addEventListener("click",onTaskItemClick);
		newTaskItem.setAttribute("data-task-id",task.taskId);
		if (task.isCompleted)
			newTaskItem.classList.add("completed");
		ulTaskList.appendChild(newTaskItem)
	}

	
	function onBtnRemoveCompletedTasksClick(){
		for(var i=ulTaskList.children.length-1;i >= 0;i--){
			var taskItem = ulTaskList.children[i];
			if (taskItem.classList.contains("completed")){
				var taskId = taskItem.getAttribute("data-task-id");
				taskStorage.removeTask(taskId);
				ulTaskList.removeChild(taskItem);
			}
		}
	}

	
	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
		taskStorage.toggleCompletion(this.getAttribute("data-task-id"));
	}

})();