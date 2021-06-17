'use strict';
// NOTE 1. Tree --> Linked Lists
// 1.1 Singly Linked Lists
// 1.2 Doubly Linked Lists
/////////////////////////////////////////

// NOTE 2. Tree --> Binary Tree

// 2.1 Perfect Binary Tree
// Level 0: 2^0 = 1; *number of nodes each level
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;
// ...
// IMPORTANT # of nodes = 2^h - 1;
// --(simplified)--> log nodes = height

// 2.2 Full Binary Tree
/////////////////////////////////////////

// NOTE 3. Biary Tree --> Binary Search Tree *BST
// 3.1 Big O
// lookup O(logN)
// insert O(logN)
// delete O(logN)

// 3.2 Balanced vs. Unbalanced BST
// IMPORTANT Why is an unbalanced BST bad? *Time Complexity --> O(n)

// 3.3 Ways to Balanced BST: AVL Tree; Red Black Tree

// 3.4 Summary
// Pros: Better than O(n); Ordered; Flexible Size
// Cons: No O(1) operations

/////////////////////////////////////////

// NOTE 4. Build BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return null;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  // REMOVE is NOT important for interviews
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(171));
//      9
//  4      20
//1   6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
/////////////////////////////////////////

// NOTE 5. AVL Tree & Red Black Tree
// Refer to course resource

/////////////////////////////////////////

// NOTE 6. Heap --> Binary Heap
// 6.1 Big O
// lookup O(n)
// insert O(log N)
// delete O(log N)
// *Priority Queue

// 6.2 Binary Heaps
// (1) Pros:
// Better than O(n)
// Priority
// Flexible Size
// Fast Insert
// (2) Cons:
// Slow lookup
/////////////////////////////////////////

// NOTE 7. Trie
// O(length of the word)
/////////////////////////////////////////
