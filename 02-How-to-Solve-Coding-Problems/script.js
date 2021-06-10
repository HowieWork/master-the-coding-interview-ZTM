'use strict';
// NOTE Interview Qs 1: Contains Common Item
// 1.1 Key points
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// Should return false.
// ------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// Should return true.

// 1.2 Inputs/Outputs
// input: two params
// output: true/false

// 1.3 Naive/Brute force approach
// O(n^2)
function containCommonItem1(arr1, arr2) {
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        return true;
      }
    }
  }
  return false;
}
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
const result1 = containCommonItem1(array1, array2);
// console.log(result);

// 1.4 Better solution: O(m+n)
function containCommonItem2(arr1, arr2) {
  // Create an object using elements in array1 as properties
  const obj = {};
  for (let i of arr1) {
    if (!obj[i]) {
      obj[i] = true;
    }
  } // O(n)
  // Compare elements in array2 with properties
  for (let j of arr2) {
    if (obj[j]) {
      return obj[j];
    }
  } // O(m)
  return false;
} // O(m+n)
const result2 = containCommonItem2(array1, array2);
console.log(result2);
////////////////////////////////////////////////

// NOTE Interview Qs 2 *Google: Has Pair with Sum
