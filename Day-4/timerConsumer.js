var MyTimer = require("./MyTimer");
var timer = new MyTimer.MyTimer(10,1000);
timer.on("start", function (){
	console.log("Timer starting");
});
timer.on("end", function(){
	console.log("Timer ending");
});
timer.on("work", function(){
	console.log("timer interval triggered");

});
timer.start();