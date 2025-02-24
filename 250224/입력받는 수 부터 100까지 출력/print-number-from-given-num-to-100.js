const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = n; i < 101; i++) {
    result += i + " ";
}

console.log(result);