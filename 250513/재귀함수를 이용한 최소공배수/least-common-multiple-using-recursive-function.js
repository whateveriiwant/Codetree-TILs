const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

const setArr = (arr, n) => {
    if (n === 1) return arr[0];
    return lcm(arr[n - 1], setArr(arr, n - 1));
};

console.log(setArr(numbers, n));