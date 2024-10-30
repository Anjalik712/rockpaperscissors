function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3); //we have only 3 choices rock paper scissors
    switch(choice){
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
        break;
    }    
}

function getHumanChoice(){
    let choice=prompt("Enter your choice  (Rock/Paper/Scissors) : ");
    return choice.toLowerCase();
}

let humanScore=0;
let computerScore=0;

const humanChoice=getHumanChoice();
const computerChoice=getComputerChoice();

function playRound(humanChoice,computerChoice){
    
    if(humanChoice==='rock' && computerChoice==='scissors'){
        humanScore++;
        console.log("You win!Rock beats Scissors");
    }else if(humanChoice==='scissors' && computerChoice==='rock'){
        computerScore++;
        console.log("You lose!Rock beats Scissors");
    }else if(humanChoice==='scissors' && computerChoice==='paper'){
        humanScore++;
        console.log("You win!Scissors beats Paper");
    }else if(humanChoice==='paper' && computerChoice==='scissors'){
        computerScore++;
        console.log("You lose!Scissors beats Paper");
    // }else if(humanChoice==='scissors' && computerChoice==='paper'){
    //     humanScore++;
    //     console.log("You win!Scissors beats Paper");
    }else if(humanChoice==='rock' && computerChoice==='paper'){
        computerScore++;
        console.log("You lose!Paper beats Rock");
    }else if(humanChoice==='paper' && computerChoice==='rock'){
        humanScore++;
        console.log("You win!Paper beats Rock");
    } else{
        console.log(`Oops!No points! ${humanChoice} same as ${computerChoice}`);
    }

}
playRound(humanChoice,computerChoice);