const input = require("fs").readFileSync(0).toString().trim().split("\n");

let arr = [];

for (let i = 0; i < 4; i++) {
    arr.push(input[i]);
}

arr.reverse();

for (let i of arr) {
    console.log(i);
}