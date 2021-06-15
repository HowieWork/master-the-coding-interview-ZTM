'use strict';
// NOTE 1. JavaScript does NOT come with built-in Linked List
const basket = ['apples', 'grapes', 'pears'];

/*
linked list: apples --> grapes --> pears

(head)
apples
8974   -->   grapes         (tail)
             8742    -->    pears
                            372    -->   null *null terminator
*/

/////////////////////////////////////////////////////////////////

// NOTE 2. Why Linked Lists?
// 2.1 vs. Array: items in Array are indexed; traversal in Linked Lists
// 2.2 O
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)
/////////////////////////////////////////////////////////////////

// NOTE 3. What is a pointer?
// Simply a reference
const obj1 = { a: true };
const obj2 = obj1; // create a pointer
/////////////////////////////////////////////////////////////////

// NOTE 4. Create Linked Lists *Singly Linked Lists
// 10 --> 5 --> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
/////////////////////////////////////////////////////////////////
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList2 {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

// printList() {
//   const arr = [];
//   let currentNode = this.head;
//   while (currentNode !== null) {
//     arr.push(currentNode.value);
//     // BUG currentNode --> currentNode.next
//     // currentNode = this.head.next;
//     currentNode = currentNode.next;
//   }
//   return arr;
// }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }

// const myLinkedList2 = new LinkedList2(10);
// myLinkedList2.append(5);
// myLinkedList2.append(16);
// myLinkedList2.prepend(1);
// console.log(myLinkedList2);
// console.log(myLinkedList2.printList());
/////////////////////////////////////////////////////////////////

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // Check params
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = {
      value: value,
      next: null,
    };
    const nodeBefore = this.traverseToIndex(index - 1);
    const nodeAfter = nodeBefore.next;
    nodeBefore.next = newNode;
    newNode.next = nodeAfter;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // Check params
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length - 1) {
      this.tail = this.traverseToIndex(this.length - 2);
      this.tail.next = null;
      this.length--;
      return this.printList();
    }

    const nodeBefore = this.traverseToIndex(index - 1);
    const nodeAfter = this.traverseToIndex(index + 1);
    nodeBefore.next = nodeAfter;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(4, 99);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.length, myLinkedList.remove(4));
// console.log(myLinkedList.length);
/////////////////////////////////////////////////////////////////

// NOTE 5. Doubly Linked Lists
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)
/////////////////////////////////////////////////////////////////

// NOTE 6. Create Doubly Linked Lists
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      before: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      before: null,
    };
    newNode.before = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      before: null,
    };
    this.head.before = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // Check params
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = {
      value: value,
      next: null,
      before: null,
    };
    const beforeNode = this.traverseToIndex(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.before = beforeNode;
    newNode.next = afterNode;
    afterNode.before = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // Check params
    if (index === 0) {
    }
    if (index >= this.length) {
    }

    const beforeNode = this.traverseToIndex(index - 1);
    const afterNode = this.traverseToIndex(index + 1);
    beforeNode.next = afterNode;
    afterNode.before = beforeNode;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.append(15);
console.log(myDoublyLinkedList.printList());
myDoublyLinkedList.prepend(5);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.insert(2, 12));
console.log(myDoublyLinkedList.reverse());
console.log(myDoublyLinkedList.remove(2));
