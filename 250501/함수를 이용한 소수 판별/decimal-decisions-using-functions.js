const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

const primeNum = (x) => {
    let status = true;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) status = false;
    }
    return status;
};

const func = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (primeNum(i)) sum += i;
    }
    return sum;
};

console.log(func(A, B));