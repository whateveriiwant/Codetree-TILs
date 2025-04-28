const input = require("fs").readFileSync(0).toString().trim().split("\n");

let a = input[0];
let command = input[1].split("");

for (let i = 0; i < command.length; i++) {
    if (command[i] === "L") {
        a = a.slice(1) + a.slice(0, 1);
    } else {
        a = a.slice(-1) + a.slice(0, -1);
    }
}

console.log(a);