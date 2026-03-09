const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
arr.forEach(e => sum += e);

console.log(sum);