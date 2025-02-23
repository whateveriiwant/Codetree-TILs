const n = Number(require("fs").readFileSync(0).toString());

if (n === 4 || n === 6 || n === 9 || n === 11) {
    console.log(30);
} else if (n === 2) {
    console.log(28);
} else {
    console.log(31);
}
