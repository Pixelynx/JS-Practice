class Stack {
  constructor() {
    let arr = [];
  }

  push(something) {
    arr.push(something);
  }

  pop() {
    return arr.pop();
  }

  peek() {
    let lastItem = arr[arr.length - 1];
    return lastItem;
  }

  isEmpty() {
    return arr[arr.length] === 0;
  }

}


class Queue {
  constuctor() {
    let arr = [];
  }

  enqueue(something) {
    return arr.push(something);
  }

  dequeue() {
    return arr.shift()
  }

  peek() {
    let firstItem = arr[0];
    return firstItem;
  }

  isEmpty() {
    return arr.length === 0;
  }
}
