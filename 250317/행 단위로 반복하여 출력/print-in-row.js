const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
        result += j;
    }
    result += "\n";
}

console.log(result);