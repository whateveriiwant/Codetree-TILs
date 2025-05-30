const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

const arr = Array(n).fill(0).map(() => Array(n).fill(0));

let x = 0, y = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
};

for (let i of moves) {
    x = i[0] - 1;
    y = i[1] - 1;
    arr[x][y] = 1;

    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (inRange(nx, ny) && arr[nx][ny] === 1) cnt++;
    }
    if (cnt === 3) console.log(1);
    else console.log(0);
}