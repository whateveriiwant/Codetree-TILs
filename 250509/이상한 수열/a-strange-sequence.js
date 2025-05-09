const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

const sequence = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return sequence(parseInt(n/3)) + sequence(n-1);
};

console.log(sequence(n));