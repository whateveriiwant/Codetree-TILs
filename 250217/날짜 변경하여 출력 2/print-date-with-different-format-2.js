const [m, d, y] = require("fs").readFileSync(0).toString().trim().split("-").map(String);

console.log(`${y}.${m}.${d}`);