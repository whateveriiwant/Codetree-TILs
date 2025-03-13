const n = Number(require("fs").readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = n-i; j > 0; j--) {
        result += "  ";
    }
    for (let j = 0; j < i; j++) {
        result += "@ ";
    }
    console.log(result);
}

for (let i = n-1; i > 0; i--) {
    let result = "";
    for (let j = i; j > 0; j--) {
        result += "@ ";
    }
    for (let j = 0; j < i; j++) {
        result += "  ";
    }
    console.log(result);
}