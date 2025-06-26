const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number); // n개의 수: 수열 정보
const queries = input[2].split(' ').map(Number); // m개의 수: m번에 걸쳐 특정 수가 주어짐, 해당 수가 수열에 몇 개 있는지?

const map = new Map();

for (let i = 0; i < n; i++) {
    map.set(i, arr[i]);
}

let result = "";
for (let i = 0; i < m; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {   
        if (map.get(j) !== undefined && map.get(j) === queries[i]) cnt++;
    }
    result += cnt + ' ';
}

console.log(result);