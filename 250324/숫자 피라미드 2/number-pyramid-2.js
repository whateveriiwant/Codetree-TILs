const n = Number(require("fs").readFileSync(0).toString());
let cnt = 1;
let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        result += cnt + " ";
        cnt++;
    }
    result += "\n";
}

console.log(result);