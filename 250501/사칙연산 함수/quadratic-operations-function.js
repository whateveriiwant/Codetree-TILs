const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

const sum = (x, y) => {
    return x + y;
}

const minus = (x, y) => {
    return x - y;
};

const power = (x, y) => {
    return x * y;
};

const div = (x, y) => {
    if (x === 0) return "False";
    return parseInt(x / y);
};

if (o === "+") {
    console.log(`${a} + ${c} = ${sum(a, c)}`);
} else if (o === "-") {
    console.log(`${a} - ${c} = ${minus(a, c)}`);
} else if (o === "*") {
    console.log(`${a} * ${c} = ${power(a, c)}`);
} else if (o === "/") {
    console.log(`${a} / ${c} = ${div(a, c)}`);
} else {
    console.log("False");
}