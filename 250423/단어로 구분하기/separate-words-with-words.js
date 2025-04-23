const input = require("fs").readFileSync(0).toString().trim().split(" ").map(String);

for (let i of input) {
    console.log(i);
}