function getComputerChoice(){
    max=3;
    let choice = Math.floor(Math.random() * max);
    switch(choice){
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
        break;
    }    
}
console.log(getComputerChoice());
