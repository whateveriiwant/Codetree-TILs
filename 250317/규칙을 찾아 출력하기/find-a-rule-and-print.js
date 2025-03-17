const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) result += "* ";
        else if (j >= i) result += "  ";
        else result += "* ";
    }
    result += "\n";
}

console.log(result);