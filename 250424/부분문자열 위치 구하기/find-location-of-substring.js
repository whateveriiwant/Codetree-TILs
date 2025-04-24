const input = require("fs").readFileSync(0).toString().trim().split("\n");

const inputStr = input[0];
const findStr = input[1];
let idx = -1;

idx = inputStr.indexOf(findStr);

if (inputStr === findStr) console.log(0);
else console.log(idx);