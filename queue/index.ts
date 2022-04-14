class Queue<T> {
  private items: Array<T>;
  public length: number;

  constructor(initial?: Array<T>) {
    this.items = initial ?? [];
  }

  /**
   *
   * @param element {T} -> element to add in the Queue
   */
  public enqueue(element: T) {
    this.items.push(element);
  }

  /**
   *
   * @returns The element to dequeue
   */
  public dequeue(): T {
    return this.items.shift();
  }

  /**
   *
   * @returns The first element
   */
  public front(): T {
    return this.items[0];
  }

  /**
   * Get the size of queue
   */
  public size(): number {
    return this.items.length;
  }
}

export default Queue;
