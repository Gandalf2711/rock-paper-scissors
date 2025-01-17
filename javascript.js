// Return the computer choice
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let choice;

    if (number === 0) {
        choice = "rock";
    } else if (number === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

//Return the human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?")

    if (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors" )
        alert("Invalid choice!")
    
    return choice.toLowerCase();
}

// Run the game
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    //Give the result of a round
    function playRound(computerChoice, humanChoice) {
        let winner;

        if(computerChoice == humanChoice) {
            result = "It's a tie!"
        } else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
            result = "Computer wins! " + computerChoice + " beats " + humanChoice;
            computerScore = computerScore + 1;
        } else {
            result = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore = humanScore + 1;
        }
        console.log("Computer's score : " + computerScore + " | Your score : " + humanScore);
        return result;
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
    let winner;

    if (humanScore > computerScore) {
        winner = "Congratulations! You won!";
    } else if (computerScore > humanScore) {
        winner = "Computer won! You'll do better next time!";
    } else {
        winner = "No winner! It's a draw";
    }

    return winner;

}

console.log(playGame());
