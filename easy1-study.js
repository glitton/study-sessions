let numbers = [1, 2, 3];
numbers[6] = 5; // Adds 3 empty items
numbers[4]; //what will this return

// console.log(numbers[4]); // undefined
numbers[5] = undefined; // this slot will be remapped based on the value of the callback in the map function
const newNumbers = numbers.map(() => "hola");
// console.log(newNumbers);

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
// console.log(str2.endsWith("!"));

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty("Spot"));

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let final =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(final);
