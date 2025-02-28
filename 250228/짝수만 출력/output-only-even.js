let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

while (a <= b) {
    result += a + " ";
    a += 2;
}

console.log(result);
