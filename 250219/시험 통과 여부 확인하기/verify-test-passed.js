const n = Number(require("fs").readFileSync(0).toString());

if (n >= 80) {
    console.log("pass");
} else {
    console.log(`${80 - n} more score`);
}