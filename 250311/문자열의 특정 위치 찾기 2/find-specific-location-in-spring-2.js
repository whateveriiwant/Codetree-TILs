const input = require("fs").readFileSync(0).toString().trim();

const strs = ["apple", "banana", "grape", "blueberry", "orange"];
let cnt = 0;

for (let i = 0; i < 5; i++) {
    if (strs[i][2] === input || strs[i][3] === input) {
        cnt++;;
        console.log(strs[i]);
    }
}

console.log(cnt);