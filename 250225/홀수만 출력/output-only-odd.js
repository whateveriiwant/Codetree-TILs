const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

for (let i = a; i < b+1; i += 2) {
    result += i + " ";
}

console.log(result);