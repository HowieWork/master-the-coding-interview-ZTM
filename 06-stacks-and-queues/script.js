'use strict';

// NOTE 1. Stacks and Queues are both Linear Data Structures.

// 1.1 Stacks
// (1) LIFO
// (2) O
// lookup O(n)
// pop O(1)
// push O(1)
// peek O(1) // what is the first item come up?

// 1.2 Queues
// (1) FIFO
// (2) O
// lookup O(n)
// enqueue O(1)
// dequeue O(1) // dequeue the first item
// peek O(1) // what is the first item come up?
////////////////////////////////////////

// NOTE 2. Build Stacks and Queues *use Array or Linked Lists?
// Stacks --> Array / Linked Lists
// Queues --> Linked Lists

// 2.1 Implement Stack
// (1) Using Linked Lists
/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = this.bottom;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.length === 1) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}
*/

// (2) Using Arrays
class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  peek() {
    return this.array[this.length - 1];
  }
  push(value) {
    this.array.push(value);
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return null;
    this.array.pop();
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

// const myStack = new Stack();

//Testing data:
//Discord
//Udemy
//Google

// console.log(myStack.push('Google'));
// console.log(myStack.push('Udemy'));
// console.log(myStack.push('Discord'));
// console.log(myStack.pop());
// console.log(myStack.peek());

// 2.2 Implement Queues
// Using Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const myQueue = new Queue();

//Joy
//Monty
//Dennis
//Howie

myQueue.enqueue('Joy');
myQueue.enqueue('Monty');
myQueue.enqueue('Dennis');
myQueue.enqueue('Howie');
console.log(myQueue);
console.log(myQueue.dequeue());
