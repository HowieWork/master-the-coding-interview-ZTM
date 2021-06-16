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
//////////////////////////////////////////////////////////////////////////////

// NOTE 2. Build Stacks and Queues *use Array or Linked Lists?
// Stacks --> Array / Linked Lists
// Queues --> Linked Lists
//////////////////////////////////////////////////////////////////////////////

// NOTE 3. Implement Stack
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
    const popedItem = this.array.pop();
    this.length--;
    return popedItem;
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
//////////////////////////////////////////////////////////////////////////////

// NOTE 4. Implement Queues
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

// const myQueue = new Queue();

//Joy
//Monty
//Dennis
//Howie

// myQueue.enqueue('Joy');
// myQueue.enqueue('Monty');
// myQueue.enqueue('Dennis');
// myQueue.enqueue('Howie');
// console.log(myQueue);
// console.log(myQueue.dequeue());
//////////////////////////////////////////////////////////////////////////////

// NOTE 5. Implement Queues using Stacks *leetCode
/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

-- void push(int x) Pushes element x to the back of the queue.
-- int pop() Removes the element from the front of the queue and returns it.
-- int peek() Returns the element at the front of the queue.
-- boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
*/

// class Stack using Array
class QueueUsingStack {
  constructor() {
    // stack1
    this.stack1 = new Stack();
    // stack2
    this.stack2 = new Stack();
    this.length = 0;
  }
  peek() {
    if (this.length === 0) return null;
    return this.stack1.array[0];
  }
  enqueue(value) {
    this.stack1.push(value);
    this.length++;
    return this.stack1;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.length--;
      return this.stack1[0];
    }

    let counter = 0;

    while (counter < this.length) {
      const popedItem = this.stack1.pop();
      this.stack2.push(popedItem);
      counter++;
    }

    const result = this.stack2.pop();
    this.length--;

    while (counter > 1) {
      this.stack1.push(this.stack2.pop());
      counter--;
    }

    return result;
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

// const myQueueUsingStack = new QueueUsingStack();
// myQueueUsingStack.enqueue('Joy');
// myQueueUsingStack.enqueue('Monty');
// myQueueUsingStack.enqueue('Dennis');
// myQueueUsingStack.enqueue('Howie');
// console.log(myQueueUsingStack.peek());
// console.log(myQueueUsingStack.dequeue());
// console.log(myQueueUsingStack);
//////////////////////////////////////////////////////////////////////////////
// Answer: Creating Queues using Stacks
/*
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
*/
