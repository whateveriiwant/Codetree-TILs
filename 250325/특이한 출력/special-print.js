const n = Number(require('fs').readFileSync(0).toString());
let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        result += `(${i}, ${j}) `;
        if ((i+j) % 4 === 0) result += '\n';
    }
}

console.log(result);