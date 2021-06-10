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

// 1.5 Testing
////////////////////////////////////////////////

// NOTE Interview Qs 2 *Google: Has Pair with Sum
// 2.1 Key points
// Given an ascend-order array, find pair matching with given sum
// Example 1: [1,2,3,9] Sum=8
// Example 2: [1,2,4,4] Sum=8

// 2.2 Inputs/Outputs
// input: array
// output: true/false

// 2.3 Bad solution
// O(n^2)
function hasPairWithSum1(arr, sum) {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === sum) return true;
    }
  }
  return false;
}

// 2.4 Better solution
function hasPairWithSum2(arr, sum) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let currentSum = arr[low] + arr[high];
    if (currentSum === sum) return true;
    low++;
  }
  return false;
} // O(n)

// 2.5 Testing
// const result = hasPairWithSum2([1, 2, 4, 4], 8);
// const result = hasPairWithSum2([1, -2, 3, 0, 5], 0);
// console.log(result);

// 2.6 Further challenge: What if the given array is not sorted?
function hasPairWithSum3(arr, sum) {
  // Create a Set object with complements
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return true;
    mySet.add(sum - arr[i]);
  }
  return false;
}
// 2.7 Further Testing
// const result = hasPairWithSum3([1, 2, 4, 4], 8);
// console.log(result);
