let [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = Array(b);
cnt.fill(0);

while (a > 1) {
    a = parseInt(a / b);
    cnt[a % b]++;
}

let sum = 0;
for (let i of cnt) {
    sum += i*i;
}

console.log(sum);