const n = Number(require("fs").readFileSync(0).toString());
let result = "";

for (let i = 1; i < n+1; i++) {
    let num = i;
    let clap = false;

    while (num > 0) {
        let digit = num % 10;
        if (digit % 3 === 0 || digit % 6 === 0 || digit % 9 === 0) {
            clap = true;
            break;
        }
        num = Math.floor(num / 10);
    }

    if (i % 3 === 0 || clap) {
        result += 0 + " ";
    } else {
        result += i + " ";
    }
}

console.log(result);