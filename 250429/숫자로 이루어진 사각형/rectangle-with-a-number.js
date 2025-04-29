const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

const rect = (n) => {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j < n; j++) {
            if (cnt === 10) cnt = 1;
            result += cnt + " ";
            cnt++;
        }
        console.log(result);
    }
};

rect(N);