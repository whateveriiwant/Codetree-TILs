const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

const gcd = (n, m) => {
    if (m === 0) return n;
    return gcd(m, n%m);
};

const lcm = (n, m) => {
    return (n * m) / gcd(n, m);
};

console.log(lcm(n, m));