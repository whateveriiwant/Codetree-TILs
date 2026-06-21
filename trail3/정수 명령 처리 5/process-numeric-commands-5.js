const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const arr = [];

for (const i of commands) {
    const [command, value] = i.trim().split(' ');
    const num = value ? Number(value) : undefined;

    switch (command) {
        case "push_back":
            arr.push(num);
            break;
        case "pop_back":
            arr.pop();
            break;
        case "size":
            console.log(arr.length);
            break;
        case "get":
            console.log(arr[num - 1]);
            break;
        default:
            break;
    }
}

