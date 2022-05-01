const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = root;
  }

  root() {
    console.log(this.root.data);
    return this.root.data
  }

  add(data) {

    this.root = addWithin(this.root, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      }

      if (data > node.right) {
        node.right = addWithin(node.right, data)
      }
      return node;
    }

  }

  has(data) {

    return search(this.root, data);

    function search(node, data) {
      if (!node) {
        return false
      }
      if (data === node.data) {
        return true
      }
      if (data < node.data) {
        search(node.left, data);
      } else {
        search(node.right, data);
      }
    }
  }

  find(data) {

    return findNode(this.root, data);

    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        findNode(node.left, data)
      }
      if (data < node.data) {
        findNode(node.right, data)
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right;
          return node
        }

        if (!node.right) {
          node = node.right
          return node
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return
    }
    let node = this.root;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return
    }
    let node = this.root;

    while (node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};