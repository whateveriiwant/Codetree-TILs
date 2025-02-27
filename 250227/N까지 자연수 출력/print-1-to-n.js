const n = Number(require("fs").readFileSync(0).toString());
let result = "";
let i = 1;

while (i <= n) {
    result += i + " ";
    i++;
}

console.log(result);