const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 1; i <= m; i++) {
    let [r, c] = input[i].split(" ").map(Number);
    arr[r-1][c-1] = r*c;
}

for (let i of arr) {
    let str = "";
    for (let j of i) {
        str += j + " ";
    }
    console.log(str);
}