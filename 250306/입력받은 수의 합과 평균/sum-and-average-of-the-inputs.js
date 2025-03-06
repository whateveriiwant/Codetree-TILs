const input = require("fs").readFileSync(0).toString().split("\n");

const n = Number(input[0]);

let sum = 0;
let avg = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
    let x = Number(input[i]);
    if (x > 0) {
        sum += x;
        cnt++;
    }
}

avg = (sum/cnt).toFixed(1);

console.log(sum, avg);