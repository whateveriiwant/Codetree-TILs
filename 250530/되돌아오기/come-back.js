const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);

const dx = [0, 1, 0, -1]; // 북동남서
const dy = [1, 0, -1, 0];

let x = 0, y = 0;

let cnt = 0;
let status = false;
for (let i of moves) {
    const cmd = i.split(" ");
    const dirNum = cmd[0] === 'N' ? 0 : cmd[0] === 'E' ? 1 : cmd[0] === 'S' ? 2 : 3;
    const sec = Number(cmd[1]);

    for (let j = 0; j < sec; j++) {
        x += dx[dirNum];
        y += dy[dirNum];
        cnt++;
        if (x === 0 && y === 0) {
            status = true;
            break;
        }
    }
    if (status) break;
}

console.log(status ? cnt : -1);