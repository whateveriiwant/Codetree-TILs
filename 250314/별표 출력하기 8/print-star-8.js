const n = Number(require("fs").readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 2 !== 0) result += "*";
    else {
        for (let j = 0; j < i; j++) {
            result += "* ";
        }
    }
    console.log(result);
}