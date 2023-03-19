function isMatch(text, pattern) {
  // your code goes here
  
  // . represents 1 letter
  // * represents as many orevious letters as possible
  
  // save our pattern in an object
  // const pattern = {}
  const patternObj = {}

  for (let i = 0; i < pattern; i++) {
    if (!patternObj[pattern[i]]) {
        patternObj[pattern[i]] = true;
    }
  }
  