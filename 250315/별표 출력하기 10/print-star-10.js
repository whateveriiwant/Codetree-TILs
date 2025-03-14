const n = Number(require("fs").readFileSync(0).toString());
let cnt = n;

for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 2 === 0) {
        for (let j = 0; j < cnt; j++) {
            result += "* ";
        }
        cnt--;
    } else {
        for (let j = 0; j < i/2; j++) {
            result += "* ";
        }
    }
    console.log(result);
}

cnt++;
for (let i = n; i > 0; i--) {
    let result = "";
    if (i % 2 === 0) {
        for (let j = 0; j < cnt; j++) {
            result += "* ";
        }
        cnt++;
    } else {
        for (let j = i/2; j > 0; j--) {
            result += "* ";
        }
    }
    console.log(result);
}