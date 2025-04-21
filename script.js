const rpsArray = ["rock", "paper", "scissors"]




function getComputerChoice(){
    // Zero based index
    const computerChoice = Math.floor(Math.random()*3);
    return rpsArray[computerChoice];

}


function getUserChoice(){
    let userChoice = prompt("Rock, paper, scissors? \n1 - Rock\n2 - Paper\n 3 - Scissors");
    let parsedChoice = parseInt(userChoice);
    while(isNaN(parsedChoice) || parsedChoice < 1 || parsedChoice > 3){
        console.log("Incorrect Input.")
        userChoice = prompt("Rock, paper, scissors? \n1 - Rock\n2 - Paper\n 3 - Scissors");
        parsedChoice = parseInt(userChoice);
    }

    return rpsArray[parsedChoice-1];
    
   
}

// Returns 0 for player win, 1 for computer win, and 2 for tie
function playRound(humanChoice, computerChoice){
    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    if(winningConditions[humanChoice] === computerChoice){
        console.log(`User Choice: ${humanChoice}\t Computer Choice: ${computerChoice}`)
        console.log("Player wins!")
        return 0;

    }else if (winningConditions[computerChoice] === humanChoice){
        console.log(`User Choice: ${humanChoice}\t Computer Choice: ${computerChoice}`)
        console.log("Computer wins!");
        return 1;
    }else if (humanChoice === computerChoice){
        console.log(`User Choice: ${humanChoice}\t Computer Choice: ${computerChoice}`)
        console.log("Tie.");
    }

}

const playgame = () => {
    let humanScore = 0;
    let computerScore = 0;

    while(humanScore < 5 && computerScore < 5){
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(userChoice, computerChoice);
        if(roundResult === 0){
            humanScore++;
        }else if (roundResult === 1){
            computerScore++;
        }

        console.log(`User Score: ${humanScore}\tComputer Score: ${computerScore}`);

    }

    if(humanScore === 5){
        console.log("Player wins game.")
    }else{
        console.log("Computer wins game.")
    }

}


const playAgain = ()=>{
    let userPlayAgain = prompt("Play again? y/n");
    userPlayAgain = userPlayAgain.trim();
    switch (userPlayAgain) {
        case "y":
            playgame();
            break;
        default:
            break;
    }
}

playgame();
playAgain();