const n = Number(require("fs").readFileSync(0).toString());

let i = 3;
let result = "";

while (i <= n) {
    result += i + " ";
    i += 3;
}

console.log(result);