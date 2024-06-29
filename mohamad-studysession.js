let myVar = [1];

function myFunc(myVar) {
  myVar[0] = 2;
}

myFunc(myVar);
console.log(myVar);

/*
The console will log [2].  

in line 8, when invoking myFunc passing in myVar argument, line 5 mutates 
the global myVar array, changing the value at index 0 from 1 to 2.

myVar argument is passed by reference which means that the global myVar 
variable points to the same array as the parameter myVar in the function myFunc.

Reassigning index 0 to 2 in the function mutates the myVar array and since the global
variable myVar points to the same array, logging it to the console outputs [2]
*/
