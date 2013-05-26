function TaskStorage(){
	var localStorage = window.localStorage;
	 this.getAllTasks = function(){
		var tasks = [];
		for(var i=0;i<localStorage.length;i++){
			var taskId = localStorage.key(i);
			var taskName = localStorage.getItem(taskId);
			tasks.push({taskId : taskId, taskName : taskName});
		}
		return tasks;
	};
	this.addTask = function(taskName){
		var newId = new Date().getTime().toString();
		window.localStorage.setItem(newId,taskName);
		return {taskId : newId, taskName : taskName};
	};
	this.removeTask = function(taskId){
		localStorage.removeItem(taskId);
	}

}