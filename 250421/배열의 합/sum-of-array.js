const input = require("fs").readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < 4; i++) {
    let sum = 0;
    let arr = input[i].split(" ").map(Number);
    arr.forEach((n) => sum += n);
    console.log(sum);
}
