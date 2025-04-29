const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ");
let sum = 0;

let strA = a.split("");
let resultA = 0;
for (let i of strA) {
    if (i >= '0' && i <= '9') {
        resultA += i;
    }
    else break;
}
sum += Number(resultA);

let strB = b.split("");
let resultB = 0;
for (let i of strB) {
    if (i >= '0' && i <= '9') {
        resultB += i;
    }
    else break;
}
sum += Number(resultB);

console.log(sum);