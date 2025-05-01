const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

const findNum = (n) => {
    let arr = n.toString().split("");
    let status = false;
    for (let i of arr) {
        if (i === '3' || i === '6' || i === '9') status = true;
    }
    return status;
};

const three = (n) => {
    return n % 3 === 0;
};

const number = (a, b) => {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (findNum(i) || three(i)) cnt++;
    }
    return cnt;
};

console.log(number(A, B));