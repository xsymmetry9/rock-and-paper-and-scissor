function computerPlay(){
    const play = ["rock","paper","scissor"];
    const n = Math.floor(Math.random()*3);
    // Randomnize from 0-2
    return play[n];
}
//Checks the winner - returns either human or computer
function playRound(playerSelection, computerSelection){
   
        if ((playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" & computerSelection == "paper")){
            return "human";
        }
        else if(playerSelection == computerSelection){
         
            return "computer";
        }
        else {
            return "no winners";
        }
    }
    //convert args to string
function convert(playerSelection){
    const computerSelection = computerPlay();
    if (playerSelection == "rock")
    {
        return (playRound("rock", computerSelection));
    }
    else if (playerSelection == "paper")
    {
        return (playRound("paper", computerSelection));
    }
    else if (playerSelection == "scissor"){
        return (playRound("scissor", computerSelection));
    }
}
let humanScore = 0;
let computerScore = 0;
const human = document.querySelector('#player1');
const comp = document.querySelector('#player2');
const winner = document.querySelector('.winner');

//checks the winner
function checkWinner(humanScore, computerScore){
    if (humanScore == 5){ return "human";}
    else if(computerScore == 5) {return "computer";}
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', function (e){
        
        const theWinner = convert(button.id);
        if (theWinner == "human"){
            humanScore += 1;
            human.textContent = humanScore;
        }
        else if(theWinner == "computer"){
            computerScore += 1;
            comp.textContent = computerScore;
        }
        //reset score
        const sum = humanScore + computerScore;
       //console.log(sum);
       if((humanScore == 5) || (computerScore == 5))
       {
           winner.textContent = (checkWinner(humanScore, computerScore) + 
           " is the winner");
           humanScore = 0;
           computerScore = 0;
           comp.textContent = computerScore;
           human.textContent = humanScore;
       }

        
    });
});



