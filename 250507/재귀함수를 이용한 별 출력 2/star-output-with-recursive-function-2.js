const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const f1 = (n) => {
    if (n === 0) return;
    for (let i = n; i > 0; i--) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
    f1(n-1);
};

const f2 = (n) => {
    if (n === 0) return;
    f2(n-1);
    for (let i = 0; i < n; i++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
};

f1(n);
f2(n);