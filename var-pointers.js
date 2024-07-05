// let myWord = "Hello";
// let myOtherWord = myWord;
// myWord = "Goodbye";

// console.log(myWord);
// console.log(myOtherWord);

/*
The console logs the string 'Goodbye' and then the string 'Hello'.

On line 1, myWord is initialized to the string 'Hello'.  In line 2, myOtherWord 
is declared and initialized to myWord.  At this point, myWord and myOtherWord both
have the value of the string 'Hello' but they are stored in different memory addresses.
Line 3 reassigns myWord to the string "Goodbye".  Thus logging myWord results in
"Goodbye" and myOtherWord is "Hello".
*/

// let myWords = ["Hello", "Goodbye"];
// let myOtherWords = myWords;
// myWords[0] = "Hi";

// console.log(myWords);
// console.log(myOtherWords);

/*
The console logs ["Hi", "Goodbye"] twice.  
In line 18, myWords is assigned to an array with two strings, ["Hello", "Goodbye"].
The variable myOtherWords is assigned to myWords.  At this point, myWords and myOtherWords
reference the same array.  On line 20, we change the element at index 0 of myWords to the string "Hi".
This mutation affects both myWords and myOtherWords since both reference the same array.  Thus
logging myWords and myOtherWords result in the output ["Hi", "Goodbye"] and ["Hi", "Goodbye"].
*/

// let myWords = ["Hello", "Goodbye"];
// let myOtherWords = myWords;
// myWords = ["Hi", "Bye"];

// console.log(myWords);
// console.log(myOtherWords);

/*
The output to the console is [ 'Hi', 'Bye' ] then [ 'Hello', 'Goodbye' ].

In line 34, myWords is initialized to the array with two strings ["Hello", "Goodbye"].
Line 35 declares the myOtherWords variable and assigns it to myWords.  At this point,
myOtherWords and myWords both have their value of the memory address where the array 
[ 'Hello', 'Goodbye' ] is stored.  
 
When myWords is reassigned in line 36 to a different array, ["Hi", "Bye"],
myWords' value is that of a different memory address than myOtherWords.   
*/

// let myWords = ["Hello", "Goodbye"];
// let myWord = myWords[0]; //"Hello"
// myWords[0] = "Hi";

// console.log(myWords); //["Hi", "Goodbye"];
// console.log(myWord); //"Hello";

/*
Console outputs the array ["Hi", "Goodbye"] and the string "Hello"

In line 53, myWords is initialized to an array with two string elements ["Hello", "Goodbye"]
Line 54, myWord is initialized and assigned to index 0 of the myWords array which is the 
string "Hello".  Because the string is a primitive type, the myWord variable and index 0 of 
the myWords array point to different strings at different memory addresses.  
In line 55, the myWords array's index 0 element is mutated to a new value "Hi".  This
doesn't affect the value stored in the myWord variable.
As a result myWords array is now ["Hi", "Goodbye"] while myWord is still 
the string "Hello"
*/

let myWords = ["Hello", "Goodbye"];
let myWord = "Hi";
myWords[0] = myWord; //
myWord = "Hello";

console.log(myWords); //["Hi", "Goodbye"]
console.log(myWord); //"Hello"

/*
Logging myWords outputs the array with two strings, ["Hi", "Goodbye"] and
logging myWord outputs the string "Hello"

Line 75 mutates the myWords array, changing the element at index 0 from "Hello" to
"Hi".  At this point, myWords array points to the memory address of the array ["Hi", "Goodbye"].
Line 76 reassigns the variable myWord to a new string, "Hello" which is at a different
memory address than the string "Hi" declared in line 74.

Thus logging myWords results in the array ["Hi", "Goodbye"] and logging myWord outputs
the string "Hello".
*/
