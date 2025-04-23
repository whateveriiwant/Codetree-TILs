const str = require("fs").readFileSync(0).toString().trim().split("");

str.reverse();

let result = "";
for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 0) {
        if (i % 2 === 0) result += str[i];
    } else {
        if (i % 2 !== 0) result += str[i];
    }
    
}

console.log(result);