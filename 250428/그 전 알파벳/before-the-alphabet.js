const a = require("fs").readFileSync(0).toString().trim();

console.log(a === 'a' ? 'z' : String.fromCharCode(a.charCodeAt(0) - 1));