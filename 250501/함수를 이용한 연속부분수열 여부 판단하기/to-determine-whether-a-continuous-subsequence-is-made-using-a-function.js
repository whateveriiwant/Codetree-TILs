const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

const func = () => {
    for (let i = 0; i <= n1 - n2; i++) {
        let match = true;
        for (let j = 0; j < n2; j++) {
            if (a[i + j] !== b[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
};

console.log(func() ? "Yes" : "No"); 