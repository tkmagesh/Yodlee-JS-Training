var fs = require("fs"),
	fileName = "data.txt";

var input = fs.createReadStream(fileName,{encoding : 'utf-8'});
var output = fs.createWriteStream("data-copy.txt",{encoding : 'utf-8'});

input.pipe(output);


/*var stream = fs.createReadStream(fileName,{encoding : 'utf-8'});
stream.on("data",function(data){
	console.log("Length = " + data.length);
	console.log(data);
});
stream.on("end",function(){
	console.log("stream end event invoked");
});
*/
//addListener
//removeListener
//on
//once