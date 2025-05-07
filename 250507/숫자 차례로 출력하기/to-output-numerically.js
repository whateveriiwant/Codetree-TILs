const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const f1 = (n) => {
    if (n === 0) return;
    f1(n-1);
    process.stdout.write(n + " ");
};

const f2 = (n) => {
    if (n === 0) return;
    process.stdout.write(n + " ");
    f2(n-1);
};

f1(n);
process.stdout.write("\n");
f2(n);