const char = require("fs").readFileSync(0).toString().trim();

let arr = ['L', 'E', 'B', 'R', 'O', 'S'];
let idx = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) idx = i;
}

if (idx === -1) console.log("None");
else console.log(idx);