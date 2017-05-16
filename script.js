$(document).ready(function(){
	var userChoice,computerChoice,playerCount=0,computerCount=0;
	$('#stone').click(function(){
		userChoice='rock';
		console.log(userChoice);
		$('#paper, #scissor').css('display','none');
		display();
		compare(userChoice, computerChoice);
	});
	$('#paper').click(function(){
		userChoice='paper';
		console.log(userChoice);
		$('#stone, #scissor').css('display','none');
		display();
		compare(userChoice, computerChoice);
	});
	$('#scissor').click(function(){
		userChoice='scissor';
		console.log(userChoice);
		$('#paper, #stone').css('display','none');
		display();
		compare(userChoice, computerChoice);
	});
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
		$('#c_img').attr("src","stone.png");
	} 
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
		$('#c_img').attr("src","paper.png");
	} 
	else {
		computerChoice = "scissor";
		$('#c_img').attr("src","scissor.svg");
	} 
	console.log("Computer: " + computerChoice);
	var compare = function(choice1, choice2){
	    if(choice1===choice2)
	    {
	        console.log("The result is a tie!");
	        $('.messageTxt').text('Tie!');
	    }
	    else if(choice1==="rock")
	    {
	        if(choice2==="scissor")
	        {
	            console.log("Player Wins");
	            $('.messageTxt').text('You Win!');
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            $('.messageTxt').text('You Lose!');
	            computerCount++;
	        }
	    }
	    else if(choice1==="paper")
	    {
	        if(choice2==="rock")
	        {
	            console.log("Player wins");
	            $('.messageTxt').text('You Win!');
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            $('.messageTxt').text('You Lose!');
	            computerCount++;
	        }
	    }
	    else if(choice1==="scissor")
	    {
	        if(choice2==="paper")
	        {
	            console.log("Player wins");
	            $('.messageTxt').text('You Win!');
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            $('.messageTxt').text('You Lose!');
	            computerCount++;
	        }
	    }
	    $('#playerScore').text(playerCount);
		$('#computerScore').text(computerCount);
	}
	
var display= function(){
		var pWrapper = $('#pWrapper');
		if(width<990 && width>750){
			pWrapper.toggleClass('col-sm-12 col-sm-6');
			$('.stone, .paper, .scissor').toggleClass('col-sm-4 col-sm-12');
		}
		else if(width<750 ){
			pWrapper.toggleClass('col-xs-12 col-xs-6');
			$('.stone, .paper, .scissor').toggleClass('col-xs-4 col-xs-12');
		}
		else {
			pWrapper.toggleClass('col-lg-12 col-lg-6');
			$('.scissor, .stone, .paper').toggleClass('col-lg-4 col-lg-12');
		}
		
		//$('.player').css('width','500px');
		//$('.computer').css('width','500px');
		$('.computer').css("display", "block");
		document.getElementById('id01').style.display='block';
}
$('#continue').click(function(){
	document.getElementById('id01').style.display='none';
	$('#stone, #paper, #scissor').css('display','block');
	$('.computer').css("display", "none");
	var pWrapper = $('#pWrapper');
		if(width<990 && width>750){
			pWrapper.toggleClass('col-sm-6 col-sm-12');
			$('.stone, .paper, .scissor').toggleClass('col-sm-12 col-sm-4');
		}
		else if(width<750 ){
			pWrapper.toggleClass('col-xs-6 col-xs-12');
			$('.stone, .paper, .scissor').toggleClass('col-xs-12 col-xs-4');
		}
		else {
			pWrapper.toggleClass('col-lg-6 col-lg-12');
			$('.scissor, .stone, .paper').toggleClass('col-lg-12 col-lg-4');
		}
})
var width=$(window).width();
console.log(width);
})
