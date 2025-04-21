const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = "";

let max1 = arr[0];
let index1 = 0;

for (let i = 0; i < n; i++) {
    if (max1 < arr[i]) {
        index1 = i;
        max1 = arr[i];
    }
}

result += (index1 + 1) + " ";
let cnt = 0;

for (let i = index1 - 1; i >= 0; i--) { // 최댓값 왼쪽 인덱스부터 시작
    let tmp = arr[i];
    if (tmp === arr[i-1]) {
        cnt++;
        continue;
    }
    if (cnt >= 1) result += (i + 1) + " ";
}

console.log(result);