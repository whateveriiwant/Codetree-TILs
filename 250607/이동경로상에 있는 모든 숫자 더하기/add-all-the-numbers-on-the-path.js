const input = require("fs").readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1].split("");
const arr = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let dirNum = 0;

let x = parseInt(n / 2), y = parseInt(n / 2);

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < m;
};

let sum = 0;
sum += arr[x][y];
for (let i of commands) {
    if (i === 'L') dirNum = (dirNum + 3) % 4;
    else if (i === 'R') dirNum = (dirNum + 1) % 4;
    else if (i === 'F') {
        let nx = x + dx[dirNum];
        let ny = y + dy[dirNum];

        if (inRange(nx, ny)) {
            x = nx;
            y = ny;
            sum += arr[x][y];
        }
    }
}

console.log(sum);