$(document).ready(function(){
	var userChoice,computerChoice,playerCount=0,computerCount=0;
	$('#stone').click(function(){
		userChoice='rock';
		console.log(userChoice);
		$('#paper, #scissor').css('display','none');
		$('.player').css('width','500px');
		$('.computer').css('width','500px');
		$('.stone').toggleClass('col-md-4 col-md-12');
		$('#pWrapper').toggleClass('col-md-12 col-md-6');
		$('.computer').css("display", "block");
		compare(userChoice, computerChoice);
	});
	$('#paper').click(function(){
		userChoice='paper';
		console.log(userChoice);
		$('#stone, #scissor').css('display','none');
		$('.player').css('width','500px');
		$('.computer').css('width','500px');
		$('.paper').toggleClass('col-md-4 col-md-12');
		$('#pWrapper').toggleClass('col-md-12 col-md-6');
		$('.computer').css("display", "block");
		compare(userChoice, computerChoice);
	});
	$('#scissor').click(function(){
		userChoice='scissor';
		console.log(userChoice);
		$('#paper, #stone').css('display','none');
		$('.player').css('width','500px');
		$('.computer').css('width','500px');
		$('.scissor').toggleClass('col-md-4 col-md-12');
		$('#pWrapper').toggleClass('col-md-12 col-md-6');
		$('.computer').css("display", "block");
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
		computerChoice = "scissors";
		$('#c_img').attr("src","scissor.svg");
	} 
	console.log("Computer: " + computerChoice);
	var compare = function(choice1, choice2){
	    if(choice1===choice2)
	    {
	        console.log("The result is a tie!");
	    }
	    else if(choice1==="rock")
	    {
	        if(choice2==="scissors")
	        {
	            console.log("Player Wins");
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            computerCount++;
	        }
	    }
	    else if(choice1==="paper")
	    {
	        if(choice2==="rock")
	        {
	            console.log("Player wins");
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            computerCount++;
	        }
	    }
	    else if(choice1==="scissor")
	    {
	        if(choice2==="paper")
	        {
	            console.log("Player wins");
	            playerCount++;
	        }
	        else
	        {
	            console.log("Computer wins");
	            computerCount++;
	        }
	    }
	    $('#playerScore').text(playerCount);
		$('#computerScore').text(computerCount);
	}
	

})
