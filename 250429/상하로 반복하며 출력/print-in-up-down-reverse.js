const n = Number(require("fs").readFileSync(0).toString());

let arr = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        for (let j = 1; j <= n; j++) {
            arr[j-1][i] = j;
        }
    } else {
        for (let j = n; j >= 1; j--) {
            arr[j-1][i] = n - j + 1;
        }
    }
}

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
        result += arr[i][j];
    }
    console.log(result);
}