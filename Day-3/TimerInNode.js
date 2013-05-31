function displayProgress(percentCompleted){
	console.log(percentCompleted + "% completed");
}
function DoWork(onComplete){
	var count = 0,
		noOfCycles = 100;
	function doCycle(){
		for(var i=0;i<1000;i++){
			for(var j=0;j<1000;j++)
				for(var k=0;k<100;k++){}
		}
		count++;
		if (count <= 100){
			setTimeout(doCycle,10);
			//doCycle();
			displayProgress(count);
		} else {
			onComplete();
		}
	}
	doCycle();				
}
DoWork(function(){console.log("completed");});