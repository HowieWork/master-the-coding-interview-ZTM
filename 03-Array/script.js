'use strict';
// NOTE 1. Array

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

strings[2]; // O(1)
// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// shift
strings.shift(); // O(n)

// splice
strings.splice(2, 0, 'alien'); // O(n)
//////////////////////////////////////////

// NOTE 2. Two types of Array
// 1. Static
// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

// 2. Dynamic
// lookup O(1)
// append* O(1)
// insert O(n)
// delete O(n)
// *can be O(n) on expanding memory
//////////////////////////////////////////

// NOTE 3. Implementing Array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deleteItem = this.data[index];
    this.shiftItems(index);
    return deleteItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(0);
// newArray.delete(1);
// newArray.push('are');
// newArray.push('nice');
// console.log(newArray);
//////////////////////////////////////////

// NOTE 4. Strings and Arrays *common interview question
// String question? Turn it into an Array *String.prototype.split()
// Interview Q: Create a function that reverses a string:
// 'Hi My name is' --> 'si eman yM iH'
function reverseString(str) {
  // IMPORTANT Check input: is there an input?; typeof === 'string'; string.length > 1
  if (!str || typeof str === 'string' || str.length < 2)
    return 'Please provide the correct input.';

  // Convert string to array
  const arr = str.split('');

  // Reverse the array
  const reversedArr = arr.reverse();

  // Convert reversed array to string and return
  const reversedStr = reversedArr.join('');
  return reversedStr;
}
const strExample = 'Hi My name is';
reverseString(strExample);

// *Optional solution
function reverseString2(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
//////////////////////////////////////////

// NOTE 5. Interview Q: Merge sorted arrays
// Given two sorted arrays, create a function to merge them and return one sorted array
// Example: [0,3,4,31], [4,6,30] --> [0,3,4,4,6,30,31]
function mergeSortedArrays(arr1, arr2) {
  // Check input
  // Combine two arrays into one array
  const mergedArray = arr1.concat(arr2);
  // Sort combined array and return sorted array
  const length = mergedArray.length;
  for (let i = 0; i < length - 1; i++) {
    if (mergedArray[i] > mergedArray[i + 1]) {
      let temp = mergedArray[i];
      mergedArray[i] = mergedArray[i + 1];
      mergedArray[i + 1] = temp;
    }
  }
  return mergedArray;
}

//////////////////////////////////////////

// NOTE 6. MORE Array interview questions
// Leetcode
// 6.1 Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// input: numArray, target
// output: [index, index]

// Bad solution: O(n^2)
const twoSum1 = function (nums, target) {
  // check input: existing? ; typeof; length>1

  // check all pairs possibility and compare with target
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (j !== i) {
        // if there is a match, then return index
        if (nums[i] + nums[j] === target) {
          console.log([i, j]);
          return [i, j];
        }
      }
    }
  }
};
// twoSum1([2, 7, 11, 15], 9);
// twoSum1([3, 2, 4], 6);
// twoSum1([3, 3], 6);

// Better solution: O(n)
const twoSum2 = function (nums, target) {
  // complements
  const complements = {};
  for (let i = 0; i < nums.length; i++) {
    if (complements[nums[i]] >= 0) {
      return [complements[nums[i]], i];
    }
    complements[target - nums[i]] = i;
  }
};
twoSum2([2, 7, 11, 15], 9);
twoSum2([3, 2, 4], 6);
twoSum2([3, 3], 6);

//////////////////////////////////////////

// NOTE 7. When to use Array?
// Pros:
// (1) Fast lookups
// (2) Fast push/pop
// (3) Ordered

// Cons:
// (1) Slow inserts
// (2) Slow deletes
// (3) Fixed size * if using static array
