const n = Number(require("fs").readFileSync(0).toString());

let status = false;

for (let i = 2; i < n; i++) {
    if (n % i === 0) status = true;
}

status ? console.log("C") : console.log("P");