const input = require("fs").readFileSync(0).toString().trim().split("\n");

let i = 0;
let avg = 0;

while (true) {
    let age = Number(input[i]);

    if (age > 29 || age < 20) break;

    avg += age;
    i++;
}

console.log((avg / i).toFixed(2));