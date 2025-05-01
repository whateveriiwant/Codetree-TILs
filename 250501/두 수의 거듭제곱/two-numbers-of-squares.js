const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);

const num = (a, b) => {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
};

console.log(num(a, b));