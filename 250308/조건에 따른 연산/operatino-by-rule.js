let n = Number(require("fs").readFileSync(0).toString());

let cnt = 0;

while (true) {
    if (n >= 1000) break;
    cnt++;
    
    if (n % 2 === 0) {
        n = n * 3 + 1;
    } else {
        n = n * 2 + 2;
    }
}

console.log(cnt);