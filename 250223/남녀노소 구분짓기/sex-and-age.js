const input = require("fs").readFileSync(0).toString().split("\n");

const s = Number(input[0]);
const a = Number(input[1]);

if (s === 0) {
    if (a >= 19) console.log("MAN");
    else console.log("BOY");
} else {
    if (a >= 19) console.log("WOMAN");
    else console.log("GIRL");
}