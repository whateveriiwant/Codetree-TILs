const input = require("fs").readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ");
const b = input[1].split(" ");
const c = input[2].split(" ");

const list = [a, b, c];

let count = 0;

for (let i in list) {
    if (list[i][0] === "Y" && list[i][1] >= 37) {
        count += 1;
    }
}

if (count >= 2) console.log("E"); else console.log("N");