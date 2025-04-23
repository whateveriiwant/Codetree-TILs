const str = require("fs").readFileSync(0).toString().trim();

for (let i of str) {
    console.log(i);
}