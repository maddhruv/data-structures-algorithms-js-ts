import Queue from ".";

class Stack<T> {
  private queue: Queue<T>;
  constructor() {
    this.queue = new Queue<T>();
  }

  public push(element: T) {
    this.queue.enqueue(element);

    const queueLength = this.queue.size();

    for (let i = 0; i < queueLength; i++) {
      this.queue.enqueue(this.queue.dequeue());
    }
  }

  public pop(): T {
    return this.queue.dequeue();
  }

  public size(): number {
    return this.queue.size();
  }
}
