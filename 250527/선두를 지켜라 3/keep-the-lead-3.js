const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const moveA = input.slice(1, n + 1);
const moveB = input.slice(n + 1, n + m + 1);

const arrA = [0];
let posA = 0;

const arrB = [0];
let posB = 0;

for (let i of moveA) {
    const [v, t] = i.split(' ').map(Number);

    for (let j = 0; j < t; j++) {
        posA += v;
        arrA.push(posA);
    }
}

for (let i of moveB) {
    const [v, t] = i.split(' ').map(Number);

    for (let j = 0; j < t; j++) {
        posB += v;
        arrB.push(posB);
    }
}

let leader = 0; // 0 초기, 1 A, 2 B, 3 공동
let cnt = 0;
for (let i = 1; i < arrA.length; i++) {
    let newLeader;
    if (arrA[i] > arrB[i]) {
        newLeader = 1;
    } else if (arrA[i] < arrB[i]) {
        newLeader = 2;
    } else {
        newLeader = 3;
    }

    if (leader !== newLeader) {
        cnt++;
        leader = newLeader;
    }
}

console.log(cnt);