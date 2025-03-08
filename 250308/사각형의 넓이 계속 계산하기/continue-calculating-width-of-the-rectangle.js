const input = require("fs").readFileSync(0).toString().trim().split("\n");
let i = 0;

while (true) {
    let input1 = input[i].split(" ");
    let w = Number(input1[0]);
    let h = Number(input1[1]);
    let c = input1[2];

    console.log(w*h);
    if (c === "C") break;
    i++;
}