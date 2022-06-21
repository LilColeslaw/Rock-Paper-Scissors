function computerPlay() {
    //create an array which holds the strings "Rock", "Paper", and "Scissors"
    const options = ["Rock", "Paper", "Scissors"];
    //get a random number from 0 up to (not including) 3 using Math.random and use Math.floor() to
    // make it an int from 0 to 2 and use that int to access one of the array items and return it
    return options[Math.floor(Math.random() * 3)];
}