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
