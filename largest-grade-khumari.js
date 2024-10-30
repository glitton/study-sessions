/*
A:
- Combine all grades arrays in the first input array
- find the maximum value, return the id, which has the maximum number in its grades array
---------------
1. Get the array of `uniqueGrades` and `nthMaxGrade`
2. Initialize studentId to null
3. If the length of students array < than `n` OR `n` is >= 5:
  - Return studentId

4. Iterate over the input students array
 - If the grades for the current student includes `nthMaxGrade`:
   - If studentId is null OR curernt id is lower than studentId:
     - Update studentId to the current id

4. Return studentId
----------------------
Func: getUniqueGrades(arr, nth)
In: an array of numbers and a number
Out: an array of two elements; arr and a number
-------------------
0. Initialize an empty array called result

1. Iterate over the input arr
  - Get the array of grades as a list of numbers
  - Append it to result
2. Initialize uniqueGrades to the unique numbers in result
3. Return an array of two elementns; [uniqueGrades, nth grade]
-------------------
*/

function getUniqueGrades(arr, n) {
  let result = [];

  for (let student of arr) {
    result.push(...student.grades);
  }

  let uniqueGrades = [...new Set(result)];
  return [uniqueGrades, uniqueGrades[n - 1]];
}

function nthLargestGrade(students, n) {
  let [uniqueGrades, nthGrade] = getUniqueGrades(students, n);

  let studentId = null;
  if (uniqueGrades.length <= n || n >= 5) {
    return studentId;
  }

  for (const student of students) {
    if (student.grades.includes(nthGrade)) {
      if (studentId === null || student.id < studentId) {
        studentId = student.id;
      }
    }
  }

  return studentId;
}

const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] },
];

// console.log(nthLargestGrade(students, 1)); // Output: 1
// console.log(nthLargestGrade(students, 2)); // Output: 2
// console.log(nthLargestGrade(students, 3)); // Output: 2
// console.log(nthLargestGrade(students, 4)); // Output: 1
// console.log(nthLargestGrade(students, 5)); // Output: null
// console.log(nthLargestGrade(students, 10)); // Output: null

console.log(getUniqueGrades(students, 4));
