const input = require("fs").readFileSync(0).toString().split("\n");
let cnt = 0;

for (let i = 0; i < 5; i++) {
    if (Number(input[i]) % 2 === 0) cnt++;
}

console.log(cnt);