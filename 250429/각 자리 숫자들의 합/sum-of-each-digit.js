const n = require("fs").readFileSync(0).toString().trim().toString().split("");

let result = 0;
for (let i of n) {
    result += Number(i);
}

console.log(result);