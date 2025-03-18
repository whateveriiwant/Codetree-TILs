const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
        result += j * i + " ";
    }
    result += "\n";
}

console.log(result);