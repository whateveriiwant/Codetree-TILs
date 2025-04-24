const [str, x] = require("fs").readFileSync(0).toString().trim().split(" ");

console.log(str.indexOf(x) === -1 ? "No" : str.indexOf(x));