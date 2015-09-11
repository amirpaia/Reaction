$(document).ready(function(){
	var score =0;
	var keys = ['v','g','h','m'];
	var interval, cursor=-1, n=0, blockIndex=0;
	var seq=[];//= getRandomSequence(12);
	for (i=1; i<=8; i++){
		for (j=1; j<=10; j++){
			var tmpSeq;
			if (i==1 || i==6)
			{
				tmpSeq = getRandomSequence(12);
			}
			else if (j==1){
				tmpSeq = getRandomSequence(12);
			}
			seq = seq.concat(tmpSeq);
		}
	}
	console.log(seq);
	var delay = 1000;
	var clearDelay = 500;
	
	clearStars();
	start();
	
	$(document).keypress(function(event){
		var selectedKey= String.fromCharCode(event.which).toLowerCase();
		//console.log(selectedKey);
		var index = keys.indexOf(selectedKey);
		if (index >= 0){
			//console.log(index);
			if ($('.stars span').eq(index).text()== '*'){
				//$('.timesheet').append(); //console.log("True!!!");
				
				clearStars();
				clearInterval(interval);
				console.log('FUUU!');
				n=0;
				start();
			}
			else
				;
		}
	});
	function start(){
		interval = setInterval(function() {
			if (cursor == seq.length-1){
				clearInterval(interval);
				return;
			}
			
			n++;
			if (n % 3 == 1){ // run after 500 ms
				cursor++;
				showStar(seq[cursor]);
			}
			else if (n % 3 == 0){ // run after 1500 ms
				clearStars();
			}
		}, 500);
	}
	
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
		var timestamp = Date.now();
		if (cursor%120 == 0){
			blockIndex++;
			console.log('Start Block ' + blockIndex + " : " + timestamp);
			$('.timesheet').append('Start Block ' + blockIndex + " : " + timestamp +"<br/>");
		}
		console.log(cursor + " - " + keys[value-1]+ " : " + timestamp);
		$('.stars span').eq(value-1).text('*');
		
		if (cursor % 120 == 119){
			console.log(' End Block ' + blockIndex + " : " + timestamp);
			$('.timesheet').append('&nbsp;End Block ' + blockIndex + " : " + timestamp+"<br/><br/>");
		}
	}
	
	function clearStars(){
		$('.stars span').text('');
	}
});
