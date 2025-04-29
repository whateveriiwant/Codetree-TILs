const input = require("fs").readFileSync(0).toString().trim().split("\n");

let i = 0;
while (true) {
    let str = input[i];
    if (str === 'END') break;

    console.log(str.split("").reverse().join(""));
    i++;
}