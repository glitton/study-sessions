let exp = (num1) => {
  return (num2) => num1 ** num2;
};
let foo = exp(3); // returns an uninvoked function;
// passes an argument to that function

/*
outer function returns another arrow function

This will log the value of 3 to the power of 3 to the console, which is 27. Between lines 1 and 4 a function expression, using the syntax of an error function is defined. The function called exp takes one parameter, num1. Within the body of the function expression, another arrow function get’s returned, which takes one parameter num2 and returns the value of num1 raised to the power of num2. 
On line 7 the foo variable is declared and initialized to the return value of invoking exp with the number 3 passed as an argument. Since the callback of exp has not been invoked, foo is now initialized to reference an uninvoked function. 
When `foo` gets invoked on line `5`, we pass the argumen for the innter function `3`. This way, both the outer and the inner function are invoked and passed the arguments `3`, which will then return the result of `3` to the power of `3`. 

*/

// Question 9:
// Examine the code below. Line 12 should output the result shown in the comment on line 13. That is not what happens.
// Explain what happens in the code step by step, including mention of the bug in the code.

let sampleArray = ["x", 2, { key: "value" }, null];

let filteredArray = sampleArray.filter((element) => {
  let processedElement;
  if (typeof element === "object") {
    processedElement = element;
  }
  return processedElement;
});

// console.log(filteredArray);
// [{ key: 'value' }, null]

/*
Although the expected output for this code is [{ key: 'value' }, null], instead,its output is [{ key: 'value' }].  

A function filteredArray is declared and assigned the return value of a filter method.  

The sampleArray is used with the filter method.  A variable processedElement is declared.  The filter methods condition is to filter out elements with the type of object from the sampleArray.  The elements that meet this condition is then assigned to the processedElement variable and then returned.  

The reason null isn't part of the output is due to the condition `if (typeof element === "object")`.  This condition specifies an object type.  `null` is a primitive type and not an object thus it doesn't meet the condition.  The only element that meets this condition is { key: 'value' } which is the output of this function.
*/

/*
Sabrina: 
In this code, the variable `sampleArray` is defined on line `1` and initialized to reference an array with 4 elements. 

On line `3` the variable `filteredArray` is declared and initialized to the return value of the `filter` method called on `sampleArray`. Filter will iterate over each element of it’s caller and it will select the element for which its callback return a truthy value and return a new array with all selected elements

The `filter` method takes a callback function. Within the body of the function a new variable `processedElementf` is declared but left uninitialized. 

On line `7` an `if statement` is defined. It’s conditional evaluates as true when the `typeof` the current element has strict equality with the string `object`, in other words, it’s `if` clause executes when the type of the value of the current iteration is an object. 

In this case, the `processedElement` variable gets reassigned to that element and finally gets returned to `filter`.  

This will be the case for the `2nd` and `3rd` indexed element of `sampleArray` , since `null` in javascript has the type of an object. 

But since the `3rd` inexed element is `null` which is a falsy value, when it finally gets returned to `filter` , it won’t be selected. 

The callback of `filter` will be invoked once per iteration. At each iteration the current value get's passed as an argument that initializes the parameter of the callback. 

*/

// The code below aims to find the player with the highest score.
// However, the logic to find the maximum is incomplete.
// Implement the missing logic in the `maxScoreFn` function.

const PLAYER_SCORES = [
  { emma: 95 },
  { lucas: 88 },
  { sophia: 97 },
  { liam: 91 },
];

function maxScoreFn(acc, scoreObj) {
  //Implement this function
}

function highestScore(playersArr) {
  return playersArr.reduce(maxScoreFn, { name: "", score: 0 });
}

console.log(highestScore(PLAYER_SCORES));
// Should output: { name: 'sophia', score: 97 }
