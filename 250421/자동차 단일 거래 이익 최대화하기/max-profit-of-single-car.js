const input = require("fs").readFileSync(0).toString().trim().split(" ")

const n = Number(input[0]);
const prices = input[1].split(" ").map(Number);

let profit = 0;

for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if (prices[i] < prices[j]) {
            if (profit < prices[j] - prices[i]) profit = prices[j] - prices[i];
        }
    }
}

console.log(profit)