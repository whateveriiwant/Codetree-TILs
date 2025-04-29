const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ");

console.log(Number(a+b) + Number(b+a));