const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// 1. 인접 거리를 배열로 저장
const dist = [];

for (let i = 0; i < n - 1; i++) {
    dist.push(Math.abs(arr[i][0] - arr[i + 1][0]) + Math.abs(arr[i][1] - arr[i + 1][1]));
}

// 2. 아무 곳도 건너뛰지 않았을 때의 거리 구하기
let total = 0;

for (const i of dist) {
    total += i;
}

// 3. total에서 k-1과 k의 거리, k에서 k+1의 거리를 빼고 k-1에서 k+1까지의 거리 더하기
let minDistance = Infinity;

for (let i = 1; i < n - 1; i++) {
    const newDistance = total - (Math.abs(arr[i - 1][0] - arr[i][0]) + Math.abs(arr[i - 1][1] - arr[i][1])) - (Math.abs(arr[i][0] - arr[i + 1][0]) + Math.abs(arr[i][1] - arr[i + 1][1])) + (Math.abs(arr[i - 1][0] - arr[i + 1][0]) + Math.abs(arr[i - 1][1] - arr[i + 1][1]))
    if (minDistance > newDistance) minDistance = newDistance;
}

console.log(minDistance);