const input = require("fs").readFileSync(0).toString().split("\n"); // 두 줄 이상 받을 때는 항상 이렇게

const a = Number(input[0]);

const [b, c, d, e] = input[1].split(" ").map(Number);

console.log(a > b ? "1" : "0");
console.log(a > c ? "1" : "0");
console.log(a > d ? "1" : "0");
console.log(a > e ? "1" : "0");