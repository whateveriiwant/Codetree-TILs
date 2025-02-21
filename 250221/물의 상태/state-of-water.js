const n = Number(require("fs").readFileSync(0).toString());

if (n < 0) {
    console.log("ice");
} else if (n >= 100) {
    console.log("vapor");
} else {
    console.log("water");
}