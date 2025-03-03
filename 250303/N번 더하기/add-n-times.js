let [a, n] = require("fs").readFileSync(0).toString().split(" ").map(Number);

for (let i = 0; i < n; i++) {
    a += n;
    console.log(a);
}