const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

class usr {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
};

const user1 = new usr("codetree", 10);
const user2 = new usr();

user2.id = user_id;
user2.level = level;

console.log(`user ${user1.id} lv ${user1.level}`);
console.log(`user ${user2.id} lv ${user2.level}`);