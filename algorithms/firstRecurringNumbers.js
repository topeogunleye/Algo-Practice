// Google Question

const firstRecurringNumbers = (input) => {

    // create an object
    // check if current input is in input
    // if current input is in object, return current input,
    // else set object to current input
    // return undefined if no input repeats itself
    let obj = {}

   for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] !== undefined) {
        return input[i]
    } else {
        obj[input[i]] = i
    }
   }

   return undefined

}

// Example
// [2,5,1,2,3,5,1,2,4] => 2

console.log(firstRecurringNumbers([2,5,1,2,3,5,1,2,4])) // 2


