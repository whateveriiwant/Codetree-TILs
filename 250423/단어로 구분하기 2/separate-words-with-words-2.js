const input = require("fs").readFileSync(0).toString().trim().split(" ");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) console.log(input[i]);
}