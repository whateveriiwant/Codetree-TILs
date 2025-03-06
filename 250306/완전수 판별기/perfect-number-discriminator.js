const n = Number(require("fs").readFileSync(0).toString());

let x = [];
let cnt = 1;
let sum = 0;

while (cnt < n) {
    if (n % cnt === 0) x.push(cnt);
    cnt++;
}

for (let i = 0; i < x.length; i++) {
    sum += x[i];
}

if (sum === n) console.log("P");
else console.log("N");