const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let max = -1;

for (let i of numbers) {
    if (max < i) {
        let cnt = 0;

        for (let j of numbers) {
            if (j === i) cnt++;
        }

        if (cnt === 1) max = i;
    }
}

console.log(max);