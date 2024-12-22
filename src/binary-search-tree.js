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
      if (data < parent.data) {
        if (parent.left == null) {
          parent.left = n;
          return;
        }
        parent = parent.left;
        continue;
      }

      if (parent.data < data) {
        if (parent.right == null) {
          parent.right = n;
          return;
        }
        parent = parent.right;
        continue;
      }
    }
  }

  has(data) {
    let parent = this.head;

    while (parent != null) {
      if (parent.data === data) {
        return true;
      }

      if (data < parent.data) {
        parent = parent.left;
        continue;
      }

      if (parent.data < data) {
        parent = parent.right;
        continue;
      }
    }

    return false;
  }

  find(data) {
    let parent = this.head;

    while (parent != null) {
      if (parent.data === data) {
        return parent;
      }

      if (data < parent.data) {
        parent = parent.left;
        continue;
      }

      if (parent.data < data) {
        parent = parent.right;
        continue;
      }
    }

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let parent = this.head;
    while (true) {
      if (parent?.left == null) {
        return parent.data;
      }
      parent = parent.left;
    }
  }

  max() {
    let parent = this.head;
    while (true) {
      if (parent?.right == null) {
        return parent.data;
      }
      parent = parent.right;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
