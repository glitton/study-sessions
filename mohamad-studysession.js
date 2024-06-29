let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
// console.log(myVar);

/*
The console will log [2].  

In line 8, when invoking myFunc passing in myVar argument,the function parameter 
receives a reference of `myVar` on 2. 
mvar in the function parameter and myvar in the global variable are pointing to same array, 
so when we mutate myvar in line 5, we are accessing the first index of the array and changed to 
`2` this mutation effect the global variable mutates the global myVar array, 
changing the value at index 0 from 1 to 2.

Since myVar is passed by reference, this variable points to the global myVar array.

Reassigning index 0 to 2 in the function mutates the array and since the global
variable myVar points to the same array, logging it to the console outputs [2]
*/

/*
This code logs `[2]`.
in line 1 we declared a variable called `myVar` and we initialized it to  it an array with a single element of 1.
in line 9 we invoke the function `myFunc` and pass in the `myVar` variable as an argument.
the function `myFunc` recieves a reference of `myVar` variable,this acts pass by reference.
on line 6 `myVar` is mutated, the first element of the array is changed to 2.This mutation effects the original array because `myVar` in the function paramter and the   `mVar` variable in the global are poiting to the same memory location.
Therefore line 10 logs the mutated `myVar` variable to the console which is `[2]`.
*/

// What is the output of the following code and explain why.
let num = 1;

function myFunc(num) {
  num = 2;
}

myFunc(num);
console.log(num);

/*
The output is 1.

A global variable num is declared and assigned to the value 1. A function myFunc
is declared with the parameter `num`. 

When myFunc is invoked with the argument `num` it is being passed by value 
meaning it gets a copy of the variable `num`.   

In the function, `num` is assigned the value 2.  However, the global variable 
`num` still has the value of 1 as it is a primitive and thus immutable.  
This is why logging `num` will output 1.  
*/
