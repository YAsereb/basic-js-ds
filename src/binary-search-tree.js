const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    if (this.rootNode === null) {
      return null
    }
    return this.rootNode;

  }

  add(data) {

    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {

      if (!node) {
        console.log(`add list: ${data}`);
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node;
    }

  }

  has(data) {

    return search(this.rootNode, data);

    function search(node, data) {

      if (!node) {
        console.log(false);

        return false

      } else if (data < node.data) {

        return search(node.left, data)

      } else if (data > node.data) {

        return search(node.right, data)

      } else {
        console.log(true);
        return true
      }
    }
  }

  find(data) {

    return findNode(this.rootNode, data);

    function findNode(node, data) {

      if (!node) {
        console.log(null);
        return null
      } else if (data < node.data) {
        return findNode(node.left, data)
      } else if (data > node.data) {
        return findNode(node.right, data)
      } else {

        return node
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

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
          node = node.left
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
    if (!this.rootNode) {
      return
    }
    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return
    }
    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};