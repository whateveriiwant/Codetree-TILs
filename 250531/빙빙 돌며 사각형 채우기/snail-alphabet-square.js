const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = Array(n).fill(0).map(() => Array(m).fill(0));

let x = 0; y = 0;

let cnt = 'A'.charCodeAt();
arr[0][0] = 'A';

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let dirNum = 1;

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < m;
};

for (let i = 1; i < n * m; i++) {
    let nx = x + dx[dirNum];
    let ny = y + dy[dirNum];

    if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
        dirNum = (dirNum + 1) % 4;
        nx = x + dx[dirNum];
        ny = y + dy[dirNum];
    } 

    x = nx;
    y = ny;

    cnt++;
    if (cnt > 'Z'.charCodeAt()) cnt = 'A'.charCodeAt();
    arr[x][y] = String.fromCharCode(cnt);
}

arr.forEach(x => console.log(x.join(" ")));