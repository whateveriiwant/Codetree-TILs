const input = require("fs").readFileSync(0).toString().trim().split("\n");
let i = 0;

while (true) {
    let x = Number(input[i]);
    
    if (x === 1) console.log("John");
    else if (x === 2) console.log("Tom");
    else if (x === 3) console.log("Paul");
    else if (x === 4) console.log("Sam");
    else {
        console.log("Vacancy");
        break;
    }

    i++;
}