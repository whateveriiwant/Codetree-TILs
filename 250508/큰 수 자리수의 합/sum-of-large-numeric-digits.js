const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);
let val = a * b * c;

const sum = (n) => {
    if (n < 10) return n;

    return sum(parseInt(n / 10)) + (n % 10);
};

console.log(sum(val));