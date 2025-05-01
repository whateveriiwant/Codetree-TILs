const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const abs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr[i] += -arr[i] * 2;
    }
};

abs(arr);

console.log(arr.join(" "));