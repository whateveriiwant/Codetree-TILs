const [n, m] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let arr = Array(n).fill(0).map(() => Array(m).fill(0));

let cnt = 0;
for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            arr[j][i] = cnt;
            cnt++;
        }
    } else {
        for (let j = n-1; j >= 0; j--) {
            arr[j][i] = cnt;
            cnt++;
        }
    }
}

for (let i of arr) {
    let str = "";
    for (let j of i) {
        str += j + " ";
    }
    console.log(str);
}