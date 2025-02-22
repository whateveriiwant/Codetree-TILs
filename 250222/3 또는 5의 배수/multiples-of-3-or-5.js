const a = Number(require("fs").readFileSync(0).toString());

console.log(a % 3 === 0 ? "YES" : "NO");
console.log(a % 5 === 0 ? "YES" : "NO");