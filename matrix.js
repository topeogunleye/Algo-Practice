function spiralCopy(inputMatrix):
    numRows = inputMatrix.length
    numCols = inputMatrix[0].length 
    
    topRow = 0
    btmRow = numRows - 1
    leftCol = 0
    rightCol = numCols - 1
    result = []

    while (topRow <= btmRow AND leftCol <= rightCol):
        # copy the next top row
        for i from leftCol to rightCol:
            result.push(inputMatrix[topRow][i])
        topRow++

        # copy the next right hand side column
        for i from topRow to btmRow:
            result.push(inputMatrix[i][rightCol])
        rightCol--

        # copy the next bottom row
        if (topRow <= btmRow):
            for i from rightCol to leftCol:
                result.push(inputMatri[btmRow][i])
            btmRow--

        # copy the next left hand side column
        if (leftCol <= rightCol):
            for i from btmRow to topRow:
                result.push(inputMatrix[i][leftCol])
            leftCol++

    return result
  
  

// my solution
function snake(array) {
  const vector = []
  while (array.length) {
    vector.push(...array.shift())
    array.map(row => vector.push(row.pop()))
    array.reverse().map(row => row.reverse())
  }
  return vector
}

// my solution
function spiralCopy(array) {
  const vector = []
  while (array.length) {
    vector.push(...array.shift())
    array.map(row => vector.push(row.pop()))
    array.reverse().map(row => row.reverse())
  }
  return vector
}