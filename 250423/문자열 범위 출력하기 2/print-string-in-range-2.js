const input = require("fs").readFileSync(0).toString().trim().split("\n");

const str = input[0];

const n = Number(input[1]);

let result = "";

if (str.length >= n) {
    for (let i = str.length - 1; i >= str.length - n; i--) {
        result += str[i];
    }
} else {
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
}


console.log(result);