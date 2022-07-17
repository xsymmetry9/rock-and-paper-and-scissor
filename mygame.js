const winningPattern = [[1,3],[2,1],[3,2]];
const human = document.querySelector('#player1');
const comp = document.querySelector('#player2');
const winner = document.querySelector('.winner');
const message = document.querySelector('.message');
let round = 0;
let humanScore = 0;
let computerScore = 0;


function randomNumber(){
    const num = Math.floor(1 + Math.random()*3);
    return num; //returns a random string
}

//Keeps track of the winner
function getWinner(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;

    if ((player == 1 && computer == 2) || (player == 2 && computer == 1) || (player == 3 && computer == 2))
    {
        return "player";
    } else if(player == computer){
        return "draw";
    } else{
        return "computer";
    }
}
    //We get args when it comes from a button
    //Creates a function that takes an arg and converts it
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

function updateScore(isWinner){
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
    if (humanScore == 5){ return "human";}
    else if(computerScore == 5) {return "computer";}
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', function (e){

        if(humanScore == 5 || computerScore == 5){
            alert("Please reload");
        }
        else{

            const player = translator(button.value); //returns an int (1-3)

            let game = getWinner(player, randomNumber()); //returns the winner
            updateScore(game);
            round+=1;
            console.log(round);
            human.textContent = (humanScore); //updates Human score
            comp.textContent = (computerScore); // Updates Computer score
            message.textContent = getMessage(game); //Post message on HTML

            
            if(checkWinner() == "human"){
                winner.textContent = "Human dominate the world!"
            }
            else if(checkWinner() == "computer"){
                winner.textContent = "Computers dominate the world. Rescue the humans!!!"
            }
            else{
                console.log(getMessage(game));
             console.log("Hit it!")   
            }
    
        }

   

        
    
        
     



    //     if (theWinner == "human"){
    //         humanScore += 1;
    //         human.textContent = humanScore;
    //     }
    //     else if(theWinner == "computer"){
    //         computerScore += 1;
    //         comp.textContent = computerScore;
    //     }
    //     //reset score
    //     const sum = humanScore + computerScore;
    //    //console.log(sum);
    //    if((humanScore == 5) || (computerScore == 5))
    //    {
    //        winner.textContent = (checkWinner(humanScore, computerScore) + 
    //        " is the winner");
    //        humanScore = 0;
    //        computerScore = 0;
    //        comp.textContent = computerScore;
    //        human.textContent = humanScore;
    //    }

    // console.log(game); 
    // console.log("Player Score is:" + playerScore);
    // console.log("Computer Score is: " + computerScore);

        
    });
});



