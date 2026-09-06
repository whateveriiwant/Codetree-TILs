const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

const OFFSET = 100_000;


const arr = Array.from({ length: OFFSET * 2 + 1 }, () => ({ color: 'none', whiteCnt: 0, blackCnt: 0 }));
let cur = OFFSET;

for (let i = 0; i < n; i++) {
    const [x, direction] = [Number(commands[i][0]), commands[i][1]];
    
    if (direction === 'L') {
        for (let j = 0; j < x; j++) {
            arr[cur].whiteCnt += 1;
            if (arr[cur].whiteCnt >= 2 && arr[cur].blackCnt >= 2) {
                arr[cur].color = "Gray";
            } else {
                arr[cur].color = "White";
            }
            if (j < x - 1) cur -= 1; 
        }
    } else {
        for (let j = 0; j < x; j++) {
            arr[cur].blackCnt += 1;
            if (arr[cur].whiteCnt >= 2 && arr[cur].blackCnt >= 2) {
                arr[cur].color = "Gray";
            } else {
                arr[cur].color = "Black";
            }
            if (j < x - 1) cur += 1; 
        }
    }
}

let [white, black, gray] = [0, 0, 0];

for (const tile of arr) {
    if (tile.color === 'White') white += 1;
    else if (tile.color === 'Black') black += 1;
    else if (tile.color === 'Gray') gray += 1;
    else continue;
}

console.log(white, black, gray);