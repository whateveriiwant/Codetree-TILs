const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [s, q] = input[0].split(" ");
let arr = s.split("");

for (let i = 1; i <= q; i++) {
    const question = input[i].split(" ");

    if (Number(question[0]) === 1) {
        const a = Number(question[1]-1);
        const b = Number(question[2]-1);
        const tmp = arr[b];

        arr[b] = arr[a];
        arr[a] = tmp;
    } else if (Number(question[0]) === 2) {
        const x = question[1];
        const y = question[2];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) arr[i] = y;
        }
    }
    console.log(arr.join(""));
}