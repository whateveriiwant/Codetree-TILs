const n = Number(require("fs").readFileSync(0).toString());

console.log(((n % 2 !== 0 && n % 3 === 0) || (n % 2 === 0 && n % 5 === 0)));