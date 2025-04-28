const input = require("fs").readFileSync(0).toString().trim().split("\n");

let [str, q] = input[0].split(" ");

for (let i = 1; i <= q; i++) {
    let request = Number(input[i]);

    if (request === 1) {
        str = str.slice(1) + str.slice(0, 1);
    } else if (request === 2) {
        str = str.slice(-1) + str.slice(0, -1);
    } else {
        str = str.split("").reverse().join("");
    }
    console.log(str);
}