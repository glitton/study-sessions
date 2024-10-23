/*
Write a method that takes a string as an argument and returns
the character that occurs least often in the given string.
If there are multiple characters with the equal lowest number
of occurrences, then return the one that appears first in the
string. When counting characters, consider the uppercase and
lowercase version to be the same.
*/

/*
P: 
Input: string
Output: character that occurs the least

Rules:
- If there are multiple characters that are equally low in occurences, return the first one that appears in the string
- case doesnt' matter:  a is the same as A. 
- empty spaces counts as a character

E: 

D: String, object to keep track of the count of characters

A:
1.  Convert string to lower case
2.  Initiate an empty object, key is the character, value is the count
3.  Iterate over the input string, populate the object with the character as the key and the number of appearances as its value
4.  Check the values of the objects, return the key with the lowest number of appearances.
  - if there are multiple keys with the same number of appearances, then I need to check the index of each one and select the lower index value.

Aziza:
- Iterate through the input string 
- get the occurences of characters 
- iterate through through the count 
- get the character that least often 


  - convert the input string to lowercase 
  - initialize count to empty object 
  - iterate through the input string 
  -- if the current character doesn't exist within the count object 
  --- append the current character to count assing one to its value 
  -- otherwise increment its value by 1 


  - iterate thorugh the count object 
  -- if count contain one key return key 
  -- if the current key value is equal to 1 
  --- return the curren key 
    

C:  
*/

function leastCommonChar(string) {
  string = string.toLowerCase();
  let charCount = {};

  for (let idx = 0; idx < string.length; idx += 1) {
    if (charCount[string[idx]]) {
      charCount[string[idx]] += 1;
    } else {
      charCount[string[idx]] = 1;
    }
  }

  for (let key in charCount) {
    let charCountArray = Object.keys(charCount);
    if (charCountArray.length === 1) {
      return key;
    } else if (charCount[key] === 1) {
      return key;
    }
  }

  // Object.entries(charCount).sort((a,b) => {
  //     let valueOfA = Object.values(a)[0]
  //     let valueOfB = Object.values(b)[0]
  //     return valueOfA - valueOfB
  //   })

  //   console.log(charCount);
  //  return Object.keys(charCount)[0];
}

console.log(leastCommonChar("Hello World")); // "h"
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers")); // "t"
console.log(leastCommonChar("Mississippi")); // "m"
console.log(leastCommonChar("Happy birthday!")); // ' '
console.log(leastCommonChar("aaaaaAAAA")); // 'a'
