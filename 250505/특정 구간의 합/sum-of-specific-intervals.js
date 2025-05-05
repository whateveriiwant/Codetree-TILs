const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

for (let i = 2; i <= m + 1; i++) {
    const queries = input[i].split(" ").map(Number);
    let sum = 0;
    for (let j = queries[0]; j <= queries[1]; j++) {
        sum += A[j-1];
    }
    console.log(sum);
}
