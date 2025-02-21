const n = Number(require("fs").readFileSync(0).toString());

if (n >= 3000) {
    console.log("book");
} else if (n < 3000 && n >= 1000) {
    console.log("mask");
} else {
    console.log("no");
}