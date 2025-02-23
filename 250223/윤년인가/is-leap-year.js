const y = Number(require("fs").readFileSync(0).toString());

if (y % 4 === 0 && y % 100 !== 0) {
    console.log("true");
} else if (y % 100 === 0 && y % 400 !== 0) {
    console.log("false");
} else {
    console.log("false");
}