let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

console.log(`${a} ${b} ${Number(a) + Number(b)}`);