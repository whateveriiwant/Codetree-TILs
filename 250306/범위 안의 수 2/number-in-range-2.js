const input = require("fs").readFileSync(0).toString().split("\n");

let sum = 0;
let avg = 0;
let cnt = 0;

for (let i = 0; i < 10; i++) {
    let x = Number(input[i]);
    if (x >= 0 && x <= 200) {
        sum += x;
        cnt++;
    }
    
}

avg = (sum/cnt).toFixed(1);

console.log(sum, avg);