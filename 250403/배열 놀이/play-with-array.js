const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);

const numbers = input[1].split(" ").map(Number); // 원소 배열

for (let i = 2; i < q + 2; i++) { // 질의 입력
    const question = input[i].split(" ").map(Number);

    if (question[0] === 1) {
        console.log(numbers[question[1]-1]);
    }
    else if (question[0] === 2) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === question[1]) {
                console.log(j+1);
                break;
            }
        }
    }
    else if (question[0] === 3) {
        let result = "";
        for (let j = question[1]; j <= question[2]; j++) {
            result += numbers[j-1] + " ";
        }
        console.log(result);
    }
}