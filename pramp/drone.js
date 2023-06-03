function calcDroneMinEnergy(route) {
  // your code goes here
  // -1 kWh(Energy Unit) for every ascend
  // +1 kWh(Energy Unit) for every descent
  
  /*
                   x.   y.  z 
  route =        [[0,   2, 10], 
                  [3,   5,  0], 10kwh
                  [9,  20,  6], -6kwh => 4
                  [10, 12, 15], -9kwh => -5 <- drone crashes
                  [10, 10,  8] ] +7kwh => 2
  
  
  2d -> y
  3d plane -> which coordinate concerned with up and down?
  
  */
  
  
  
  let energy = 0;
  let min = 0;
  
  for (let i = 0; i < route.length-1; i++) {
    let currentValue = route[i][2];
    let nextValue = route[i+1][2]
    
    /*
    if (currentValue > nextValue) {
      energy = currentValue - nextValue;
    } else {
      let energy = firstValue - secondValue
    }
    */
    
    energy += + currentValue - nextValue
    
    if(energy < 0){
      min = Math.min(energy, min);
    }
    
  }
  
  return Math.abs(min);
}

console.log(calcDroneMinEnergy([[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]]))