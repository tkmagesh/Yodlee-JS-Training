var products = [
	{id : 101, name : "pen", units : 11, cost : 10, category:1, junk : '%'},
	{id : 104, name : "hen", units : 20, cost : 12, category:1, junk : '%'},
	{id : 103, name : "ken", units : 11, cost : 19, category:2, junk : '*'},
	{id : 102, name : "ten", units : 17, cost : 13, category:1, junk : '%'},
	{id : 106, name : "den", units : 27, cost : 14, category:2, junk : '*'}
]


function add(){
  var result = 0;
  for(var i=0; i<arguments.length;i++){
    var arg = arguments[i];
    if (Array.isArray(arg)){
        for(var j =0;j<arg.length;j++){
         result += add(arg[j]);
      }
    }
    else if (typeof arg !== "undefined") result += arg; 
  }
  return result;
}


function sort(list,comparerFn){
  for(var i=0;i<list.length-1;i++)
   for(var j=i+1;j<list.length;j++){
     var left = list[i], right = list[j];
     if (comparerFn(left,right) > 0){
        var temp = left;
        list[i] = list[j];
        list[j] = temp;
      }
    } 
}

function costComparer(p1,p2){
  if (p1.cost > p2.cost) return 1;
  if (p1.cost === p2.cost) return 0;
  return -1;
}

function idComparer(p1,p2){
  return p1.id - p2.id;
}

function groupBy(list,keySelector){
  var result=[];
  function getKeyedItem(key){
     var keyedItem = null;
     for(var j=0;j<result.length;j++){
        if (result[j].Key === key){
          keyedItem = result[j];
        }
      }
      if(keyedItem === null) {
         keyedItem = {Key : key, Value : []};
         result.push(keyedItem);
      }
      return keyedItem; 
  }
  for(var i=0;i<list.length;i++){
     var key = keySelector(list[i]);
     getKeyedItem(key).Value.push(list[i]);
  }
  return result;
}

function groupBy(list,keySelector){
	//assume that the keySelector is a string
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = list[i][keySelector];
		if (!(result[key])) result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}
function transform(list,transformer){
	var result = [];
	for(var i=0;i<list.length;i++){
		result.push(transformer(list[i]));
	}
	return result;
}

function display(o){
  for(var member in o)
    console.log(member , "=> ", o[member]);
}


var counter = (function(){
  var count = 0;
  return function(){
     return ++count;
  }
})();

function counter(){
  var count = 0;
  counter = function(){
     return ++count;
  }
  return counter()
}