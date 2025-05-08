const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

const sum = (n) => {
    if (n < 10) return n * n;

    return (n % 10) * (n % 10) + sum(parseInt(n / 10));
};

console.log(sum(n));