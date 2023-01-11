const firstRecurringNumbers = (inputs) => {

  for (let i = 0; i < inputs.length; i++) {
    for (let j = 1; j < inputs.length; j++) {
      if (inputs[i] === inputs[j]) {
        return inputs[j]
      } else {
        inputs[j + 1]
      }
    }
  }

  return undefined

}

console.log(firstRecurringNumbers([2,5,5,2,3,5,1,2,4])) // 2
