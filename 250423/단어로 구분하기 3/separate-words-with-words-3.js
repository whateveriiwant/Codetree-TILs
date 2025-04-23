const str = require("fs").readFileSync(0).toString().trim().split(" ");

str.reverse();

for (let i of str) {
    console.log(i);
}