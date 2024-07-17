let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

/*
Variables: 6
-arr in line 1
- newArr in line 2
- num in line 4
- newNum in line 5
- double function in line 7
- num function parameter in line 7

Primitive Values: 9
- three integers in arr, 1, 2, 3 => 3
- value of num at arr[0], which is 1 => 1
- index number 0 in line 4 => 1
- value of newNum => 1
- integer 2 in line 8 => 1
- newNum argument => 1
- return value of the function => 1

Objects: 2
- arr in line 1
- newArr in line 2

*/
