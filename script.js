function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    switch(numChoice) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. Round TIED!`;
    }
    if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`;
        computerScore++;
    }
    if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`;
        computerScore++;
    }
    if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${computerChoice} beats ${humanChoice}. You LOST!`;
        computerScore++;
    }
    if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`;
        humanScore++;
    }
    if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`;
        humanScore++;
    }
    if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        result.textContent = `You played ${humanChoice} and computer played ${computerChoice}. ${humanChoice} beats ${computerChoice}. You WON!`;
        humanScore++;
    }
    
    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        disableResult();
        result.textContent = "YOU WON RPS!";
    } else if (computerScore === 5) {
        disableResult();
        result.textContent = "COMPUTER WON RPS!";
    }
}

function disableResult() {
    humanScore = 0;
    computerScore = 0;

    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

const container = document.querySelector("body");
const ipt = document.querySelector(".options");
const scr = document.querySelector(".score");
const rslt = document.querySelector(".box");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const rockImg = document.createElement("img");
rockImg.src = "images/rock.png"
rockImg.width = 128;
rockImg.height = 128;
const paperImg = document.createElement("img");
paperImg.src = "images/paper.png"
paperImg.width = 128;
paperImg.height = 128;
const scissorsImg = document.createElement("img");
scissorsImg.src = "images/scissors.png"
scissorsImg.width = 128;
scissorsImg.height = 128;

rock.appendChild(rockImg);
paper.appendChild(paperImg);
scissors.appendChild(scissorsImg);

const enable = document.createElement("button");


ipt.appendChild(rock);
ipt.appendChild(paper);
ipt.appendChild(scissors);


rock.addEventListener("click", () => {
    playRound ("ROCK", getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound ("PAPER", getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound ("SCISSORS", getComputerChoice());
})

const result = document.createElement("div");
rslt.appendChild(result);

const humanScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");
scr.appendChild(humanScoreDisplay);
scr.appendChild(computerScoreDisplay);

const gameResult = document.createElement("div");
rslt.appendChild(gameResult);

humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

