const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);

const students = Array(n).fill(0);
const punishments = input.slice(1, m + 1).map(Number);

let result = -1;
for (let i of punishments) {
    students[i + 1] += 1;
    if (students[i + 1] >= k) {
        result = i;
        break;
    }
}

console.log(result);