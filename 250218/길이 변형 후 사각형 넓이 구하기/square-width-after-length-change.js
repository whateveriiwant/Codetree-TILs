let [w, h] = require("fs").readFileSync(0).toString().split(" ").map(Number);

w += 8;
h *= 3;

console.log(w);
console.log(h);
console.log(w*h);