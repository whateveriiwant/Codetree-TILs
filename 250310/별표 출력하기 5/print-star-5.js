const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = n; j > i; j--) {
        for (let k = 0; k < n-i; k++) {
            result += "*";
        }
        result += " ";
    }
    console.log(result);
}