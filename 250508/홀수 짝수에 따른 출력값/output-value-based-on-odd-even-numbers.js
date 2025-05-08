const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const sum = (n) => {
    if (n % 2 !== 0) {
        if (n === 1) return 1;
        return sum(n-2) + n;
    } else {
        if (n === 2) return 2;
        return sum(n-2) + n;
    }
};

console.log(sum(n));