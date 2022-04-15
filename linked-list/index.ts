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
      let current = this.head,
        prev;

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

  public remove(index: number) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let prev,
        iterator = 0;

      while (iterator < 0) {
        iterator++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this.size--;
    return current.element;
  }

  public removeElement(element: T) {
    let current = this.head,
      prev;

    while (current !== null) {
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }

      prev = current;
      current = current.next;
    }
    return -1;
  }

  public indexOf(element: T) {
    let current = this.head,
      count = 0;

    while (current !== null) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }

    return -1;
  }

  public print() {
    let current = this.head;
    let output = ``;

    while (current !== null) {
      output += `${current.element} -> `;
      current = current.next;
    }

    console.log(output);
  }
}

// Test
const l = new LinkedList();

l.add(1);
l.print();

l.add(3);
l.add(4);

l.print();
l.insert(2, 1);

l.print();
l.insert(5, 2);

l.removeElement(5);
l.print();
console.log(l.indexOf(4));
