// What is the value logged on the last three lines? What concept is demonstrated? -- Will

const a = [["foo", "bar"], "baz"];
const b = a;
c = b[0];
c.push("qux");

console.log(a);
console.log(b);
console.log(c);

//[ [ 'foo', 'bar', 'qux' ], 'baz' ]
// [ [ 'foo', 'bar', 'qux' ], 'baz' ]
// [ 'foo', 'bar', 'qux' ]
//Array is a reference type so b points to the same array as a.
//If not in strict mode, undeclared variables are implicitly global

// Why did c run?  I thought it wouldn't as the variable wasn't defined, if not in strict mode
//Concept is variable as pointers

// What is the value logged on the last three lines? What concept is demonstrated? -- Will

// const a = [["foo", "bar"], "baz"];
// const b = a; // [["foo", "bar"], "baz"] -- index 0
// a[1] = a[1].toUpperCase();
// let c = b[0]; // ["foo"]
// c.push("qux")

// console.log(a); // [[ "foo", "bar", "qux" ], "baz"]
// console.log(b); // [[ 'foo', 'bar', 'qux' ], 'baz']
// console.log(c); // ["foo", "bar", "qux"];

//  What will be logged to the console, and why? -- Mohammed

function arrayModifier(arr) {
  arr[0] = 100;
  arr = arr.filter((num) => num > 10);
  arr.push(200);
}

const originalArray = [1, 2, 3, 11];
arrayModifier(originalArray);
console.log(originalArray);

// function didn't return a new array so that is why console.log is [ 100, 2, 3, 11 ]

// Identify the variables, primitives, and objects in the code -- Generosa

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

updateAge(person);

// Variables: person, updateAge, obj
//Primitives: 'Alice', 30, 'Alice', 31, name, age (in person), name, age in obj
//Objects: person, obj, function updateAge

//keys in javascript objects are strings,

// // Identify the variables, primitives, and objects in the code -- Generosa

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

let c = true;

person[c] = "foo";

updateAge(person);

// Variables: person, updateAge, obj
//Primitives: 'Alice', 30, 'Alice', 31, name, age (in person), name, age in obj
//Objects: person, obj, function updateAge

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
