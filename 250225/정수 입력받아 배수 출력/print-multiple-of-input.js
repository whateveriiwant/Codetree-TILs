const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i < 6; i++) {
    result += n * i + " ";
}

console.log(result);