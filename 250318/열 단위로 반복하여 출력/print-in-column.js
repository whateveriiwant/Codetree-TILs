const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
        result += i;
    }
    result += "\n";
}

console.log(result);