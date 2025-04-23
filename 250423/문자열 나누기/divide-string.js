const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const str = input[1].split(" ");

let tmp = "";
for (let i of str) {
    tmp += i;
}

let result = "";

for (let i = 0; i < tmp.length; i++) {
    if (i !== 0 && i % 5 === 0) {
        result += "\n";
    }
    result += tmp[i];
}

console.log(result);