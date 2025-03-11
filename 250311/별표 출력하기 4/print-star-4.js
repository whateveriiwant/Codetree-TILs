const n = Number(require("fs").readFileSync(0).toString());

let result = "";

for (let i = n-1; i >= 0; i--) {
    result = "";
    for (let j = 0; j <= i; j++) {
        result += "* ";
    }
    console.log(result);
}

for (let i = 1; i < n; i++) {
    result = "";
    for (let j = 0; j <= i; j++) {
        result += "* ";
    }
    console.log(result);
}