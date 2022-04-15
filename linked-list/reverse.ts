class LinkNode2<T> {
  element: T;
  next: LinkNode2<T>;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

function reverse(node) {
  let current = node,
    prev = null,
    next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function printLL(node) {
  let output = ``;

  while (node !== null) {
    output += `${node.element} -> `;
    node = node.next;
  }

  console.log(output);
}

const head = new LinkNode2(1);
head.next = new LinkNode2(2);
head.next.next = new LinkNode2(3);

printLL(head);

const reversed = reverse(head);

printLL(reversed);
