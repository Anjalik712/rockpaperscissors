function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3); //we have only 3 choices rock paper scissors
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
function playRound(humanChoice, computerChoice) {
    if(humanScore!=5&&computerScore!=5){

            if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                result.textContent = "You win!Rock beats Scissors";
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                result.textContent = "You lose!Rock beats Scissors";
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                result.textContent = "You win!Scissors beats Paper";
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                result.textContent = "You lose!Scissors beats Paper";
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                result.textContent = "You lose!Paper beats Rock";
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore++;
                result.textContent = "You win!Paper beats Rock";
            } else {
                result.textContent = `Oops!No points! ${humanChoice} same as ${computerChoice}`;
            }
            score.textContent=`Your Score: ${humanScore}\nComputer Score:${computerScore}`;
        }else{
            if(computerScore>humanScore) 
                result.textContent=`GAME OVER!You lost!`;
            else if(computerScore<humanScore)
                result.textContent=`GAME OVER!You won!`;
            else
                result.textContent=`GAME OVER!Draw`;
        }
}
function playGame() {
  div.addEventListener("click", (event) => {
    let target = event.target;
    let choice = target.textContent;
    let humanChoice = choice.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
}
let humanScore = 0;
let computerScore = 0;

let div = document.querySelector(".container");

const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";

const result = document.createElement("div");
const score = document.createElement("div");
div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);
div.appendChild(score);
document.body.appendChild(result);

playGame();
