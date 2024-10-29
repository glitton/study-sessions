/*
P: Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

E: 
D: An array that contains the Alphabet as string elements

A: 
- Create a constant assigned to an array of letters of the alphabet.
- Determine the startingIndex of the alphabet array based on the first element of the input array
- Iterate over the input array
  -- Check each element of the input array against the alphabet array starting from its startingIndex
  -- For each iteration, increment the startingIndex
  -- If the expected character from the alphabet array isn't present in the input array
     --- we found the missing character
     --- Check the case of the input array at index 0 against the case of the alphabet array from the startingIndex
     --- Change case to match the input array
  -- Return the missing character in the right case

C:
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

function missingLetter(array) {
  let startingIndex = ALPHABET.indexOf(array[0].toLowerCase());

  for (let idx = 0; idx < array.length; idx++) {
    let expectedChar = ALPHABET[startingIndex];
    startingIndex++;

    if (array[idx].toLowerCase() !== expectedChar) {
      // Check if character is uppercase
      if (array[0] === array[0].toUpperCase()) {
        return expectedChar.toUpperCase();
      } else {
        return expectedChar;
      }
    }
  }
}

console.log(missingLetter(["a", "b", "c", "d", "f"])); // e
console.log(missingLetter(["O", "Q", "R", "S"])); // P
