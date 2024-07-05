let status = "Online";

function changeStatus(status) {
  console.log("inside func", status);
  status = "Offline";
  console.log("after status", status);
  return status;
}

console.log("func invoked", changeStatus());
console.log(status);

/*
When the changeStatus function is invoked without an argument, the function
initializes a variable status that is different from the global status variable.
This local variable shadows the global variable blocking access to it thus,
has the value of undefined. The function then reassigns its value to Offline 
and then returns it. 

However, the last line which logs the value of status is referring to the global
variable status thus the output is 'Online'

The concept that this code demonstrates is shadowing and scope.  Inner scoped variables 
with the same name as the outer scope, shadows the outer scope variable and therefore
doesn't have access to the outer scope variable with the same name.  

Global scope variables can be accessed by functions and methods such as console.log
*/
