// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

//set up guess number between 1 and 10
//get user input
//check if user input matches guess number
//display prompt

let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber);

let userGuess = prompt("Enter a number between 1 to 10");
console.log(userGuess);

if (userGuess === randomNumber) {
  alert("Good Work!");
} else {
  alert("Not matched");
}
