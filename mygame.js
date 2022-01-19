// rock = 1, paper = 2, scissor = 3
function computerPlay(){
    // play[0] = rock
    // play[1] = paper
    //play [2] = scissor

const play = ["rock", "paper", "scissor"];
const n = Math.floor(Math.random()*2);
    // Randomnize from 0 - 2
    return play[n];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    /* rock beats paper
    paper beats scissor
    scissor beats paper
    */
   if (player === "rock" && computer === "paper"){
       return ("You win! Rock beats paper");}
       else if (player === "paper" && computer === "scissor"){
           return ("You win! Paper beats scissor");}
           else if (player ==="scissor" && computer === "rock"){
               return("You win! Scissor beat rock");
           }
           else {
               return("You lose!")
           }
}

function game(){
    const playerSelection =prompt();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

}

game();
game();
game();
game();
game();







