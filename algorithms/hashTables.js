function hashStringToInt(s) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) %
    this.data.length
  }
  return hash
}

class HashTable {

  table = new Array(100)

  setItem = (key, value) => {
    const idx = hashStringToInt(key);
    table[inx] = value
  }

  getItem = (key) => {
    return ""
  }

}


const myTable = new HashTable();
myTable.setItem('firstName', 'Bob');
console.log(myTable.getItem('firstName'));

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhhh!')
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)