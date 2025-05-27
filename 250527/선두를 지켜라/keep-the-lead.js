const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const moveA = input.slice(1, n + 1);
const moveB = input.slice(n + 1, n + m + 1);

const arrA = [0];
let disA = 0;

const arrB = [0];
let disB = 0;

for (let i of moveA) {
    const [v, t] = i.split(" ").map(Number);

    for (let j = 1; j <= t; j++) {
        disA += v;
        arrA.push(disA);
    }
}

for (let i of moveB) {
    const [v, t] = i.split(" ").map(Number);

    for (let j = 1; j <= t; j++) {
        disB += v;
        arrB.push(disB);
    }
}

console.log(arrA);
console.log(arrB);