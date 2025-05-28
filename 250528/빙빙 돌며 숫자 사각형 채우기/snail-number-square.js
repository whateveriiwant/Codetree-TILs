const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const dx = [0, 1, 0, -1]; 
const dy = [1, 0, -1, 0];

let x = 0, y = 0;
let cnt = 1;

let arr = Array(n).fill(0).map(() => Array(m).fill(0));

let dirNum = 0;

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
};

arr[x][y] = cnt;
cnt++;

while (cnt <= n * m) {
    const nx = x + dx[dirNum];
    const ny = y + dy[dirNum];

    if (inRange(nx, ny) && arr[nx][ny] === 0) { // 계속 움직이기
        x = nx;
        y = ny;
        arr[x][y] += cnt;
        cnt++;
    } else { // 방향 전환
        dirNum = (dirNum + 1) % 4;
    }
}  

let result = "";
for (let i of arr) {
    for (let j of i) {
        result += j + ' ';
    }
    result += "\n";
}

console.log(result);