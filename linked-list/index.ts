class Link<T> {
  element: T;
  next: Link<T>;

  constructor(node: T) {
    this.element = node;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Link<T>;
  public size: number;

  constructor() {
    this.head = null;
  }

  public add(element: T) {
    const link = new Link(element);

    if (this.head === null) {
      this.head = link;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = link;
    }
    this.size++;
  }

  public insert(element: T, index: number) {
    const link = new Link(element);

    if (index === 0) {
      link.next = this.head;
      this.head = link;
    } else {
      let current: Link<T> = this.head,
        prev: Link<T>;

      let iterator = 0;

      while (iterator < index) {
        iterator++;
        prev = current;
        current = current.next;
      }

      link.next = current;
      prev.next = link;
    }
    this.size++;
  }
}
