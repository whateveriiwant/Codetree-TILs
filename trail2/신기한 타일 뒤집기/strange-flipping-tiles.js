const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const OFFSET = 100_000;
const arr = Array.from({ length: OFFSET * 2 + 1 }, () => ({ color: "gray" }));
let cur = OFFSET;

for (let i = 0; i < n; i++) {
    const [x, direction] = commands[i].split(' ');

    if (direction === 'L') {
        for (let j = 0; j < x; j++) {
            arr[cur].color = 'white';
            cur -= 1;
        }
        cur += 1;
    } else {
        for (let j = 0; j < x; j++) {
            arr[cur].color = 'black';
            cur += 1;
        }
        cur -= 1;
    }
}

let [white, black] = [0, 0];

for (let tile of arr) {
    if (tile.color === 'white') white += 1;
    else if (tile.color === 'black') black += 1;
    else continue;
}

console.log(white, black);