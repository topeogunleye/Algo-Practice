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
      next: null
    }

    new_node.next = this.head
    this.head = new_node
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array)
    return array
  }

  insert(index, value) {

    if (index >= this.length) {
      return this.append(value)
    }
    
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index === this.length - 1) {
      this.append(value)
      return this.printList();
    }

    const newNode = {
      value: value,
      next: null
    }

    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
    // console.log(leader)
  }

  remove(index) {
    const leader = this.traverseToIndex(index-1)
    const pointTO = this.traverseToIndex(index+1)
    leader.next = pointTO;
    this.length--
    return this.printList()
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

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2,99)
myLinkedList.remove(2)
console.log(myLinkedList)