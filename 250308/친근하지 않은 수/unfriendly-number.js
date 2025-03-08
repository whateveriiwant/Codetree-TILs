const n = Number(require("fs").readFileSync(0).toString());
let cnt = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
        cnt++;
    } else {
        continue;
    }
}

console.log(cnt);