/* 1.
Write a function that finds the length of the longest substring in a given string that does not have any repeating characters

*/

/*
input: string 
output: number 
rules:
  - get the length of longest substring that doesn't have any repeating characters 

d:
array: to stroe the characters of input string 

a:
- iterate through the input string 
- get the length of longest substring 

  - initialize result to empty array 
  - iterate t

*/

function longestUniqueSubstring(str) {
  // Your code here
}
console.log(longestUniqueSubstring("abcabcbb")); // 3 ('abc')
console.log(longestUniqueSubstring("bbbbb")); // 1 ('b')
console.log(longestUniqueSubstring("pwwkew")); // 3 ('wke')

//----------------------------------------------------------------

/* 2.
Write a function that takes an array of strings and groupes them into an array of anagram groups. The strings in each group should be anagrams of each other

*/

/*
input: array 
output: array of subarrays 
rules:
  - create an array of subarrays that contains stirngs that are anagrams of each other 
d:
- array: to store the characters of input array 

a:
- iterate through the input array 
- find the strings that are anagrams of each other 

  - sort the input array in alphabical order, assign the resutl to sortedArr 

  - create an empty object, named anagram 
  - iterate thorugh the sortedArr
  -- if count includes the current string as a key 
  --- assign empty array to its value 
  -- otherwise push the current string of input array 
  - get all the values from count object, return it 
*/

function groupAnagrams(arr) {
  let count = {};

  arr.forEach((str) => {
    let sortedStr = str.split("").sort().join("");

    if (!count[sortedStr]) {
      count[sortedStr] = [];
    }

    count[sortedStr].push(str);
  });
  return Object.values(count);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Input: array of 10 integers
Output: string of the 10 integers formatted like a phone number
"(123) 456-7890"
Rules: Formatted as a phone number
E:
D: 
A:
- Initialize an empty string variable phoneNumber
- Iterate three times through the array
  - First time is to create the ()
  - Second time to create the second portion 456-
  - Third time is to create the final four strings
FIRST ITERATION  
- Append "(" to the string then iterate 3 times through the array, and append the first three numbers then append ")"
SECOND ITERATION - iterate 3 times, append the next three digits
LAST ITERATION  - iterate 4 times, append the next 4 digits

*/

function createPhoneNumber(array) {
  let firstPart = 3;
  let secondPart = 6;
  let thirdPart = 10;

  let phoneNumber = "(";

  for (let idx = 0; idx < firstPart; idx += 1) {
    phoneNumber += array[idx];
  }
  phoneNumber += ") ";

  for (let idx2 = firstPart; idx2 < secondPart; idx2 += 1) {
    phoneNumber += array[idx2];
  }
  phoneNumber += "-";
  for (let idx3 = secondPart; idx3 < thirdPart; idx3 += 1) {
    phoneNumber += array[idx3];
  }
  return phoneNumber;
}

function createPhoneNumber(array) {
  return `(${array.slice(0, 3).join("")}) ${array.slice(3, 6).join("")}-${array
    .slice(6)
    .join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
