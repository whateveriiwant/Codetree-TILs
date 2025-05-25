const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const arr = Array(2001).fill(0).map(() => Array(2001).fill(0));

for (let i = rectA[0]; i < rectA[2]; i++) {
    for (let j = rectA[1]; j < rectA[3]; j++) {
        arr[i + 1000][j + 1000] = 1;
    }
}

for (let i = rectB[0]; i < rectB[2]; i++) {
    for (let j = rectB[1]; j < rectB[3]; j++) {
        arr[i + 1000][j + 1000] = 2;
    }
}

for (let i = rectM[0]; i < rectM[2]; i++) {
    for (let j = rectM[1]; j < rectM[3]; j++) {
        arr[i + 1000][j + 1000] = 3;
    }
}

let sum = 0;
for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        if (arr[i][j] === 1 || arr[i][j] === 2) sum++;
    }
}

console.log(sum);