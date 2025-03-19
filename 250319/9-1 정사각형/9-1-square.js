const n = Number(require("fs").readFileSync(0).toString());

let cnt = 9;
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (cnt < 1) cnt = 9;
        result += cnt;
        cnt--;
    }
    result += "\n";
}

console.log(result);