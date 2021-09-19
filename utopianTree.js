function utopianTree(n) {
  // Write your code here
  let list = []
  let result = 1;
  // console.log(list)
  
  for (let i = 0; i < n; i++) {
      list.push(i)
  }

  console.log(list)
  
  for (let i = 0; i < list.length; i++) {
    // console.log(list[i] % 2 === 0) 

      if ((list[i] % 2 === 0 )) {
         result += 
         console.log(list[i])
      } 
       if (list[i] % 2 === 1) {
         console.log(list[i])
          result += list[i] + 1
      }
  }

  
console.log(result)
}

utopianTree(6)

