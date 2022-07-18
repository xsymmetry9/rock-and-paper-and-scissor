const winningPattern = [[1,3],[2,1],[3,2]];
const human = document.querySelector('#player1');
const comp = document.querySelector('#player2');
const winner = document.querySelector('.winner');
const message = document.querySelector('.message');
const roundNumber = document.querySelector('#roundNumber');
const replayButton = document.querySelector('#reset');
const startButton = document.querySelector('#start');
let round = 0;
let humanScore = 0;
let computerScore = 0;
let isThereWinner = false;

//Generate a random number from 1 - 3
function randomNumber(){
    const num = Math.floor(1 + Math.random()*3);
    return num; 
}

//Finds the winner of the round
function getWinner(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    round+=1; //Adds one every time this code runs

    if ((player == 1 && computer == 2) || (player == 2 && computer == 1) || (player == 3 && computer == 2))
    {
        return "player";
    } else if(player == computer){
        return "draw";
    } else{
        return "computer";
    }
}
    //Creates a function that takes an arg and converts it to int
function translator(playerSelection){
    let num;
    switch(playerSelection){
        case "rock":
            num = 1;
            break;
        case "paper":
            num = 2;
            break;
        case "scissors":
            num =3;
    }
    return num;
}

function getNum(num)
{
    var checked = [0,1,2,3,4,5];
    checked.forEach(function(i){
        if (num == i){
            return i;
        }
        else{
            return false;
        }
    });

}

function getMessage(isWinner){
    switch(isWinner){
        case "player":
            return ("Player wins!");
        break;
        case "computer": //Adds plus one every time computer wins
        return ("Computer wins!");
        break;
        case "draw":
            return ("It's a draw. Try again");
            break;
        default:
            return("Error, contact the dev!!!");
     }
}

function getScore(isWinner){
    switch(isWinner){
        case "player":
            humanScore += 1;
        break;
        case "computer": //Adds plus one every time computer wins
            computerScore +=1;
        break;
        case "draw":
            break;
        default:
            return("Error, contact the dev!!!");
     }
}
//checks the winner
function checkWinner(){
    if (humanScore == 5 || computerScore == 5){ 
        return true;
    }
    else{
        return false;
    }
}
function update()
{
    human.textContent = humanScore; //updates Human score
    comp.textContent = computerScore; // Updates Computer score
    roundNumber.textContent = round;

}


const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) =>{
    button.addEventListener('click', function (e){
//If player has 5 points, game ends
//Gives the player to choose an option
        if(humanScore == 5 || computerScore == 5){
            alert("Please press replay to play again");
       
        }
        else{
            message.style.display ="block";

            const player = translator(button.value); //returns an int (1-3)

            let game = getWinner(player, randomNumber()); //returns the winner
            getScore(game); //adds a point to a winner
            update(); //updates player, computer, and round
            message.textContent = getMessage(game); //Post message on HTML

            if(checkWinner() != false){ //If there is a winner, check who is the winner

                if(humanScore == 5){
                    message.textContent = "Human dominate the world!"
                    winner.style.display ="none";
                    replayButton.style.display ="block";
    
                }
                else{
                    message.textContent = "Computers dominate the world. Rescue the humans!!!"
                    winner.style.display="none";
                    replayButton.style.display ="block";
                }

            } //Else, hit it one more time
           
            else{
                console.log(getMessage(game));
             console.log("Hit it!")   
            }
        }

    });
});

replayButton.addEventListener('click', replay);

function replay(){
    round = 0;
    humanScore = 0;
    computerScore = 0;
    update();
    message.textContent = "Rematch!"
    replayButton.style.display ="none";
    winner.style.display="block";

}
const scoreBoard = document.querySelector(".scoreBoard");
const titleBox = document.querySelector('#title');

function start(){
    titleBox.style.display ="none";
    scoreBoard.style.display="flex";

    buttons.forEach((button)=> {
        button.disabled = false;
    });
    startButton.style.display ="none";
    winner.style.display = "block";

}
//Start Button Section
startButton.addEventListener('click', start);


