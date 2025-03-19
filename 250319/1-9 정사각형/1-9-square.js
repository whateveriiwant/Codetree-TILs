const n = Number(require("fs").readFileSync(0).toString());

let cnt = 1;
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (cnt > 9) cnt = 1;
        result += cnt;
        cnt++;
    }
    result += "\n";
}

console.log(result);