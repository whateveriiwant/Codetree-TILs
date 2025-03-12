const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    result = "";
    for (let j = 0; j < n-i-1; j++) {
        result += "  ";
    }
    for (let j = 0; j < 2*i+1; j++) {
        result += "* ";
    }
    console.log(result);
}