const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < n; j++) {
        let result = "";
        for (let k = 0; k < n; k++) {
            result += "*";
        }
        console.log(result);
    }
    console.log();
}