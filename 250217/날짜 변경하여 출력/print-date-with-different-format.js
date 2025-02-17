const [y, m, d] = require("fs").readFileSync(0).toString().trim().split(".").map(String);

console.log(`${m}-${d}-${y}`);