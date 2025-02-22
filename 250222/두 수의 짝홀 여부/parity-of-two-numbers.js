const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

if (a % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

if (b % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}