const n = Number(require("fs").readFileSync(0).toString());

if (n === 1) {
    console.log("John");
} else if (n === 2) {
    console.log("Tom");
} else if (n === 3) {
    console.log("Paul");
} else {
    console.log("Vacancy");
}