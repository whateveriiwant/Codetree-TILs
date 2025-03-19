const n = Number(require("fs").readFileSync(0).toString());

let cnt = 2;
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (cnt > 8) cnt = 2;
        result += cnt + " ";
        cnt += 2;
    }
    result += "\n";
}

console.log(result);