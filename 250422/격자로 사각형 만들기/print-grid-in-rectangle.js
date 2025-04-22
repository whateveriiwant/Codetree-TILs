const n = Number(require("fs").readFileSync(0).toString());

let arr = Array(n).fill(1).map(() => Array(n).fill(1));

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1];
    }
}

for (let i of arr) {
    let str = "";
    for (let j of i) {
        str += j + ' ';
    }

    console.log(str);
}