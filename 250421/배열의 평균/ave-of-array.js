const input = require("fs").readFileSync(0).toString().trim().split("\n");

let result = "";

for (let i = 0; i < 2; i++) {
    let sum = 0;
    let arr = input[i].split(" ").map(Number);
    arr.forEach((n) => sum += n);
    result += (sum / 4).toFixed(1) + " ";
}
result += "\n";

for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let j = 0; j < 2; j++) {
        let arr = input[j].split(" ").map(Number);
        sum += arr[i];
    }
    result += (sum / 2).toFixed(1) + " ";
}
result += "\n";

let sum = 0;
for (let i = 0; i < 2; i++) {
    let arr = input[i].split(" ").map(Number);
    arr.forEach((n) => sum += n);
}

result += (sum / 8).toFixed(1);

console.log(result);