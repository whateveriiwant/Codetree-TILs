const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

for (let i = b; i > a-1; i--) {
    result += i + " ";
}

console.log(result);