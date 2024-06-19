// let color = "purple";
// let colors = ["red", "green", "blue"];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// console.log(newColors);
// console.log("colors array", colors);
// addColor(colors, color);
// console.log(newColors);

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word); //Hello
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim(word) {
//   return (word += "!!!");
// }

// let word = "hello";
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);
