const n = Number(require("fs").readFileSync(0).toString());

for (let i = n; i > 0; i--) {
    let result = "";
    for (let j = n; j > i; j--) {
        result += "  ";
    }
    for (let j = 2*i-1; j > 0; j--) {
        result += "* ";
    }
    console.log(result);
}

for (let i = 2; i <= n; i++) {
    let result = "";
    for (let j = n; j > i; j--) {
        result += "  ";
    }
    for (let j = 2*i-1; j > 0; j--) {
        result += "* ";
    }
    console.log(result);
}