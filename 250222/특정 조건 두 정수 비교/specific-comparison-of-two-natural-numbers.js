const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

if (a < b) {
    process.stdout.write("1 ");
} else {
    process.stdout.write("0 ");
}

if (a === b) {
    process.stdout.write("1");
} else {
    process.stdout.write("0");
}