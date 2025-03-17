const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
        result += `(${i},${j}) `;
    }
    result += "\n";
}

console.log(result);