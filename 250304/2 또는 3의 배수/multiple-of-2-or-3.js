const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i < n+1; i++) {
    if (i % 2 === 0 || i % 3 === 0) result += 1 + " ";
    else result += 0 + " ";
}

console.log(result);