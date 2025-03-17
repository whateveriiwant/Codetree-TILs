const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i === 0 && j % 2 === 0) || (i <= j && j % 2 === 1)) {
            result += "* ";
        }
        else result += "  ";
    }
    result += "\n";
}
console.log(result);