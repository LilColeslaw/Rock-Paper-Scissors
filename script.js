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
    //simulates a 5-round game using a for-loop

    //create a variable for the result of each round
    let roundOne = "Round 1: ";
    let roundTwo = "Round 2: ";
    let roundThree = "Round 3: ";
    let roundFour = "Round 4: ";
    let roundFive = "Round 5: ";


    //create variables for total wins and losses and ties
    let wins = 0;
    let losses = 0;
    let ties = 0;

    //create a for loop
    //initialize with the variable games which will be set to 0
    //keep it going until it is greater than or equal to 5 (the rounds)
    //each time add 1 to it
    for (let rounds = 0; rounds < 5; rounds++) {
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
                switch (rounds) {
                    case 0:
                        roundOne += `Loss - ${playerSelection} vs ${computerSelection}`;
                        break;
                    case 1:
                        roundTwo += `Loss - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n`);
                        break;
                    case 2:
                        roundThree += `Loss - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n`);
                        break;
                    case 3:
                        roundFour += `Loss - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n`);
                        break;
                    case 4:
                        roundFive += `Loss - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n${roundFour}\n`);
                        break;
                }
                break;
            case 1:
                console.log(`IT'S A TIE! ${computerSelection} ties ${playerSelection}!`);
                ties++;
                switch (rounds) {
                    case 0:
                        roundOne += `Tie - ${playerSelection} vs ${computerSelection}`;
                        break;
                    case 1:
                        roundTwo += `Tie - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n`);
                        break;
                    case 2:
                        roundThree += `Tie - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n`);
                        break;
                    case 3:
                        roundFour += `Tie - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n`);
                        break;
                    case 4:
                        roundFive += `Tie - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n${roundFour}\n`);
                        break;
                }
                break;
            case 2: 
                console.log(`YOU WIN! ${playerSelection} beats ${computerSelection}`);
                wins++;
                switch (rounds) {
                    case 0:
                        roundOne += `Win - ${playerSelection} vs ${computerSelection}`;
                        break;
                    case 1:
                        roundTwo += `Win - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n`);
                        break;
                    case 2:
                        roundThree += `Win - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n`);
                        break;
                    case 3:
                        roundFour += `Win - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n`);
                        break;
                    case 4:
                        roundFive += `Win - ${playerSelection} vs ${computerSelection}`;
                        console.log(`Stats:\n${roundOne}\n${roundTwo}\n${roundThree}\n${roundFour}\n`);
                        break;
                }
                break;
            case 3:
                console.log("You have not entered a valid move");
                rounds--;
                break;
        }
        //print out the total wins/losses/ties
        console.log(`Total Wins: ${wins}\nTotal Losses: ${losses}\nTotal Ties: ${ties}\n`);
    }
    //print out the winner based on if you have more wins or losses - if equal it's a tie
    if (wins > losses) {
        console.log("You win the game!");
    } else if (losses > wins) {
        console.log("You lose the game!");
    } else {
        console.log("You tie with the computer!");
    }
}