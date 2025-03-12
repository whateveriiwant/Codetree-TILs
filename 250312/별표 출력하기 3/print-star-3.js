const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = n; i > 0; i--) {
    result = "";
    for (let j = 0; j < n-i; j++) {
        result += "  ";
    }
    for (let j = 0; j < 2*i-1; j++) {
        result += "* ";
    }
    console.log(result);
}