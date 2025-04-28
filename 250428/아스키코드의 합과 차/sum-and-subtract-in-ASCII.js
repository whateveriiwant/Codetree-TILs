const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ");

console.log(a.charCodeAt(0) + b.charCodeAt(0), a.charCodeAt(0) > b.charCodeAt(0) ? a.charCodeAt(0) - b.charCodeAt(0) : b.charCodeAt(0) - a.charCodeAt(0));