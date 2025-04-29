let str = require("fs").readFileSync(0).toString().trim().split("");

let result = "";

for (let i of str) {
    if (i.charCodeAt(0) >= 'a'.charCodeAt(0) && i.charCodeAt(0) <= 'z'.charCodeAt(0)) result += i.toUpperCase();
    else if (i.charCodeAt(0) >= 'A'.charCodeAt(0) && i.charCodeAt(0) <= 'Z'.charCodeAt(0)) result += i.toLowerCase();
}

console.log(result);