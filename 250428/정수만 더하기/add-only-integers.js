const a = require("fs").readFileSync(0).toString().trim().split("");

let result = 0;
for (let i of a) {
    if (i >= '0' && i <= '9') result += Number(i);
}

console.log(result);