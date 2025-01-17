// Return a random integer between 0 and 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Return the computer choice
function getComputerChoice() {
    let number = getRandomInt(3);
    let choice;

    if (number === 0) {
        choice = "Rock";
    } else if (number === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

//Return the human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?")

    if (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors" )
        alert("Invalid choice!")
    
    return choice;
}

// Run the game
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    //Give the result of a round
    function playRound(computerChoice, humanChoice) {
        if(computerChoice == humanChoice) {
            console.log("It's a tie!");
        } else if ((computerChoice == "Rock" && humanChoice == "Scissors") || (computerChoice == "Paper" && humanChoice == "Rock") || (computerChoice == "Scissors" && humanChoice == "Paper")) {
            console.log("Computer wins! " + computerChoice + " beats " + humanChoice);
            computerScore = computerScore + 1;
            console.log("Computer's score: " + computerScore);
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore = humanScore + 1;
            console.log("Your score: " + humanScore);
        }
    } 

    //Run 5 rounds
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        console.log("Computer's choice: " + computerSelection);
        console.log("Your choice: " + humanSelection);
        console.log(playRound(computerSelection,humanSelection));
    }

    //Give the winner of the game
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else {
        console.log("Computer won! You'll do better next time!");
    }

}

console.log(playGame());
