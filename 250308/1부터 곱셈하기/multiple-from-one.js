const n = Number(require("fs").readFileSync(0).toString());

let i = 1;
let prod = 1;

while (true) {
    prod *= i;
    if (prod >= n) break;
    i++;
}

console.log(i);