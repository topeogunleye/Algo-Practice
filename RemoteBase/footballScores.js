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
 * Complete the 'counts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY teamA
 *  2. INTEGER_ARRAY teamB
 */

function counts(teamA, teamB) {
    // Write your code here
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const teamACount = parseInt(readLine().trim(), 10);

    let teamA = [];

    for (let i = 0; i < teamACount; i++) {
        const teamAItem = parseInt(readLine().trim(), 10);
        teamA.push(teamAItem);
    }

    const teamBCount = parseInt(readLine().trim(), 10);

    let teamB = [];

    for (let i = 0; i < teamBCount; i++) {
        const teamBItem = parseInt(readLine().trim(), 10);
        teamB.push(teamBItem);
    }

    const result = counts(teamA, teamB);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
