const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number); 
const shakes = [];
for (let i = 1; i <= t; i++) { // t개의 악수 기록
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

shakes.sort((a, b) => a.time - b.time);

const devs = Array(n).fill(0); // n명의 개발자
const left = Array(n).fill(-1); // 남은 감염 횟수
left[p - 1] = k;
devs[p - 1] = 1;

for (const shake of shakes) {
    const idx1 = shake.person1 - 1;
    const idx2 = shake.person2 - 1;
    const before1 = left[idx1];
    const before2 = left[idx2];

    if (left[idx1] > 0 && devs[idx2] === 0) {
        left[idx2] = k;
        devs[idx2] = 1;
    }

    if (left[idx2] > 0 && devs[idx1] === 0) {
        left[idx1] = k;
        devs[idx1] = 1;
    }

    if (before1 > 0) left[idx1]--;
    if (before2 > 0) left[idx2]--;
}

console.log(devs.join(''));