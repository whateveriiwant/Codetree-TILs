const [a, x, y] = require("fs").readFileSync(0).toString().trim().split("-");

console.log(`${a}-${y}-${x}`);