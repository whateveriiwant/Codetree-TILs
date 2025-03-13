const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = n-1; j > i; j--) {
        result += " ";
    }
    for (let j = 0; j < 2*i+1; j++) {
        result += "*";
    }
    console.log(result);
}

for (let i = n-1; i > 0; i--) {
    let result = "";
    for (let j = n; j > i; j--) {
        result += " ";
    }
    for (let j = 2*i-1; j > 0; j--) {
        result += "*";
    }
    console.log(result);
}