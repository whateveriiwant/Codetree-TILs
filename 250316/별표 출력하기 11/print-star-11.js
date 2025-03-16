const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < 2*n+1; i++) {
    let result = "";
    for (let j = 0; j < 2*n+1; j++) {
        if (i % 2 !== 0 && j % 2 !== 0) result += "  ";
        else result += "* ";
    }
    console.log(result);
}