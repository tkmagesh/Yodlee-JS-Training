var events = require("events"),
	util = require("util");
var self;
function MyTimer(times,interval){
	this.times = times;
	this.interval = interval;
	self = this;
}
util.inherits(MyTimer,events.EventEmitter);

MyTimer.prototype.start = function(){
	self.emit("start");
	var count = 0;
	var times = this.times,
		interval = this.interval;
	function work(){
		count++;
		self.emit("work",count)
		if (count < times){
			setTimeout(work,interval);
		} else {
			self.emit("end");
		}
	}
	work.call(this);
};

exports.MyTimer = MyTimer;
