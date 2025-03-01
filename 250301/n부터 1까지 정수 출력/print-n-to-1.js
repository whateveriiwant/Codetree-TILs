let n = Number(require("fs").readFileSync(0).toString());

let result = "";

while (n >= 1) {
    result += n + " ";
    n--;
}

console.log(result);