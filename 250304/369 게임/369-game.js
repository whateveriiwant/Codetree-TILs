const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i < n+1; i++) {
    if (i % 3 === 0 || i % 10 === 3 || i % 10 === 6 || i % 10 === 9) result += 0 + " ";
    else result += i + " ";
}

console.log(result);