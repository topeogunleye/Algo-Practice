class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value)

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this
  }

  prepend(value) {
    let newNode = new Node(value)
  
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;   
    this.length++
    return this
  }

  insert(index, value) {

    if (index >= this.length) {
      return this.append(value)
    }
    
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value)

    const leader = this.traverseToIndex(index-1)
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++
    return this.printList();
  }

  remove(index) {
    // check params
    const leader = this.traverseToIndex(index-1)
  }

  traverseToIndex(index) {
  // check params
  let counter = 0;
  let currentNode = this.head;
  while (counter !== index) {
    currentNode = currentNode.next;
    counter++
  }
  return currentNode
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
}


const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(1)
console.log(myDoubleLinkedList.prepend(2))
console.log(myDoubleLinkedList.printList())