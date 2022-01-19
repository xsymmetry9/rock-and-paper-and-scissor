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
       return true;}
       else if (player === "paper" && computer === "scissor"){
           return true;}
           else if (player ==="scissor" && computer === "rock"){
               return true;}
           else {
               return false;}
}

function game(){
    const pPlayer = 0;
    const pComputer = 0;
    const i = 0;
    while(i < 5){
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        i++;
    
        if (playRound(playerSelection, computerSelection)=== true){
            pPlayer++
            return "Player wins";
        }
        else{
            pComputer++;
            return "Computer wins";
        }
    
    }

    if (pPlayer > pComputer)
    {
        return ("Player wins");
    }
    else{
        return("Computer wins");
    }
}


console.log(game());