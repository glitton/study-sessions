let array = [{ name: "henry", hair: true }, ["abc", "def"]];
let numArray = [1, 2, 3, 4, 5, 6];
let henry = array[0];

// let concat1 = numArray.concat([7, [2]]); // [1, 2, 3, 4, 5, 6, 7, [2]]
// let pop = numArray.pop(); //6
// let push = numArray.push(pop);// returns the new length, 6
// let push2 = numArray.push(push);
// let shift = numArray.shift(); // removed 1
// let unshift = numArray.unshift(0, shift); // logs the new length, 7
// let concat2 = numArray.concat('end'); // [1, 2, 3, 4, 5, 6, 'end'];
// function isInteger(num) {
//   return Number.isInteger(num);
// }

// let every = numArray.every(Number.isInteger);

// let callback = num => num > 5
// let some = numArray.some(callback); //
// let fill = array.fill(0,1,2); //
// let filter = numArray.filter(elem => elem % 2 === 0);
// let find = array.find(elem => Array.isArray(elem)); // ['abc', 'def']
// let findIndex = array.findIndex(elem => Array.isArray(elem)); //

// let forEach = numArray.forEach((num, idx) => num + idx); //
// let includes = array.includes(henry);
// let indexOf = array.indexOf(1); //
// let join = numArray.join(); '1,2,3,4,5,6'
// let map = numArray.map((num, idx) => num + idx);// [1, 3, 5, 7, 9, 11 ]
// let slice = numArray.slice(2, 5); // [3, 4, 5]

// console.log(numArray.length + -1);

// let splice = numArray.splice(4, 1, undefined, "yo"); //[5]
// console.log(numArray);
// let sort1 = numArray.sort();
// let sort2 = numArray.filter(Number.isInteger).sort((a, b) => a - b);
// let sort3 = numArray.filter(Number.isInteger).sort((a, b) => b - a);
let sort4 = numArray.filter(Number.isInteger).sort((a, b) => 0);

console.log({
  // concat1,
  // pop,
  // push,
  // push2,
  // shift,
  //unshift,
  // concat2,
  // every,
  // some,
  // fill,
  // filter,
  // find,
  // findIndex,
  // forEach,
  // includes,
  // indexOf,
  // join,
  // map,
  // slice,
  // splice,
  // sort1,
  // sort2,
  // sort3,
  // sort4,
});
