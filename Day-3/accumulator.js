var _result = 0;
function add(no){
	_result += no;
}
function result(){
	return _result;
}
console.log("accumulator evaluated");

exports.add = add;
exports.result = result;