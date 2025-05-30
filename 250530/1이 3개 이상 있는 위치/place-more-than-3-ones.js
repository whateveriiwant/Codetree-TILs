const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [0, 1, 0, -1]; // 북 동 남 서
const dy = [1, 0, -1, 0];

let result = 0;

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let cnt = 0;
        for (let dirNum = 0; dirNum < 4; dirNum++) {
            const nx = i + dx[dirNum];
            const ny = j + dy[dirNum];
            if (inRange(nx, ny) && grid[nx][ny] === 1) cnt++;
        }
        if (cnt >= 3) result++;
    }
}

console.log(result);