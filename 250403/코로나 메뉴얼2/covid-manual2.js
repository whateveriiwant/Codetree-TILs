let [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = Array(b);
cnt.fill(0);

while (a > 1) {
    cnt[a % b]++;
    a = parseInt(a / b);
}

let sum = 0;
for (let i = 0; i < b; i++) {
    sum += cnt[i] * cnt[i];
}

console.log(sum);