const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0].split('');

let x = 0, y = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let dirNum = 0;
let cnt = 0;
let status = false;

for (let i of commands) {
    if (i === 'R') {
        dirNum = (dirNum + 1) % 4;
        cnt++;
    } 
    else if (i === 'L') {
        dirNum = (dirNum + 3) % 4;
        cnt++;
    } 
    else if (i === 'F') {
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