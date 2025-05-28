const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split("");

let x = 0, y = 0;
let dirNum = 0;
const dx = [0, 1, 0, -1]; // 북 동 남 서 시계
const dy = [1, 0, -1, 0];

for (let i of commands) {
    if (i === 'L') {
        dirNum = (dirNum + 3) % 4;
    } else if (i === 'R') {
        dirNum = (dirNum + 1) % 4;
    } else {
        x += dx[dirNum];
        y += dy[dirNum];
    }
}

console.log(x, y);