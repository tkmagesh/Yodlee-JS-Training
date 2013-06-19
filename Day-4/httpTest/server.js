var http = require("http");

http.createServer(function(req,res){
	console.log("request received");
	setTimeout(function(){
		res.write("Not sure where this will go");
		res.end();
		console.log(typeof res);
	},20000);
}).listen(3000);