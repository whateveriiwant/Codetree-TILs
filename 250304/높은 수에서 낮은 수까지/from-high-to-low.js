let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

if (a > b) {
    for (let i = a; i > b-1; i--) {
        result += i + " ";
    }
}

if (a < b) {
    for (let i = b; i > a-1; i--) {
        result += i + " ";
    }
}

if (a === b) {
    result += a;
}

console.log(result);