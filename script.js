function computerPlay() {
    //create an array which holds the strings "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //get a random number from 0 up to (not including) 3 using Math.random and use Math.floor() to
    // make it an int from 0 to 2 and use that int to access one of the array items and return it
    return options[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) { //make it so that 0 = loss, 1 = tie, 2 = win, 3 = non-valid move
    //take the playerSelection argument and make sure it has the right capitalization
    let pSLength = playerSelection.length; //make a variable for playerSelection's length
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1, pSLength).toLowerCase();
    //check if they equal each-other return a tie if they do
    if (computerSelection === playerSelection) {
        return 1;
    }
    //check the cases for the computer having Rock
    if (computerSelection === "Rock") {
        if (playerSelection === "Scissors") {
            return 0;
        } 
        if (playerSelection === "Paper") {
            return 2;
        }
    }
    //check the cases for the computer having Paper
    if (computerSelection === "Paper") {
        if (playerSelection === "Rock") {
            return 0;
        }
        if (playerSelection === "Scissors") {
            return 2;
        }
    }
    //check the cases for the computer having Scissors
    if (playerSelection === "Paper") {
        return 0;
    }
    if (playerSelection === "Rock") {
        return 2;
    }
    //if none of the other cases are true, tell the user that they didn't enter a valid move
    return 3;
}

function game() {
    //create variables for total wins and losses and ties
    let wins = 0;
    let losses = 0;

    while (wins < 5 && losses < 5) { //checks if either player has over 5 points
        //send a message prompting the user for a move and store it in a variable
        let playerSelection = prompt("Enter a move: ");

        //call computerPlay() and store it in a variable
        let computerSelection = computerPlay();

        //call playRound() using ^ these two variables and store the result in a variable
        let result = playRound(computerSelection, playerSelection);
        //find out if result is a win or a loss or a tie and log corresponding message and do action
            //add it to the corresponding round variable
            //increase wins or losses or ties variable
        switch (result) {
            case 0:
                console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
                losses++;
                break;
            case 1:
                console.log(`IT WAS A TIE. RE-ENTER MOVE`);
                break;
            case 2: 
                console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
                wins++;
                break;
        }
        //print out the total wins/losses/ties
        console.log(`Your points: ${wins}\n The computer's points: ${losses}`);
    }
    //print out the winner based on if you have more wins or losses
    wins > losses ? console.log("You win!") : console.log("You lose.");
}