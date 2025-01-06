const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    const node = new Node(data);
    let cursor = null;

    if (this.tree === null) {
      this.tree = node;
    } else {
      cursor = this.tree;
      while (true) {
        if (data > cursor.data) {
          if (cursor.right === null) {
            cursor.right = node;
            return;
          }
          cursor = cursor.right;
        } else if (data < cursor.data) {
          if (cursor.left === null) {
            cursor.left = node;
            return;
          }
          cursor = cursor.left;
        } else {
          return;
        }
      }
    }
  }

  has(data) {
    let cursor = null;

    if (this.tree === null) {
      return false;
    } else {
      cursor = this.tree;
      while (true) {
        if (data > cursor.data) {
          if (cursor.right === null) {
            return false;
          }
          cursor = cursor.right;
        } else if (data < cursor.data) {
          if (cursor.left === null) {
            return false;
          }
          cursor = cursor.left;
        } else {
          return true;
        }
      }
    }
  }

  find(data) {
    let cursor = null;

    if (this.tree === null) {
      return null;
    } else {
      cursor = this.tree;
      while (true) {
        if (data > cursor.data) {
          if (cursor.right === null) {
            return null;
          }
          cursor = cursor.right;
        } else if (data < cursor.data) {
          if (cursor.left === null) {
            return null;
          }
          cursor = cursor.left;
        } else {
          return cursor;
        }
      }
    }
  }

  remove(data) {
    if (this.tree === null) {
      return false;
    }

    let cursor = this.tree;
    let parent = this.tree;
    let removedNode = null;

    cursor = this.tree;
    while (true) {
      if (data > cursor.data) {
        if (cursor.right === null) {
          break;
        }
        parent = cursor;
        cursor = cursor.right;
      } else if (data < cursor.data) {
        if (cursor.left === null) {
          break;
        }
        parent = cursor;
        cursor = cursor.left;
      } else {
        removedNode = cursor;
        break;
      }
    }

    if (cursor.left === null && cursor.right === null) {
      if (parent.left === cursor) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (cursor.left === null) {
      if (parent.left === cursor) {
        parent.left = cursor.right;
      } else {
        parent.right = cursor.right;
      }
    } else if (cursor.right === null) {
      if (parent.left === cursor) {
        parent.left = cursor.left;
      } else {
        parent.right = cursor.left;
      }
    } else {
      let minParent = cursor;
      let minNode = cursor.right;

      while (minNode.left !== null) {
        minParent = minNode;
        minNode = minNode.left;
      }

      cursor.data = minNode.data;

      if (minParent.left === minNode) {
        minParent.left = minNode.right;
      } else {
        minParent.right = minNode.right;
      }
    }
  }

  min() {
    let cursor = null;
    let min = null;

    if (this.tree === null) {
      return null;
    } else {
      cursor = this.tree;
      min = cursor.data;
      while (true) {
        if (cursor.left !== null) {
          min = cursor.left.data;
          cursor = cursor.left;
        } else {
          return min;
        }
      }
    }
  }

  max() {
    let cursor = null;
    let min = null;

    if (this.tree === null) {
      return null;
    } else {
      cursor = this.tree;
      min = cursor.data;
      while (true) {
        if (cursor.right !== null) {
          min = cursor.right.data;
          cursor = cursor.right;
        } else {
          return min;
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
