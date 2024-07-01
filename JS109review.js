// let a = 4;
// let b = a;
// a = 7;
// console.log(b);

// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);

// let word = "hello";
// let newWord = word.replace("h", "j");

// console.log(newWord); // 'jello', old word var doesn't change

// let myWord = "Hello";
// let otherWord = " there";
// let finalWord = myWord.concat(otherWord);

// console.log(finalWord);

// let myWord = "Hello";
// myWord.repeat(3);
// console.log(myWord);
// myWord.replace("H", "J");
// console.log(myWord);
// myWord.toUpperCase();
// console.log(myWord);

// let myWords = ["Hello"];
// myWords.push("Goodbye");

// console.log(myWords);

// let myWords = ["Hello"];
// myWords.concat(["Goodbye"]);

// console.log(myWords);

// let myWords = ["Hello"];
// let finalWords = myWords[0].toUpperCase();

// console.log(myWords);
// console.log(typeof finalWords);

// let myWords = ["Hello"];
// myWords[0] = myWords[0].toUpperCase();

// console.log(myWords);

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = "Hi";
// }

// let myWords = ["Hello", "Goodbye"];
// changeMyWords(myWords);
// console.log(myWords);

// function changeMyWords(words) {
//   console.log(words);
//   words = ["Hi", "Goodbye"];
// }

// let myWords = ["Hello", "Goodbye"];
// // console.log(changeMyWords(myWords));
// changeMyWords(myWords);
// console.log(myWords);

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
// console.log(array2);

/*
The output is [1, 4, 3]

The variable array1 is initialized to the array [1, 2, 3].  Next, another variable 
array2 is assigned to array1.  At this point, array2 and array1 reference the same
array of [1, 2, 3].

Mutating array1 by changing the value at index 1 with 4 means that both array1 and 
array2 will reflect the change as they are both pointing to the same array.

This is why the output is [1, 4, 3]
*/

function findMaxValue(...nums) {
  let largestNum = Math.max(...nums);
  return largestNum;
}

// console.log(findMaxValue(1, 6, 3, 2));
// console.log(findMaxValue(-1, -6, -3, -2));
// console.log(findMaxValue(2, 2));

// console.log("direct", Math.max(1, 6, 3, 2));

// function allMatches(arr, pattern) {
//   let matchedWordsArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (pattern.test(arr[i])) {
//       matchedWordsArray.push(arr[i]);
//     }
//   }
//   return matchedWordsArray;
// }

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

// console.log(allMatches(words, /lab/));

function allMatches(arr, pattern) {
  return arr.filter((item) => pattern.test(item));
}

// function isNotANumber(num) {
//   if (typeof num === "number") {
//     return false;
//   } else {
//     return true;
//   }
// }

function isNotANumber(value) {
  return value !== value;
}

// console.log(isNotANumber("hello"));
console.log("5" + 1);
