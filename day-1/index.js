const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
const calories = [];

let tmp = 0;
input.split("\n").forEach((line) => {
    if (line !== "") {
        tmp += parseInt(line);
    } else {
        calories.push(tmp);
        tmp = 0;
    }
});

calories.sort((a, b) => b - a);

console.log(`max calories: ${calories[0]}`);
console.log(`sum top three: ${calories.splice(0, 3).reduce((p, c) => p + c)}`);
