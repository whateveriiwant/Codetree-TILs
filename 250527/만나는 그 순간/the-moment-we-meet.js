const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const moveA = input.slice(1, n + 1);
const moveB = input.slice(n + 1, n + m + 1);

const arrA = [];
let locA = 0;
arrA.push(locA);

const arrB = [];
let locB = 0;
arrB.push(locB);

for (let i of moveA) {
    const [d, t] = i.split(" ");

    if (d == 'L') {
        for (let j = 0; j < t; j++) {
            locA--;
            arrA.push(locA);
        }
    } else {
        for (let j = 0; j < t; j++) {
            locA++
            arrA.push(locA);
        }
    }
}

for (let i of moveB) {
    const [d, t] = i.split(" ");

    if (d == 'L') {
        for (let j = 0; j < t; j++) {
            locB--
            arrB.push(locB);
        }
    } else {
        for (let j = 0; j < t; j++) {
            locB++
            arrB.push(locB);
        }
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