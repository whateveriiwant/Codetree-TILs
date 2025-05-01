const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

const count = (x) => {
    if (x % 2 === 0) return false;
    if (x % 10 === 5) return false;
    if (x % 3 === 0 && x % 9 !== 0) return false;
    return true;
};

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (count(i)) cnt++;
}

console.log(cnt);