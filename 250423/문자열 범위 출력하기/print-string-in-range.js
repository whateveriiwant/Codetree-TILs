const str = require('fs').readFileSync(0).toString().trim();

let result = "";
for (let i = 2; i < 10; i++) {
    result += str[i];
}

console.log(result);