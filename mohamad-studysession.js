// let myVar = [1];

// function myFunc(myVar) {
//   myVar[0] = 2;
// }

// myFunc(myVar);
// console.log(myVar);

/*
The console will log [2].  

When invoking myFunc passing myVar as an argument, the function receives a reference of 
the global variable `myVar`. This means that the function parameter, myVar  
and the myVar global variable are pointing to same array, 

When myFunc executes line 5, it mutates the array by assigning index 0 to
`2`.  This mutation affects the global myVar array as well.  

Thus logging myVar to the console outputs [2]
*/

// What is the output of the following code and explain why.
// let num = 1;

// function myFunc(num) {
//   num = 2;
// }

// myFunc(num);
// console.log(num);

/*
The output is 1.

A global variable `num` is declared and assigned to the value 1. 
A function myFunc is declared with the parameter `num`. 

When myFunc is invoked with the argument `num` it shadows the global variable `num`
meaning it doesn't have access to this global variable. When the function assigns
`2` to `num` it does not affect the global variable `num`. 

This is why logging `num` will output 1.  
*/

let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(); // TypeError: Cannot set properties of undefined (setting '0')
console.log(myVar); //Shadowing
