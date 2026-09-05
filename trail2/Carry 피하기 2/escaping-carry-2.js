const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

const isValid = (a, b, c) => {
    const da = String(a).split('').reverse();
    const db = String(b).split('').reverse();
    const dc = String(c).split('').reverse();
    const maxLen = Math.max(da.length, db.length, dc.length);

    for (let p = 0; p < maxLen; p++) {
        const digitA = p < da.length ? Number(da[p]) : 0;
        const digitB = p < db.length ? Number(db[p]) : 0;
        const digitC = p < dc.length ? Number(dc[p]) : 0;
        if (digitA + digitB + digitC >= 10) return false; // carry 발생
    }
    return true;
};

let max = -1;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (!isValid(arr[i], arr[j], arr[k])) {
                continue;
            }
            max = Math.max(max, arr[i] + arr[j] + arr[k]);
        }
    }
}

console.log(max);

