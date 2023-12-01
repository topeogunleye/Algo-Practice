function lonelyinteger(a) {
  // Write your code here
  // if the array is [1, 2, 3, 4, 3, 2, 1], then the function will do the following operations:

// result = 0; result ^= 1; 
// result = 0 ^ 1 = 1 result ^= 2; 
// result = 1 ^ 2 = 3 result ^= 3; 
// result = 3 ^ 3 = 0 result ^= 4; 
// result = 0 ^ 4 = 4 result ^= 3; 
// result = 4 ^ 3 = 7 result ^= 2; 
// result = 7 ^ 2 = 5 result ^= 1; 
// result = 5 ^ 1 = 4

// The final value of result is 4, which is the only integer that appears once in the array.

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
    result ^= a[i];
  }
  // return result
  return result;


}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1])) // 4