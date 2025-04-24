const str = require("fs").readFileSync(0).toString().trim();

let cnt1 = 0;
let cnt2 = 0;

for (let i = 0; i < str.length - 1; i++) {
    if (str[i] + str[i+1] == 'ee') cnt1++;
    if (str[i] + str[i+1] == 'eb') cnt2++;
}

console.log(cnt1, cnt2);