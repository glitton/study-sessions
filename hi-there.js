// function first() {
//   return {
//     prop1: "hi there",
//   };
// }

// function second() {
//   return; //this is the issue
//   {
//     prop1: "hi there";
//   }
// }

// console.log(first());
// console.log(second());

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2); //modifies numArray, modifies object too

// console.log(numArray); //  => "[1, 2]"
// console.log(object); //{ first: [1,2] }

let object = { first: [1] };
let numArray = [...object["first"]]; //creates copy, separate value from object
numArray.push(2);

console.log(numArray);
console.log(object);
