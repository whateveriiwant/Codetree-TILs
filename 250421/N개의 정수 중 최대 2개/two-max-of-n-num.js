const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

numbers.sort((a, b) => (b - a));

console.log(numbers[0], numbers[1]);