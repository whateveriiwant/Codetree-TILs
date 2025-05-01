const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [y, m, d] = input[0].split(" ").map(Number);

const lastDay = (y, m) => {
    if (m === 2) {
        if (y % 4 === 0) {
            if (y % 100 === 0) {
                if (y % 400 === 0) return 29;
                else return 28;
            }
            return 29;
        }
    }
    else if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
    else return 31;
};

const func = (y, m, d) => {
    if (d <= lastDay(y, m)) {
        if (m === 1 || m === 2 || m === 12) return "Winter";
        else if (m >= 3 && m <= 5) return "Spring";
        else if (m >= 6 && m <= 8) return "Summer";
        else if (m >= 9 && m <= 11) return "Fall";
    }
    return -1;
};

console.log(func(y, m, d));