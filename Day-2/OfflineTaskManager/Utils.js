window.utils = {
	forEach : (function(){
		if (Array.prototype.forEach) {
			return Array.prototype.forEach;
		} else {
			return function(cb){
				var list = this;
				for(var i=0;i<list.length;i++)
					cb(list[i]);
			}
		}
	})()
};