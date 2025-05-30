const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const map = input.slice(1, n + 1);
const k = Number(input[n + 1]);

/*
    \\ 이면 진행방향 남쪽: 동쪽으로 틀기, 동쪽: 남쪽으로 틀기, 서쪽: 북쪽으로 틀기, 북쪽: 서쪽으로 틀기 -> 동-남, 북-서
    / 이면 진행방향 동쪽: 북쪽으로 틀기, 북쪽: 동쪽으로 틀기, 서쪽: 남쪽으로 틀기, 남쪽: 서쪽으로 틀기 -> 동-북, 서-남
*/

const arr = Array(n + 2).fill(0).map(() => Array(n + 2).fill(0));

for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
        arr[i][j] = map[i - 1][j - 1];
    }
}

let x = 0, y = 0;
let dirNum = 0;

const dx = [0, 1, 0, -1]; // 북 동 남 서
const dy = [1, 0, -1, 0];

// 경계 시작점 설정
if (k <= n) {
    x = 0;
    y = k;
    dirNum = 2; // 남쪽
} else if (k >= n + 1 && k <= n * 2) {
    x = k - n;
    y = n + 1;
    dirNum = 3; // 서쪽
} else if (k > n * 2 && k <= n * 3) {
    x = n + 1;
    y = n - (k - 2 * n) + 1;
    dirNum = 0; // 북쪽
} else {
    x = n - (startNum - 3 * n);
    y = 0;
    dirNum = 1; // 동쪽
}

let cnt = 0;
while (true) {
    x += dx[dirNum];
    y += dy[dirNum];

    cnt++;

    if (x < 0 || x > n || y < 0 || y > n) break;

    if (arr[x][y] === '/') {
        if (dirNum === 1) dirNum = 0;
        else if (dirNum === 0) dirNum = 1;
        else if (dirNum === 3) dirNum = 2;
        else dirNum = 3;
    } else if (arr[x][y] === '\\') {
        if (dirNum === 2) dirNum = 1;
        else if (dirNum === 1) dirNum = 2;
        else if (dirNum === 3) dirNum = 0;
        else dirNum = 3;
    }
}

console.log(cnt);