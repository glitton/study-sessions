function addName(arr, name) {
  arr = arr.concat([name]);
  // console.log(arr);
}

let names = ["bob", "kim"];
addName(names, "jim");
// console.log(names); // => [ 'bob', 'kim', ]

let word = "Hello";

function myFunc(param) {
  // return (param = "Goodbye");
  param = "Goodbye";
  return param;
}

myFunc(word);
word = myFunc(word);
// console.log(word); // 'Goodbye'

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = "Hello";
// let myOtherWord = changeMyWord(myWord); //"Hello"
// console.log(myWord); //"Hello";
// console.log(myOtherWord); //"HELLO"

// function changeMyWords(words) {
//   console.log(words);
//   words = ["Hi", "Goodbye"]; // reassignment, points to a new array
// }

// let myWords = ["Hello", "Goodbye"];
// changeMyWords(myWords);
// console.log(myWords);

let a = 2;
let b = Math.floor(Math.random() * 2);
console.log(b);
a *= b;

if ((a = 2)) {
  console.log("The value of `a` is two.");
} else {
  console.log("The value of `a` is NOT two.");
}

// Given a sentence made up of several words,
// write a method to return the longest word.
// Words consist of any text separated by a
// single space.

// Split the sentence into words
// Save the first word as the starting word.
// For each of the remaining words in the sentence:
//   If the current word is longer than the saved word:
//     Reassign the saved word as the new current word.
// Return the saved word.
