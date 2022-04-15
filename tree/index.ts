class BSTNode<T> {
  data: T;
  left: BSTNode<T>;
  right: BSTNode<T>;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST<T> {
  root: BSTNode<T>;

  constructor() {
    this.root = null;
  }

  public insert(data: T) {
    const newNode = new BSTNode(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (newNode.left === null) {
        newNode.left = newNode;
      } else {
        this.insertNode(newNode.left, newNode);
      }
    } else {
      if (newNode.right === null) {
        newNode.right = newNode;
      } else {
        this.insertNode(newNode.right, newNode);
      }
    }
  }

  public remove(data) {
    this.removeNode(this.root, data);
  }

  private removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      this.removeNode(node.left, data);
    } else if (data > node.data) {
      this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
    }
  }
}
