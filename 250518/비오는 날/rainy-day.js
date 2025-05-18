const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];

class Info {
    constructor(date, weekday, fc) {
        this.date = date;
        this.weekday = weekday;
        this.fc = fc;
    }
};

for (let i = 1; i <= n; i++) {
    const data = new Info(input[i].split(" ")[0], input[i].split(" ")[1], input[i].split(" ")[2]);

    if (data.fc === "Rain") arr.push(data);
}

arr.sort((a, b) => a - b);

console.log(arr[0].date, arr[0].weekday, arr[0].fc);