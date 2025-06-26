const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const m = new Map();

for (let i = 0; i <= n; i++) {
    const cmd = input[i].split(" ");

    if (cmd[0] === "add") {
        m.set(cmd[1], cmd[2]);
    } 
    else if (cmd[0] === "remove") {
        m.delete(cmd[1]);
    }
    else if (cmd[0] === "find") {
        console.log(m.has(cmd[1]) ? m.get(cmd[1]) : "None");
    }
}