const a = Number(require("fs").readFileSync(0).toString());
if (a % 13 === 0 || a % 19 === 0) console.log("True"); else console.log("False");