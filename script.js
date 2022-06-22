function computerPlay() {
    //create an array which holds the strings "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //get a random number from 0 up to (not including) 3 using Math.random and use Math.floor() to
    // make it an int from 0 to 2 and use that int to access one of the array items and return it
    return options[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
    //take the playerSelection argument and make sure it has the right capitalization
    let pSLength = playerSelection.length; //make a variable for playerSelection's length
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1, pSLength).toLowerCase();
    //check if they equal each-other return a tie if they do
    if (computerSelection === playerSelection) {
        return `It's a tie! ${computerSelection} ties ${playerSelection}!`;
    }
    //check the cases for the computer having Rock
    if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } 
        if (playerSelection === "Paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    //check the cases for the computer having Paper
    if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        if (playerSelection === "Scissors") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    //check the cases for the computer having Scissors
    if (playerSelection === "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (playerSelection === "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    //if none of the other cases are true, tell the user that they didn't enter a valid move
    return "You have not entered a valid move";
}