let arr1 = ["a", "b", "c"];
let arr2 = arr1.filter((letter, idx) => {
  return arr1.unshift(idx);
});
console.log(arr1);
console.log(arr2);

/*
This code logs:
[2, 1, 0, 'a', 'b', 'c']
['a', 'a', 'a'].

On line 2, the filter method is called on arr1, which initially is: ["a", "b", "c"]. In the filter's callback, arr1.unshift(idx) adds the current index at the beginning of arr1. We know that unshift is destructive. Therefore, on each iteration, when unshift is called, arr1 is mutated. This results in each original element being pushed back as new indices 0, 1, and 2 are prepended one by one to arr1 in its original memory reference, resulting in [2, 1, 0, 'a', 'b', 'c'].
Furthermore, the return value of unshift is the length of the mutated array. In this case, its return value is always greater than 0. In other words, it's a truthy value. Given the filter method performs selection based on the truthiness of the callback's return value, all iterations pass the filter selection criterion. Since filter applies the callback to arr1, the elements of which shift to the right with each iteration, each application of filter ends up being carried out on the element 'a', as its index keeps incrementing by 1, resulting in arr2 becoming ['a', 'a', 'a'].
*/
