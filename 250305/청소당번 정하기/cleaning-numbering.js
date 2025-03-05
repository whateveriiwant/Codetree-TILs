const n = Number(require("fs").readFileSync(0).toString());

let classroom = 0;
let hallway = 0;
let toilet = 0;

for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) toilet++;
    else if (i % 3 === 0) hallway++;
    else if (i % 2 === 0) classroom++;
}

console.log(classroom, hallway, toilet);