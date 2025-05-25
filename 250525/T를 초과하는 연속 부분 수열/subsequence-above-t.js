const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [n, t] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let cnt = 0;
let maxCnt = 0;

for (let i = 0; i < n; i++) {
    if (numbers[i] > t && numbers[i] > t) cnt++;
    else {
        maxCnt = Math.max(cnt, maxCnt);
        cnt = 0;
    }
}

console.log(maxCnt);