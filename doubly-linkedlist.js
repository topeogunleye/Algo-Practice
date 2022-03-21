//  Double Linked List

class LinkedList {
  constructor() {
    this.head = this.tail = null
  }

  // add to end of list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.previous = oldTail
    }
  }

  // add to beginning of list / head
  prepend() {

  }

  deleteHead() {

  }

  deleteTail() {

  }

  search() {

  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}