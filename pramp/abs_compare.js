function absSort(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/
  
// Input:
 
// [2,-7,-2,-2,0]
// Expected:
 
// [0,-2,-2,2,-7]
// Actual:
 
// [ 0, 2, -2, -2, -7 ]

  const abs_compare = (a,b) => {
     if (Math.abs(a) > Math.abs(b)) return true
    else if (Math.abs(a) < Math.abs(b)) return false
    else return a>b
  }
  
  arr.sort((a,b) => abs_compare(a,b))
  return arr
	// your code goes here
}

absSort([2,-7,-2,-2,0])
absSort([2,-7,-2,-2,0])