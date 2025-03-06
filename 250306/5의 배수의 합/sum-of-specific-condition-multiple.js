const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let sum = 0;

if (a < b) {
    for (let i = a; i <= b; i++) {
        if (i % 5 === 0) sum += i;
    }
}

else if (a > b) {
    for (let i = b; i <= a; i++) {
        if (i % 5 === 0) sum += i;
    }
}

else if (a === b) {
    sum = a;
}

console.log(sum);