const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

if (a > 0) {
    for (let i = 0; i < b; i++) {
        result += a;
    }
}
if (a <= 0) {
    result += 0;
}

console.log(result);