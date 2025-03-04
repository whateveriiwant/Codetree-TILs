let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

while (a <= b) {
    result += a + " ";
    if (a % 2 !== 0) {
        a *= 2;
    } else {
        a += 3;
    }
}

console.log(result);