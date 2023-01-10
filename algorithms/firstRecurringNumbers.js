// Google Question

const firstRecurringNumbers = (input) => {

    // create an object to stor
    let map = {}

    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined

}

// Example
// [2,5,1,2,3,5,1,2,4] => 2

console.log(firstRecurringNumbers([2,5,1,2,3,5,1,2,4])) // 2