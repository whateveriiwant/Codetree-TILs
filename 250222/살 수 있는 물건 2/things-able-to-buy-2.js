const n = Number(require("fs").readFileSync(0).toString());

if (n >= 3000) {
    console.log("book");
} else if (n >= 1000 && n <= 3000) {
    console.log("mask");
} else if (n >= 500 && n <= 1000) {
    console.log("pen");
} else {
    console.log("no");
}