let wins = 0;
let losses = 0;
let computerSelection;
let playerSelection;

const resultArea = document.querySelector(".result");


const rock = document.querySelector(".Rock");

const paper = document.querySelector(".Paper");

const scissors = document.querySelector(".Scissors");
let movesArray = [rock, paper, scissors];
movesArray.forEach((move) => {
    move.addEventListener("click", playRound);
    move.addEventListener("mouseover", mousedOver);
    move.addEventListener("mouseleave", mouseLeft);
});

const score = document.querySelector(".score");
score.textContent = `Current score: ${wins} vs ${losses}`;

function mousedOver(event) {event.target.style.backgroundColor = "#65c5df";}
function mouseLeft(event) {event.target.style.backgroundColor = "white";}
function changeContent (element, num) {
    switch (num) {
        case 0:
            element.textContent = `YOU LOSE! ${playerSelection} loses to ${computerSelection}`;
            break;
        case 1:
            element.textContent = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
            break;
        case 2:
            element.textContent = "IT WAS A TIE. RE-ENTER A MOVE";
            break;
        default:
            element.textContent = `Current score: ${wins} vs ${losses}`;
    }
}

function computerPlay() {
    //create an array which holds the strings "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //get a random number from 0 up to (not including) 3 using Math.random and use Math.floor() to
    // make it an int from 0 to 2 and use that int to access one of the array items and return it
    return options[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    computerSelection = computerPlay();
    playerSelection = event.target.getAttribute("class");
    if (wins < 4 && losses < 4) {
        //check if they equal each-other return a tie if they do
        if (computerSelection === playerSelection) {
            changeContent(resultArea, 2);
            return;
        }
        //check the cases for the computer having Rock
        if (computerSelection === "Rock") {
            if (playerSelection === "Scissors") {
                changeContent(resultArea, 0);
                losses++;
            } else if (playerSelection === "Paper") {
                changeContent(resultArea, 1);
                wins++;
            }
        } else if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                changeContent(resultArea, 0);
                losses++;
            } else if (playerSelection === "Scissors") {
                changeContent(resultArea, 1);
                wins++;
            }
        } else if (playerSelection === "Paper") {
            changeContent(resultArea, 0);
            losses++;
        } else if (playerSelection === "Rock") {
            changeContent(resultArea, 1);
            wins++;
        }
        changeContent(score, 3);
    } else if (wins === 4 || losses === 4) {
        //check if they equal each-other return a tie if they do
        if (computerSelection === playerSelection) {
            changeContent(resultArea, 2);
            return;
        }
        //check the cases for the computer having Rock
        if (computerSelection === "Rock") {
            if (playerSelection === "Scissors") {
                changeContent(resultArea, 0);
                losses++;
            } 
            if (playerSelection === "Paper") {
                changeContent(resultArea, 1);
                wins++;
            }
        } else if (computerSelection === "Paper") {
            if (playerSelection === "Rock") {
                changeContent(resultArea, 0);
                losses++;
            }
            if (playerSelection === "Scissors") {
                changeContent(resultArea, 1);
                wins++;
            }
        } else if (playerSelection === "Paper") {
            changeContent(resultArea, 0);
            losses++;
        } else if (playerSelection === "Rock") {
            changeContent(resultArea, 1);
            wins++;
        }
        changeContent(score, 3);
        if (wins === 5 || losses === 5) {
            let result;
            wins === 5 ? result = "WIN" : result = "LOSE";
            resultArea.textContent = `YOU ${result} THE GAME, WITH ${wins} POINTS`;
            return;
        }
    }
}