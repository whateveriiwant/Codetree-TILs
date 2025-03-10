const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = n; j > i; j--) {
        result += "* ";
    }
    console.log(result);
}