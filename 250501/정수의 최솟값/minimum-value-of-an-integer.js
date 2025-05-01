const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

const min = (a, b, c) => {
    let minNum = (a < b && a < c) ? a : (b < c) ? b : c;
    return minNum;
};

console.log(min(a, b, c));