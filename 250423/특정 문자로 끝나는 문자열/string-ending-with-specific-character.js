const input = require("fs").readFileSync(0).toString().trim().split("\n");

let status = false;
for (let i = 0; i < 10; i++) {
    if (input[i][input[i].length-1] === input[10]) {
        console.log(input[i]);
        status = true;
    }
}

if (!status) console.log('None');