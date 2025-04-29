const input = require("fs").readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

const makeRect = (n, m) => {
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < m; j++) {
            result += '1';
        }
        console.log(result);
    }
};

makeRect(n, m);