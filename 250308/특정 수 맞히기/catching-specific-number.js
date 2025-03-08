const input = require("fs").readFileSync(0).toString().trim().split("\n");
let i = 0;

while (true) {
    let x = Number(input[i]);
    if (x < 25) console.log("Higher");
    else if (x > 25) console.log("Lower");
    else {
        console.log("Good");
        break;
    }
    i++;
}