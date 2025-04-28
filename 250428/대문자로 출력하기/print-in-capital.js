let str = require("fs").readFileSync(0).toString().trim();

let arr = str.toUpperCase().split("");

let result = "";
for (let i of arr) {
    if (i.charCodeAt(0) >= 'A'.charCodeAt(0) && i.charCodeAt(0) <= 'Z'.charCodeAt(0)) result += i;
}

console.log(result);