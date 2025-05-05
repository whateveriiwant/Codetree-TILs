const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0].split("");

const countChar = (a) => {
    let cnt = 1;
    let chr = a[0];

    for (let i of a) {
        if (i !== chr) cnt++;
    }

    return cnt;
};

console.log(countChar(A) >= 2 ? "Yes" : "No");