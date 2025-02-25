const [b, a] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

for (let i = b; i > a-1; i -= 2) {
    result += i + " ";
}

console.log(result);