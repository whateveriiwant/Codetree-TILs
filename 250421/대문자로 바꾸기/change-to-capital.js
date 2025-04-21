const input = require("fs").readFileSync(0).toString().trim().split("\n");
let result = "";

for (let i = 0; i < 5; i++) {
    let arr = input[i].split(" ");
    arr.forEach((str) => result += str.toUpperCase() + " ");
    result += "\n";
}

console.log(result);