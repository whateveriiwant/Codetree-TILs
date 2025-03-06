const [a, b] = require('fs').readFileSync(0).toString().split(" ").map(Number);
let sum = 0;
let avg = 0;
let cnt = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        cnt++;
        sum += i;
    }
}

avg = (sum / cnt).toFixed(1);

console.log(sum, avg);