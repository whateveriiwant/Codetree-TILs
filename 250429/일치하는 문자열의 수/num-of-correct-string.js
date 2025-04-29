const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, a] = input[0].split(" ");

let cnt = 0;
for (let i = 1; i <= n; i++) {
    if (input[i] === a) cnt++;
}

console.log(cnt);