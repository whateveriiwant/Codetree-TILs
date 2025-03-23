const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = "";

for (let i = 2; i <= 8; i += 2) {
    for (let j = b; j >= a; j--) {
        result += `${j} * ${i} = ${j*i}`;
        if (j !== a) result += " / ";
    }
    result += "\n";
}

console.log(result);