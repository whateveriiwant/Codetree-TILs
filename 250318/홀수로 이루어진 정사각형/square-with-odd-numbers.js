const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result += `${i * 2 + j * 2 + 11} `;
    }
    result += "\n";
}

console.log(result);