const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);
let cnt = 0;

for (let i = 0; i < 5; i++) {
    if (Number(input[i]) % 3 === 0) cnt++;
}


cnt === 5 ? console.log(1) : console.log(0);