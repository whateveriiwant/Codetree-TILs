const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number); // 원소 개수 A, B

const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);

const contiguous = () => {
    for (let i = 0; i <= n1 - n2; i++) {
        let status = true;
        for (let j = 0; j < n2; j++) {
            if (arrA[i+j] !== arrB[j]) {
                status = false;
                break;
            }
        }
        if (status) return true;
    }
    return false;
};

console.log(contiguous() ? "Yes" : "No");