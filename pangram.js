// function isPangram(sentence) {
//   const alphabet = `abcdefghijklmnopqrstuvwxyz`;
//   let sentenceLowerCase = sentence.toLowerCase();

//   for (let letter of alphabet) {
//     if (sentenceLowerCase.includes(letter)) {
//       return true;
//     }
//   }
//   return false;
// }

// The issue with the refactored `isPangram` function is in the logic of how it checks for letters in the alphabet.

// In the current implementation, you are returning `true` as soon as you find the first letter of the alphabet in the sentence. This means that as soon as any letter is found, the function will exit and incorrectly claim that the sentence is a pangram.

// To correctly identify if the sentence is a pangram, you need to ensure that **all letters** of the alphabet are present. Here’s the corrected version:

// ```javascript
// function isPangram(sentence) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let sentenceLowerCase = sentence.toLowerCase();
//   let allLettersPresent = true;

//   for (let letter of alphabet) {
//     if (!sentenceLowerCase.includes(letter)) {
//       allLettersPresent = false; // Found a missing letter
//       break; // Exit the loop early
//     }
//   }

//   return allLettersPresent; // Return the result
// }

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(isPangram(sentence)); // true
// ```

// ### Key Changes:
// 1. The function checks if each letter is **not** included in the sentence (`!sentenceLowerCase.includes(letter)`), meaning it will only set `allLettersPresent` to `false` if a letter is missing.
// 2. After detecting a missing letter, it breaks out of the loop early for efficiency.
// 3. Finally, it returns the value of `allLettersPresent`, which correctly indicates if all letters are present.

// With this logic, the function will correctly return `true` if the sentence is a pangram and `false` otherwise.

function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sentenceLower = sentence.toLowerCase();

  for (let letter of alphabet) {
    if (!sentenceLower.includes(letter)) {
      return false;
    }
  }
  return true;
}

let sentence = "The quick brown fox jumps over the lazy dog.";

console.log(isPangram("The quick brown fox jumps over the lazy dog.") == true);
console.log(isPangram("This is not a pangram.") == false);
