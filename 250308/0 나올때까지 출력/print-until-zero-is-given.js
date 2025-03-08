const input = require("fs").readFileSync(0).toString().trim().split("\n");
let i = 0;

while (true) {
    let x = Number(input[i]);
    if (x === 0) break;
    console.log(x);
    i++;
}