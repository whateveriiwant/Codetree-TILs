const input = require("fs").readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];

let n = 0;
let status = false;

while (a !== b) {
    n++;
    if (n > b.length) {
        status = true;
        break;
    }
    a = a.slice(-1) + a.slice(0, -1);
}

status ? console.log(-1) : console.log(n);