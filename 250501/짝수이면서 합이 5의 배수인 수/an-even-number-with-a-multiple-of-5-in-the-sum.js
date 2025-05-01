const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const findNum = (n) => {
    let arr = n.toString().split("");
    let sum = arr.reduce((acc, cur) => acc + Number(cur), 0);
    return (n % 2 === 0 && sum % 5 === 0) ? "Yes" : "No";
};

console.log(findNum(n));