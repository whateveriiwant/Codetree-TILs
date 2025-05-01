const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

const func = (m, d) => {
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        if (d <= 31 && d >= 1) return true;
        else return false;
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (d <= 30 && d >= 1) return true;
        else return false;
    } else if (m == 2) {
        if (d <= 28 && d >= 1) return true;
        else return false;
    }
    return false;
}; 

console.log(func(m, d) ? "Yes" : "No");