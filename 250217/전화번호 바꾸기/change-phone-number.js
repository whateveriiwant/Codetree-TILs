const [a, x, y] = require("fs").readFileSync(0).toString().trim().split("-").map(String);

console.log(`${a}-${y}-${x}`);