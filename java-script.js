console.log(getComputerChoice());




function getComputerChoice(){
    const paper="paper";
    const rock ="rock";
    const scissors ="scissors";

    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 1){
        return paper;
    }else if(randomNumber == 2){
        return rock;
    }else{
        return scissors;
    }
}