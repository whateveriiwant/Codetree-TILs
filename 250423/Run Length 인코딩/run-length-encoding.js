const a = require("fs").readFileSync(0).toString().trim();

let result = "";

let cnt = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i+1]) {
        cnt++;
        continue;
    }
    result += a[i] + (cnt + 1);
    cnt = 0;
}

console.log(result.length);
console.log(result);