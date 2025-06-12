const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

const manhattanDistance = (p1, p2) => {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
};

let totalDistance = 0;
for (let i = 0; i < n - 1; i++) {
    totalDistance += manhattanDistance(arr[i], arr[i + 1]);
}

let min = totalDistance;

for (let i = 1; i < n - 1; i++) { // 건너뛰는 경우
    // 건너뜀으로써 삭제해야할 거리
    let removedDistance = manhattanDistance(arr[i - 1], arr[i]) + manhattanDistance(arr[i], arr[i + 1]); 

    let shortcutDistance = manhattanDistance(arr[i - 1], arr[i + 1]); // 지름길 거리 새로 구함

    let newDistance = totalDistance - removedDistance + shortcutDistance;
    min = Math.min(min, newDistance);
}

console.log(min);