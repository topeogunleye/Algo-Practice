const reverseStr = (str) => {

  reversedArr = [];

  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i-- ) {
    reversedArr += str[i]

  }

  return reversedArr
  
}


console.log(reverseStr('carhuhi is ft'))