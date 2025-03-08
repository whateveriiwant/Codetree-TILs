const n = Number(require("fs").readFileSync(0).toString());
let i = 1;
let result = 1;

while (true) {
    result += i;
    
    if (result >= n) break;   
    i++;
}

console.log(i);