const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

const print = (n) => {
    if (n === 1) return 2;
    if (n === 2) return 4;

    return (print(n - 1) * print(n - 2)) % 100;
};

console.log(print(N));