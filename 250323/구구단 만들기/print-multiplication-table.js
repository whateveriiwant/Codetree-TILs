const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

for (let i = 1; i <= 9; i++) {
    for (let j = b; j >= a; j -= 2) {
        result += `${j} * ${i} = ${j*i}`;
        if (j !== a) result += " / ";
    }
    result += "\n";
}

console.log(result);