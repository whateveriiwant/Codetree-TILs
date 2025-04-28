const a = require("fs").readFileSync(0).toString().trim();

console.log(a === 'z' ? 'a' : String.fromCharCode(a.charCodeAt(0) + 1));