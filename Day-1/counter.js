(function(){
	
	function getIncrementCounter(){
		var counter = 0;
		return function(){
			counter++;
			document.getElementById("divMessage").innerHTML = counter;
		}
	}

	window.addEventListener("DOMContentLoaded",function(){
		document.getElementById("btnCount").addEventListener('click',getIncrementCounter());
	});



})();
