const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0].split("");
const pattern = input[1].split("");

const find = () => {
    let idx = -1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === pattern[0]) {
            for (let j = 1; j < pattern.length; j++) {
                if (text[j] !== pattern[j]) break;
            }
            idx = i;
        }
    }

    return idx === -1 ? -1 : idx - 1;
};

console.log(find());