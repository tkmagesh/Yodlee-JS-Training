function TaskStorage(){
	var storage = window.localStorage;
	 this.getAllTasks = function(){
		var tasks = [];
		for(var i=0;i<storage.length;i++){
			var taskId = storage.key(i);
			var task = window.JSON.parse(storage.getItem(taskId));
			tasks.push(task);
		}
		return tasks;
	};
	this.addTask = function(taskName){
		var newId = new Date().getTime().toString();
		var newTask = {taskId : newId, taskName : taskName, isCompleted : false};
		storage.setItem(newId,window.JSON.stringify(newTask));
		return newTask;
	};
	this.removeTask = function(taskId){
		storage.removeItem(taskId);
	};
	this.toggleCompletion = function(taskId){
		var task = window.JSON.parse(storage.getItem(taskId));
		task.isCompleted = !task.isCompleted;
		storage.setItem(task.taskId,window.JSON.stringify(task));
	};
	function getTask(id){
		for(var i=0;i<storage.length;i++){
			if (storage.key(i) === id) return 
		}
	}

}