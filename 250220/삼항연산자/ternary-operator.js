const score = Number(require("fs").readFileSync(0).toString());

console.log(score === 100 ? "pass" : "failure");