const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

const find = () => {
    let idx = -1;
    for (let i = 0; i < text.length; i++) {
        if (text.slice(i, i + pattern.length) === pattern) {
            idx = i;
            break;
        }
    }

    return idx;
};

console.log(find());