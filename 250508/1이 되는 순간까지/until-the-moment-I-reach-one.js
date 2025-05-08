const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let cnt = 0;

const count = (n) => {
    if (n === 1) return cnt;

    if (n % 2 === 0) {
        cnt++
        return count(n/2);
    }
    else {
        cnt++;
        return count(parseInt(n/3));
    } 
};

console.log(count(n));