const input = require("fs").readFileSync(0).toString().trim().split("\n");

let str = input[0].split("");

let cnt = 1;
while (str.length !== 1) {
    const index = Number(input[cnt]);
    if (index >= str.length) {
        str.pop();
    } else {
        str.splice(index, 1);
    }
    console.log(str.join(""));
    cnt++;
}