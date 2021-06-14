'use strict';
// Ex.1 Implement a Hash Table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1) hash function really fast even loop considered as O(1)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    if (this.data[address]) {
      for (let item of this.data[address]) {
        if (item[0] === key) return item[1];
      }
    } // O(1) *O(n) if collision
    return undefined;
  }

  keys() {
    if (!this.data.length) return undefined;

    const keysArray = [];
    for (let i of this.data) {
      if (i) {
        for (let j of i) {
          keysArray.push(j[0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 20000);
myHashTable.set('banana', 30000);
// console.log(myHashTable.keys());

// IMPORTANT Time complexity: O(1) * NO COLLISION
// Hash Tables
// search O(1)
// insert O(1)
// lookup O(1)
// delete O(1)
// con: NO ORDER!!!
////////////////////////////////////////////////////////////
// NOTE Interview Q * Google : First Recurring Character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Input (array of numbers) --> Output (first recurring char)

function firstRecurringCharacter(input) {
  // 1. Input validation
  // *Check if input is empty array (and some other...)
  if (!input.length) return undefined;

  // 2. Loop input
  // Add all items as separate keys along with a initial value 1 if doesn't exist
  // Add 1 to value if exists
  // 2.1 Declare keysObj
  const keysObj = {};
  // 2.2 Loop input
  for (let i of input) {
    if (keysObj[i]) {
      return i;
    } else {
      keysObj[i] = true;
    }
  }
} // O(n)
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
////////////////////////////////////////////////////////////
