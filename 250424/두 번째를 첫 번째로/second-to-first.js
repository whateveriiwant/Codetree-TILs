const str = require("fs").readFileSync(0).toString().trim().split("");
const tmp = str[0];
const tmp1 = str[1]

for (let i = 0; i < str.length; i++) {
    if (str[i] === tmp1) str[i] = tmp;
}

console.log(str.join(""));