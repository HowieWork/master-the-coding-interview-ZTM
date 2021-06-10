'use strict';
//////////////////////////////////////////////////////////////

// NOTE 1. What is good code?
// 1.1 Readable
// 1.2 Scalable
// (1) Speed: Time Complexity
// (2) Memory: Space Complexity
//////////////////////////////////////////////////////////////

// NOTE 2. Big O Cheat Sheet (How efficiently we can run the code)
/*
2.1 -Big Os-
O(1) Constant- no loops

O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) O(n) Linear- for loops, while loops through n items

O(n log(n)) Log Liniear- usually sorting operations

O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops

O(2^n) Exponential- recursive algorithms that solves a problem of size N

O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n) 
Two separate collections: O(a * b)

2.2 -What can cause time in a function?-
Operations (+, -, *, /) Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

2.3 -Rule Book-
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

2.4 -What causes Space complexity?-
(1) Variables
(2) Data Structures 
(3) Function Call 
(4) Allocations
*/
//////////////////////////////////////////////////////////////

// NOTE 3. Linear Time & Constant Time
// O(n)--> Linear Time
// O(1)--> Constant Time
const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(1000).fill('nemo');

function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  // let t1 = performance.now();
  // console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

// findNemo(large); // O(n) --> Linear Time
// O(1) --> Constant Time
//////////////////////////////////////////////////////////////

// Ex.1 Big O Calculation
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n) *for loop
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// Answer: BIG O(3 + 4n) -- (simplified) --> BIG O(n)
//////////////////////////////////////////////////////////////

// Ex.2 Big O Calculation 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  // O(n)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  // O(n)
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Answer: BIG O(4 + 7n) -- (simplified) --> BIG O(n)
//////////////////////////////////////////////////////////////

// NOTE 4. Rule Book
// 4.1 Rule 1: Worst Case

// 4.2 Rule 2: Remove Constants
function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes2);
  });
}
// O(2n) -- (drop Constants) --> O(n)

// 4.3 Rule 3: Different terms for inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (box) {
    console.log(box);
  });

  boxes2.forEach(function (box) {
    console.log(box);
  });
}
// O(m + n)

// 4.4 Rule 4: Drop Non Dominants
// Log all pairs of array *Interview Question
const nums = [1, 2, 3, 4, 5];
function logAllPairs(arr) {
  arr.forEach(i => {
    arr.forEach(j => {
      console.log(i, j);
    });
  });
}
// logAllPairs(nums);
// O(n * n) --> O(n^2) - Quadratic Time

function printAllNumThenAllPairSums(nums) {
  console.log('These are the numbers: ');
  nums.forEach(num => {
    console.log(num);
  });

  console.log('and these are their sums:');
  nums.forEach(firstNum => {
    nums.forEach(secondNum => {
      console.log(firstNum + secondNum);
    });
  });
}

// printAllNumThenAllPairSums(nums);
// O(n+n^2) -- (drop non-dominants) --> O(n^2) *n to the power of 2
//////////////////////////////////////////////////////////////

// NOTE 5. Space Complexity
// What causes Space complexity?
// (1) Variables
// (2) Data Structures
// (3) Function Call
// (4) Allocations
function boo(n) {
  // Create a new Variable
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
}
// boo([1, 2, 3, 4, 5]); // O(1)

function arrayOfHiNTimes(n) {
  // Create a new Data Structure: O(n)
  let hiArray = [];
  // Create a new Variable: O(1)
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}
arrayOfHiNTimes(6); // O(n)
//////////////////////////////////////////////////////////////

// NOTE 6. Exercise: Twitter
// BIG O will be different based on different languages
'jkdljfljfdhkldjsljl'.length; // O(1) in JavaScript because length is a property in Array
