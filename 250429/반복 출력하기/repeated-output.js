const input = require("fs").readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const printChars = (n) => {
    for (let i = 0; i < n; i++) {
        console.log("12345^&*()_");
    }
};

printChars(n);