exports.information = function(req,res){
	//get data from store
	var product = {id : 101, name : "Pen", cost : 100};
	res.render("information",product); 
}