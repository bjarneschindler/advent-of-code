const fs = require('fs');

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8');

function getPrioOfItem(item) {
    const code = item.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        return code - 38;
    }
    if (code >= 97 && code <= 122) {
        return code - 96
    }
}

function partOne() {
    const prios = [];
    input.split("\n").forEach(line => {
        const mid = line.length / 2
        const left = line.substring(0, mid);
        const right = line.substring(mid, line.length);

        let common;
        for (const c of left) {
            if (right.includes(c)) {
                common = c;
            }
        }
        prios.push(getPrioOfItem(common));
    });
    console.log(`sum: ${prios.reduce((a, b) => a + b)}`);
}

function partTwo() {
    const lines = input.split("\n");
    const badges = [];

    for (let i = 0; i < lines.length; i += 3) {
        const a = lines[i], b = lines[i + 1], c = lines[i + 2];
        let longest = a;
        if (b.length > longest.length) longest = a;
        if (c.length > longest.length) longest = c;

        for (let j = 0; j < longest.length; j++) {
            const tmp = longest[j];
            if (b.includes(tmp) && c.includes(tmp) && a.includes(tmp)) {
                badges.push(getPrioOfItem(tmp));
                j = longest.length;
            }
        }
    }
    console.log(`sum: ${badges.reduce((a, b) => a + b)}`);
}

partOne();
partTwo();