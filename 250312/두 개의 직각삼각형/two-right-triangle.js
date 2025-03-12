const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    result = "";
    for (let j = n; j > i; j--) {
        result += "*";
    }
    for (let j = 0; j < i; j++) {
        result += " ";
    }
    for (let j = 0; j < i; j++) {
        result += " ";
    }
    for (let j = n; j > i; j--) {
        result += "*";
    }
    console.log(result);
}