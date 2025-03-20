const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for (let j = 1; j <= n; j++) {
                result += j;
            }
    }
    
    else {
        for (let j = n; j >= 1; j--) {
                result += j;
            }
    }
    result += "\n";
    
}

console.log(result);