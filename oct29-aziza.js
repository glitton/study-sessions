// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

/*
P: 
Input: array of strings
Output: a single string (letter)
Rules: 
- Find the missing letter in the array of consecutive letters
- Only one letter is missing
- Keep the case as the case of the array
- Length of array is at least 2
E:
D: 
A:
- Initialize a constant of an array containing the letters of the alphabet
- Check the case of the input array, create a helper function, needUpper
    - check the case of the first index of the array.
    - if it is uppercase, return the character
    - else return character.toUpperCase()
- Find the starting index to compare with
  - Find the starting index based on the first character of the input array,
  - Add the index to the length of the input array, this will be the length of the loop
- Iterate over the length of the input array and check each character by index
- compare each character to the alphabet array Lowercase the comparison
  - if the value in a specific index is not present, that is the missing letter
  - return the missing letter in the proper case
*/

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// function missingLetter(array) {
//   let firstCharacter = array[0];
//   let startingIndex = ALPHABET.indexOf(firstCharacter.toLowerCase());

//   for (let idx = 0; idx < array.length; idx++) {
//     let charLowerCase = array[idx].toLowerCase();
//     if (charLowerCase !== ALPHABET[startingIndex]) {
//       return ALPHABET[startingIndex];
//     }
//   }
// }

function missingLetter(array) {
  let startingIndex = ALPHABET.indexOf(array[0].toLowerCase());

  for (let i = 0; i < array.length; i++) {
    const expectedChar = ALPHABET[startingIndex + i];

    // Compare directly with the lowercase version of input character
    if (array[i].toLowerCase() !== expectedChar) {
      // Capitalize the expected letter if the first letter of the array was uppercase
      return array[0] === array[0].toUpperCase()
        ? expectedChar.toUpperCase()
        : expectedChar;
    }
  }
}

console.log(missingLetter(["a", "b", "c", "d", "f"])); // e
console.log(missingLetter(["O", "Q", "R", "S"])); // P

// console.log(needLowerCase("G"));
// ["O", "Q", "R", "S"].forEach((char) => {
//   needLowerCase(char);
//   console.log(char);
// });
