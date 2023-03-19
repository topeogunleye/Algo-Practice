function flippingBits(n) {
  return ~n >>> 0;
}

// The `~` operator performs a bitwise NOT, flipping all the bits in `n`. 
// The `>>>` ensures that the result is treated as an unsigned 32 bit integer
// since javascript has a larger range of numbers but does not have an unsigned type