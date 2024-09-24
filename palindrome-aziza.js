// Palindromic Substrings
// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
Input: A string 
Ouput: An array of palindromic substrings
RUles:
  - get a string as argument 
  - Returns an array of palindromic substrings
  - Each substring should reads the same forward and backward
  - The single character is not a palindrome 
  - Duplicate substrings should be included multiple times
  - Substrings are Case-sensitive
  - The input string length is not matter
  - IF input string doesn't exist any palindromic substrings return empty array


D:
-- string
-- Array 

A:

1. Iterate throgh the input string 
2. Create an array of substrings from the input string 
3. Iterate through the substrings array
4. Find out the palindromic substrings from substrings array 

Helper func: isPalindrome:
Input: A string 
Output: Boolean (true false)

  - Convert the input string to an array of characters
  - Reverse the array of characters 
  - Convert back it to a string 
  - Compare it with original input string, if equal returns true, false otherwise

Helper func: getAllSubstrings:
Input: A string 
OUptu: An array of substrings

  - Initialize substrings array empty 
  - Iterate through the input string, Initialize index1 to 0
    - Create second loop to iterate over input string, Initialize index2 to index1 + 1
      - Slice off the substrings from the input string start from index1 upt index2 
      - Append the result to substrings array 
    - End loop if index2 is greater than string.length
  - End loop if index1 is greater than string.length

  - Return substrings

Main func: palindromes
Input: A string 
Ouput: An array of palindromic substrings 

  - Initialize substrings to the return value of getAllSubstrings func
  - Return the substrings which are palindromes and their length are greater/equal to 2

*/

const log = console.log;

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

log(isPalindrome("aziza"));
log(isPalindrome("Aziza"));

function getAllSubstrings(string) {
  let substrings = [];

  for (let index1 = 0; index1 <= string.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 <= string.length; index2 += 1) {
      substrings.push(string.slice(index1, index2));
    }
  }

  return substrings;
}

function palindromes(string) {
  let substrings = getAllSubstrings(string);
  return substrings.filter(
    (substring) => isPalindrome(substring) && substring.length >= 2
  );
}

// log(getAllSubstrings('madam abcd'));
log(palindromes("abcd")); // []
log(palindromes("madam")); // [ "madam", "ada" ]

log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
