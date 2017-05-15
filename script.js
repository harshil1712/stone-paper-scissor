$(document).ready(function(){
	var userChoice,computerChoice;
	$('#stone').click(function(){
		userChoice='rock';
		console.log(userChoice);
		compare(userChoice, computerChoice);
	});
	$('#paper').click(function(){
		userChoice='paper';
		console.log(userChoice);
		compare(userChoice, computerChoice);
	});
	$('#scissor').click(function(){
		userChoice='scissor';
		console.log(userChoice);
		compare(userChoice, computerChoice);
	});
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} 
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} 
	else {
		computerChoice = "scissors";
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
	            console.log("rock wins");
	        }
	        else
	        {
	            console.log("paper wins");
	        }
	    }
	    else if(choice1==="paper")
	    {
	        if(choice2==="rock")
	        {
	            console.log("paper wins");
	        }
	        else
	        {
	            console.log("scissors wins");
	        }
	    }
	    else if(choice1==="scissors")
	    {
	        if(choice2==="rock")
	        {
	            console.log("rock wins");
	        }
	        else
	        {
	            console.log("scissors wins");
	        }
	    }
	}
})