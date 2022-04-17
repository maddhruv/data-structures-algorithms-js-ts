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

  public findMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  public findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  public isPresent(data: T) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}
