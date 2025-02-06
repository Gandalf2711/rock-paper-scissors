const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")
const reset = document.querySelector("#reset");
const choice = document.querySelector("#choice");
const res = document.querySelector("#res");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

let playerSelection = "";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) {
        result = "It's a tie!"
    } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        result = "Computer wins! " + computerChoice + " beats " + humanChoice;
        computerScore = computerScore + 1;
    } else {
        result = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore = humanScore + 1;
    }
    choice.textContent = "Computer's choice : " + computerChoice + " | Your choice : " + humanChoice;
    res.textContent = result;
    score.textContent = "Computer's score : " + computerScore + " | Your score : " + humanScore;
}

function unableButtons () {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    playerSelection = "";
    choice.textContent = "";
    res.textContent = "";
    score.textContent = "";
    winner.textContent = "";
    unableButtons();
}

function giveWinner(computerScore, humanScore) {
    if (humanScore == 5) {
        winner.textContent = "Congratulations! You won!";
        disableButtons();
    } else if (computerScore == 5) {
        winner.textContent = "Computer won! You'll do better next time!";
        disableButtons();
    };
};

function playGame() {
    playRound(getComputerChoice(), playerSelection);
    giveWinner(computerScore, humanScore);
};

rock.addEventListener("click", () => {
    playerSelection = "paper";
    playGame();
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    playGame();
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playGame();
});

reset.addEventListener("click", () => {
    resetGame();
})