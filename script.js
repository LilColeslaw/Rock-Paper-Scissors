let wins = 0;
let losses = 0;

const resultArea = document.querySelector(".result");


const rock = document.querySelector(".Rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector(".Paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".Scissors");
scissors.addEventListener("click", playRound);

const score = document.querySelector(".score");
score.textContent = `Current score: ${wins} vs ${losses}`;

function computerPlay() {
    //create an array which holds the strings "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //get a random number from 0 up to (not including) 3 using Math.random and use Math.floor() to
    // make it an int from 0 to 2 and use that int to access one of the array items and return it
    return options[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    let computerSelection = computerPlay();
    let playerSelection = event.target.getAttribute("class");
    if (wins < 4 && losses < 4) {
        //check if they equal each-other return a tie if they do
        if (computerSelection === playerSelection) {
            resultArea.textContent = "IT WAS A TIE. RE-ENTER A MOVE";
            return;
        }
        //check the cases for the computer having Rock
        if (computerSelection === "Rock") {
            if (playerSelection === "Scissors") {
                resultArea.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
                losses++;
            } else if (playerSelection === "Paper") {
                resultArea.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
                wins++;
            }
        } else if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                resultArea.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
                losses++;
            } else if (playerSelection === "Scissors") {
                resultArea.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
                wins++;
            }
        } else if (playerSelection === "Paper") {
            resultArea.textContent = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
            losses++;
        } else if (playerSelection === "Rock") {
            resultArea.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
            wins++;
        }
        score.textContent = `Current score: ${wins} vs ${losses}`;
    } else if (wins === 4 || losses === 4) {
        //check if they equal each-other return a tie if they do
        if (computerSelection === playerSelection) {
            resultArea.textContent = "IT WAS A TIE. RE-ENTER A MOVE";
            return;
        }
        //check the cases for the computer having Rock
        if (computerSelection === "Rock") {
            if (playerSelection === "Scissors") {
                losses++;
            } 
            if (playerSelection === "Paper") {
                wins++;
            }
        } else if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                losses++;
            }
            if (playerSelection === "Scissors") {
                wins++;
            }
        } else if (playerSelection === "Paper") {
            losses++;
        } else if (playerSelection === "Rock") {
            wins++;
        }
        score.textContent = `Current score: ${wins} vs ${losses}`;
        if (wins === 5 || losses === 5) {
            let result;
            wins === 5 ? result = "WIN" : result = "LOSE";
            resultArea.textContent = `YOU ${result} THE GAME, WITH ${wins} POINTS`;
            return;
        }
    }
}