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

