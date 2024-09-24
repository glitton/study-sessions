//Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6];

// console.log(evenNumbers(numbers));

//Create a function that filters an array of strings, returning only the words that have more than 4 characters.

function wordsWithFourChars(arrOfWords) {
  return arrOfWords.filter((word) => word.length > 4);
}
const words = ["apple", "bat", "elephant", "dog"];

// console.log(wordsWithFourChars(words));

//Given an array of objects, filter out the objects that have a status property set to "active".

const users = [
  { name: "John", status: "active" },
  { name: "Jane", status: "inactive" },
  { name: "Jim", status: "active" },
];

function activeStatus(arr) {
  return arr.filter((el) => el.status === "active");
}

console.log(activeStatus(users));
