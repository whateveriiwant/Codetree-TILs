const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);

const yunnyeon = (y) => {
    if (y % 4 === 0) {
        if (y % 100 === 0 && y % 400 !== 0) return false;
        else return true;
    }
    return false;
};

console.log(yunnyeon(y));