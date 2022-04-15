/**
 * @ref https://miro.medium.com/max/1400/1*M8OI5w8cS4idbtYyr-iNag.png
 */
class LinkNode<T> {
  data: T;
  prev: LinkNode<T>;
  next: LinkNode<T>;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: LinkNode<T>;
  tail: LinkNode<T>;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public add(element: T) {
    const link = new LinkNode(element);

    this.size++;

    if (this.tail) {
      this.tail.next = link;
      link.prev = this.tail;
      this.tail = link;
      return this.tail;
    }
    this.head = this.tail = link;
    return this.tail;
  }

  public remove(index: number) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      this.head.prev = null;
      this.size--;
      return current;
    }

    if (index >= this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
      return this.tail;
    }

    let iterator = 0;

    while (iterator < index) {
      iterator++;

      current = current.next;
    }

    current.next = current.next.next;
    current.next.prev = current;

    this.size--;
    return current;
  }

  print() {
    let output = ``,
      current = this.head;

    while (current) {
      output += `${current.data} <=> `;
      current = current.next;
    }

    console.log(output);
  }
}

// Test
const dll = new DoublyLinkedList();

dll.add(1);
dll.add(3);
dll.add(2);
dll.remove(1);
dll.print();
