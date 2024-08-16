function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    switch(numChoice) {
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

function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'!");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. Round TIED!`);
    }
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`);
        computerScore++;
    }
    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`);
        computerScore++;
    }
    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`);
        computerScore++;
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`);
        humanScore++;
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`);
        humanScore++;
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your score: ${humanScore} and computer's score: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log(`YOU WON!!!`);
    }
    else if (computerScore > humanScore) {
        console.log(`YOU LOST!!!`);
    }
    else {
        console.log(`GAME TIED!!!`);
    }

}

playGame();