const a = Number(require("fs").readFileSync(0).toString());

if (a % 3 === 0 || a % 5 === 0) console.log(1); else console.log(0);