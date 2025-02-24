const n = Number(require("fs").readFileSync(0).toString());

let result = "";

for (let i = 1; i < n + 1; i++) {
    result += i + " ";
}

console.log(result);