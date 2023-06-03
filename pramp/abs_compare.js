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
absSort([-2,1])
absSort([0,1,2])
absSort([2,-1,-1,-1])
absSort([-2,3,5,-1,4])
absSort([4,-1,6,-4,2,-1])
absSort([6,4,-5,0,-1,7,0])
absSort([-7,-2,-2,6,5,-6,-2,-6])
absSort([-4,9,-1,1,-1,2,-8,-6,3])
absSort([-5,3,2,1,-8,-1,-4,-7])