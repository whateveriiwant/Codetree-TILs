let arr = Array(5).fill(1).map(() => Array(5).fill(1));

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1];
    }
}

for (let i of arr) {
    let str = "";
    for (let j of i) {
        str += j + ' ';
    }
    console.log(str);
}