// function messWithVars(one, two, three) {
//   one = two; //["two"]
//   two = three; //["three"]
//   three = one; //["one"]
// }

// let one = ["one"] ;
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

//Reassignment has no effect due to variable shadowing
// console.log(`one is: ${one}`); //one
// console.log(`two is: ${two}`); //two
// console.log(`three is: ${three}`); //three

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);
/*Variable shadowing and function reassigns one two three to brand 
new arrays
*/
// console.log(`one is: ${one}`); //one
// console.log(`two is: ${two}`); //two
// console.log(`three is: ${three}`); //three

function messWithVars(one, two, three) {
  //splice(0,1) replaces 1 element at index 0
  one.splice(0, 1, "two"); //["two"];
  two.splice(0, 1, "three"); //["three"]
  three.splice(0, 1, "one"); //["one"]
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
//Variable shadowing but splice is a destructive method and mutates the
//arrays
console.log(`one is: ${one}`); //one
console.log(`two is: ${two}`); //two
console.log(`three is: ${three}`); //three
