let num = 5;

function myFunc(num) {
  // console.log("func", num);
  num = 10;
  // console.log("after func", num);
}

myFunc(num);
console.log(num);
console.log("func ret", myFunc(num));
