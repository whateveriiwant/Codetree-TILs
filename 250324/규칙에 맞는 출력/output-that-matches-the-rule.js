const n = Number(require("fs").readFileSync(0).toString());

let result = "";

for (let i = n+1; i > 1; i--) {
    for (let j = i-1; j <= n; j++) {
        result += j + " ";
    }
    result += "\n";
}

console.log(result);