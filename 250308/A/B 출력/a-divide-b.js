let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

result += parseInt(a / b) + ".";

a %= b;
for (let i = 0; i < 20; i++) {
    a *= 10;
    result += parseInt(a / b);
    a %= b;
}

console.log(result);