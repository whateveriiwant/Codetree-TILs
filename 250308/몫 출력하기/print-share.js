const input = require("fs").readFileSync(0).toString().trim().split("\n");

let i = 0;
let cnt = 0;

while (true) {
    let x = Number(input[i]);
    if (cnt === 3) break;

    if (x % 2 !== 0) {
        i++;
        continue;
    }
    else {
        console.log(parseInt(x/2));
        cnt++;
    }
    
    i++;
}