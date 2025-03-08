const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let status = false;

for (let i = a; i <= b; i++) {
    if (1920 % i === 0 && 2880 % i === 0) status = true;
}

status ? console.log(1) : console.log(0);