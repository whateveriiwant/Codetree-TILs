const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);
let result = "";

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
        result += i*j + " ";
    }
    result += "\n";
}

console.log(result);