var http = require("http"),
	url = require("url"),
	fs = require("fs");

http.createServer(handler).listen("8080");

function handler(request,response){
	var requestUrl = url.parse(request.url),
		pathParts = requestUrl.pathname.split('/'),  
		fileName = pathParts[pathParts.length - 1];
	fs.exists(fileName, function(exists){
		if (exists){
			var stream = fs.createReadStream(fileName, {encoding : 'utf-8'});
			stream.pipe(response);
		} else {
			if (fileName === "products"){
				console.log("handling response");
				handleProducts(response);
			} 			
		}
	});
}

function handleProducts(response){
	var fileName = "products.json";
	var productsAsString = '';
	var stream = fs.createReadStream(fileName,{encoding : 'utf-8'});
	stream.on("data",function(dataChunk){
		productsAsString += dataChunk;
	});
	stream.on("end", function(){
		var products = JSON.parse(productsAsString);
		response.write("<table border='1'>")
		for(var i=0;i<products.length;i++){
			var product = products[i];
			var productRow = "<tr><td>" + product.id + "</td><td>" + product.name;
			response.write(productRow);
		}
		response.write("</table>")
		response.end();
	});
}

console.log("Server running");
