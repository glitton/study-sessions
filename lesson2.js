let myVar = [1];

function myFunc() {
  myVar = [2];
}

myFunc();
// console.log(myVar);

let num = 1;

function newVar(num) {
  num = 2;
}

newVar();
console.log(num);
