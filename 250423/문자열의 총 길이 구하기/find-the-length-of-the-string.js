const input = require("fs").readFileSync(0).toString().trim().split(" ");

let len = 0;
for (let i = 0; i < 10; i++) {
    len += input[i].length;
}

console.log(len);

