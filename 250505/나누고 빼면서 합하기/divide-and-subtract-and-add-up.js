const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const calc = (m) => {
    let sum = 0;
    while (m > 0) {
        sum += A[m - 1];
        if (m === 1) break;
        if (m % 2 !== 0) m -= 1;
        else m /= 2;
    }
    return sum;
};

console.log(calc(m));