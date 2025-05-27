const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const moveA = input.slice(1, n + 1); // (t, d) t초만큼 d방향 1초에 하나만
const moveB = input.slice(n + 1, n + m + 1); // (t, d)

const arrA = [0];
let posA = 0;

const arrB = [0];
let posB = 0;

for (let i of moveA) {
    const [t, d] = i.split(' ');

    for (let j = 0; j < t; j++) {
        if (d == 'L') {
            posA--;
            arrA.push(posA);
        } else {
            posA++;
            arrA.push(posA);
        }
    }
}

for (let i of moveB) {
    const [t, d] = i.split(' ');

    for (let j = 0; j < t; j++) {
        if (d == 'L') {
            posB--;
            arrB.push(posB);
        } else {
            posB++;
            arrB.push(posB);
        }
    }
}

const len = Math.max(arrA.length, arrB.length);
let cnt = 0;
for (let i = 1; i < len; i++) {
    if (arrA[i] != arrB[i]) {
        if (arrA[i + 1] == arrB[i + 1]) cnt++;
    }
}

console.log(cnt);
