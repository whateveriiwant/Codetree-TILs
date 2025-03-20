const n = Number(require("fs").readFileSync(0).toString());
let cnt = 0;
let result = "";

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for (let j = 1; j <= n; j++) {
            cnt++;
            result += cnt + " ";
        }
    }
    else {
        for (let j = 1; j <= n; j++) {
            cnt += 2;
            result += cnt + " ";
        }
    }
    result += "\n";
}

console.log(result);