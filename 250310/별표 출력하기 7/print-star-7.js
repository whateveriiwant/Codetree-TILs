const n = Number(require("fs").readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 0; j < i; j++) {
        result += "* ";
    }
    console.log(result);
}