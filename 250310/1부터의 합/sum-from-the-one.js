const n = Number(require("fs").readFileSync(0).toString());

let cnt = 1;
let prod = 1;

while (prod < n) {
    cnt++;
    prod += cnt;
}

console.log(cnt);