const str = require("fs").readFileSync(0).toString().trim();

let arr = str.toLowerCase().split("");

let result = "";

for (let i of arr) {
    if ((i.charCodeAt(0) >= 'a'.charCodeAt(0) && i.charCodeAt(0) <= 'z'.charCodeAt(0)) || (i >= '0' && i <= '9')) result += i;
}

console.log(result);