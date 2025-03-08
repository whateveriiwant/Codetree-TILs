const n = Number(require("fs").readFileSync(0).toString());

let i = 1;
let prod = n;

while (true) {
    prod /= i;
    if (prod <= 1) break;
    i++;
}

console.log(i);