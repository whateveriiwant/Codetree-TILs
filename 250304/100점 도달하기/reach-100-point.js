const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = n; i < 101; i++) {
    if (i >= 90) result += "A ";
    else if (i >= 80) result += "B ";
    else if (i >= 70) result += "C ";
    else if (i >= 60) result += "D ";
    else result += "F ";
}

console.log(result);