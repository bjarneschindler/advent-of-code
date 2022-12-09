const { Console } = require('console');
const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');

let total = 0;
let maxTotal = 0;

input.split("\n").forEach(line => {
    let [a, b] = line.split(" ");
    b = normalize(b);
    total += pointsForShape(b);
    if (isWin(b, a)) total += 6;
    if (b === a) total += 3;

    switch (b) {
        case "A": { // X, loose 
            const toSelect = a === "A" ? "C" : a === "B" ? "A" : "B";
            maxTotal += pointsForShape(toSelect);
            break;
        }
        case "B": { // Y, draw
            maxTotal += pointsForShape(a);
            maxTotal += 3;
            break;
        }
        case "C": { // Y, win
            const toSelect = a === "A" ? "B" : a === "B" ? "C" : "A";
            maxTotal += pointsForShape(toSelect);
            maxTotal += 6;
            break;
        }
        default:
            break;
    }
});

console.log(`1) total score: ${total}`);
console.log(`2) max total: ${maxTotal}`);

function normalize(a) {
    return a === "X" ? "A" : a === "Y" ? "B" : "C"
}

function pointsForShape(shape) {
    return a === "A" ? 1 : a === "B" ? 2 : 3
}

function isWin(a, b) {
    return a === 'A' && b === 'C'
        || a === 'B' && b === 'A'
        || a === 'C' && b === 'B';
}
