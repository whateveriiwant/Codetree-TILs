const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ");

let arr1 = a.split('');
let arr2 = a.split('');

arr2[0] = arr1[0];
arr2[1] = arr1[1];

console.log(arr2.join(''));