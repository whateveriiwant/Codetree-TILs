const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const moveA = input.slice(1, n + 1);
const moveB = input.slice(n + 1, n + m + 1);

const arrA = [0];
let locA = 0;

const arrB = [0];
let locB = 0;

for (let i of moveA) {
    const [d, t] = i.split(" ");

    for (let j = 0; j < t; j++) {
        d == 'L' ? locA-- : locA++;
        arrA.push(locA);
    }
}

for (let i of moveB) {
    const [d, t] = i.split(" ");

    for (let j = 0; j < t; j++) {
        d == 'L' ? locB-- : locB++;
        arrB.push(locB);
    }
}

let result = -1;
for (let i = 1; i < arrA.length; i++) {
    if (arrA[i] == arrB[i]) {
        result = i;
        break;
    }
}

console.log(result);