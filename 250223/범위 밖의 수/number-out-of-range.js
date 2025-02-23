const a = Number(require("fs").readFileSync(0).toString());

if (a < 10 || a > 20) console.log("yes"); else console.log("no");