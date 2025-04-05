const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let cnt = 0;

for (let i = 0; i <= n; i++) {
    if (cnt === 3) {
        console.log(i);
        break;
    }
    if (numbers[i] === 2) cnt++;
}