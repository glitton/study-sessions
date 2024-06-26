// Question 1: What will be the value of result?
// let x = 10;
// let y = 5;
// let result = x > 5 && y > 2;
// 10 > 5 == true
// 5 > 2 == true
// console.log(x > 5 && y > 2); // What will this log? true

/*
The console will log true because the value of result using short circuit
evaluation is true.  

The code compares two expressions using the AND operator.  The first expression 
is x is greater than 5 or if 10 > 5 which is true and the second is 5 > 2 
which true
Since the first expression evaluates to true and the second evaluates to true
the value of the variable result is true.  
*/

// Question 2: What will be the value of username?
let username = "";
let defaultUsername = username || "Guest";
// console.log(defaultUsername); // What will this log?
/*
The console logs "Guest".  The variable defaultUsername is the result of evaluating
an expression using the OR operator.  The left side of the expression is
username which is an empty string and therefore falsy and the right side is the string
"Guest" which is truthy.  With the OR operator, as long as one expression evaluates to
true, then the entire expression evaluates to true.  
*/

// Question 3: What will be the value of propertyValue?
let obj = null;
let propertyValue = obj && obj.property;
// console.log(propertyValue); // What will this log? null

// What will be the result of the following expression?
// let a = true;
// let b = false;
// let result = a && b;
// console.log(result); // What will this log? // false

/*
Evaluating true and false results in false as the AND operator requires both
operands to evaluate to true in order to be true
*/

// Predict the output:
let x = 0;
let y = null;
let z = 10;
let result = x || y || z;

console.log(result); // What will this log? => 10
//The OR operator returns the first truthy value

// Will the following code log anything to the console?
let condition = false;
condition && console.log("This will not be logged.");
