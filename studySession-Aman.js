// What's gonna log and why? What concepts this code demonstrate? - Mohamed
function changeMyWord(word) {
  word = word.toUpperCase();
  return word;
}

let myWord = "Hello";
let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// The strings Hello and HELLO will be logged to the console.
//The first console log points to the global myWord variable initialized in line 7
//myOtherWord variable is assigned to the value of the function changeMyWord(myWord)
//This function returns an uppercase string of Hello, which is HELLO resulting in
//This string being logged to the console in line 10.

// this code logs: Hello
// HELLO

// in line a variable `myWord` is declared and initialized to the string 'Hello'.
// in line 8 a variable `myOtherWord` is declared and initialized to the return value of invoking the function `changeMyWord` passing `myWord` as argument.
// the function `changeMyWord` receives a copy of the value of `myWord`.
// in line 3 `myWord` is reassigned to the string 'HELLO' and the function return this value. HELLO'.and that is what is logged in line 10.
// because this is primitive value, the global variable remains unchanged and  the value of the variable `myWord` is still 'Hello' and this is what is logged in line 9.
// the concepts demonstrated in this code is immutability of primitive values

// What's the output and why? - Generosa
let cities = ["Tokyo", "Berlin", "Rio"];

function mutater(list) {
  list = ["Banana", "Pineapple", "Apple"];
  list[2] = "Denver";
}

mutater(cities);
// console.log(cities);

//The output to the console is ["Tokyo", "Berlin", "Rio"]
// Invoking the mutater function in line 36and passing the cities argument by reference leads to a reassignment of the array to list which now contains ["Banana", "Pineapple", "Apple"].  This list is mutated in the 2nd index with the string "Denver".  This function however, did not affect the cities array as passing by reference means that arrays can be mutated but not reassigned.  Thus the cities variable will remain the same when logged to the console.

// What's happening in this code? What concepts this code demonstrate? - Fuad-
let number1 = 10;
let number2 = 25;

function sumOf(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

sumOf(number1, number2);
// console.log(sum);
//The output of this code is a ReferenceError: summ is not defined
//The reason for this is that the sum variable is out of scope.
//The sum variable is scoped to the sumOf function and thus can't be accessed
//via the console.log which is outside the function scope

/*
This will not log anything to the console, rather, it will raise a `reference error`. 

This is because the `console log` call on line 33 is called in the global scope, and `sum` was a function-scoped local variable that was declared in the scope of the body of the `sumOf` function on line 28. When `sumOf` was invoked on line 32, Javascript temporarily ‘jumped’ into the body of the `sumOf` function, defined between lines 27 – 30, and it was initialised to the value of the two arguments `sumOf` was invoked with. `sum` was returned to the caller on line 29, but nothing was done with this return value, after which `sum` went out of scope. So by the time we attempt to log its value on line 33, it is out of scope and hence a `reference error` is raised. 
The concepts demonstrated here are variable scope and use of values returned from a function


*/

// Name all of the primitives, variables, and objects in the code below.- Patricia
let students = ["Chris", "Pete", "Nick"];
let copyOfStudents = students.concat();

let firstStudent = students[0];
let lastStudent = students[2];

function concatenate(name1, name2) {
  return name1 + " and " + name2;
}

concatenate(firstStudent, lastStudent);

//Variables: students, copyOfStudents, firstStudent, lastStudent, concatenate, name1, name2
//Objects: ["Chris", "Pete", "Nick"], concatenate function object, the array referenced by 'copyOfStudents'

let words = ["scooby", "do", "on", "channel", "two"];

words.forEach((word) => {
  console.log(word);
  words.shift();
});

console.log(words);
