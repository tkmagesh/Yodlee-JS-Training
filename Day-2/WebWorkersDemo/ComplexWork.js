function doComplexWork(){
	for(var i=0;i<100000;i++){
		if (i % 1000 === 0) 
			self.postMessage({type : "progress", percentCompleted : i/1000});
		for(var j=0;j<1000;j++)
			for(var k=0;k<100;k++)
			{}
	}
}
self.onmessage = function(msgEvt){
	if (msgEvt.data === "start") {
		doComplexWork();
		self.postMessage({type : "completed"});
	}
}