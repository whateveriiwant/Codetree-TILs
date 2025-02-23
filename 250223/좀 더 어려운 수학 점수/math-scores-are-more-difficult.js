const input = require("fs").readFileSync(0).toString().split("\n");

const a = input[0].split(" ").map(Number);
const b = input[1].split(" ").map(Number);

if (a[0] > b[0]) {
    console.log("A");
}
else if (a[0] === b[0]) {
    if (a[1] > b[1]) console.log("A"); else console.log("B");
}
else console.log("B");