const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    result += "*";
    console.log(result);
    console.log("");
}

for (let i = n-1; i > 0; i--) {
    result = "";
    for (let j = i; j > 0; j--) {
        result += "*";
    }
    console.log(result);
    console.log("");
}