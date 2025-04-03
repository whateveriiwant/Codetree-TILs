const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const numbers = input[1].split(" ").map(Number);

let cnt = 0;

for (let i of numbers) {
    if (i === m) cnt++;
}

console.log(cnt);