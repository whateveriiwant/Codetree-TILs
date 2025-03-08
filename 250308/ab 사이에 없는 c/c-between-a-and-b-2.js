const [a, b, c] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let status = false;

for (let i = a; i <= b; i++) {
    if (i % c !== 0) status = true;
}

status ? console.log("YES") : console.log("NO");