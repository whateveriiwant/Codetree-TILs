let n = Number(require("fs").readFileSync(0).toString());
let cnt = 0;

while (true) {
    cnt++;
    if (n % 2 === 0) n /= 2;
    else {
        n = n * 3 + 1;
    }

    if (n === 1) break;
}

console.log(cnt);