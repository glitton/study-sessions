// What does this code log to the console?
// Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

/*
The code logs 1 to the console.  

Executing the foo function doesn't affect the output because the function foo's
bar variable is scoped within the function or has an inner scope.  
Thus the bar argument that is passed to the console.log
method is scoped to the global bar variable which is why it logs the value of 1.  
*/

let bar = 1;
function foo() {
  bar = 2;
}

foo();
// console.log(bar);

function multiplyNumbers() {
  let input = require("readline-sync");
  num1 = input.question("Enter a first number: ");
  num2 = input.question("Enter a second number: ");
  let finalNumber = num1 * num2;
  console.log(`The value of multiplying ${num1} and ${num2} is ${finalNumber}`);
}

// multiplyNumbers();

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function getNumbers(prompt) {
//   let input = require("readline-sync");
//   return parseFloat(input.question(prompt));
// }

// let num1 = getNumbers("Enter a first number: ");
// let num2 = getNumbers("Enter a second number: ");
// console.log(
//   `The value of multiplying ${num1} and ${num2} is ${multiply(num1, num2)}`
// );

// function scream(words) {
//   words = words + "!!!!";
//   return;
//   console.log(words);
// }

// scream("Yipeee");

//The function logs nothing as the function returns and thus terminates the program
//before anything can be logged.

function scream(words) {
  return words + "!!!!";
}

scream("Yipeee");

/*
The code doesn't log anything to the console however it does return Yipeee!!! 
*/

//Identify various things
function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/*
function arguments - 2, 3, 4
function body - lines 77 and 78, between the curly braces
function declaration - everything from line 76 to 79
function invocation - line 81, multiplyNumbers(2,3,4)
function name - multiplyNumbers
function parameters - num1, num2, num3
function return value - determined by multiplying the arguments, stored in
the variable result, then assigned to product after the function returns
variables - multiplyNumbers, num1, num2, num3, result, product

*/
