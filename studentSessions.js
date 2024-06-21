// Pass By Value vs Pass By Reference
// Function, Variable Shadowing Concept
// Pseudocode
// Variables as Pointers
// Objects - Mutations (Arrays)

let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}
myFunc();

/*
The output to the console is Hello, world! 
*/

/*
function replace(str, value) {
  while (true) {
    break;
  }
  str = value; // example 0x123
}
let greet = "Hey!"; // 0x456
let a = replace(greet, "Hello");
console.log(a);
console.log(greet);
*/
/*
function modifyArray(array) {
  let val = array.pop(); // 3
  return val;
}
let arr = [1, 2, 3];
let result = modifyArray(arr);
console.log(result); // 3
console.log(arr); // [1, 2]
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://www.youtube.com/playlist?list=PLPVUV61a5r7-kC5b0dhZGFDQm2wJDJZsA
function reassignmentArray() {
  arr = [4, 5, 6];
  return arr;
}
let arr = [1, 2, 3];
let result = reassignmentArray(arr);
// console.log(result);
// console.log(arr);
