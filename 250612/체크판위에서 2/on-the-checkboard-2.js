const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

let cnt = 0;

for (let i = 1; i < R - 1; i++) { // 첫번째 중간 지점
    for (let j = 1; j < C - 1; j++) {
        for (let k = i + 1; k < R - 1; k++) {
            for (let l = j + 1; l < C - 1; l++) { // 두번째 중간 지점
                if (grid[0][0] !== grid[i][j] && 
                    grid[i][j] !== grid[k][l] && 
                    grid[k][l] !== grid[R-1][C-1]) {
                    cnt++;
                }
            }
        }
    }
}

console.log(cnt);