const input = require("fs").readFileSync(0).toString().trim().split("\n");

let arr1 = [];
let arr2 = [];
let result = Array(3).fill(0).map(() => Array(3).fill(0));

for (let i = 0; i < 3; i++) {
    arr1.push(input[i].split(" ").map(Number));
}

for (let i = 4; i < 7; i++) {
    arr2.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        result[i][j] = arr1[i][j] * arr2[i][j];
    }
}

for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
        str += `${result[i][j]} `;
    }
    console.log(str.trim());
}