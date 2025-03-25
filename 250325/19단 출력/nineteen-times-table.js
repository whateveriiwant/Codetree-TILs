let result = "";

for (let i = 1; i <= 19; i++) {
    for (let j = 1; j <= 19; j++) {
        result += `${i} * ${j} = ${i*j}${j !== 19 && j % 2 !== 0 ? " / " : ""}`;
        if (j === 19 || j % 2 === 0) result += "\n";
    }
}

console.log(result);