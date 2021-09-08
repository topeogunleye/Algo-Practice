function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1)

  for(let i = 0; i < arr.length; i++) {
     for (let j = 0; i < valsToRemove.length; j++) {
       if (arr[i] === valsToRemove[j]) {
          delete arr[i]
       }
     }
  }

  let newArr = arr.filter(item => item !== null);
  console.log(newArr)

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);