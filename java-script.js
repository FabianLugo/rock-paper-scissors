

function getComputerChoice(){
    const paper="paper";
    const rock ="rock";
    const scissors ="scissors";

    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 0){
        return paper;
    }else if(randomNumber == 1){
        return rock;
    }else{
        return scissors;
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Write rock, paper or scissors:");

    if(humanChoice === null){
        return null;
    }

    humanChoice = humanChoice.toLowerCase();
    while(humanChoice === "" || (humanChoice !="rock" && humanChoice !="paper" && humanChoice != "scissors")){
        alert("Write a valid entry")
        humanChoice = prompt("Write rock, paper or scissors:");

        if(humanChoice === null){
            return null;
        }

        humanChoice = humanChoice.toLowerCase();

    }  

    return humanChoice;    
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let winner = "";

    let humanSelection = getHumanChoice();
    let computerSelection= getComputerChoice();

    for(let i=0; i < 4; i++){
        playRound(humanSelection, computerSelection);
        humanSelection = getHumanChoice();
        computerSelection =getComputerChoice();
    }

       
    function playRound(humanChoice,computerChoice){
        switch(humanChoice){
            case "rock":{
                switch(computerChoice){
                    case "rock":
                        console.log("It's a tie!");
                        break;
                    case "paper":{
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                        break;}
                    case "scissors":{
                        console.log("You win!  Rock beats Scissors");
                        humanScore++;
                        break;}
                }
                break;
            }
            case "paper":{
                switch(computerChoice){
                    case "rock":{
                        console.log("You win! Paper beats Rock");
                        humanScore++;
                        break;}
                    case "paper":
                        console.log("It's a tie!");
                        break;
                    case "scissors":{
                        console.log("You lose! Scissors beats paper");
                        computerScore++;
                        break;}
                }
                break;
            }
            case "scissors":{
                switch(computerChoice){
                    case "rock":{
                        console.log("You lose! Rock beats Scissors");
                        computerScore++;
                        break;}
                    case "paper":{
                        console.log("You win! Scissors beats paper");
                        humanScore++;
                        break;}
                    case "scissors":
                        console.log("It's a tie!");
                        break;
                }
                break;
            }
        }
        
    }


    if(humanScore > computerScore){
        winner = "You win!";
        return winner;
    }else if( humanScore == computerScore){
        winner = "It's a tie!";
        return winner;
    }else{
        winner = "The computer wins!";
        return winner;
    }
}

console.log(playGame());