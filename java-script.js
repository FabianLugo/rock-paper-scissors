humanScore = 0;
computerScore = 0;

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
