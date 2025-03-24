const n = Number(require('fs').readFileSync(0).toString());
let result = "";

for (let i = n; i >= 1; i--) {
    if (i !== n) {
        for (let j = 0; j < n-i; j++) {
                result += "  ";
            }
    }
    for (let j = i; j >= 1; j--) {
        result += j + " ";
    }
    if (i !== 1) result += "\n";
}

console.log(result);