const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const print = (n) => {
    process.stdout.write(n + " ");

    if (n > 1) {
        print(n - 1);
    } 

    if (n >= 1) {
        process.stdout.write(n + " ");
    }
};

print(n);