// The function takes an array of 3D points as input
function calcDroneMinEnergy(route) {
  // Initialize the minimum energy to zero
  let minEnergy = 0;
  // Initialize the current energy to zero
  let currEnergy = 0;
  // Loop through the array from the second point to the last point
  for (let i = 1; i < route.length; i++) {
    // Calculate the change in height (z coordinate) between the current point and the previous point
    let deltaZ = route[i][2] - route[i-1][2];
    // Update the current energy by adding the change in height
    // If deltaZ is positive, it means the drone ascended and burned energy
    // If deltaZ is negative, it means the drone descended and gained energy
    currEnergy += deltaZ;
    // If the current energy is negative, it means the drone needs more energy to reach the next point
    if (currEnergy < 0) {
      // Update the minimum energy by subtracting the current energy
      // This will ensure that the drone has enough energy to start and finish the route
      minEnergy -= currEnergy;
      // Reset the current energy to zero
      currEnergy = 0;
    }
  }
  // Return the minimum energy required
  return minEnergy;
}

// The time complexity of the solution is O(n), where n is the number of points in the route array. 
// This is because the solution loops through the array once and performs constant time operations 
// for each point.

// The space complexity of the solution is O(1), 
// because the solution only uses two variables (minEnergy and currEnergy) 
// that do not depend on the size of the input array.
calcDroneMinEnergy([[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]])