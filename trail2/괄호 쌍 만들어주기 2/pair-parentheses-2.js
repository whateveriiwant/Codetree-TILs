const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let cnt = 0;

for (let i = 0; i < A.length; i++) {
    if (A[i] === '(' && A[i + 1] === '(') {
        for (let j = i + 2; j < A.length; j++) {
            if (A[j] === ')' && A[j + 1] == ')') {
                cnt += 1;
            }
        }
    }
}

console.log(cnt);