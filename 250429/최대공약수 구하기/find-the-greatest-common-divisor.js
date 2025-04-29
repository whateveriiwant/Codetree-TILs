const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

const gcd = (n, m) => {
    if (m === 0) return n;
    return gcd(m, n % m);
};

console.log(gcd(n, m));