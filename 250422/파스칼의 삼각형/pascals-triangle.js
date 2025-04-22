const n = Number(require('fs').readFileSync(0).toString());

let arr = Array.from({ length: n }, () => []);

for (let i = 0; i < n; i++) {
    arr[i][0] = 1; // 각 행의 첫 번째 값은 1
    for (let j = 1; j <= i; j++) {
        // i번째 행의 j번째 값은 바로 위 행의 (j-1)번째 값 + j번째 값
        arr[i][j] = (arr[i-1][j-1] || 0) + (arr[i-1][j] || 0);
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(' '));
}
