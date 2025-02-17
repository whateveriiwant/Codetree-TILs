const fs = require("fs");

let x = fs.readFileSync(0).toString();
let arr = x.split(" ");

let a = Number(arr[1]);
let b = Number(arr[0]);

console.log(`${a} ${b}`);