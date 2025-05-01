const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

const prime = (x) => {
    let isPrime = true;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) isPrime = false;
    }
    return isPrime;
};

const even = (x) => {
    let arr = x.toString().split("");
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum % 2 === 0;
};

let cnt = 0;
for (let i = A; i <= B; i++) {
    if (prime(i) && even(i)) cnt++;
}

console.log(cnt);