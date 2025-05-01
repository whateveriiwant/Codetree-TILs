const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

const lastDayNumber = (m) => {
    if (m === 2) return 28;
    if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
    return 31;
}

const judgeDay = (m, d) => {
    if (m <= 12 && d <= lastDayNumber(m)) {
        return true;
    }
    return false;
};

console.log(judgeDay(m, d) ? "Yes" : "No");