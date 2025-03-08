const n = Number(require("fs").readFileSync(0).toString());
let x = 0;
let result = 1;

while (true) {
    x++;
    result *= 2;
    if (n === result) break;
}

console.log(x);