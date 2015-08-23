$(document).ready(function(){
	var score =0;
	var keys = ['f','g','h','j'];
	$(document).keypress(function(event){
		var selectedKey= String.fromCharCode(event.which).toLowerCase();
		console.log(selectedKey);
		var index = keys.indexOf(selectedKey);
		if (index >= 0){
			console.log(index);
			if ($('.stars span').eq(index).text()== '*')
				$('.score span').text(parseInt($('.score span').text())+1); //console.log("True!!!");
			else
				;//console.log("False!!!");
		}
	});
	
	var seq= getRandomSequence(12);
	console.log(seq);
	var delay = 2500;
	var clearDelay = 500;
	$.each(seq, function(index, value){
		setTimeout(function() { clearStars(); } , 0 + index*delay);
		setTimeout(function(){ showStar(value); }, clearDelay + index*delay);
	});
	
	setTimeout(function(){ clearStars(); }, clearDelay + seq.length*delay);
	
	function getRandomNumberFromRange(min,max)
	{
		var number = Math.floor(Math.random()*(max-min+1)+min);
		return number;
	}
	
	function getRandomSequence(length){
		var result= [];
		for (var i=0; i<length; i++){
			var n= getRandomNumberFromRange(1,4);
			result.push(n);
		}
		return result;
	}
	
	function showStar(value){
		console.log(value);
		$('.stars span').eq(value-1).text('*');
	}
	
	function clearStars(){
		console.log('clear');
		$('.stars span').text('');
	}
});
