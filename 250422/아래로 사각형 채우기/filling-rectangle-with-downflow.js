const n = Number(require("fs").readFileSync(0).toString().trim());

let arr = Array(n).fill(0).map(() => Array(n).fill(0));

let cnt = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr[i][j] = cnt + j*n;
    }
    cnt++;
}

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
        result += arr[i][j] + " ";
    }
    console.log(result);
}
