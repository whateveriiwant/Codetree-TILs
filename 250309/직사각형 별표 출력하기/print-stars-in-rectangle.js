const [n, m] = require("fs").readFileSync(0).toString().split(" ").map(Number);

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < m; j++) {
        result += "* ";
    }
    console.log(result);
}