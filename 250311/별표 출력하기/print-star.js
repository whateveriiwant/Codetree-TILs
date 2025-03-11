const n = Number(require("fs").readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < i; j++) {
        result += "* ";
    }
   if (result) console.log(result);
}

for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n-i; j++) {
        result += "* ";
    }
    console.log(result);
}