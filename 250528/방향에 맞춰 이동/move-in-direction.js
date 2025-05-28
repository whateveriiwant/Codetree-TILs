const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1).map(line => line.split(' '));

const dx = [1, -1, 0, 0]; // 동 서 남 북
const dy = [0, 0, -1, 1];

let x = 0, y = 0;

for (let i of moves) {
    const dirNum = i[0] === 'E' ? 0 : i[0] === 'W' ? 1 : i[0] === 'S' ? 2 : 3;
    x += dx[dirNum] * i[1];
    y += dy[dirNum] * i[1];
}

console.log(x, y);