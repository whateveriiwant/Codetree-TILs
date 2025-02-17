const [s, t] = require("fs").readFileSync(0).toString().trim().split("\n").map(String);

console.log(`${t}\n${s}`);