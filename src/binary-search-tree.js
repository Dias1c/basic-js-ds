const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  /**
   * @type {Node}
   */
  head = null;

  root() {
    return this.head;
  }

  add(data) {
    let n = new Node(data);

    if (this.head == null) {
      this.head = n;
      return;
    }

    let added = false;
    let parent = this.head;
    while (!added) {
      if (parent.data < data) {
        if (parent.left == null) {
          parent.left = n;
          return;
        }
        parent = parent.left;
      }

      if (parent.data > data) {
        if (parent.right == null) {
          parent.right = n;
          return;
        }
        parent = parent.right;
      }
    }
  }

  has(data) {
    let parent = this.head;

    while (parent != null) {
      if (parent.value === data) {
        return true;
      }

      if (data < parent.data) {
        parent = parent.left;
      }

      if (parent.data < data) {
        parent = parent.right;
      }
    }
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
