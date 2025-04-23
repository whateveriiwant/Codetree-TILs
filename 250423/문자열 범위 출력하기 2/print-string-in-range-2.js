const input = require("fs").readFileSync(0).toString().trim().split("\n");

const str = input[0];

const n = Number(input[1]);

let result = "";
for (i = str.length - 1; i >= str.length - n; i--) {
    result += str[i];
}

console.log(result);