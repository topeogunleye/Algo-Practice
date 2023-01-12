class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let new_node = {
      value: value,
      next: null
    }

    this.tail.next = new_node
    this.tail = new_node
    this.length++;
    return this
  }

  prepend(value) {
    let new_node = {
      value: value,
      next: this.head
    }

    this.head = new_node
    this.length++
    return this
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList)