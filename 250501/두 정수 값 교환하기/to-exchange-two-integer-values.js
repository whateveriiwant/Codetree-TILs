const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);

const swap = (a, b) => {
    [a, b] = [b, a];
    return [a, b];
};

console.log(swap(n, m).join(" "));