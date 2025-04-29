const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);

const elements = input[1].split(" ").map(Number);

for (let i = 2; i <= q+1; i++) {
    const question = input[i].split(" ").map(Number);
    const questionType = question[0];

    if (questionType === 1) {
        const a = question[1];
        console.log(elements[a-1]);
    } else if (questionType === 2) {
        const b = question[1];
        let index = 0;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === b) {
                index = i;
                break;
            } 
        }
        console.log(index+1);
    } else {
        const s = question[1];
        const e = question[2];
        let result = "";

        for (let i = s-1; i <= e-1; i++) {
            result += `${elements[i]} `;
        }
        console.log(result);
    }
}