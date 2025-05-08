const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

const fact = (n) => {
    if (n === 0) return 1;

    return n * fact(n-1);
};

console.log(fact(N));