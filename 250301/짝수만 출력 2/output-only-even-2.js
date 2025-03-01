let [b, a] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let result = "";

while (b >= a) {
    if (b % 2 === 0) result += b + " ";
    b--;
}

console.log(result);