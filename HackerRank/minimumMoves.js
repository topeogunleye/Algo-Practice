'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

// There are two array of integers, arr1 and arr2.
// One move is defined as an increment or decrement of one element in an array.
// Determine the minimum number of moves to match arr1 with arr2.
// No repeatiton of the digits is allowed.

    function minimumMoves(arr1, arr2) {
    // Write your code here
        let answer = 0;

        for (let i = 0; i < arr1.length; i++) {
            let num = arr1[i]
            let num2 = arr2[i]
            let diff = Math.abs(num - num2)
            answer += diff
        }

        return answer
}

console.log(minimumMoves([1,2,3], [2,4,5]))

