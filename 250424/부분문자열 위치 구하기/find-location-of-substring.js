const input = require("fs").readFileSync(0).toString().trim().split("\n");

const inputStr = input[0];
const findStr = input[1];
let idx = -1;

for (let i = 0; i < inputStr.length - 1; i++) {
    if (inputStr[i] + inputStr[i+1] === findStr) {
        idx = i;
        break;
    }
}

if (inputStr === findStr) console.log(0);
else console.log(idx);