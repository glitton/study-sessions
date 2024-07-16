let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

/*
The console logs 2.

A bar variable is declared and set to 1.
When the function foo is invoked, the variable bar is reassigned to 2.
This is why logging bar outputs 2.
*/
