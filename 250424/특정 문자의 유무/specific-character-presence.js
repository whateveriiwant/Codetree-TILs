const str = require('fs').readFileSync(0).toString().trim();

console.log(str.includes('ee') ? 'Yes' : 'No', str.includes('ab') ? 'Yes' : 'No');