class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
      this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key);
    // if this could be a collision, we need to check if the address is already taken
    // if there is nothing in this address space, set the address to an array, and 
    // push the key and value into the array
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // if the key matches the key in the bucket, return the value
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    const keysArray = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0])
          }
        } else {
          keysArray.push(this.data[i][0])
        }
      }
  }
  return keysArray
}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');
console.log(myHashTable.keys());