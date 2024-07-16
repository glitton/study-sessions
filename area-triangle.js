//Heron's formula A = √[s(s-a)(s-b)(s-c)]
// s = (a + b + c)/2

let side1 = 5;
let side2 = 6;
let side3 = 7;
//Calculate semiperimeter
let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area.toFixed(2));
