var connect = require("connect");
var url = require("url");

var app = connect();
app.use(consoleLog);
app.use(productList);
app.use(connect.static("./public"));
app.listen(3000);

function consoleLog(req,res,next){
	console.log(req.method, req.url);
	next();
}

function productList(req,res,next){
	if (url.parse(req.url).pathname == "/products") {
		res.write("THis is supposed to display the product list");
		res.end();
	} else {
		next();
	}
}