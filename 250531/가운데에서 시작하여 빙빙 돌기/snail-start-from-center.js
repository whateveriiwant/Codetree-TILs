const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(n).fill(0).map(() => Array(n).fill(0));

let cnt = 1;

let x = parseInt(n / 2), y = parseInt(n / 2);
arr[x][y] = cnt++;

// 우, 상, 좌, 하 순서 (시계반대방향)
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

let dirNum = 0;
let len = 1;

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n;
};

while (cnt <= n * n) {
    for (let i = 0; i < 2; i++) { // 같은 거리를 두 번 이동
        for (let j = 0; j < len; j++) {
            if (cnt > n * n) break;
            
            x += dx[dirNum];
            y += dy[dirNum];
            
            if (inRange(x, y)) {
                arr[x][y] = cnt++;
            }
        }
        dirNum = (dirNum + 1) % 4; // 다음 방향으로 회전
        if (cnt > n * n) break;
    }
    len++; // 이동 거리 증가
}

arr.forEach(x => console.log(x.join(" ")));