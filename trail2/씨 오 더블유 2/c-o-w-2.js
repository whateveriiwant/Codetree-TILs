const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const s = input[1].split('');

let cnt = 0;

for (let i = 0; i < n; i++) {
    if (s[i] === 'C') {
        for (let j = i + 1; j < n; j++) {
            if (s[j] === 'O') {
                for (let k = j + 1; k < n; k++) {
                    if (s[k] === 'W') cnt += 1;
                }
            }
        }
    }
}

console.log(cnt);