const [a, b, c] = require("fs").readFileSync(0).toString().split(" ").map(Number);

if (a > b) {
    if (c > a) {
        console.log(a);
    } else if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
} else if (b > a) {
    if (c > b) {
        console.log(b);
    } else if (a > b) {
        console.log(a);
    } else {
        console.log(c);
    }
}