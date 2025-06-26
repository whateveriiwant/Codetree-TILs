const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number); // n개의 수: 수열 정보
const queries = input[2].split(' ').map(Number); // m개의 수: m번에 걸쳐 특정 수가 주어짐, 해당 수가 수열에 몇 개 있는지?

const map = new Map();

arr.forEach(x => { // 각 숫자가 몇 번씩 나왔는지 HashMap에 기록
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
});

// m개의 질의에 대해 몇 번씩 나왔는지?

let result = "";
queries.forEach(x => {
    if (map.has(x)) result += `${map.get(x)} `;
    else result += `0 `;
});

console.log(result);