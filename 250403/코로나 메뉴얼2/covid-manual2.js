const input = require('fs').readFileSync(0).toString().trim().split("\n");

let arr = Array(4); // 진료소 인원 배열
arr.fill(0);

for (let i = 0; i < 3; i++) {
    const patient = input[i].trim().split(" "); // [증상여부, 체온]
    
    if (patient[0] === 'Y' && patient[1] >= 37) arr[0]++;
    else if (patient[0] === 'N' && patient[1] >= 37) arr[1]++;
    else if (patient[0] === 'Y' && patient[1] < 37) arr[2]++;
    else arr[3]++;
}

let result = "";

for (let i = 0; i < 4; i++) {
    result += arr[i] + ' ';
}

if (arr[0] >= 2) result += 'E';

console.log(result);