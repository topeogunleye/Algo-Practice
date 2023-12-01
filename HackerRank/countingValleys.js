// function countingValleys(steps, path) {
//   // Write your code here
//   let valleys = 0;
//   let level = 0;
//   for (const step of path) {
//       let prev = level;
//       level = step === 'U' ? level + 1 : level - 1;
//       if (prev == -1 && level == 0) valleys++;
//       console.log(valleys)
//   }
//   return valleys
// }


// countingValleys(8,['U','U','D','D','D','D','U','U'])

// This code is a JavaScript function that takes two parameters: steps and path. The function is supposed to count the number of valleys that a hiker traverses in a given path, where a valley is defined as a sequence of consecutive steps below sea level. The code works as follows:

// It declares three variables: valleys, level, and i. The valleys variable will store the final result, the level variable will keep track of the current elevation of the hiker, and the i variable will be used as a loop counter.
// It uses a for loop to iterate over each character in the path string, which can be either ‘U’ for an uphill step or ‘D’ for a downhill step. The loop condition is i <= path.length, which means that it will run one extra iteration after reaching the end of the string. This is because the code needs to check if the last step was part of a valley or not.
// Inside the loop, it assigns the value of level to a new variable called prev, which will store the previous elevation of the hiker. Then, it updates the value of level based on the current character in the path string. If it is ‘U’, it adds one to level; if it is ‘D’, it subtracts one from level.
// Next, it checks if the previous elevation was -1 and the current elevation is 0. This means that the hiker has just climbed up from a valley to sea level. If this is true, it increments the valleys variable by one.
// It also prints the value of valleys to the console on each iteration, which is not necessary for the logic of the function but can be useful for debugging purposes.
// After the loop ends, it returns the value of valleys as the final result.

function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let level = 0;
  for (let i = 0; i <= path.length; i++) {
      let prev = level;
      level = path[i] === 'U' ? level + 1 : level - 1;
      if (prev == -1 && level == 0) valleys++;
      console.log(valleys)
  }
  return valleys
}


countingValleys(8,['U','U','D','D','D','D','U','U'])

