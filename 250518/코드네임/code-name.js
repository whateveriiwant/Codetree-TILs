const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [code0, s0] = input[0].split(' ');
const score0 = Number(s0);
const [code1, s1] = input[1].split(' ');
const score1 = Number(s1);
const [code2, s2] = input[2].split(' ');
const score2 = Number(s2);
const [code3, s3] = input[3].split(' ');
const score3 = Number(s3);
const [code4, s4] = input[4].split(' ');
const score4 = Number(s4);

class Agent {
    constructor(code, score) {
        this.code = code;
        this.score = score;
    }
};

const agents = [
    new Agent(code0, score0),
    new Agent(code1, score1),
    new Agent(code2, score2),
    new Agent(code3, score3),
    new Agent(code4, score4)
];

let min = agents[0];

for (let i of agents) {
    if (i.score < min.score) {
        min = i;
    }
}

console.log(`${min.code} ${min.score}`);