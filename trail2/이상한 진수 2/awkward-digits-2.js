const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

let maxN = -1;

for (let i = 0; i < a.length; i++) {
    let candidate = a.split('');
    candidate[i] = candidate[i] === '0' ? '1' : '0';

    if (candidate.length > 1 && candidate[0] === '0') continue;

    const value = parseInt(candidate.join(''), 2);
    maxN = Math.max(maxN, value);
}

console.log(maxN);