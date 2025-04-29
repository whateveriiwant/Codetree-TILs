const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const sum = (a+b).toString().split("");

let cnt = 0;
for (let i of sum) {
    if (i == 1) cnt++;
}

console.log(cnt);