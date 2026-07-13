const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const [pivot, ...rest] = arr;

    const left = rest.filter((e) => e < pivot);
    const right = rest.filter((e) => e >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr).join(' '));