const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

nums.sort((prev, cur) => {
    return prev - cur;
});

console.log(nums.join(' '));
console.log(nums.reverse().join(' '));