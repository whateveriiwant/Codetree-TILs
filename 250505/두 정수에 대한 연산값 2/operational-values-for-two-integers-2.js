const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

const cal = (a, b) => {
    if (a < b) {
        a += 10;
        b *= 2;
    } else {
        a *= 2;
        b += 10;
    }

    return [a, b];
};

console.log(cal(a, b).join(" "));