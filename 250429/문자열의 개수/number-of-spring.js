const input = require("fs").readFileSync(0).toString().trim().split("\n");

let arr = [];

let i = 0;
while (true) {
    if (input[i] === '0') break;

    arr.push(input[i]);
    i++;
}

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) console.log(arr[i]);
}