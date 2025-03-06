const n = Number(require("fs").readFileSync(0).toString());
let result = 0;

for (let i = n; i <= 100; i++) {
    result += i;
}  

console.log(result);