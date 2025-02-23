const input = require("fs").readFileSync(0).toString().trim().split("\n");

const a = input[0].split(" ");
const b = input[1].split(" ");

if ((Number(a[0]) >= 19 && a[1] === "M") || (Number(b[0]) >= 19 && b[1] === "W")) console.log(1); else console.log(0);