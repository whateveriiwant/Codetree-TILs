const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

const count = (n) => {
    if (n === 1) return 0;

    if (n % 2 === 0) return count(n / 2) + 1;
    else return count(n * 3 + 1) + 1;
};

console.log(count(n));