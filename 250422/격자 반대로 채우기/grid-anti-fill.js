const n = Number(require("fs").readFileSync(0).toString());
let arr = Array(n).fill(0).map(() => Array(n).fill(0));

let cnt = n * n;
for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
        if (i % 2 === 0) { // 홀수 열
            for (let j = n-1; j >= 0; j--) {
                arr[j][i] = cnt;
                cnt--;
            }
        } else {
            for (let j = 0; j < n; j++) {
                arr[j][i] = cnt;
                cnt--;
            }
        }
    } else {
        if (i % 2 === 0) { // 홀수 열
            for (let j = 0; j < n; j++) {
                arr[j][i] = cnt;
                cnt--;
            }
        } else {
            for (let j = n-1; j >= 0; j--) {
                arr[j][i] = cnt;
                cnt--;
            }
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