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

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.delete(1);
newArray.push('are');
newArray.push('nice');
console.log(newArray);
//////////////////////////////////////////

// NOTE 4. Strings and Arrays *common interview question
// String question? Turn it into an Array *String.prototype.split()
