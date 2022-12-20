function findGrantsCap(grantsArray, newBudget) {
  
  grantsArray.sort((a,b) => a - b);

  let ans = newBudget;

  for(let i = 0; i < grantsArray.length; i++) {
    // when the current grant is less than the average
    // return the average
    if(ans <= grantsArray[i] * (grantsArray.length - i)) {
      return ans / (grantsArray.length - i);
    }
    ans -= grantsArray[i];
  }

  return ans;
  
}


console.log(findGrantsCap([2, 100, 50, 120, 1000], 190))