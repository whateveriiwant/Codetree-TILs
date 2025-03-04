let [c, n] = require("fs").readFileSync(0).toString().trim().split(" ");
n = Number(n);
let result = "";

if (c === "A") {
    for (let i = 1; i < n+1; i++) {
        result += i + " ";
    }
} else {
    for (let i = n; i > 0; i--) {
        result += i + " ";
    }
}

console.log(result);