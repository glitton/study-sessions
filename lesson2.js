// let myVar = [1];

// function myFunc() {
//   // console.log(myVar);
//   myVar = [2]; //searches the global scope
// }

// myFunc(); //pass-by-reference
// console.log(myVar); //[2]

let num = 1;

function newVar(num) {
  num = 2;
}

newVar();
console.log(num); //1
