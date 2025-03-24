const n = Number(require("fs").readFileSync(0).toString());

let cnt = 1;
let result = "";

for (let i = n; i >= 1; i--) {
    if (i !== n) {
        for (let j = 0; j < n-i; j++) {
            result += "  ";
        }
    }
    for (let j = i; j >= 1; j--) {
        result += cnt + " ";
        cnt++;
        if (cnt > 9) cnt = 1;
    }
    if (i !== 1) result += "\n";
}

console.log(result);