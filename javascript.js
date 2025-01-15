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

console.log(getComputerChoice());